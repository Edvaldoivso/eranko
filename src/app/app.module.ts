import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeErankoComponent } from './Pages/home-eranko/home-eranko.component';
import { ErankoCardComponent } from './Pages/eranko-card/eranko-card/eranko-card.component';
import { ErankoModalComponent } from './Pages/eranko-modal/eranko-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeErankoComponent,
    ErankoCardComponent,
    ErankoModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
