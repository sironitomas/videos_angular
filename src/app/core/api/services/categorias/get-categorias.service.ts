import { Injectable } from '@angular/core';
import { ResourceParams, Resource, ResourceHandler, ResourceAction, ResourceRequestMethod, ResourceRequestBodyType, ResourceResponseBodyType, IResourceMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { ICategoria } from '../../models/i-categoria';

@Injectable({
  providedIn: 'root'
})


@ResourceParams({
  pathPrefix: `${environment.apiUrl}/categorias`
})
export class GetCategoriasService extends Resource {

  constructor(requestHandler: ResourceHandler) {
    super(requestHandler);
  }
    @ResourceAction({
      path: '/',
      method: ResourceRequestMethod.Get,
      requestBodyType: ResourceRequestBodyType.NONE,
      responseBodyType: ResourceResponseBodyType.Json
    }) getCategorias: IResourceMethod<void, ICategoria[]>;
}
