export interface MediaItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: string;
  video?: boolean;
  media_type?: 'movie' | 'tv' | 'person';
}
