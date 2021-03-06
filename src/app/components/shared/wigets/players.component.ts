import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-players',
  template: `
  <button
    class="btn_rankings_user pointer"
    id="btn_rankings_user">

    <i class="fas fa-user"></i>

  </button>

  <div id="rankings_user" class="rankings_user">
    <aside class="rankings">
        <p class="tittle">
            Ranking de Guerreros
        </p>
        <div *ngIf="http.players?.results[0]" class="fisrt_position text_position">
            <div class="position">
                1
            </div>
            <div class="war">
                {{ http.players?.results[0]?.name }}
            </div>
            <div class="level">
                {{ http.players?.results[0]?.level }}
            </div>
        </div>
        <div *ngIf="http.players?.results[1]" class="second_position text_position">
            <div class="position">
                2
            </div>
            <div class="war">
                {{ http.players?.results[1]?.name }}
            </div>
            <div class="level">
                {{ http.players?.results[1]?.level }}
            </div>
        </div>
        <div *ngIf="http.players?.results[2]" class="threeth_position text_position">
            <div class="position">
                3
            </div>
            <div class="war">
                {{ http.players?.results[2]?.name }}
            </div>
            <div class="level">
                {{ http.players?.results[2]?.level }}
            </div>
        </div>
        <div *ngIf="http.players?.results[3]" class="fourth_position text_position">
            <div class="position">
                4
            </div>
            <div class="war">
                {{ http.players?.results[3]?.name }}
            </div>
            <div class="level">
                {{ http.players?.results[3]?.level }}
            </div>
        </div>
        <div *ngIf="http.players?.results[4]" class="fith_position text_position">
            <div class="position">
                5
            </div>
            <div class="war">
                {{ http.players?.results[4]?.name }}
            </div>
            <div class="level">
                {{ http.players?.results[4]?.level }}
            </div>
        </div>
    </aside>
  </div>
  `,
  styles: []
})
export class PlayersComponent implements OnInit {

  constructor(
    public http: HttpService
  ) {
      this.load_players();
  }

  ngOnInit() {}

  load_players() {
    this.http.get_players().catch();
  }

}
