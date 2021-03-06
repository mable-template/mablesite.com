// For detecting scroll positions
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });

  } 
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), {passive: true});

storeScroll();

var height = document.getElementById("header").offsetHeight;
document.getElementById("body").style.marginTop = height + 'px';
