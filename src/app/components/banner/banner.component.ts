import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private service: MovieApiServiceService) { }
  bannerResult: any = [];
  ngOnInit(): void {
    this.bannerData()
  }
  //bannerData
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      // console.log(result.results[0],'----------------')
      this.bannerResult = result.results;
    });
  }
}
