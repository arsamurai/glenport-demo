function handleScroll() {
  const listItems = document.querySelectorAll('.howWeWork__list-item');

  listItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const scrollPercentage = 1 - (itemPosition - windowHeight * .75) / itemPosition;

    if (scrollPercentage > 0 && scrollPercentage <= 1) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);

handleScroll();