import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatExpansionPanel, MatAccordion } from '@angular/material';
import { map } from 'rxjs/operators'

import { AuthService } from '../../common/core/service/auth.service';
import { SharedService } from '../../common/core/service/shared.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  @ViewChild('panel') panel: MatExpansionPanel;
  @ViewChild('panel1') panel1: MatExpansionPanel;
  @ViewChild('panel2') panel2: MatExpansionPanel;
  @ViewChild('panel3') panel3: MatExpansionPanel;
  @ViewChild('panel4') panel4: MatExpansionPanel;
  @ViewChild('panel5') panel5: MatExpansionPanel;
  @ViewChild('panel6') panel6: MatExpansionPanel;
  @ViewChild('panel7') panel7: MatExpansionPanel;
  @ViewChild('panel8') panel8: MatExpansionPanel;
  @ViewChild('panel9') panel9: MatExpansionPanel;
  @ViewChild('panel10') panel10: MatExpansionPanel;
  @ViewChild('panel11') panel11: MatExpansionPanel;

  panelState: boolean = true;
  isExpanded: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }

  

  ngOnInit() {
    this.authService.state.pipe(
      map((user: any) => user !== null)
    ).subscribe((state) => {
      // state ? 0 : this.router.navigate(['/']);
    });
  }

  onExpandPanel() {
    const condition = this.panel1.expanded || this.panel2.expanded || this.panel3.expanded || this.panel4.expanded || this.panel5.expanded
      || this.panel6.expanded || this.panel7.expanded || this.panel8.expanded || this.panel9.expanded || this.panel10.expanded || this.panel11.expanded;

    this.panelState = !condition;
  }

  onClosePanel() {
    this.isExpanded = false;
    this.sharedService.setPanel = true;
  }

  newMethod() {
    return this.panel1.open();
  }

  // expandAllPanels() {
  //   this.newMethod() || this.panel2.open() || this.panel3.open() || this.panel4.open() || this.panel5.open()
  //   || this.panel6.open() || this.panel7.open() || this.panel8.open() || this.panel9.open() || this.panel10.open() || this.panel11.open();

  //   this.isExpanded = true;
  //   this.panelState = false;

  onCollapsePanels() {
    this.panel1.close(); this.panel2.close(); this.panel3.close(); this.panel4.close(); this.panel5.close();
    this.panel6.close(); this.panel7.close(); this.panel8.close(); this.panel9.close(); this.panel10.close(); this.panel11.close();

    this.panelState = true;
    this.isExpanded = false;
  }
}


