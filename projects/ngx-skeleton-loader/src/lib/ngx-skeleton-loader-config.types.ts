import { InjectionToken } from '@angular/core';

export type NgxSkeletonLoaderConfigTheme = {
  /** It enforces a combination of `fromRoot` styles with component `styles` attribute */
  extendsFromRoot?: boolean;
  // This is required since [style] is using `any` as well
  // More details in https://angular.dev/api/common/NgStyle
  [k: string]: any;
} | null;

type CSSMeasureUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';

export interface NgxSkeletonLoaderConfig {
  appearance: 'circle' | 'line' | 'custom-content' | 'square' | '';
  animation: 'progress' | 'progress-dark' | 'pulse' | 'pulse-dark' | 'false' | false;
  theme: NgxSkeletonLoaderConfigTheme;
  loadingText: string;
  count: number;
  ariaLabel: string;
  size: number | `${number}` | `${number}${CSSMeasureUnit}` | null;
  measureUnit: CSSMeasureUnit;
}

export const NGX_SKELETON_LOADER_CONFIG = new InjectionToken<NgxSkeletonLoaderConfig>('ngx-skeleton-loader.config');
