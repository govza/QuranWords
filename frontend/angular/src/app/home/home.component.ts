import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/_services/rest.service';
import { Reciter } from 'src/app/_models/reciter.model';
import { SurahMain } from 'src/app/_models/surah.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  title = 'angular';
  env = environment;
  reciters: Array<Reciter>;
  surahs: Array<SurahMain>;
  selectedReciterId = 1;
  selectedSurahNumber = 1;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.showReciters();
    this.showSurahs();
  }

  showReciters() {
    this.rest.getReciters()
      .subscribe((result: Array<Reciter>) => {
        this.reciters = result}),
        (error: any) => {
          console.log('error', error);
        }
  }

  showSurahs() {
    this.rest.getSurahs()
      .subscribe((result: Array<SurahMain>) => {
        this.surahs = result}),
        (error: any) => {
          console.log('error', error);
        }
  }

  trackByFn(index, item) {
    return index;
  }
}
