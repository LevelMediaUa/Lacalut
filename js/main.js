(() => {
    const refs = {
      openBtn: document.querySelector('[menu-button-open]'),
      closeBtn: document.querySelector('[menu-button-close]'),
      menu: document.querySelector('[data-menu]'),
      navLinks: document.getElementsByClassName('menu-item__link'),
    };
  
    refs.openBtn.addEventListener('click', toggleModal);
    refs.closeBtn.addEventListener('click', toggleModal);
    [...refs.navLinks].forEach(elem =>
      elem.addEventListener('click', toggleModal),
    );
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();


  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Продукти"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Продукти"; 
      moreText.style.display = "inline";
    }
  }


  function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Кровоточивість ясен"; 
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Кровоточивість ясен"; 
      moreText1.style.display = "inline";
    }
  }

  $(document).ready(function () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });

  const mask = document.querySelector('.mask');
  window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => { 
        mask.remove();
    }, 600);
});


function myFunction7() {
  var dots7 = document.getElementById("dots7");
  var moreText7 = document.getElementById("more7");
  var btnText7 = document.getElementById("myBtn7");

  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "Категорія товарів"; 
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "Категорія товарів"; 
    moreText7.style.display = "inline";
  }
}


const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("valid");
    });
    e.target.classList.add("valid");

    contents.forEach(content => {
      content.classList.remove("valid");
    });
    const element = document.getElementById(id);
    element.classList.add("valid");
  }
}