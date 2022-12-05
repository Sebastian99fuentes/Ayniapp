import { Component, OnInit } from '@angular/core';

import { ForoservService } from 'src/app/services/foroserv.service';
import { Forito } from 'src/app/modelos/foros';
import { Storage } from '@ionic/storage-angular';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-foro-crear',
  templateUrl: './foro-crear.page.html',
  styleUrls: ['./foro-crear.page.scss'],
})


export class ForoCrearPage implements OnInit {

 fobj: Forito=new Forito();

  constructor(private foroservService: ForoservService, private storage: Storage, private apiservice: ApiUsuariosService ) { }

  ngOnInit(){
    this.storage.create();
  }
  async agregarForo(foroobj: Forito){
     this.storage.get('id').then((val)=>{
      console.log(val);
      foroobj.userId=val.token;
      console.log(foroobj);
      if(foroobj.userId!=null){
        this.addforo(foroobj);
      }
      else{
        alert(`Necesitamos que ingreses con tu usuario`);
      }
     });

  }
  clear(){
    this.fobj.topic= null;
    this.fobj.content = null;

  }

  async addforo(foroobj: Forito){

    this.apiservice.postForo(foroobj).subscribe(res => {
      console.log(foroobj);
      if(res){
        alert(`se ha registrado con exito!`);
        this.clear();
      } else {
        alert('Error!');
      }
    });
  }
}

