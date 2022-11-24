import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/modelos/comentario';
import { ForoservService } from 'src/app/services/foroserv.service';
@Component({
  selector: 'app-foros-unitarios',
  templateUrl: './foros-unitarios.page.html',
  styleUrls: ['./foros-unitarios.page.scss'],
})
export class ForosUnitariosPage implements OnInit {

  movie;
  foro;
comentario: Comentario = new Comentario();

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


  agregarComent( id: string, coment: Comentario): void{
    this.forosService.updateForoComentario(id, coment).subscribe(res => {
      if(res){
        alert(` se ha agregado con exito!`);
      } else {
        alert('Error! :(');
      }
    });
  }
}
