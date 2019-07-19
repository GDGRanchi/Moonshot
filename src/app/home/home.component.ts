import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import basics from '../../assets/json/basics.json';
import sponsors from '../../assets/json/sponsors.json';
import partners from '../../assets/json/partners.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upcomingEvents: any[] = [];
  partnersList: any[] = [];
  sponsorsList: any[] = [];
  isFetchEventsComplete: boolean = false;
  communityName: string;
  communityEmail: string;
  communityMobile: string;
  logoPath: string;
  meetupPath: string;
  meetupAPIKey: string;
  meetupSlug: string;

  constructor() { }

  ngOnInit() {
    this.initBasics();
    this.fetchEvents();
    this.initSponsors();
    this.initPartners();
  }

  fetchEvents() {
    var parent = this;
    var promise = axios.request({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://api.meetup.com/` + parent.meetupSlug + `/events?key=`+parent.meetupAPIKey
    }).then(async function (response) {
      parent.isFetchEventsComplete = true;
      var data = response.data;
      data.forEach(function(object){
        parent.upcomingEvents.push({'name': object.name, 'time': object.local_time, 'date': object.local_date,
        'count': object.yes_rsvp_count, 'venue': object.venue.name, 'link': object.link});
      });
      console.log(parent.upcomingEvents);
    }).catch(function(error) {
      console.log(error);
    });
    promise.finally();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupSlug = basics["meetup-slug"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
    this.meetupAPIKey = basics["meetup-api-key"];
    this.communityEmail = basics["email"];
    this.communityMobile = basics["mobile"];
    this.communityName = basics["name"];
  }

  initPartners(): void {
    var parent = this;
    partners.forEach(function(object){
      parent.partnersList.push({'name': object["name"], 'logoPath': object["logo"]});
    });
  }

  initSponsors(): void {
    var parent = this;
    sponsors.forEach(function(object){
      parent.sponsorsList.push({'name': object["name"], 'logoPath': object["logo"], 'level': object["level"]});
    });
  }

}
