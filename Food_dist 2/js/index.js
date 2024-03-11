const tab_btns = document.querySelectorAll('.tabheader_item') 
const tabcontent = document.querySelectorAll('.tabcontent')

function showTabs (idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade')) 
    tabcontent[idx].classList.remove('hide')
}
showTabs (0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active') 
        showTabs(idx)
    }
})

 

/* 

const slides = document.querySelectorAll('.tabcontainer')
const prev_next_bts =document.querySelectorAll('[data-inx]')
let slidesindex = 0


slides.forEach(slides => slides.classList.add('hide'))
slides[0].classList.remove('hede')

prev_next_bts.forEach(btn)
 */
/* 
const slides = document.querySelectorAll('.slide')
const prev_next_btns = document.querySelectorAll(' [data-group]')
const pagination_btns = document.querySelectorAll(' [data-idx]')
let slideIndex = 0
showSlides (slideIndex)
function showSlides (n) {
if(n >= slides.length) {
slideIndex = 0
}
if(n < 0) {
slideIndex = slides.length - 1
}
slides.forEach(slide => slide.classList.add ('hide'))
slides [slideIndex].classList.remove('hide')
I
}

prev_next_btns.forEach(btn => {
btn.onclick = () => {




    pagination_btns.forEach(btn => {
    btn.onclick = () => {
    const idx = btn.getAttribute('data-idx')
    slides.forEach(slide => slide.classList.add
    ('hide'))
    slides [idx - 1].classList.remove('hide')
    slideIndex = idx - 1
    }
})}
})


 */

// let first_btn = document.querySelector('.header__right-block button')
// let close_modal = document.querySelector('.modal__close')
// let first_modal = document.querySelector('.modal')




// first_btn.onclick = () => {
//     first_modal.style.display = 'flex'
// }

// close_modal.onclick = () => {

//     first_modal.style.display = 'none'
// }
/* 

let open_buttons = document.querySelectorAll([data-modal])
let close_buttons = document.querySelectorAll([data-close])
let modal = document.querySelector(modal)

function open_close_modal(arr, open ) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"](show, fade)
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

let btns = document.querySelectorAll('#btns')
let first_modal = document.querySelector('.modal')
let close_modal = document.querySelector('.modal__close')
let body = document.querySelector("body")
btns.forEach(btn => {
    btn.onclick = () => {
        first_modal.style.display = 'flex'
        body.style.overflow = "hidden"
    }
})
    1``
close_modal.onclick = () => {

    first_modal.style.display = 'none'
    body.style.overflow = "scroll"

}
const slides = document.querySelectorAll('.offer__slide');
let slidesindex = 0;
let numcurr = document.querySelector('#current')

let totalnum = document.querySelector('#total')

slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');


 */















