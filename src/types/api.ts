export type MediaType = 'movie' | 'tv';

export interface BaseMedia {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type: MediaType;
}

export interface MovieItem extends BaseMedia {
  media_type: 'movie';
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}

export interface TvItem extends BaseMedia {
  media_type: 'tv';
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

export type MediaItem = MovieItem | TvItem;
