
const first = document.querySelector('.first');
const second = document.querySelector('.second ');
const editButton = document.querySelector('.edit');
const saveButton = document.querySelector('.save');
const field = second.querySelectorAll('input[type="text"]');
const p = first.querySelectorAll('p');
const block_second_smaller = document.querySelector('.block_second_smaller')
const style = document.querySelector('.style')
const color_block = document.querySelector('.color_block')
const second_block = document.querySelector('.second')
const background_color_btn = document.querySelector('.color_btn')
const palet = document.querySelector('.palet')
const colors = document.querySelectorAll('.color');
const text_color = document.querySelector('.text_color');
const text_change = document.querySelector('.text_change');
const text_color_change = document.querySelectorAll('.text_color_change');
const first_block_text = document.querySelectorAll('.first_block_text')
const radio = document.querySelectorAll('input[name="text-size"]');
const font_family = document.getElementById('font_family');

editButton.addEventListener('click', () => {
    block_second_smaller.style.display = 'flex'
    color_block.style.display = 'none'
});

saveButton.addEventListener('click', () => {
    for (let i = 0; i < field.length; i++) {
        const value = field[i].value;
        p[i].textContent = value;
    }
});

style.addEventListener('click', () => {
    color_block.style.display = 'flex'
    second_block.style.display = 'block'
    block_second_smaller.style.display = 'none'
})

background_color_btn.addEventListener('click', () => {
    palet.style.display = 'flex'
    text_change.style.display = 'none';
})

colors.forEach((color) => {
    color.addEventListener('click', () => {
        first.style.backgroundColor = color.style.backgroundColor;
    });
});


text_color.addEventListener('click', () => {
    text_change.style.display = 'flex';
    palet.style.display = 'none'
});



text_color_change.forEach((color) => {
    color.addEventListener('click', () => {
        first_block_text.forEach((text) => {
            text.style.color = color.style.backgroundColor;
        });
    });

});



radio.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        const textSize = radioButton.value + 'px';
        first_block_text.forEach((text) => {
            text.style.fontSize = textSize;
        });
    });
});




font_family.addEventListener('change', () => {
    const selected_font = event.target.value;
    first_block_text.forEach((text) => {
        text.style.fontFamily = selected_font;
    });
});



const cursive = document.getElementById('cursive');
const bold = document.getElementById('bold');


cursive.addEventListener('change', () => {
  if (cursive.checked) {
    first_block_text.forEach((text) => {
      text.style.fontStyle = 'italic';
    });
  } else {
    first_block_text.forEach((text) => {
      text.style.fontStyle = 'normal';
    });
  }
});

bold.addEventListener('change', () => {
  if (bold.checked) {
    first_block_text.forEach((text) => {
      text.style.fontWeight = 'bold';
    });
  } else {
    first_block_text.forEach((text) => {
      text.style.fontWeight = 'normal';
    });
  }
});