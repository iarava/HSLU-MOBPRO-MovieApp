import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // Get the information from the API
    this.movieService.getDetails(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(result => {
      this.information = result;
    });
  }
}
