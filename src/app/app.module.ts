import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { MulinelliComponent } from './pages/mulinelli/mulinelli.component';
import { ModalLoginComponent } from './pages/modallogin/modallogin.component';
import { BannerComponent } from './pages/dashboard/banner/banner.component';
import { HrComponent } from './components/hr/hr.component';
import { AsideComponent } from './components/aside/aside.component';
import { SpinningComponent } from './pages/spinning/spinning.component';
import { UserComponent } from './pages/user/user.component';
import { AsideutenteComponent } from './components/asideutente/asideutente.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { ArrowupComponent } from './components/arrowup/arrowup.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlidermarchiComponent } from './components/slidermarchi/slidermarchi.component';
import { StoricoordiniComponent } from './pages/storicoordini/storicoordini.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RecuperopassComponent } from './pages/recuperopass/recuperopass.component';
// import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { Spinning2Component } from './pages/spinning2/spinning2.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { SottocategoriaComponent } from './pages/sottocategoria/sottocategoria.component';
import { BologneseComponent } from './pages/bolognese/bolognese.component';
import { RatingComponent } from './components/rating/rating.component';
import { ProdottoComponent } from './pages/prodotto/prodotto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    ProductsComponent,
    MulinelliComponent,
    ModalLoginComponent,
    BannerComponent,
    HrComponent,
    AsideComponent,
    SpinningComponent,
    UserComponent,
    AsideutenteComponent,
    CarrelloComponent,
    ArrowupComponent,
    CarouselComponent,
    SlidermarchiComponent,
    StoricoordiniComponent,
    RegistrazioneComponent,
    CheckoutComponent,
    RecuperopassComponent,
    // CatalogoComponent,
    Spinning2Component,
    CategoriaComponent,
    SottocategoriaComponent,
    BologneseComponent,
    RatingComponent,
    ProdottoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
