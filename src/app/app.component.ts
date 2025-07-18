import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxSkeletonLoaderComponent, NgxSkeletonLoaderConfig } from '../../projects/ngx-skeleton-loader/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgxSkeletonLoaderComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngx-skeleton-loader-demo';

  animation: NgxSkeletonLoaderConfig['animation'] = 'pulse';
  contentLoaded = false;
  count = 2;
  widthHeightSizeInPixels = '50px';

  intervalId: number | null = null;

  platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.setTimeout(() => {
        this.contentLoaded = true;
      }, 2000);

      this.intervalId = window.setInterval(() => {
        this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
        this.count = this.count === 2 ? 5 : 2;
        this.widthHeightSizeInPixels = `${this.widthHeightSizeInPixels === '50px' ? '100px' : '50px'}`;
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
