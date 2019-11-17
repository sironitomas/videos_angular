import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVideos } from '../../models/i-video';

@Injectable({
  providedIn: 'root'
})

export class VideoInfoService {
  private savedVideo: IVideos;
  constructor() {
  }

  public setVideo(video: IVideos): void {
    this.savedVideo = video;
  }

  public getVideo(): IVideos {
    return this.savedVideo;
  }
}
