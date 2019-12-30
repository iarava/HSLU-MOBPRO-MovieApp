import {MovieService, SearchType} from '../../services/movie.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-suche',
  templateUrl: './suche.page.html',
  styleUrls: ['./suche.page.scss'],
})
export class SuchePage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
