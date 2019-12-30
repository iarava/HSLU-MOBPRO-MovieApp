import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.page.html',
  styleUrls: ['./favorits.page.scss'],
})
export class FavoritsPage implements OnInit {

  public movies = [
    { Filename: "1.json", Title: "Pulp Fiction"},
    { Filename: "2.json", Title: "The Lord of the Rings: The Fellowship of the Ring"},
    { Filename: "3.json", Title: "Madagascar"},
    { Filename: "4.json", Title: "Brüno"},
    { Filename: "5.json", Title: "The Best of Borat"}
  ]


  constructor() {
  }

  ngOnInit() {
  }

}
