import { environment } from 'src/environments/environment';
import { ErrorHandler, Injector, NgZone, Injectable } from '@angular/core';
import { IMessage } from '../../api/models/i-message';
import { MessagesService } from './messages.service';

@Injectable()
export class MessagesErrorHandler implements ErrorHandler {

  private _service: MessagesService;

  constructor(private _injector: Injector, private _ngZone: NgZone) { }

  handleError(err: any) {
    let message: IMessage;

    if (!this._service) {
      this._service = this._injector.get(MessagesService);
    }

    if(err.rejection) {
      err = err.rejection;
    }

    if(err.body) {
      if(err.body.error) {
        message = { text: err.body.error, num: err.status };
      }
      else if(err.body.message) {
        message = { text: err.body.message, num: err.status };
      }
      else {
        !environment.production ? console.log(err) : null;
        return;
      }
    }
    else if(err.error) {
      message = { text: err.error, num: err.status };
    }
    else if(err.message) {
      message = { text: err.message, num: err.status };
    }
    else {
      message = { text: err.toString(), num: err.status };
    }

    !environment.production ? console.log(err) : null;

    this._ngZone.run(() => this._service.showMessage(message), 0);
  }

}
