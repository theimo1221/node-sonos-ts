/**
 * Sonos MusicServicesService
 * 
 * Stephan van Rooij
 * https://svrooij.io
 *
 * This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 */
import BaseService from './base-service';
import ArrayHelper from '../helpers/array-helper';
import XmlHelper from '../helpers/xml-helper';

/**
 * External music services
 *
 * @export
 * @class MusicServicesServiceBase
 * @extends {BaseService}
 */
export class MusicServicesServiceBase extends BaseService<MusicServicesServiceEvent> {
  readonly serviceNane: string = 'MusicServices';

  readonly controlUrl: string = '/MusicServices/Control';

  readonly eventSubUrl: string = '/MusicServices/Event';

  readonly scpUrl: string = '/xml/MusicServices1.xml';

  // #region actions
  async GetSessionId(input: { ServiceId: number; Username: string }):
  Promise<GetSessionIdResponse> { return await this.SoapRequestWithBody<typeof input, GetSessionIdResponse>('GetSessionId', input); }

  /**
   * Load music service list (xml), see ListAndParseAvailableServices() for parsed version.
   */
  async ListAvailableServices():
  Promise<ListAvailableServicesResponse> { return await this.SoapRequest<ListAvailableServicesResponse>('ListAvailableServices'); }

  async UpdateAvailableServices():
  Promise<boolean> { return await this.SoapRequestNoResponse('UpdateAvailableServices'); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      ServiceId: 'number',
      ServiceListVersion: 'string',
      SessionId: 'string',
      Username: 'string',
    };
  }
}

// Generated responses
export interface GetSessionIdResponse {
  SessionId: string;
}

export interface ListAvailableServicesResponse {
  AvailableServiceDescriptorList: string;
  AvailableServiceTypeList: string;
  AvailableServiceListVersion: string;
}

// Strong type event
export interface MusicServicesServiceEvent {
  ServiceId?: number;
  ServiceListVersion?: string;
  SessionId?: string;
  Username?: string;
}

export interface MusicService {
  Capabilities: string;
  ContainerType: string;
  Id: number;
  Manifest: { Uri: string; Version: string };
  Name: string;
  Policy: { Auth: string; PollInterval?: number };
  Presentation?: { Strings?: { Uri: string; Version: string }; PresentationMap?: { Uri: string; Version: string }};
  SecureUri: string;
  Uri: string;
  Version: string;
}

export class MusicServicesService extends MusicServicesServiceBase {
  private musicServices?: Array<MusicService>;

  /**
   * A parsed version of ListAvailableServices
   *
   * @param {boolean} [cache=false] Should the list be fetched once and then kept in memory?
   * @returns {Promise<Array<MusicService>>} All available music services (not only subscribed ones).
   * @memberof MusicServicesService
   */
  public async ListAndParseAvailableServices(cache = false): Promise<Array<MusicService>> {
    if (cache === true && this.musicServices !== undefined) {
      return this.musicServices;
    }
    const encodedResponse = await this.ListAvailableServices();
    const raw = XmlHelper.DecodeAndParseXml(encodedResponse.AvailableServiceDescriptorList, '');
    const result = ArrayHelper.ForceArray(raw.Services.Service)
      .map((service) => MusicServicesService.ParseMusicService(service))
      .sort((a, b) => a.Name.localeCompare(b.Name));

    if (cache === true) {
      this.musicServices = result;
    }
    return result;
  }

  private static ParseMusicService(service: any): MusicService {
    const temp = service;
    const result = {
      Id: parseInt(service.Id, 10),
      Policy: {
        Auth: service.Policy?.Auth,
        PollInterval: parseInt(service?.Policy?.PollInterval || '-1', 10),
      },
    };
    delete temp.Id;
    delete temp.Policy;
    return { ...temp, ...result } as MusicService;
  }
}
