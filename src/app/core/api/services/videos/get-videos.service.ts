import { Injectable } from '@angular/core';
import { ResourceParams, Resource, ResourceHandler, ResourceAction, ResourceRequestMethod, ResourceRequestBodyType, ResourceResponseBodyType, IResourceMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { ICategoria } from '../../models/i-categoria';
import { IParams } from '../../models/i-params';
import { IVideos } from '../../models/i-video';

@Injectable({
  providedIn: 'root'
})

@ResourceParams({
  pathPrefix: `${environment.apiUrl}`
})
export class GetVideosService extends Resource {
  constructor(requestHandler: ResourceHandler) {
    super(requestHandler);
  }
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.FORM_DATA,
    responseBodyType: ResourceResponseBodyType.Json
  }) get_videos: IResourceMethod<IParams, IVideos[]>;

}
