// Auto-generated on Sun Nov 03 2019 16:33:10 GMT+0100 (Central European Standard Time)
import { BaseService } from './base-service';

export class VirtualLineInService extends BaseService {
  readonly serviceNane: string = 'VirtualLineIn';
  readonly controlUrl: string = '/MediaRenderer/VirtualLineIn/Control';  
  readonly eventSubUrl: string = '/MediaRenderer/VirtualLineIn/Event';
  readonly scpUrl: string = '/xml/VirtualLineIn1.xml';
  

  // Actions
  Next(input: { InstanceID: number } = { InstanceID: 0 }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Next', input); }
  Pause(input: { InstanceID: number } = { InstanceID: 0 }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Pause', input); }
  Play(input: { InstanceID: number, Speed: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Play', input); }
  Previous(input: { InstanceID: number } = { InstanceID: 0 }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Previous', input); }
  SetVolume(input: { InstanceID: number, DesiredVolume: number }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetVolume', input); }
  StartTransmission(input: { InstanceID: number, CoordinatorID: string }): Promise<StartTransmissionResponse> { return this.SoapRequestWithBody<typeof input, StartTransmissionResponse>('StartTransmission', input); }
  Stop(input: { InstanceID: number } = { InstanceID: 0 }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Stop', input); }
  StopTransmission(input: { InstanceID: number, CoordinatorID: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('StopTransmission', input); }
}

// Response classes
export interface StartTransmissionResponse {
  CurrentTransportSettings: string
}
