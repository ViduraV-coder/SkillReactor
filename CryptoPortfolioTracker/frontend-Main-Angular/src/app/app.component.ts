import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'Welcome to SkillReactor!';

  edited = false;

  constructor(
    private readonly titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Welcome to SkillReactor!');
  }

  ngOnInit(): void {

  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate([''])
    this.edited = false;
  }
}
