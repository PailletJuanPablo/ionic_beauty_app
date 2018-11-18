import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  constructor(
    public navCtrl: NavController,
    public socialSharing: SocialSharing
  ) {}

  logoAction() {
    this.navCtrl.parent.select(0);
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebookWithPasteMessageHint(
      'Descarga nuestra App!',
      'https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/46355183_511974819329153_4076900149840838656_n.jpg?_nc_cat=109&_nc_eui2=AeG8h4kjHbqpuzkCc9YWb12foCxXq_8seHZjDmVPJGCzIRZj-pMSXlFt-vockc8hJ6Wvpk_vGR8AYtr21dXWPdbuWicfBAubsemN42QwxWvRCw&_nc_ht=scontent.fcor5-1.fna&oh=7ffb9cc9d17027e311f4627cae8e7a5f&oe=5C714586',
      'https://play.google.com/store/apps/details?id=ar.com.airtrack.rai',
      'Presiona pegar para insertar el mensaje'
    );
  }
  shareViaInstagram() {
    this.socialSharing.shareViaInstagram(
      'Descarga nuestra App!',
      'https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/46355183_511974819329153_4076900149840838656_n.jpg?_nc_cat=109&_nc_eui2=AeG8h4kjHbqpuzkCc9YWb12foCxXq_8seHZjDmVPJGCzIRZj-pMSXlFt-vockc8hJ6Wvpk_vGR8AYtr21dXWPdbuWicfBAubsemN42QwxWvRCw&_nc_ht=scontent.fcor5-1.fna&oh=7ffb9cc9d17027e311f4627cae8e7a5f&oe=5C714586'
    );
  }
  shareViaWhats() {
    this.socialSharing.shareViaWhatsApp(
      'Descarga nuestra App!',
      'https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/46355183_511974819329153_4076900149840838656_n.jpg?_nc_cat=109&_nc_eui2=AeG8h4kjHbqpuzkCc9YWb12foCxXq_8seHZjDmVPJGCzIRZj-pMSXlFt-vockc8hJ6Wvpk_vGR8AYtr21dXWPdbuWicfBAubsemN42QwxWvRCw&_nc_ht=scontent.fcor5-1.fna&oh=7ffb9cc9d17027e311f4627cae8e7a5f&oe=5C714586'
    );
  }
  generalShare() {
    this.socialSharing.share(
      'Descarga nuestra App!',
      'https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/46355183_511974819329153_4076900149840838656_n.jpg?_nc_cat=109&_nc_eui2=AeG8h4kjHbqpuzkCc9YWb12foCxXq_8seHZjDmVPJGCzIRZj-pMSXlFt-vockc8hJ6Wvpk_vGR8AYtr21dXWPdbuWicfBAubsemN42QwxWvRCw&_nc_ht=scontent.fcor5-1.fna&oh=7ffb9cc9d17027e311f4627cae8e7a5f&oe=5C714586'
    );
  }
}
