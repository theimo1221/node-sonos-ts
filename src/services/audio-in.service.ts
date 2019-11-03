// Auto-generated on Sun Nov 03 2019 16:33:10 GMT+0100 (Central European Standard Time)
import { BaseService } from './base-service';

export class AudioInService extends BaseService {
  readonly serviceNane: string = 'AudioIn';
  readonly controlUrl: string = '/AudioIn/Control';  
  readonly eventSubUrl: string = '/AudioIn/Event';
  readonly scpUrl: string = '/xml/AudioIn1.xml';
  

  // Actions
  GetAudioInputAttributes(): Promise<GetAudioInputAttributesResponse> { return this.SoapRequest<GetAudioInputAttributesResponse>('GetAudioInputAttributes'); }
  GetLineInLevel(): Promise<GetLineInLevelResponse> { return this.SoapRequest<GetLineInLevelResponse>('GetLineInLevel'); }
  SelectAudio(input: { ObjectID: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SelectAudio', input); }
  SetAudioInputAttributes(input: { DesiredName: string, DesiredIcon: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetAudioInputAttributes', input); }
  SetLineInLevel(input: { DesiredLeftLineInLevel: number, DesiredRightLineInLevel: number }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetLineInLevel', input); }
  StartTransmissionToGroup(input: { CoordinatorID: string }): Promise<StartTransmissionToGroupResponse> { return this.SoapRequestWithBody<typeof input, StartTransmissionToGroupResponse>('StartTransmissionToGroup', input); }
  StopTransmissionToGroup(input: { CoordinatorID: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('StopTransmissionToGroup', input); }
}

// Response classes
export interface GetAudioInputAttributesResponse {
  CurrentName: string,
  CurrentIcon: string
}

export interface GetLineInLevelResponse {
  CurrentLeftLineInLevel: number,
  CurrentRightLineInLevel: number
}

export interface StartTransmissionToGroupResponse {
  CurrentTransportSettings: string
}
