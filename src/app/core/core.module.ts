import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { ErrorHandler } from '@angular/core';
import { MessagesErrorHandler } from './services/messages/messages-error-handler';
import { MessagesService } from './services/messages/messages.service';
import { MessageDialogComponent } from './layout/message-dialog/message-dialog.component';
import { LoaderComponent } from './layout/loader/loader.component';

@NgModule({
  declarations: [
    MessageDialogComponent,
    LoaderComponent  
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule, 
    MatButtonModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: MessagesErrorHandler },
    MessagesService
  ],
  entryComponents: [
    MessageDialogComponent  
  ]
})
export class CoreModule { }
