import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {
  id:any;
  collections=[];
  roomData:any;
  imageIndex:number;
  showData:boolean=false;
  constructor(private homeservice:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    this.homeservice.getRoomDetails().subscribe(resp=>{
      var index=this.id;
      this.imageIndex=JSON.parse(index)+1;
      debugger
      this.roomData=resp;
      this.showData=true;
    })
  });
  }
  getAllCollections(){
    this.homeservice.getCollections().subscribe(resp=>{
      this.collections=resp;
    })
  }
}
