function myFunction() {
    document.getElementById("demo").innerHTML="The departed is the second best movie; fun fact Leonardo Dicaprio starred in both movies.";
}
function changeImage() {
  var image = document.getElementById('myImage');

    image.src = 'https://prodimage.images-bn.com/pimages/0085391117292_p0_v2_s1200x630.jpg'; // Change to the new image path

}
function changeColor() {
  var container = document.getElementById('colorBox');
  var colors = ['#FF6347', '#6A5ACD', '#20B2AA', '#FFD700', '#FFA500'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = randomColor;
}
