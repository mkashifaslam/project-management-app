import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title: string;
 	
  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
  	this.title = this.route.snapshot.data['title'];
  	this.titleService.setTitle( this.title );
  }

}
