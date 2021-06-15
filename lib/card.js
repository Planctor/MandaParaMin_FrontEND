function card() {
  var myIndex = 0;
  var x = document.getElementsByClassName("mySlides");

  function carousel() {
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
      myIndex = 1;
    }

    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
  }

  carousel();
}

card()