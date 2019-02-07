import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})
export class UserManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('default').click();
  }

  showMenu(event, menu) {
    /* Maneja el menu de tabs de administracion del usuario*/
    let i, content, tabs;
    content = document.getElementsByClassName('content');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    tabs = document.getElementsByClassName('tabs');
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(' active', '');
    }
    document.getElementById(menu).style.display = 'block';
    event.currentTarget.className += ' active';
  }

}
