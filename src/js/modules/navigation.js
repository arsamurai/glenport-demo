addEventListener('load', async () => {
  const logoBtn = document.querySelector('[data-logo-btn]');
  const burger = document.querySelector('[data-burger-btn]');
  const menu = document.querySelector('[data-menu]');
  const scrollLinks = document.querySelectorAll('[data-scroll-to]');
  const body = document.body;

  const goTo = (sectionId) => {
    const top = document.getElementById(sectionId)?.offsetTop - 88;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };

  const setMenuState = (activate) => {
    if (window.clientWidth < 992) {
      if (activate) {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
      } else {
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    const action = activate ? 'add' : 'remove';

    burger?.classList[action]('active');
    menu?.classList[action]('active');
  };

  logoBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  burger.addEventListener('click', ({ currentTarget }) => {
    const isActiveMenu = currentTarget.classList.contains('active');

    if (isActiveMenu) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  });

  scrollLinks.forEach((link) => {
    link.addEventListener('click', ({ currentTarget }) => {
      const sectionId = currentTarget.getAttribute('data-scroll-to').replace('#', '');
      console.log(sectionId);
      setMenuState(false);
      goTo(sectionId);
    });
  });
});

addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
