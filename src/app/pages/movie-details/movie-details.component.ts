import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }
  movieDetails: any;
  movieVideo: any;
  movieCasts: any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getParamId)
    this.getCasts(getParamId)
    this.getMovieTrailer(getParamId)
  }
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'movie Details')
      this.movieDetails = result
    })
  }
  getMovieTrailer(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, '-movie video -------')
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer')    {

          this.movieVideo = element.key 
        }  
      });
    })
  }
  getCasts(id: any) {
    this.service.getMovieCasts(id).subscribe((result) => {
      console.log(result.cast, '----------casts')
      this.movieCasts = result.cast
    })
  }
}
