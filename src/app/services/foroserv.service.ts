import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult{
  page: number;
  results: any[];
  total_pages: number;
  ​total_results: number;

}

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

}
