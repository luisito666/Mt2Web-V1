import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  baseUrl: string = 'http://127.0.0.1:5000'

  constructor(
    private http: HttpClient
  ) { }

  private get(url: string){
    return this.http.get(url)
            .subscribe( (res:any) => {
              return res;
            })
  }

  get_mv() {
    const url = `${this.baseUrl}/api/v1/instance/getall/`;
    return this.get(url);
  }

}
