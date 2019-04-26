import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.scss']
})
export class DashboardPatientComponent implements OnInit {

    tabLinks = [];
    links = [
      { label: 'Doctor\'s Remarks', link: 'remarks' },
      { label: 'Vital Signs', link: 'readings' },
      { label: 'Vital Signs', link: ['/', 'p'] },
    ];

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.tabLinks = this.links.filter(e => e.link !== 'readings');
    }

    onClick(index: number) {
      index === 1 ? this.router.navigate(['readings'], { relativeTo: this.route }) : 0;
      this.tabLinks = this.links.filter(e => typeof e.link !== 'object');
    }

  }
