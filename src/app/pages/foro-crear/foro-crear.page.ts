import { Component, OnInit } from '@angular/core';

import { ForoservService } from 'src/app/services/foroserv.service';
import { Forito } from 'src/app/modelos/foros';

@Component({
  selector: 'app-foro-crear',
  templateUrl: './foro-crear.page.html',
  styleUrls: ['./foro-crear.page.scss'],
})


export class ForoCrearPage implements OnInit {

 fobj: Forito=new Forito();

  constructor(private foroservService: ForoservService) { }

  ngOnInit(){
  }

  agregarForo(foroobj: Forito): void{
    this.foroservService.postForo(foroobj).subscribe(res => {
      console.log(foroobj);
      if(res){
        alert(`se ha registrado con exito!`);
        this.clear();
      } else {
        alert('Error! :(');
      }
    });
  }

  clear(){
    this.fobj.id= null;
    this.fobj.nombre = null;

  }
}

