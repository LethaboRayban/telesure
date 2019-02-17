import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { PlayerSectionComponent } from './player-section/player-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    CardComponent,
    BoardComponent,
    PlayerSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
