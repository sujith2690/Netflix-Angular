import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }
  MovieDetails: any = []
  ngOnInit(): void {
    this.fetchMovieData();
    // this.trendingData()
    // this.actionMovies()
    // this.adventureMovies()
    // this.animatedMovies()
    // this.comedyMovies()
    // this.documentaryMovies()
    // this.scienceMovie()
    // this.thrillerMovie()
  }
  fetchMovieData() {
    this.service.trendingApiData().subscribe((result) => {
      console.log(result.results[0], '---trending')
      let movies = result.results
      this.MovieDetails.push({ category: 'Trending Movies', movies: movies });
    })

    this.service.getAdventureMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Adventure Movies', movies: moviesResult });
    })
    this.service.getActionMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Action Movies', movies: moviesResult });
    })

    this.service.getAnimeMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Anime Movies', movies: moviesResult });
    })
    this.service.getComedyMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Comedy Movies', movies: moviesResult });
    })
    this.service.getDocumentaryMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Documentary Movies', movies: moviesResult });
    })
    this.service.getScienceMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Science Movies', movies: moviesResult });
    })
    this.service.getThrillerMovies().subscribe((result) => {
      let moviesResult = result.results
      this.MovieDetails.push({ category: 'Thriller Movies', movies: moviesResult });
    })
  }
  // trendingData() {
  //   this.service.trendingApiData().subscribe((result) => {
  //     console.log(result.results[0], '---trending')
  //     // this.TrendingMovies = result.results
  //     this.MovieDetails.Trending = result.results
  //   })
  // }
  // actionMovies() {
  //   this.service.getActionMovies().subscribe((result) => {
  //     console.log(result.results[0], '-----action')
  //     this.MovieDetails.action = result.results
  //   })
  // }
  // adventureMovies() {
  //   this.service.getAdventureMovies().subscribe((result) => {
  //     console.log(result.results[0], '-----adventure')
  //     this.MovieDetails.Adventure = result.results
  //     console.log(this.MovieDetails, '----------------- this.MovieDetails')
  //   })
  // }
  // animatedMovies() {
  //   this.service.getAnimeMovies().subscribe((result) => {
  //     this.MovieDetails.Anime = result.results
  //   })
  // }
  // comedyMovies() {
  //   this.service.getComedyMovies().subscribe((result) => {
  //     this.MovieDetails.Comedy = result.results
  //   })
  // }
  // documentaryMovies() {
  //   this.service.getDocumentaryMovies().subscribe((result) => {
  //     this.MovieDetails.Documentary = result.results
  //   })
  // }
  // scienceMovie() {
  //   this.service.getScienceMovies().subscribe((result) => {
  //     this.MovieDetails.Science = result.results
  //   })
  // }
  // thrillerMovie() {
  //   this.service.getThrillerMovies().subscribe((result) => {
  //     this.MovieDetails.Triller = result.results
  //   })
  // }
}
