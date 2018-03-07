import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  canShareTwitter: any;
  canShareInstagram: any;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {
    /* this.socialSharing.canShareVia('twitter')
      .then(result => this.canShareTwitter = result);

    this.socialSharing.canShareVia('instagram')
      .then(result => this.canShareInstagram = result); */
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
    this.socialSharing.shareViaTwitter('Message')
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
