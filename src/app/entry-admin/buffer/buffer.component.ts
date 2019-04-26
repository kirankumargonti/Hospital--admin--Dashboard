import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => { this.router.navigate(['/', 'a']) });
  }

}
