import { Component, OnInit, Input } from '@angular/core';
import { IVideos } from 'src/app/core/api/models/i-video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input() videosList: IVideos[];
  constructor() { }

  ngOnInit() {
  }

}
