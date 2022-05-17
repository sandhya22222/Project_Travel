import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TrainsComponent } from './vehicals/trains/trains.component';
import { FlightsComponent } from './vehicals/flights/flights.component';
import { BusesComponent } from './vehicals/buses/buses.component';
import { HotelsComponent } from './vehicals/hotels/hotels.component';
import { CabsComponent } from './vehicals/cabs/cabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './materials/materials.module';

import { BnLdFlightsComponent } from './routing/bn-ld-flights/bn-ld-flights.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MytripsComponent } from './components/mytrips/mytrips.component';
import { TotrainsComponent } from './routing/totrains/totrains.component';
import { TrainclickComponent } from './routing/trainclick/trainclick.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightclickComponent } from './routing/flightclick/flightclick.component';
import { SubmitComponent } from './routing/submit/submit.component';
import { TohotelsComponent } from './routing/tohotels/tohotels.component';
import { HotelclickComponent } from './routing/hotelclick/hotelclick.component';
import { TobusesComponent } from './routing/tobuses/tobuses.component';
import { TocabesComponent } from './routing/tocabes/tocabes.component';
import { BusclickComponent } from './routing/busclick/busclick.component';

import { TraindetailsComponent } from './routing/traindetails/traindetails.component';
import { FlightdetailsComponent } from './routing/flightdetails/flightdetails.component';
import { BusdetailsComponent } from './routing/busdetails/busdetails.component';
import { HoteldetailsComponent } from './routing/hoteldetails/hoteldetails.component';
import { CabclickComponent } from './routing/cabclick/cabclick.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContactUsComponent,
    MainContainerComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    TrainsComponent,
    FlightsComponent,
    BusesComponent,
    HotelsComponent,
    CabsComponent,
    BnLdFlightsComponent,

    MytripsComponent,
    TotrainsComponent,
    TrainclickComponent,
    FlightclickComponent,
    SubmitComponent,
    TohotelsComponent,
    HotelclickComponent,
    TobusesComponent,
    TocabesComponent,
    BusclickComponent,
    TraindetailsComponent,
    FlightdetailsComponent,
    BusdetailsComponent,
    HoteldetailsComponent,
    CabclickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
