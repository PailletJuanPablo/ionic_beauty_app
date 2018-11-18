import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the DetallePropuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-propuesta',
  templateUrl: 'detalle-propuesta.html',
})
export class DetallePropuestaPage {
  propuesta;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {
    this.propuesta = this.navParams.get('propuesta');
  }

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#f0057f');
    this.statusBar.styleLightContent();
  }
  ionViewWillUnload() {
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
  }
}
