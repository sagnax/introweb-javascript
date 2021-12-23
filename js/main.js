let alertText = "Bem-vindo ao meu site.";
alert(`${alertText}`);
console.log(`${alertText}`);

function enlargeImage(element) {
  let img = document.getElementById("post_thumbnail");
  img.className = "post_thumbnailLarge";
}

function reduceImage(element) {
  element.className = "post_thumbnail";
}