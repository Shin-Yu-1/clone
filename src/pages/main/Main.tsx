import { requests } from '@/api/requests.js';
import Banner from '@/components/Banner.jsx';
import Row from '@/components/Row';
import Toast from '@/components/Toast.jsx';

import useToast from '@/hooks/useToast';

const MainPage = () => {
  const { message, type, show, showToast } = useToast({ autoClose: true, duration: 3000 });

  return (
    <div>
      <Banner showToast={showToast} />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        showToast={showToast}
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} showToast={showToast} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} showToast={showToast} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
        showToast={showToast}
      />
      <Row
        title="Comedy Movies"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
        showToast={showToast}
      />

      <Toast message={message} type={type} show={show} />
    </div>
  );
};

export default MainPage;
