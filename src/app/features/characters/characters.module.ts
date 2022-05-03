import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CharacterDetailGuard } from './character-detail';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent, CharacterDetailComponent],
  imports: [
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: CharactersComponent },
      {
        path: 'characters/:id',
        canActivate: [CharacterDetailGuard],
        component: CharactersComponent,
      },
    ]),
  ],
  exports: [CharactersComponent, CharacterDetailComponent],
})
export class CharactersModule {}
