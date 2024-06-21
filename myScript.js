function myFunction() {
    document.getElementById("demo").innerHTML="The departed is the second best movie; fun fact Leonardo Dicaprio starred in both movies.";
}
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match('original.jpg')) {
    image.src = 'new.jpg'; // Change to the new image path
  } else {
    image.src = 'original.jpg'; // Change back to the original image path
  }
}

