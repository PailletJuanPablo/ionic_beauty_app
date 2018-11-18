import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the RequisitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html',
})
export class RequisitosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#008837');
    this.statusBar.styleLightContent();
  }
  ionViewWillUnload() {
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
  }
}
