import { Component, OnInit } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.css'],
})
export class JwplayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const playerJw = jwplayer('player').setup({
      title: 'Player Test',
      playlist: [{
        "title": "One Playlist Item With Multiple Sources",
        "description": "Three Sources - One Playlist Item",
        "image": "myImage.png",
        "mediaid": "ddrx3v2",
        "sources": [{
            "file": "https://obevcimanyd179314182.thapcam.link/live/may1FHD/playlist.m3u8"
          }]
      }],
      width: 640,
      height: 360,
      aspectratio: '16:9',
      mute: false,
      autostart: true,
    });
  }
}
