import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import basics from '../../assets/json/basics.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  upcomingEvents: any[] = [];
  isFetchEventsComplete: boolean = false;

  constructor() { }

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents() {
    var parent = this;
    var promise = axios.request({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://api.meetup.com/` + basics["meetup-slug"] + `/events?key=`+ basics["meetup-api-key"]
    }).then(async function (response) {
      parent.isFetchEventsComplete = true;
      var data = response.data;
      data.forEach(function(object){
        parent.upcomingEvents.push({'name': object.name, 'time': object.local_time, 'date': object.local_date,
        'count': object.yes_rsvp_count, 'venue': object.venue.name, 'link': object.link});
      });
    }).catch(function(error) {
      console.log(error);
    });
    promise.finally();
  }

}
