import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { DeckService } from './deck.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatToolbarModule],
  exports: [MatButtonModule, HttpClientModule, MatToolbarModule],
  providers: [DeckService]
})
export class SharedModulesModule {}
