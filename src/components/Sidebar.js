const Sidebar = () => {
  const container = document.querySelector('.sidebar');

  const logoLayout = document.createElement('div');
  logoLayout.className = 'logo-layout';
  const menuLayout = document.createElement('div');
  menuLayout.className = 'menu-layout';
  const setupLayout = document.createElement('div');
  setupLayout.className = 'setup-layout';
  const logo = document.createElement('div');
  logo.className = 'logo';

  logoLayout.appendChild(logo);
  container.appendChild(logoLayout);
  container.appendChild(menuLayout);
  container.appendChild(setupLayout);

  const menuItems = [
    {
      name: 'home',
      label: '홈',
      iconPath: './src/assets/icon/home.svg',
      activeIconPath: './src/assets/icon/home_filled.svg',
      selected: true
    },
    {
      name: 'search',
      label: '검색',
      iconPath: './src/assets/icon/search.svg',
      activeIconPath: './src/assets/icon/search_bold.svg',
      selected: false
    },
    {
      name: 'explore',
      label: '탐색 탭',
      iconPath: './src/assets/icon/compass.svg',
      activeIconPath: './src/assets/icon/compass_filled.svg',
      selected: false
    },
    {
      name: 'reels',
      label: '릴스',
      iconPath: './src/assets/icon/reels.svg',
      activeIconPath: './src/assets/icon/reels_filled.svg',
      selected: false
    },
    {
      name: 'messages',
      label: '메시지',
      iconPath: './src/assets/icon/airplane.svg',
      activeIconPath: './src/assets/icon/airplane_filled.svg',
      selected: false
    },
    {
      name: 'notifications',
      label: '알림',
      iconPath: './src/assets/icon/heart.svg',
      activeIconPath: './src/assets/icon/heart_filled.svg',
      selected: false
    },
    {
      name: 'create',
      label: '만들기',
      iconPath: './src/assets/icon/new_post.svg',
      selected: false
    },
    {
      name: 'profile',
      label: '프로필',
      iconPath: './src/assets/image/profile.png',
      selected: false
    }
  ];

  menuItems.forEach((item) => {
    const div = document.createElement('div');
    div.className = `menu-item menu-${item.name}`;

    const icon = document.createElement('img');
    icon.src = item.selected && !!item.activeIconPath ? item.activeIconPath : item.iconPath;
    icon.alt = item.label;
    icon.className = 'menu-icon';
    icon.classList[item.name === 'profile' ? 'add' : 'remove']('profile');
    icon.classList[item.selected ? 'add' : 'remove']('selected');

    const text = document.createElement('span');
    text.className = 'menu-label';
    text.textContent = item.label;
    text.classList[item.selected ? 'add' : 'remove']('selected');

    div.appendChild(icon);
    div.appendChild(text);
    menuLayout.appendChild(div);
  });

  const setupMenuItems = [
    {
      name: 'threads',
      label: 'Threads',
      iconPath: './src/assets/icon/threads.svg',
      selected: false
    },
    {
      name: 'setup',
      label: '설정',
      iconPath: './src/assets/icon/hamburger.svg',
      activeIconPath: './src/assets/icon/hamburger_bold.svg',
      selected: false
    }
  ];

  setupMenuItems.forEach((item) => {
    const div = document.createElement('div');
    div.className = `menu-item menu-${item.name}`;

    const icon = document.createElement('img');
    icon.src = item.selected && !!item.activeIconPath ? item.activeIconPath : item.iconPath;
    icon.alt = item.label;
    icon.className = 'menu-icon';
    icon.classList[item.selected ? 'add' : 'remove']('selected');

    const text = document.createElement('span');
    text.className = 'menu-label';
    text.textContent = item.label;
    text.classList[item.selected ? 'add' : 'remove']('selected');

    div.appendChild(icon);
    div.appendChild(text);
    setupLayout.appendChild(div);
  });
};

export default Sidebar();
