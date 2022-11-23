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

  movies =[];
  currentPage= 1;
  imageBaseUrl = environment.imagenes;
  constructor(private foroservService: ForoservService , private loadingCtrl: LoadingController) { }

  ngOnInit() {
   this.loadMovies();
  }

  async loadMovies(event?){

    const loading =await this.loadingCtrl.create({

      message:'loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.foroservService.getForos(this.currentPage).subscribe((res)=>{
      loading.dismiss();
      this.movies.push(...res.results);
      console.log(res);

      event?.target.complete();
      if(event){
        event.target.disabled=res.total_pages===this.currentPage;
      }
  });
  }
  loadMore(event: InfiniteScrollCustomEvent ){
    this.currentPage++;
    this.loadMovies(event);

  }
}
