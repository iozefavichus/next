export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
      original: string;
      large2x: string;
      large: string;
      medium: string;
      small: string;
      portrait: string;
      landscape: string;
      tiny: string;
    };
    alt: string;
  }

export interface PaginationState {
  currentPage: number;
  totalPages: number;
}

export type Status = 'loading' | 'success' | 'empty' | 'error';

export type SIZE = 'small' | 'medium' | 'large';

export type SPINNER_VARIANT = 'local' | 'global';
