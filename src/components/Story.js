import { storyMockData } from '../data/storyMockData.js';
import { paging } from '../util/paging.js';

const Story = (storyLayout) => {
  const stories = document.createElement('ul');
  stories.className = 'stories';

  storyLayout.appendChild(stories);
  const storiesData = paging({ arr: storyMockData, size: 8, page: 1 });

  storiesData.forEach((item) => {
    const story = document.createElement('li');
    story.className = `story-wrapper`;

    const profile = document.createElement('div');
    profile.className = 'profile-wrapper';

    const username = document.createElement('div');
    username.className = 'username';

    story.appendChild(profile);
    story.appendChild(username);
    stories.appendChild(story);

    const storyRing = document.createElement('div');
    storyRing.className = 'story-ring';
    profile.appendChild(storyRing);

    const img = document.createElement('img');
    img.src = item.profileImage;
    img.className = 'story-profile';
    storyRing.appendChild(img);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = item.username;
    username.appendChild(name);
  });
};

export default Story;
