import { requests } from '@/api/requests.js';
import Banner from '@/components/Banner.jsx';
import Row from '@/components/Row.jsx';

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="Cm" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}
