import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MediaItem } from '@/types/api';

import axios from '@/api/axios';

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MediaItem>({
    id: 0,
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    original_language: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    vote_average: 0,
    vote_count: 0,
    media_type: 'movie',
    title: '',
    original_title: '',
    release_date: '',
    video: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    };

    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
};

export default DetailPage;
