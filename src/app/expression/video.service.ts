import { Injectable } from '@angular/core';
import { Video, IVideo } from './video';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Injectable()

export class VideoService {

  srcUn: BehaviorSubject<string>;
  srcDeux: BehaviorSubject<string>;
  srcTrois: BehaviorSubject<string>;
  videos: IVideo[] = [

    {
      src: 'assets/comment.mp4',
      type: 'video/mp4',
      temps: 3000
    },
    {
      src: 'assets/pascal.mp4',
      type: 'video/mp4',
      temps: 3000
    }
  ];
  constructor() {
    this.srcUn = new BehaviorSubject('');
    this.srcDeux = new BehaviorSubject('');
    this.srcTrois = new BehaviorSubject('');
    }
  getVideos() {
    return this.videos;
  }

  getBonjour() {
    let count: number;
    count = 0;
    this.srcUn.next('assets/comment.mp4');
    this.srcDeux.next('assets/comment.mp4');
    this.srcTrois.next('assets/comment_1.mp4');
    const numbers = Observable.timer(0, 1000); // Call after 10 second.. Please set your time
    numbers.subscribe(x => {
       if ( x > 2  && count === 0) {
        this.srcDeux.next('assets/pascal.mp4');
        console.log('test2');
        count++;
      }
    });

}
}
