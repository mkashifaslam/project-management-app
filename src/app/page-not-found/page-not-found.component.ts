import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  	var title = this.route.snapshot.data['title'];
  	this.appService.setTitle(title);
  }

}
