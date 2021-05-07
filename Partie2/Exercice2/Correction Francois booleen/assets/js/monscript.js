let img = document.getElementById('photo');
var way = 'true'

//    img.addEventListener('mouseover', function() {
//    this.src = 'assets/img/sacs.jpg';
//    });
//    img.addEventListener('mouseout', function() {
//    this.src = 'assets/img/paniers.jpg';
//    });

img.style.width = '300px'


img.addEventListener('click', function() {
  let imgSize = document.getElementById('photo').clientWidth;
  console.log(imgSize)
  if (imgSize >= 250 && imgSize <= 500 && way == 'true') {
    if (imgSize >=500) {
      way = 'false'
    }
    img.style.width = (imgSize + 50) + 'px';
  } 
  if (imgSize <= 500 && way == 'false') {
    if (imgSize <= 300) {
      way='true'
    }
    img.style.width = (imgSize - 50) + 'px';
  } else if (imgSize >= 500) {
    way = 'false'
  }
});