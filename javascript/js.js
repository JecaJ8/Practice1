const section1=document.querySelector('.section1');

window.onscroll=function() {
    var top=window.scrollY;
    this.console.log(top);
    if (top>=150) {
        section1.classList.add('active')
    }
    else {
        section1.classList.remove('active');
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }