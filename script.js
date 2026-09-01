const codePreview = document.querySelector('.project-code-preview code');
const previewButton = document.querySelector('.preview-btn');

if (codePreview && previewButton) {
  const originalCode = `<section class="playlist">
  <h2>Now Playing</h2>
  <div class="track">
    <p>Song: Bloom</p>
    <p>Artist: Anisah</p>
  </div>
  <button>Play</button>
</section>`;

  const animatedCode = `<section class="playlist">
  <h2>Now Playing</h2>
  <div class="track">
    <p>Song: Bloom</p>
    <p>Artist: Anisah</p>
    <p>Status: Playing</p>
  </div>
  <button>Pause</button>
</section>`;

  let isPlaying = false;

  previewButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    codePreview.textContent = isPlaying ? animatedCode : originalCode;
    previewButton.textContent = isPlaying ? 'Pause Preview' : 'Play Preview';
    previewButton.classList.toggle('is-playing', isPlaying);
  });
}

const carousel = document.querySelector('.carousel-container');
const slide = document.querySelector('.carousel-slide');

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ?
  carousel.scrollLeft + slideWidth :
  carousel.scrollLeft - slideWidth;
}