import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VideoService } from './video.service';
import { IVideo } from './video';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';



@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {
  videoPath: string;
  videoTab: IVideo[];
  @Input() pathVideo: string;
  @ViewChild('videoPlayer') videoPlayer: any;
  src = '';
  constructor(private _videoService: VideoService) {
    this.videoTab = _videoService.videos;
  }

  ngOnInit() {
  //  this.timerAnimation();
  }

  timerAnimation() {
    const nomb = 0;
    const timer = Observable.interval(this.videoTab[nomb].temps).take(0);
    timer.subscribe(
      y => {
        this.src = this.videoTab[y].src;
        this.videoPlayer.nativeElement.load();
      //  console.log(this.src);
      //  console.log(this.videoTab[nomb].temps);
      //  console.log(y);

      }
    );
  }

}
