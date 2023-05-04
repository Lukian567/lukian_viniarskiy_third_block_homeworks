
const text = document.querySelector('.text');
const block = document.querySelector('.block');
const colors = document.querySelectorAll('.color');

const imageText = document.querySelector('.txt');
const imageblock = document.querySelector('.image-block');
const imageElements = document.querySelectorAll('.image');

text.addEventListener('click', () => {
  block.style.display = 'block';
  imageblock.style.display = 'none';
})

colors.forEach((color) => {
  color.addEventListener('click', () => {
    document.body.style.backgroundColor = color.style.backgroundColor;
    document.body.style.backgroundImage = 'none'
  });
  
});

imageText.addEventListener('click', () => {
  imageblock.style.display = 'block';
  block.style.display = 'none';
});


imageElements.forEach((image) => {
  image.addEventListener('click', () => {
    document.body.style.backgroundImage = image.style.backgroundImage;
  });
});