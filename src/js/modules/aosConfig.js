import AOS from '../libs/aos';

const aosConfig = {
  delay: 0,
  offset: 0,
  once: true,
  duration: 2500,
  easing: 'show-easing',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate'
};

addEventListener('load', async () => {
  AOS.init(aosConfig);

  const sticker = document.querySelector('[data-sticker]');
  if (window.innerWidth < 1200) {
    sticker.classList.add("mobileAnim");
  } else {
    sticker.classList.add("desktopAnim");
  }

});
