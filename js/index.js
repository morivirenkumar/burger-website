// scroll
window.addEventListener("scroll", function (){
    var sticky = document.querySelector("header");
    sticky.classList.toggle("sticky", window.scrollY > 0);
})

// toggle

$(document).ready(function (){
    $('.menu-toggle').on('click', function (){
        $('ul').toggleClass('show');
        $('.dnone2').toggleClass('show');

        // $('.nav ul').toggleClass('showing');
    })
})

// data-filter
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active_all')
        }
        this.classList.add('active_all');

        let dataFilter = this.getAttribute('data-filter');

        for ( let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active_all');
            }
        }
    })
}


// let popup = document.getElementById("popup")

// function openPopup(){
//     openPop.classList.add("open-popup")
// }

// function closePopup(){
//     openPop.classList.remove("open-popup")
// }