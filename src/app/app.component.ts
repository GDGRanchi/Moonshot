import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import basics from '../assets/json/basics.json';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _bottomSheet: MatBottomSheet, private titleService: Title) {}

  title = 'Moonshot';
  logoPath: string;
  meetupPath: string;
  communityName: string;
  communityEmail: string;

  facebookPath: string;
  twitterPath: string;
  instagramPath: string;
  githubPath: string;

  ngOnInit() {
    this.initBasics();
  }

  bottomMenu() : void {
    this._bottomSheet.open(BottomMenuSheet);
  }

  closeBottomMenu() : void {
    this._bottomSheet.dismiss();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
    this.communityName = basics["name"];
    this.titleService.setTitle(this.communityName);
    this.communityEmail = basics["email"];
    this.facebookPath = basics["facebook"];
    if (this.facebookPath === "") {
      this.facebookPath = "https://facebook.com";
    }
    this.twitterPath = basics["twitter"];
    if (this.twitterPath === "") {
      this.twitterPath = "https://twitter.com";
    }
    this.instagramPath = basics["instagram"];
    if (this.instagramPath === "") {
      this.instagramPath = "https://instagram.com";
    }
    this.githubPath = basics["github"];
    if (this.githubPath === "") {
      this.githubPath = "https://github.com";
    }
  }

}

@Component({
  selector: 'bottom-menu',
  templateUrl: 'bottom-menu.html',
})

export class BottomMenuSheet {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomMenuSheet>) {}
  
  logoPath: string;
  meetupPath: string;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomMenu() : void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit() {
    this.initBasics();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
  }

}
