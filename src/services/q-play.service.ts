// Auto-generated on Sun Nov 03 2019 16:33:10 GMT+0100 (Central European Standard Time)
import { BaseService } from './base-service';

export class QPlayService extends BaseService {
  readonly serviceNane: string = 'QPlay';
  readonly controlUrl: string = '/QPlay/Control';  
  readonly eventSubUrl: string = '/QPlay/Event';
  readonly scpUrl: string = '/xml/QPlay1.xml';
  

  // Actions
  QPlayAuth(input: { Seed: string }): Promise<QPlayAuthResponse> { return this.SoapRequestWithBody<typeof input, QPlayAuthResponse>('QPlayAuth', input); }
}

// Response classes
export interface QPlayAuthResponse {
  Code: string,
  MID: string,
  DID: string
}
