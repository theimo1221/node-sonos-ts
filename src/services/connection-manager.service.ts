// Auto-generated on Sun Nov 03 2019 16:33:10 GMT+0100 (Central European Standard Time)
import { BaseService } from './base-service';

export class ConnectionManagerService extends BaseService {
  readonly serviceNane: string = 'ConnectionManager';
  readonly controlUrl: string = '/MediaRenderer/ConnectionManager/Control';  
  readonly eventSubUrl: string = '/MediaRenderer/ConnectionManager/Event';
  readonly scpUrl: string = '/xml/ConnectionManager1.xml';
  

  // Actions
  GetCurrentConnectionIDs(): Promise<GetCurrentConnectionIDsResponse> { return this.SoapRequest<GetCurrentConnectionIDsResponse>('GetCurrentConnectionIDs'); }
  GetCurrentConnectionInfo(input: { ConnectionID: number }): Promise<GetCurrentConnectionInfoResponse> { return this.SoapRequestWithBody<typeof input, GetCurrentConnectionInfoResponse>('GetCurrentConnectionInfo', input); }
  GetProtocolInfo(): Promise<GetProtocolInfoResponse> { return this.SoapRequest<GetProtocolInfoResponse>('GetProtocolInfo'); }
}

// Response classes
export interface GetCurrentConnectionIDsResponse {
  ConnectionIDs: string
}

export interface GetCurrentConnectionInfoResponse {
  RcsID: number,
  AVTransportID: number,
  ProtocolInfo: string,
  PeerConnectionManager: string,
  PeerConnectionID: number,
  Direction: string,
  Status: string
}

export interface GetProtocolInfoResponse {
  Source: string,
  Sink: string
}
