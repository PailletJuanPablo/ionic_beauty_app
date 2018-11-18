import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SumarsePage } from './sumarse';

@NgModule({
  declarations: [
    SumarsePage,
  ],
  imports: [
    IonicPageModule.forChild(SumarsePage),
  ],
})
export class SumarsePageModule {}
