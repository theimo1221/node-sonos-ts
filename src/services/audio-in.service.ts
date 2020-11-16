/**
 * Sonos AudioInService
 * 
 * Stephan van Rooij
 * https://svrooij.io
 *
 * This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 */
import BaseService from './base-service';

export class AudioInService extends BaseService<AudioInServiceEvent> {
  readonly serviceNane: string = 'AudioIn';

  readonly controlUrl: string = '/AudioIn/Control';

  readonly eventSubUrl: string = '/AudioIn/Event';

  readonly scpUrl: string = '/xml/AudioIn1.xml';

  // #region actions
  async GetAudioInputAttributes():
  Promise<GetAudioInputAttributesResponse> { return await this.SoapRequest<GetAudioInputAttributesResponse>('GetAudioInputAttributes'); }

  async GetLineInLevel():
  Promise<GetLineInLevelResponse> { return await this.SoapRequest<GetLineInLevelResponse>('GetLineInLevel'); }

  async SelectAudio(input: { ObjectID: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SelectAudio', input); }

  async SetAudioInputAttributes(input: { DesiredName: string; DesiredIcon: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetAudioInputAttributes', input); }

  async SetLineInLevel(input: { DesiredLeftLineInLevel: number; DesiredRightLineInLevel: number }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetLineInLevel', input); }

  async StartTransmissionToGroup(input: { CoordinatorID: string }):
  Promise<StartTransmissionToGroupResponse> { return await this.SoapRequestWithBody<typeof input, StartTransmissionToGroupResponse>('StartTransmissionToGroup', input); }

  async StopTransmissionToGroup(input: { CoordinatorID: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('StopTransmissionToGroup', input); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      AudioInputName: 'string',
      Icon: 'string',
      LeftLineInLevel: 'number',
      LineInConnected: 'boolean',
      Playing: 'boolean',
      RightLineInLevel: 'number',
    };
  }
}

// Generated responses
export interface GetAudioInputAttributesResponse {
  CurrentName: string;
  CurrentIcon: string;
}

export interface GetLineInLevelResponse {
  CurrentLeftLineInLevel: number;
  CurrentRightLineInLevel: number;
}

export interface StartTransmissionToGroupResponse {
  CurrentTransportSettings: string;
}

// Strong type event
export interface AudioInServiceEvent {
  AudioInputName?: string;
  Icon?: string;
  LeftLineInLevel?: number;
  LineInConnected?: boolean;
  Playing?: boolean;
  RightLineInLevel?: number;
}
