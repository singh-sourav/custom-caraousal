// function accepts the arrayOfImages and builds a caraousal
function renderCarousal(container, arrayOfImages) {
  container.style.width = `${arrayOfImages.length * 100}%`;
  arrayOfImages.forEach(element => {
    const imageContainer = document.createElement("div");
    imageContainer.id = "imageBox";
    imageContainer.style.width = "100%";
    let image = document.createElement("img");
    image.src = element;
    image.style.width = "100%";
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
  });
  offset = 0;
  //start the slideshow
  setInterval(() => slideImage(arrayOfImages.length), 3000);

  function slideImage(noOfImages) {
    rate = 100 / noOfImages;
    offset = (offset + rate) % 100;
    document.getElementById(
      "app"
    ).style.transform = `translate3d(-${offset}%,0,0)`;
  }
}

//call renderCaraousal() with container and arrayOfImages

renderCarousal(document.getElementById("app"), [
  "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2018/01/social-media-examiner-facebook-cover.png",
  "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2018/01/snappa-facebook-cover.png",
  "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2018/01/tamara-knight-photography-facebook-cover.png"
]);

function renderControls() {}
