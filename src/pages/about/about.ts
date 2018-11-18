import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequisitosPage } from './../requisitos/requisitos';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  constructor(public navCtrl: NavController) {}

  verPadrones() {
    window.open(
      'http://cppc.org.ar/junta-electoral-padrones-provisorios/',
      '_system',
      'location=yes'
    );
  }
  verRequisitos() {
    this.navCtrl.push(RequisitosPage);
  }
  logoAction() {
    this.navCtrl.parent.select(0);
  }
}
