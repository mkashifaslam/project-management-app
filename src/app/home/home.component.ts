import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  	var title = this.route.snapshot.data['title'];
  	this.appService.setTitle(title);
  }

}
