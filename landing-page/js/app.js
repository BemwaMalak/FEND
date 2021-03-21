
//function for creating navbar items
function makeUL() {
    // Get the list element
    const list = document.getElementById('navbar__list');

    for (var i = 1; i < 5; i++) {
        // Create the list item:
        let itemholder = document.createElement('li');

        // Set its contents:
        let item = itemholder.appendChild(document.createElement('a'));
        item.appendChild(document.createTextNode('Section '+ i));
        item.classList.add('menu__link');
    //checks every section to add id and href depending on section number    
    switch (i) {
        case 1:
        item.id = 'Nsection1';
        item.href = '#section1';
        break;

        case 2:
        item.id = 'Nsection2';
        item.href = '#section2';
        break;

        case 3:
        item.id = 'Nsection3';
        item.href = '#section3';
        break;

        case 4:
        item.id = 'Nsection4';
        item.href = '#section4';
        break;
    }

        // Add it to the list:
        list.appendChild(itemholder);
    }
}

makeUL();

//if user is scrolling the navbar is showing
$(window).scroll(function()
{ 
    document.getElementById("navbar").style.top = "0";
});
//Get the header
const header = document.querySelector('.page__header') && document.querySelector('.main__hero');

//check if the time since last scroll is more than 500ms
$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        //if the header in the viewport show navbar
       if (isInViewport(header)) {
        document.getElementById("navbar").style.top = "0";
       }
       //else dont show navbar
       else {
        document.getElementById("navbar").style.top = "-100px";
       }
    }, 2000));
});

//Get the button:
topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//check if an element in the viewport or not
const isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//Get sections
const section = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

//Get navbar items
const Nsection1 = document.querySelector('#Nsection1');
const Nsection2 = document.querySelector('#Nsection2');
const Nsection3 = document.querySelector('#Nsection3');
const Nsection4 = document.querySelector('#Nsection4');

//add an scrolling event listener
window.addEventListener('scroll', function (event) {
	if (isInViewport(section1)) {
        section1.classList.add('active-class');
        Nsection1.classList.add('current');
        
    }
    else {
        section1.classList.remove('active-class');
        Nsection1.classList.remove('current');
    } 
    if (isInViewport(section2)) {
        section2.classList.add('active-class');
        Nsection2.classList.add('current');
 
    } 
    else {
        section2.classList.remove('active-class');
        Nsection2.classList.remove('current');
    }
    if (isInViewport(section3)) {
        section3.classList.add('active-class');
        Nsection3.classList.add('current');

    }
    else {
        section3.classList.remove('active-class');
        Nsection3.classList.remove('current');
    }
    if (isInViewport(section4)) {
        section4.classList.add('active-class');
        Nsection4.classList.add('current');
 
    }
    else {
        section4.classList.remove('active-class');
        Nsection4.classList.remove('current');
    }
}, false);

