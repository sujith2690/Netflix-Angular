import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navBg: any;
  @HostListener('document:scroll') scrollOver() {
    console.log(document.body.scrollTop, '-----scroll length')
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBg = { 'background-color': 'rgba(0, 0, 0, 0.8)' }
    } else {
      this.navBg = {}
    }
  }
}
