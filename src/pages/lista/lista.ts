import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PropuestasProvider } from './../../providers/propuestas/propuestas';
import { DetallePropuestaPage } from '../detalle-propuesta/detalle-propuesta';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  defaultImage =
    'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png';
  propuestas;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public propSv: PropuestasProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
    this.getPropuestas();
  }

  logoAction() {
    this.navCtrl.parent.select(0);
  }

  getPropuestas() {
    this.propSv
      .getPropuestas()
      .then(propuestas => {
        console.log(propuestas);
        this.propuestas = propuestas;
      })
      .catch(err => {
        console.log(err);
      });
  }

  irPropuesta(propuesta) {
    this.navCtrl.push(DetallePropuestaPage, { propuesta });
  }

  doRefresh(refresher) {
    this.propSv.getPropuestas().then(propuestas => {
      this.propuestas = propuestas;
      refresher.complete();
    });
  }
}
