import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesMaterialModule } from '../../../common/core/module/material-doctor/messages-material.module';

import { MessagesComponent } from './messages.component';
import { ExpandMessagesDialogComponent } from '../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component';

import { TimestampPipe } from '../../../common/shared/pipe/timestampDoctor.pipe';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MessagesMaterialModule
  ],
  declarations: [
    MessagesComponent,
    ExpandMessagesDialogComponent,
    TimestampPipe
  ],
  entryComponents: [
    ExpandMessagesDialogComponent
  ]
})
export class MessagesModule { }
