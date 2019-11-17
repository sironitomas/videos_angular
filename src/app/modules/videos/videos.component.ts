import { Component, OnInit, Input } from '@angular/core';
import { IVideos } from 'src/app/core/api/models/i-video';
import { VideoInfoService } from 'src/app/core/api/services/video-info/videos-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  @Input() videosList: IVideos[];
  constructor(private videoInfo: VideoInfoService, private router: Router) { }

  ngOnInit() {
  }

  public showVideo(video: IVideos) {
    this.videoInfo.setVideo(video);
    this.router.navigate(['videoInfo']);
  }
}

