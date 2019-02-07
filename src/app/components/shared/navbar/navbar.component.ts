import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.close_modals();    
  }

  convert_flex() {
    const manager_user = document.getElementById('manager_user');
    manager_user.style.display = 'flex';

   }
   
   close_modals() {
    const manager_user = document.getElementById('manager_user');
    const rankings_user = document.getElementById('rankings_user');
    const rankings_groups = document.getElementById('rankings_groups');
    const modal_info = document.getElementById('modal_info');

    window.onclick = function(event) {
      if (event.target === manager_user) {
        manager_user.style.display = 'none';
      }
      if (event.target == rankings_user) {
        rankings_user.style.display = "none";
      }
      if (event.target == rankings_groups) {
        rankings_groups.style.display = "none";
      }
      if (event.target == modal_info) {
        modal_info.style.display = "none";
      }
    
    };
   }
}
