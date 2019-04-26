import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatPaginatorModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class PageMaterialModule { }
