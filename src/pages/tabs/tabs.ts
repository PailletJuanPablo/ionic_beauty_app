import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavParams, Tabs } from 'ionic-angular';
import { ListaPage } from './../lista/lista';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;

  index: number = 0;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ListaPage;
  tab5Root = MessagePage;

  constructor(public navParams: NavParams) {
    if (this.navParams.get('index')) {
      this.index = this.navParams.get('index');
    }
  }

  ionViewDidLoad() {
    this.tabRef.select(this.index);
  }
}
