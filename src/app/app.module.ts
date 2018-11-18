import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComoVotarPageModule } from './../pages/como-votar/como-votar.module';
import { RequisitosPageModule } from '../pages/requisitos/requisitos.module';
import { ListaPageModule } from './../pages/lista/lista.module';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MessagePageModule } from './../pages/message/message.module';
import { SumarsePageModule } from './../pages/sumarse/sumarse.module';
import { PropuestasProvider } from '../providers/propuestas/propuestas';
import { HttpClientModule } from '@angular/common/http';
import { DetallePropuestaPageModule } from './../pages/detalle-propuesta/detalle-propuesta.module';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComoVotarPageModule,
    RequisitosPageModule,
    ListaPageModule,
    MessagePageModule,
    SumarsePageModule,
    HttpClientModule,
    DetallePropuestaPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SocialSharing,
    PropuestasProvider,
  ],
})
export class AppModule {}
