import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeservicoService {

  private api = 'http://localhost:8080';

  private ui = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  cadastrar(time: any): Observable<any>{
    return this.http.post<any>(`${this.api}/equipe`, time);
  }

  pesquisartime(id: any): Observable<any>{
    return this.http.get<any>(`${this.api}/timerecurso/${id}`);
  }

  votartime(id: any): Observable<any>{
    return this.http.get<any>(`${this.api}/votarnotime/${id}`);
  }

  apuracao(): Observable<any>{
    return this.http.get<any>(`${this.api}/apuracao`)
  }

  listarTodasEquipes():Observable<any>{
    return this.http.get<any>(`${this.api}/equipe`);
  }

  uploadEscudoDoTime(event) {
    if (event.target.files && event.target.files[0]) {
      const escudo = event.target.files[0];

      const formData = new FormData();
      formData.append('escudo', escudo);

      this.http.post(`${this.api}/escudos`, formData)
        .subscribe(resposta => console.log('Upload ok.'));
    }

  }

}
