import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrlonis-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor() {
    console.log('CharactersComponent: constructor()');
  }

  ngOnInit(): void {
    console.log('CharactersComponent: ngOnInit()');
  }
}
