import { Component, OnInit } from '@angular/core';
import team from '../../assets/json/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  leads: any[] = [];
  coreTeam: any[] = [];
  volunteerTeam: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    var parent = this;
    team["leads"].forEach(function(object){
      parent.leads.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["core"].forEach(function(object){
      parent.coreTeam.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["volunteers"].forEach(function(object){
      parent.volunteerTeam.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
  }

}
