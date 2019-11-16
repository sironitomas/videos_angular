import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable , Subscription } from 'rxjs';
import { LoaderRef, LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private _subscription: Subscription;
  private _observable: Observable<LoaderRef>;
  private _loaded: boolean;

  constructor(private _service: LoaderService) {
    this._loaded = false;
  }

  public ngOnInit(): void {
    this._observable = this._service.getRef();
  }

  public ngAfterViewInit(): void {
    this._subscription = this._observable.subscribe((ref: LoaderRef) => {
      this._loaded = ref.loaded;
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  get loaded(): boolean {
    return this._loaded;
  }

}
