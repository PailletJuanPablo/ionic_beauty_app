import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { RequisitosPage } from './../requisitos/requisitos';

/**
 * Generated class for the ComoVotarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-como-votar',
  templateUrl: 'como-votar.html',
})
export class ComoVotarPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#520092');
    this.statusBar.styleLightContent();
  }
  ionViewWillUnload() {
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
  }
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
}
