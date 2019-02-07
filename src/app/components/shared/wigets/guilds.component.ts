import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guilds',
  template: `
  <button 
    (click)="show()"
    class="btn_rankings_groups pointer" 
    id="btn_rankings_groups">
    
    <i class="fas fa-users"></i>
  </button>

  <div id="rankings_groups" class="rankings_groups">
    <aside class="rankings">
        <p class="tittle">
            Ranking de Gremios
        </p>
        <div class="fisrt_position text_position">
            <div class="position">
                1
            </div>
            <div class="war">
                Nombre Gremio
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
                Nombre Gremio
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
                Nombre Gremio
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
                Nombre Gremio
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
                Nombre Gremio
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
export class GuildsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){
    const rankings_groups = document.getElementById('rankings_groups');
    rankings_groups.style.display = 'flex';
  }

}
