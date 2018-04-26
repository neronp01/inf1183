import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { VideoService } from '../expression/video.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit {
  @Input () carte: number;
  @Input () robotUnVideo: string;
  top_tete = false;
  big_tete = false;
  displayName: string;
  pathVideo = '';
  robotDeuxVideo: string;
  robotTroisVideo: string;
  constructor(private af: AngularFireAuth, private _video: VideoService) {
    const timer = Observable.interval(2000);
    timer.subscribe(
      y => {
        const temp = Math.floor(Math.random() * Math.floor(10));
        console.log('----', temp);
        if (temp === 5) {
          this.top_tete = true;
          console.log('cool');
        } else {
          this.top_tete = false;
        }
        if (temp === 1) {
          this.big_tete = true;
          console.log('cool');
        } else {
          this.big_tete = false;
        }
      }
    );
    this.af.authState.subscribe( x => {
      this.displayName = x.displayName;
    });
   }
   logout() {

   }
  ngOnInit() {
    this.timer();
  }

timer() {

}
}
