import { Component, OnInit } from '@angular/core';
import basics from '../../assets/json/basics.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  communityName: string;
  communityEmail: string;
  communityMobile: string;

  constructor() { }

  ngOnInit() {
    this.initBasics();
  }

  initBasics(): void {
    this.communityEmail = basics["email"];
    this.communityMobile = basics["mobile"];
    this.communityName = basics["name"];
  }

}
