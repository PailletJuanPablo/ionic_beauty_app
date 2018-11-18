import { Component } from '@angular/core';
import { NavController, Platform, App, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  diasRestantes;
  interval;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  alertShown = false;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public app: App,
    public toastCtrl: ToastController
  ) {
    this.setCounterInit();
    this.setCounterInterval();
  }

  setCounterInterval() {
    // Update the count down every 1 second
    this.interval = setInterval(() => {
      this.setCounterInit();
    }, 1000);
  }

  setCounterInit() {
    let countDownDate = new Date('December 15, 2018 08:00:00').getTime();
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let value =
      '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    // Output the result in an element with id="demo"
    this.diasRestantes = value;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(this.interval);
      this.diasRestantes = 'GRACIAS POR VOTAR!';
    }
  }

  irVotar() {
    this.navCtrl.parent.select(1);
  }

  logoAction() {
    this.navCtrl.popToRoot();
  }
  irLista() {
    this.navCtrl.parent.select(3);
  }
  irMensaje() {
    this.navCtrl.parent.select(4);
  }
}
