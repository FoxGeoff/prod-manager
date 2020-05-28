import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {
  @Input() openSidenav: boolean;
  // layout responsive using BreakpointObserver
  // MatSidenav extends MatDrawer
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  smallWidthBreakpoint: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) { }

  ngOnInit(): void {
    // used to always have initial drawer open
    this.openSidenav = true;
    this.DetectViewPortSize();
  }
  DetectViewPortSize() {
    // layout responsive using BreakpointObserver
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('$=== Viewport is 500px or over!');
          this.smallWidthBreakpoint = false;
        } else {
          console.log('$=== Viewport is getting smaller!');
          this.smallWidthBreakpoint = true;
        }
      });

    this.CloseSmallViewPoint();
  }

  CloseSmallViewPoint() {
    this.router.events.subscribe(() => {
      if (this.smallWidthBreakpoint) {
        console.log('$=== Selection made on Smallscreen, close side bar');
        this.sidenav.close();
      }
    });
  }

}
