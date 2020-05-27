import { Component, OnInit, Input } from '@angular/core';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() openSidenav: boolean;
  title = 'Mavreak Product Manager';

  ngOnInit() {
    this.openSidenav = true;
  }
}
