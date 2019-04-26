import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-expand-remarks-dialog',
  templateUrl: './expand-remarks-dialog.component.html',
  styleUrls: ['./expand-remarks-dialog.component.scss']
})
export class ExpandRemarksDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }


}
