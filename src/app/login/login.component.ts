import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title: string;
 	
  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  	var title = this.route.snapshot.data['title'];
  	this.appService.setTitle(title);
  }

}
