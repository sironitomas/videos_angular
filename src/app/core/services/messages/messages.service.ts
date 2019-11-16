import { Injectable } from '@angular/core';
import { IMessage } from '../../api/models/i-message';
import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../../layout/message-dialog/message-dialog.component';

@Injectable()
export class MessagesService {

  constructor(private _dialog: MatDialog) { }

  public showMessage(message: IMessage): void {
    this._dialog.open(MessageDialogComponent, {
      data: message
    });
  }

}
