import Feed from './Feed.js';
import Story from './Story.js';

const Main = () => {
  const mainContainer = document.querySelector('.main');
  const storyLayout = document.createElement('div');
  storyLayout.className = 'stroy-layout';
  const feedLayout = document.createElement('div');
  feedLayout.className = 'feedLayout-layout';

  mainContainer.appendChild(storyLayout);
  mainContainer.appendChild(feedLayout);

  Story(storyLayout);
  Feed(feedLayout);
};

export default Main;
