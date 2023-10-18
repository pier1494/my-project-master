import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { MulinelliComponent } from './pages/mulinelli/mulinelli.component';
import { ModalLoginComponent } from './pages/modallogin/modallogin.component';
import { AsideComponent } from './components/aside/aside.component';
import { SpinningComponent } from './pages/spinning/spinning.component';
import { UserComponent } from './pages/user/user.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { StoricoordiniComponent } from './pages/storicoordini/storicoordini.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RecuperopassComponent } from './pages/recuperopass/recuperopass.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { AuthGuard } from './auth.guard';
import { SottocategoriaComponent } from './pages/sottocategoria/sottocategoria.component';
import { BologneseComponent } from './pages/bolognese/bolognese.component';
import { ProdottoComponent } from './pages/prodotto/prodotto.component';
import { SurfcastingComponent } from './pages/surfcasting/surfcasting.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'mulinelli', component: MulinelliComponent },
  { path: 'modal-login', component: ModalLoginComponent },
  { path: 'spinning', component: SpinningComponent },
  { path: 'aside', component: AsideComponent },
  { path: 'user', component: UserComponent,  canActivate: [AuthGuard]},
  { path: 'carrello', component: CarrelloComponent },
  { path: 'storicoordini', component: StoricoordiniComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'recuperopass', component: RecuperopassComponent },
  { path: 'catalogo/:categoria', component: CategoriaComponent },
  { path: 'sottocategoria/:sottocategoria', component: SottocategoriaComponent },
  { path: 'prodotto', component: ProdottoComponent } ,
  { path: 'spinning', component: SpinningComponent }, // Rotta per la pagina spinning
  { path: 'prodotto/:id', component: ProdottoComponent }, // Rotta per la pagina del prodotto con parametro 'id'
  { path: '', redirectTo: '/spinning', pathMatch: 'full' },
  { path: 'bolognese', component: BologneseComponent } ,
  { path: 'prodotto/:id', component: ProdottoComponent },
  { path: 'surfcasting', component: SurfcastingComponent } ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
