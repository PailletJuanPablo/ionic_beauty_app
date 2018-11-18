import { Component, ViewChild } from '@angular/core';
import {
  Platform,
  App,
  AlertController,
  ToastController,
  Nav,
  ViewController,
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: any;

  rootPage: any = TabsPage;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  alertShown = false;
  alert;
  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public app: App,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#ffffff');
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkBack();
      // this.handleBackButtonEvent();
    });
  }

  checkBack() {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNav();
      let activeView: ViewController = nav.getActive();

      if (activeView != null) {
        if (nav.canGoBack()) {
          nav.pop();
        } else if (typeof activeView.instance.backButtonAction === 'function') {
          activeView.instance.backButtonAction();
        } else {
          console.log(nav.getActive());
          if (nav.getActive().index == 0) {
            //
            if (
              new Date().getTime() - this.lastTimeBackPress <
              this.timePeriodToExit
            ) {
              // this.platform.exitApp(); // Exit from app
              navigator['app'].exitApp(); // work in ionic 4
            } else {
              this.toastCtrl
                .create({
                  message:
                    'Presiona el botón de volver nuevamente para cerrar la App',
                  duration: 1000,
                  position: 'bottom',
                })
                .present()
                .then(toast => {
                  this.lastTimeBackPress = new Date().getTime();
                });
            }
          }

          nav.parent.select(0); // goes to the first tab
        }
        //
      }
    });
  }
}
