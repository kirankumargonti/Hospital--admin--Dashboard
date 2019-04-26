import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class MessagesMaterialModule { }
