import { Component, OnInit } from '@angular/core';
import { Sharedcomp3Service } from './sharedcomp3.service';

@Component({
  selector: 'app-sharedcomp3',
  templateUrl: './sharedcomp3.component.html',
  styleUrls: ['./sharedcomp3.component.css'],
  providers: [Sharedcomp3Service],
})
export class Sharedcomp3Component implements OnInit {
  sharedcomp3data: any;
  constructor(private sharedcomp3Service: Sharedcomp3Service) {
  }

  ngOnInit() {
    console.log('sharedcomp3 init')
    this.sharedcomp3Service.getTitle().subscribe((data)=>this.sharedcomp3data=data)
  }
}
