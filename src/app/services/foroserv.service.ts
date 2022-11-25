import { Injectable } from '@angular/core';
import{HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forito } from '../modelos/foros';
import { Comentario } from '../modelos/comentario';


export interface ApiResult{
  page: number;
  results: any[];
  resultsforo: any[];


}

@Injectable({
  providedIn: 'root'
})
export class ForoservService {
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }


getForosapi( ): Observable<ApiResult>{

  return this.http.get<ApiResult>(`${environment.urlAyni}`);
}
getForosDetallesapi(id: string){

  return this.http.get(`${environment.urlAyni}/id?id=${id}`);

}
getComentariosapi(id: string){

  return this.http.get(`${environment.urlAyni}/padre/id?id=${id}`);

}


postForoComentario(comentario: Comentario): Observable<Comentario>{

  return this.http.put<Comentario>(`${environment.urlAyni}`,comentario);
}

}



