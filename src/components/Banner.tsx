import { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from '@/api/axios';
import { requests } from '@/api/requests.js';
import { ShowToast } from '@/types/toast';
import { MediaItem } from '@/types/api';

import '@/components/Banner.css';

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface BannerProps {
  showToast: ShowToast;
}

const Banner = ({ showToast }: BannerProps) => {
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
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNowPlaying);

        const movieId =
          request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

        const { data: movieDetail } = await axios.get<MediaItem>(`movie/${movieId}`, {
          params: { append_to_response: 'videos' },
        });

        setMovie(movieDetail);
      } catch (error) {
        showToast('정보를 가져오지 못했습니다.', 'error');
      }
    };

    fetchData();
  }, []);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <>
      {isClicked ? (
        <Container>
          <HomeContainer>
            <Iframe
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></Iframe>
          </HomeContainer>
        </Container>
      ) : (
        <header
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie.media_type === 'movie' ? movie.title : (movie.name ?? movie.original_name)}
            </h1>

            <div className="banner__buttons">
              <button className="banner__button play" onClick={() => setIsClicked(true)}>
                Play
              </button>
              <button className="banner__button info">More Information</button>
            </div>

            <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      )}
    </>
  );
};

export default Banner;
