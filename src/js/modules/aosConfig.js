import AOS from '../libs/aos';

const aosConfig = {
  delay: 0,
  offset: 0,
  once: true,
  duration: 1000,
  easing: 'show-easing',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate'
};

addEventListener('load', async () => {
  AOS.init(aosConfig);
});
