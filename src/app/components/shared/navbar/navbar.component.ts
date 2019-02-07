import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const manager_user = document.getElementById('manager_user');
    window.onclick = function(event) {
      if (event.target === manager_user) {
        manager_user.style.display = 'none';
      }
    };
  }

  convert_flex() {
    const manager_user = document.getElementById('manager_user');
    manager_user.style.display = 'flex';

   }

}
