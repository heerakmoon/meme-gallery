var $gallery = document.querySelector('main');
var imageUrls = [
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://i.pinimg.com/564x/55/54/17/555417071758b5e00d3116861a147da3.jpg',
  'https://i.pinimg.com/564x/c2/2d/fc/c22dfcc248dd326483b009bd777d5acf.jpg',
  'https://i.pinimg.com/564x/e1/e6/0d/e1e60de4f01a2cfe5050446fc8cd13ed.jpg',
  'https://media3.giphy.com/media/TqVSiJmwniMly5V9Qu/giphy.gif?cid=ecf05e47os6bdartckwfwlomlqh2g62tsiu62t3bsmu6v69m&rid=giphy.gif&ct=g'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput !== '');
  imageUrls.push($imageUrlInput.value);
  $imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.classList.add('gallery-image');
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
