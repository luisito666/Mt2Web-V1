import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  guilds:any;
  players:any;
  
  baseUrl: string = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }

  private get(url: string) {
    return this.http.get(url)
  }

  async get_guilds() {
    const url = `${this.baseUrl}/api/v1/guilds_ranking/`;
    this.guilds = await this.get(url).toPromise();
  }

  async get_players() {
    const url = `${this.baseUrl}/api/v1/players_ranking/`
    this.players = await this.get(url).toPromise();

  }

}
