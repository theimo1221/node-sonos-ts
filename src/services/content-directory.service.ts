// Auto-generated on Sun Nov 03 2019 16:33:10 GMT+0100 (Central European Standard Time)
import { BaseService } from './base-service';
import { BrowseResponse } from './models'

export class ContentDirectoryService extends BaseService {
  readonly serviceNane: string = 'ContentDirectory';
  readonly controlUrl: string = '/MediaServer/ContentDirectory/Control';  
  readonly eventSubUrl: string = '/MediaServer/ContentDirectory/Event';
  readonly scpUrl: string = '/xml/ContentDirectory1.xml';
  

  // Actions
  Browse(input: { ObjectID: string, BrowseFlag: string, Filter: string, StartingIndex: number, RequestedCount: number, SortCriteria: string }): Promise<BrowseResponse> { return this.SoapRequestWithBody<typeof input, BrowseResponse>('Browse', input); }
  CreateObject(input: { ContainerID: string, Elements: string }): Promise<CreateObjectResponse> { return this.SoapRequestWithBody<typeof input, CreateObjectResponse>('CreateObject', input); }
  DestroyObject(input: { ObjectID: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('DestroyObject', input); }
  FindPrefix(input: { ObjectID: string, Prefix: string }): Promise<FindPrefixResponse> { return this.SoapRequestWithBody<typeof input, FindPrefixResponse>('FindPrefix', input); }
  GetAlbumArtistDisplayOption(): Promise<GetAlbumArtistDisplayOptionResponse> { return this.SoapRequest<GetAlbumArtistDisplayOptionResponse>('GetAlbumArtistDisplayOption'); }
  GetAllPrefixLocations(input: { ObjectID: string }): Promise<GetAllPrefixLocationsResponse> { return this.SoapRequestWithBody<typeof input, GetAllPrefixLocationsResponse>('GetAllPrefixLocations', input); }
  GetBrowseable(): Promise<GetBrowseableResponse> { return this.SoapRequest<GetBrowseableResponse>('GetBrowseable'); }
  GetLastIndexChange(): Promise<GetLastIndexChangeResponse> { return this.SoapRequest<GetLastIndexChangeResponse>('GetLastIndexChange'); }
  GetSearchCapabilities(): Promise<GetSearchCapabilitiesResponse> { return this.SoapRequest<GetSearchCapabilitiesResponse>('GetSearchCapabilities'); }
  GetShareIndexInProgress(): Promise<GetShareIndexInProgressResponse> { return this.SoapRequest<GetShareIndexInProgressResponse>('GetShareIndexInProgress'); }
  GetSortCapabilities(): Promise<GetSortCapabilitiesResponse> { return this.SoapRequest<GetSortCapabilitiesResponse>('GetSortCapabilities'); }
  GetSystemUpdateID(): Promise<GetSystemUpdateIDResponse> { return this.SoapRequest<GetSystemUpdateIDResponse>('GetSystemUpdateID'); }
  RefreshShareIndex(input: { AlbumArtistDisplayOption: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RefreshShareIndex', input); }
  RequestResort(input: { SortOrder: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RequestResort', input); }
  SetBrowseable(input: { Browseable: boolean }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetBrowseable', input); }
  UpdateObject(input: { ObjectID: string, CurrentTagValue: string, NewTagValue: string }): Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('UpdateObject', input); }
}

// Response classes
export interface CreateObjectResponse {
  ObjectID: string,
  Result: string
}

export interface FindPrefixResponse {
  StartingIndex: number,
  UpdateID: number
}

export interface GetAlbumArtistDisplayOptionResponse {
  AlbumArtistDisplayOption: string
}

export interface GetAllPrefixLocationsResponse {
  TotalPrefixes: number,
  PrefixAndIndexCSV: string,
  UpdateID: number
}

export interface GetBrowseableResponse {
  IsBrowseable: boolean
}

export interface GetLastIndexChangeResponse {
  LastIndexChange: string
}

export interface GetSearchCapabilitiesResponse {
  SearchCaps: string
}

export interface GetShareIndexInProgressResponse {
  IsIndexing: boolean
}

export interface GetSortCapabilitiesResponse {
  SortCaps: string
}

export interface GetSystemUpdateIDResponse {
  Id: number
}
