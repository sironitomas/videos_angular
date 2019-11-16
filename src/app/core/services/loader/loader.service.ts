import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export declare type LoaderRef = { 
  loaded: boolean
};

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private _subject = new Subject<LoaderRef>();

  public getRef(): Observable<LoaderRef> {
    return this._subject.asObservable();
  }

  public start(): void {
    this._subject.next(<LoaderRef>{ loaded: true });
  }

  public complete(): void {
    this._subject.next(<LoaderRef>{ loaded: false });
  }

}
