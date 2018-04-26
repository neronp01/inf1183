import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn],
})
export class LoginComponent implements OnInit {
  @ Input() state = 'void';
    error: any;
    isLoggedIn = false;
    constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        console.log('test', credential.user.email);
        this.router.navigate(['/members']);
      });
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  logout(): void {
    this.isLoggedIn = false;
  }
  ngOnInit() {
  }

}
