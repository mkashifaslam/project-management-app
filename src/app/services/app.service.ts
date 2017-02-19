import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AppService {

  constructor(private titleService: Title) { }

  setTitle(title: string): void {
  	this.titleService.setTitle( title );
  }
}
