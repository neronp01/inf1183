import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft, rotationGear } from '../router.animations';
import { query, animate, state, style, transition, trigger, group } from '@angular/animations';

@Component({
  selector: 'app-other',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 1, transform: 'translateX(100px)'})),
      state('in', style({ opacity: 0, transform: 'translateX(0px)'})),
    transition('in=> void', [
      style({
        opacity: 0,
        transform: 'translateX(300px)',
      }),
      animate('2s ease-in')
    ]),
  ],
),
  ]
})

export class MembersComponent implements OnInit {
  name: any;
  state = 'in';
  displayName: string;

  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe( x => {
      this.displayName = x.displayName;
        console.log('test', x.displayName);
    });
    setTimeout(() => {
      this.state = 'void';
    }, 10);
  }

  logout() {
  }
  jeux() {
    this.router.navigateByUrl('/DameDePique');
  }

  ngOnInit() {
  }

}
