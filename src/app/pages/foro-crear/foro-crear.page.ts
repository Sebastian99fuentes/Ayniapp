import { Component, OnInit } from '@angular/core';

import { ForoservService } from 'src/app/services/foroserv.service';
import { Forito } from 'src/app/modelos/foros';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-foro-crear',
  templateUrl: './foro-crear.page.html',
  styleUrls: ['./foro-crear.page.scss'],
})


export class ForoCrearPage implements OnInit {

 fobj: Forito=new Forito();

  constructor(private foroservService: ForoservService, private storage: Storage ) { }

  ngOnInit(){
    this.storage.create();
  }

  agregarForo(foroobj: Forito): void{
    //  this.storage.get('id');
    //  console.log(     this.storage.get('id'));
     this.storage.get('id').then((val)=>{
      console.log(val);
      foroobj.userId=val.token;
      console.log(foroobj);
     });
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
    this.fobj.topic= null;
    this.fobj.content = null;

  }
}

