import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private title: string; 	

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
  	this.title = this.route.snapshot.data['title'];
  	this.titleService.setTitle( this.title );
  }

}
