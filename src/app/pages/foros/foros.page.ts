import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { TargetLocator } from 'selenium-webdriver';
import { ForoservService } from 'src/app/services/foroserv.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-foros',
  templateUrl: './foros.page.html',
  styleUrls: ['./foros.page.scss'],
})
export class ForosPage implements OnInit {

  foros: any=[];


  constructor(private foroservService: ForoservService , private loadingCtrl: LoadingController) { }

  ngOnInit() {
  this.loadForos();
  }

  async loadForos(){

    const loading =await this.loadingCtrl.create({

      message:'loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.foroservService.getForosapi().subscribe((res)=>{
      loading.dismiss();
      this.foros=res;
      console.log(res);

  });
  }

}
