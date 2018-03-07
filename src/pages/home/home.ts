import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {
  }

  share() {
    this.socialSharing.shareWithOptions({ message: 'Message', subject: 'Subject' });
  }

  shareTwitter() {
    this.socialSharing.shareViaTwitter('Message');
  }

  shareInstagram() {
    this.socialSharing.shareViaInstagram('Message', 'http://via.placeholder.com/350x150');
  }
}
