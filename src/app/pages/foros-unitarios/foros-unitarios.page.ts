import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Comentario } from 'src/app/modelos/comentario';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';
import { ForoservService } from 'src/app/services/foroserv.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-foros-unitarios',
  templateUrl: './foros-unitarios.page.html',
  styleUrls: ['./foros-unitarios.page.scss'],
})
export class ForosUnitariosPage implements OnInit {

  foro;
  comentarios: any=[];
comentario: Comentario = new Comentario();

  constructor(private route: ActivatedRoute, private forosService: ForoservService, private apiservice: ApiUsuariosService,
    private storage: Storage,private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.storage.create();
    this.cargaData();
  }

  cargaData(){
    const id= this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.forosService.getForosDetallesapi(id).subscribe((res)=>{
      console.log(res);
     this.foro = res;
 });
 this.forosService.getComentariosapi(id).subscribe((res)=>{
  console.log(res);
  this.comentarios = res;
});

}

  async agregarComent(coment: Comentario){

    const loading = await this.loadingCtrl.create({

      message:'loading..',
      spinner: 'bubbles',
    });
    await loading.present();
     const id= this.route.snapshot.paramMap.get('id');
    coment.fatherId= id;
    coment.topic=this.foro.topic;
    console.log(coment);
     this.storage.get('id').then((val)=>{
      console.log(val);
      coment.userId=val.token;
      console.log(coment);
     });
     await loading.dismiss();
    if(coment.userId!= null){
           await this.addcomend(coment);
      this.cargaData();
    }
    else{
      alert(`Necesitamos que ingreses con tu usuario`);
    }
  }

  async addcomend(coment: Comentario){
    this.apiservice.postForoComentario(coment).subscribe(res => {
      if (res) {
        alert(` se ha agregado con exito!`);
      } else {
        alert('Error!');
      }
    });
  }
}
