import { storyMockData } from '../data/storyMockData.js';

const Story = (storyLayout) => {
  const stories = document.createElement('ul');
  stories.className = 'stories';

  storyLayout.appendChild(stories);

  storyMockData.forEach((item) => {
    const story = document.createElement('li');
    story.className = `story-layout`;

    const profile = document.createElement('div');
    profile.className = 'profile';

    const username = document.createElement('div');
    username.className = 'username';

    story.appendChild(profile);
    story.appendChild(username);
    stories.appendChild(story);

    const name = document.createElement('span');
    name.textContent = item.username;
    username.appendChild(name);
  });
};

export default Story;
