import { ResourceHandlerHttpClient } from '@ngx-resource/handler-ngx-http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { IResourceRequest } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';

export class AppMocksResourceHandler extends ResourceHandlerHttpClient {

  constructor(_http: HttpClient) { 
    super(_http);
  }

  private mappingUrlToMemoryDb: object = {

  };

  protected prepareRequest(req: IResourceRequest): HttpRequest<any> {
    const url = req.url.replace(environment.apiUrl, "");
    if(!this.mappingUrlToMemoryDb[url]) {
      return super.prepareRequest(req);
    }

    return super.prepareRequest(req).clone({
      url: req.url.replace(req.url, this.mappingUrlToMemoryDb[url])
    });
  }

}