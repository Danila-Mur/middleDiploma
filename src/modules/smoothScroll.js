const smoothScroll = () => {
  const smoothScrollBlock = document.querySelector('.smooth-scroll'),
    benefitsBlock = document.querySelector('#benefits');

  smoothScrollBlock.style.display = 'none';
  smoothScrollBlock.style.cursor = 'pointer';

  window.addEventListener('scroll', () => {
    if (
      window.pageYOffset >=
      benefitsBlock.offsetTop -
        document.body.scrollTop -
        benefitsBlock.clientHeight
    ) {
      smoothScrollBlock.style.display = 'block';
    } else {
      smoothScrollBlock.style.display = 'none';
    }
  });

  smoothScrollBlock.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export default smoothScroll;
