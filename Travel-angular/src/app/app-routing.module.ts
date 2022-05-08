import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MytripsComponent } from './components/mytrips/mytrips.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { BnLdFlightsComponent } from './routing/bn-ld-flights/bn-ld-flights.component';
import { BusesComponent } from './vehicals/buses/buses.component';
import { CabsComponent } from './vehicals/cabs/cabs.component';
import { FlightsComponent } from './vehicals/flights/flights.component';
import { HotelsComponent } from './vehicals/hotels/hotels.component';
import { TrainsComponent } from './vehicals/trains/trains.component';
import { TotrainsComponent } from './routing/totrains/totrains.component';
import { FlightclickComponent } from './routing/flightclick/flightclick.component';
import { TohotelsComponent } from './routing/tohotels/tohotels.component';
import { TrainclickComponent } from './routing/trainclick/trainclick.component';
import { HotelclickComponent } from './routing/hotelclick/hotelclick.component';
import { TobusesComponent } from './routing/tobuses/tobuses.component';
import { SubmitComponent } from './routing/submit/submit.component';
import { TocabesComponent } from './routing/tocabes/tocabes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'Login', component: LoginComponent },

  { path: 'Contact', component: ContactUsComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'home', component: HomeComponent },

  { path: 'trains', component: TrainsComponent },

  { path: 'flights', component: FlightsComponent },

  { path: 'buses', component: BusesComponent },

  { path: 'cabs', component: CabsComponent },

  { path: 'hotel', component: HotelsComponent },

  { path: 'flights/search', component: BnLdFlightsComponent },

  { path: 'trains/search', component: TotrainsComponent },

  {path:'buses/search',component:TobusesComponent},

  {path:'cabs/search',component:TocabesComponent},

  { path: 'trainclick', component: TrainclickComponent },

  {path:'flightclick',component:FlightclickComponent},

  { path: 'mytrips', component: MytripsComponent },

  { path: 'flightbook', component: FlightclickComponent },

  { path: 'hotel/search', component: TohotelsComponent },

  { path: 'hotelclick', component: HotelclickComponent },

  { path: 'submit', component: SubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
