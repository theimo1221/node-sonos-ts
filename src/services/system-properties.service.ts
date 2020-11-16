/**
 * Sonos SystemPropertiesService
 * 
 * Stephan van Rooij
 * https://svrooij.io/sonos-api-docs
 *
 * This file is generated, do not edit manually.
 */
import BaseService from './base-service';

export class SystemPropertiesService extends BaseService<SystemPropertiesServiceEvent> {
  readonly serviceNane: string = 'SystemProperties';

  readonly controlUrl: string = '/SystemProperties/Control';

  readonly eventSubUrl: string = '/SystemProperties/Event';

  readonly scpUrl: string = '/xml/SystemProperties1.xml';

  // #region actions
  async AddAccountX(input: { AccountType: number; AccountID: string; AccountPassword: string }):
  Promise<AddAccountXResponse> { return await this.SoapRequestWithBody<typeof input, AddAccountXResponse>('AddAccountX', input); }

  async AddOAuthAccountX(input: { AccountType: number; AccountToken: string; AccountKey: string; OAuthDeviceID: string; AuthorizationCode: string; RedirectURI: string; UserIdHashCode: string; AccountTier: number }):
  Promise<AddOAuthAccountXResponse> { return await this.SoapRequestWithBody<typeof input, AddOAuthAccountXResponse>('AddOAuthAccountX', input); }

  async DoPostUpdateTasks():
  Promise<boolean> { return await this.SoapRequestNoResponse('DoPostUpdateTasks'); }

  async EditAccountMd(input: { AccountType: number; AccountID: string; NewAccountMd: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('EditAccountMd', input); }

  async EditAccountPasswordX(input: { AccountType: number; AccountID: string; NewAccountPassword: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('EditAccountPasswordX', input); }

  async EnableRDM(input: { RDMValue: boolean }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('EnableRDM', input); }

  async GetRDM():
  Promise<GetRDMResponse> { return await this.SoapRequest<GetRDMResponse>('GetRDM'); }

  async GetString(input: { VariableName: string }):
  Promise<GetStringResponse> { return await this.SoapRequestWithBody<typeof input, GetStringResponse>('GetString', input); }

  async GetWebCode(input: { AccountType: number }):
  Promise<GetWebCodeResponse> { return await this.SoapRequestWithBody<typeof input, GetWebCodeResponse>('GetWebCode', input); }

  async ProvisionCredentialedTrialAccountX(input: { AccountType: number; AccountID: string; AccountPassword: string }):
  Promise<ProvisionCredentialedTrialAccountXResponse> { return await this.SoapRequestWithBody<typeof input, ProvisionCredentialedTrialAccountXResponse>('ProvisionCredentialedTrialAccountX', input); }

  async RefreshAccountCredentialsX(input: { AccountType: number; AccountUID: number; AccountToken: string; AccountKey: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RefreshAccountCredentialsX', input); }

  async Remove(input: { VariableName: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Remove', input); }

  async RemoveAccount(input: { AccountType: number; AccountID: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RemoveAccount', input); }

  async ReplaceAccountX(input: { AccountUDN: string; NewAccountID: string; NewAccountPassword: string; AccountToken: string; AccountKey: string; OAuthDeviceID: string }):
  Promise<ReplaceAccountXResponse> { return await this.SoapRequestWithBody<typeof input, ReplaceAccountXResponse>('ReplaceAccountX', input); }

  async ResetThirdPartyCredentials():
  Promise<boolean> { return await this.SoapRequestNoResponse('ResetThirdPartyCredentials'); }

  async SetAccountNicknameX(input: { AccountUDN: string; AccountNickname: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetAccountNicknameX', input); }

  async SetString(input: { VariableName: string; StringValue: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetString', input); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      CustomerID: 'string',
      ThirdPartyHash: 'string',
      UpdateID: 'number',
      UpdateIDX: 'number',
      VoiceUpdateID: 'number',
    };
  }
}

// Generated responses
export interface AddAccountXResponse {
  AccountUDN: string;
}

export interface AddOAuthAccountXResponse {
  AccountUDN: string;
  AccountNickname: string;
}

export interface GetRDMResponse {
  RDMValue: boolean;
}

export interface GetStringResponse {
  StringValue: string;
}

export interface GetWebCodeResponse {
  WebCode: string;
}

export interface ProvisionCredentialedTrialAccountXResponse {
  IsExpired: boolean;
  AccountUDN: string;
}

export interface ReplaceAccountXResponse {
  NewAccountUDN: string;
}

// Strong type event
export interface SystemPropertiesServiceEvent {
  CustomerID?: string;
  ThirdPartyHash?: string;
  UpdateID?: number;
  UpdateIDX?: number;
  VoiceUpdateID?: number;
}
