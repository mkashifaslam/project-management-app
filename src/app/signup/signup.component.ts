import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  	var title = this.route.snapshot.data['title'];
  	this.appService.setTitle(title);
  }

}
