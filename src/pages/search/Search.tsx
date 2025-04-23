import '@/pages/search/SearchPage.css';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from '@/api/axios';
import { useDebounce } from '@/hooks/useDebounce';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchSearchMovie = async (searchTerm: string) => {
        try {
          const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
          setSearchResults(request.data.results);
        } catch (error) {
          console.error('error', error);
        }
      };

      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return searchResults.length > 0 ? (
    <section className="search-container">
      {searchResults.map(movie => {
        if (movie.backdrop_path !== null && movie.media_type !== 'person') {
          const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;

          return (
            <div className="movie" key={movie.id}>
              <div onClick={() => navigate(`/${movie.id}`)} className="movie__column-poster">
                <img src={movieImageUrl} alt="movie" className="movie__poster" />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </section>
  ) : (
    <section className="no-results">
      <div className="no-results__text">
        <p>찾고자하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
      </div>
    </section>
  );
};

export default SearchPage;
