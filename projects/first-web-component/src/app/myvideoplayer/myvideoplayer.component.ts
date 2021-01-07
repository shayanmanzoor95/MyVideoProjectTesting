import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import { IOptions } from './IOptions';

type height = string;
type width = string;

@Component({
  selector: 'app-my-video-player',
  templateUrl: './myvideoplayer.component.html',
  styleUrls: ['./myvideoplayer.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class MyvideoplayerComponent implements OnInit,OnDestroy{
  player: videojs.Player;

  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: IOptions;
  

  @Input()myHeight:height;
  @Input()myWidth:width;


  constructor() { }

  ngOnInit() {
    this.options.height=this.myHeight;
    this.options.width=this.myWidth;
    // instantiate Video.js
    console.log(this.options)
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      // console.log('onPlayerReady', this);
      this.on('ended',function(){
        videojs.log('over so soon?');
        
      })


      this.on('ready',function(){
        setTimeout(()=>{
          this.height();
          this.play();
          this.playbackRate(3);
          console.log("boom")
        },3000)
      })


      this.on('pause',function(){
        let remaing=this.remainingTime();
        remaing=Math.round(remaing);
        console.log(remaing);
      })


      
    });




    
    // this.player.aspectRatio('1:1');    
  }

  playerProps(){
    
  }

  

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
