import { PlayerSectionComponent } from './player-section/player-section.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { SharedModulesModule } from './shared-modules/shared-modules.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'play' },
  { path: 'play', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
  NavComponent,
  CardComponent,
  BoardComponent,
  PlayerSectionComponent
];
