import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    return this.appService.isAuthenticated();
  }
}
