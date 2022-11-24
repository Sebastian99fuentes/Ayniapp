import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forito } from '../modelos/foros';
import { Comentario } from '../modelos/comentario';


export interface ApiResult{
  page: number;
  results: any[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
  ​total_results: number;

}

// export interface Foro{
//   id?: string;
//   nombre: string;

// }

@Injectable({
  providedIn: 'root'
})
export class ForoservService {

  constructor(private http: HttpClient) { }

getForos(page=1): Observable<ApiResult>{

  return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=d289dbcf23c196fd4f5ea906a824d757&page=${page}`);
}
getForosDetalles(id: string){

  return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=d289dbcf23c196fd4f5ea906a824d757`);
}





getForosapi( ): Observable<ApiResult>{

  return this.http.get<ApiResult>(`${environment.urlAyni}`);
}
getForosDetallesapi(id: string){

  return this.http.get(`${environment.urlAyni}/id?id=${id}`);
}
postForo(foro: Forito): Observable<Forito>{

  return this.http.post<Forito>(`${environment.urlAyni}`,foro);
}
updateForoComentario(id: string, comentario: Comentario): Observable<Comentario>{

  return this.http.put<Comentario>(`${environment.urlAyni}/id?id=${id}`,comentario);
}

}



