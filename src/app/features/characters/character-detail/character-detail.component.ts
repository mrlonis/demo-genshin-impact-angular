import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrlonis-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  constructor() {
    console.log('CharacterDetailComponent: constructor()');
  }

  ngOnInit(): void {
    console.log('CharacterDetailComponent: ngOnInit()');
  }
}
