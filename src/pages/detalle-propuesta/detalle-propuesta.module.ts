import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePropuestaPage } from './detalle-propuesta';

@NgModule({
  declarations: [
    DetallePropuestaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePropuestaPage),
  ],
})
export class DetallePropuestaPageModule {}
