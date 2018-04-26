import { Component, OnInit , HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { VideoService } from '../expression/video.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  carteTable = false;
  displayName: string;
  robotUnVideo: string;
  robotDeuxVideo: string;
  robotTroisVideo: string;
  constructor(private af: AngularFireAuth, private _video: VideoService) {
    this.af.authState.subscribe( x => {
      this.displayName = x.displayName;
    });
   }
  ngOnInit() {
    this.bonjour();
  }
  logout() {

  }
  clickCard() {
      this.carteTable = true;
  }
  bonjour() {
    this._video.getBonjour();
    this._video.srcUn.subscribe( x => {
      this.robotUnVideo = x;
    });

    this._video.srcDeux.subscribe( x => {
      this.robotDeuxVideo = x;
    });
    this._video.srcTrois.subscribe( x => {
      this.robotTroisVideo = x;
    });
  }
}
