import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {NavitationRoute} from './app.routes';
import {MatIcon} from '@angular/material/icon';

interface navigation {
  route: NavitationRoute;
  label: string;
  icon: string;
  isActive: boolean;
}

@Component({
  selector: 'website-root',
  imports: [RouterOutlet, MatTabLink, RouterLink, MatTabNavPanel, MatTabNav, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  NAVIGATION: navigation[] = [
    {route: NavitationRoute.START, label: 'Home', icon: "home", isActive: false},
    {route: NavitationRoute.SECTION, label: 'Section', icon: "", isActive: false}
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.setActiveRoute();
    });
  }

  private setActiveRoute(): void {
    for (let i = 0; i < this.NAVIGATION.length; i++) {
      this.NAVIGATION[i].isActive = "/" + this.NAVIGATION[i].route === this.router.url;
    }
  }
}
