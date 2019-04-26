import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-expand-messages-dialog',
  templateUrl: './expand-messages-dialog.component.html',
  styleUrls: ['./expand-messages-dialog.component.scss']
})
export class ExpandMessagesDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

}
