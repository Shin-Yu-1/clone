import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaItem } from '@/types/api';

import axios from '@/api/axios';
import MovieModal from '@/components/modal/MovieModal';

import '@/components/Row.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface RowProps {
  isLargeRow?: boolean;
  title: string;
  id: string;
  fetchUrl: string;
  showToast: (message: string, type?: 'info' | 'success' | 'error' | 'warning') => void;
}

const Row = ({ isLargeRow, title, id, fetchUrl, showToast }: RowProps) => {
  const [movies, setMovies] = useState<MediaItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState<MediaItem>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        if (typeof showToast === 'function') {
          showToast('정보를 가져오지 못했습니다.', 'error');
        }
      }
    };

    fetchData();
  }, [fetchUrl, showToast]);

  const handleClick = (movie: MediaItem) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <img
                style={{ padding: '25px 0' }}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.media_type === 'movie' ? movie.title : movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && movieSelected && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}
    </section>
  );
};

export default Row;
