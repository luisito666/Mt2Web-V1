import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  template: `
  <button 
    (click)="show()"
    class="btn_rankings_user pointer" 
    id="btn_rankings_user">

    <i class="fas fa-user"></i>

  </button>

  <div id="rankings_user" class="rankings_user">
    <aside class="rankings">
        <p class="tittle">
            Ranking de Guerreros
        </p>
        <div class="fisrt_position text_position">
            <div class="position">
                1
            </div>
            <div class="war">
                Nombre Guerrero
            </div>
            <div class="level">
                100
            </div>
        </div>
        <div class="second_position text_position">
            <div class="position">
                2
            </div>
            <div class="war">
                Nombre Guerrero
            </div>
            <div class="level">
                100
            </div>
        </div>
        <div class="threeth_position text_position">
            <div class="position">
                3
            </div>
            <div class="war">
                Nombre Guerrero
            </div>
            <div class="level">
                100
            </div>
        </div>
        <div class="fourth_position text_position">
            <div class="position">
                4
            </div>
            <div class="war">
                Nombre Guerrero
            </div>
            <div class="level">
                100
            </div>
        </div>
        <div class="fith_position text_position">
            <div class="position">
                5
            </div>
            <div class="war">
                Nombre Guerrero
            </div>
            <div class="level">
                100
            </div>
        </div>
    </aside>
  </div>
  `,
  styles: []
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  show() {
    const rankings_user = document.getElementById('rankings_user');
    rankings_user.style.display = 'flex';
  }

}
