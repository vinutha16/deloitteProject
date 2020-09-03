import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  collections=[];
  homeDetails=[];
  filterargs:any;
  page = 1;
  pageSize =10;
  constructor(private homeservice:HomepageService,private router:Router) { }

  ngOnInit(){
    this.homeservice.getHomeDetails().subscribe(resp=>{
      this.homeDetails=resp;
    })
  }
getAllCollections(){
this.homeservice.getCollections().subscribe(resp=>{
  this.collections=resp;
})
}
}
