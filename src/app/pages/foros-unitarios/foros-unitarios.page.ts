import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TargetLocator } from 'selenium-webdriver';
import { ForoservService } from 'src/app/services/foroserv.service';
@Component({
  selector: 'app-foros-unitarios',
  templateUrl: './foros-unitarios.page.html',
  styleUrls: ['./foros-unitarios.page.scss'],
})
export class ForosUnitariosPage implements OnInit {

  movie = null;

  constructor(private route: ActivatedRoute, private forosService: ForoservService) { }

  ngOnInit() {
    const id= this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.forosService.getForosDetalles(id).subscribe((res)=>{
         console.log(res);
        this.movie = res;
    });
  }
  agregarComentario(){
    window.open(this.movie.homepage);
  }
}
