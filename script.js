let currentIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll('.card img')).filter(i => i.closest('.card').style.display !== 'none');
  currentIndex = images.indexOf(img);
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = category === 'all' || card.classList.contains(category) ? 'block' : 'none';
  });
}
