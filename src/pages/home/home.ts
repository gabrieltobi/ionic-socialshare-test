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
    this.socialSharing.shareWithOptions({ message: 'Message', subject: 'Subject' })
      .catch(err => {
        console.log(err);
        if (typeof err !== 'string') {
          alert(JSON.stringify(err));
        } else {
          alert(err);
        }
      });
  }

  shareTwitter() {
    this.socialSharing.shareViaTwitter('Message', 'http://via.placeholder.com/350x150')
      .then(() => alert('Shared'))
      .catch(err => {
        console.log(err);
        if (typeof err !== 'string') {
          alert(JSON.stringify(err));
        } else {
          alert(err);
        }
      });
  }

  shareInstagram() {
    this.socialSharing.shareViaInstagram('Message', 'http://via.placeholder.com/350x150')
      .then(() => alert('Shared'))
      .catch(err => {
        console.log(err);
        if (typeof err !== 'string') {
          alert(JSON.stringify(err));
        } else {
          alert(err);
        }
      });
  }
}
