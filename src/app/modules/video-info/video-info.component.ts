import { Component, OnInit } from '@angular/core';
import { VideoInfoService } from 'src/app/core/api/services/video-info/videos-info.service';
import { IVideos } from 'src/app/core/api/models/i-video';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {
  private video: IVideos;
  constructor(private videoInfo: VideoInfoService) { }

  ngOnInit() {
    this.video = this.videoInfo.getVideo();
  }
}
