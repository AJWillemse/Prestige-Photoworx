window.addEventListener('load', function() {
    var image = document.getElementById('cover');
    image.style.opacity = 1;
  });




  window.addEventListener('load', function() {
    var image = document.getElementById('profile');
    image.style.opacity = 1;
  });





  function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    var isTopVisible = rect.top < windowHeight && rect.bottom >= 0;
    var isLeftVisible = rect.left < windowWidth && rect.right >= 0;
  
    return isTopVisible && isLeftVisible;
  }
  
  function handleScroll() {
    var fadeIns = document.getElementsByClassName('fade-in');
  
    for (var i = 0; i < fadeIns.length; i++) {
      var div = fadeIns[i];
  
      if (isElementPartiallyInViewport(div)) {
        div.style.opacity = '1';
      } else {
        div.style.opacity = '0';
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);





document.addEventListener("DOMContentLoaded", function () {
  
  var previewImages = document.querySelectorAll("#imageContainer img");
  var modalContainer = document.createElement("div");
  var modalContent = document.createElement("div");
  var modalImage = document.createElement("img");
  var closeButton = document.createElement("span");
  var body = document.body;
  var photo = [
      'images/image1.jpg',
      'images/image2.jpg',
      'images/image3.jpg',
      'images/image4.jpg',
      'images/image5.jpg',
      'images/image6.jpg',
      'images/image7.jpg',
      'images/image8.jpg',
      'images/image9.jpg',
      'images/image10.jpg',
      'images/image11.jpg',
      'images/image12.jpg',
      'images/image13.jpg',
      'images/image14.jpg',
      'images/image15.jpg',
      'images/image16.jpg',
      'images/image17.jpg',
      'images/image18.jpg',
      'images/image19.jpg',
      'images/image20.jpg',
      'images/image21.jpg',
      'images/image22.jpg',
      'images/image23.jpg',
      'images/image24.jpg',
      'images/image25.jpg',
      'images/image26.jpg',
      'images/image27.jpg',
      'images/image28.jpg',
      'images/image29.jpg',
      'images/image30.jpg',
      'images/image31.jpg',
      'images/image32.jpg',
      'images/image33.jpg',
      'images/image34.jpg',
      'images/image35.jpg',
      'images/image36.jpg',
      'images/image37.jpg',
      'images/image38.jpg',
      'images/image39.jpg',
      'images/image40.jpg',
      'images/image41.jpg',
      'images/image42.jpg',
      'images/image43.jpg',
      'images/image44.jpg',
      'images/image45.jpg',
      'images/image46.jpg',
      'images/image47.jpg',
      'images/image48.jpg',
    ];

  modalContainer.id = "modalContainer";
  modalContainer.classList.add("modal-container");
  modalContainer.appendChild(modalContent);

  
  modalContent.id = "modalContent";
  modalContent.classList.add("modal-content");
  modalContent.appendChild(modalImage);
  modalContent.appendChild(closeButton);


  modalImage.id = "modalImage";
  modalImage.classList.add("modal-image");
  modalImage.setAttribute("alt", "");

 
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";

  
  document.body.appendChild(modalContainer);

  
  previewImages.forEach(function (image) {
    image.addEventListener("click", function () {
      
      var source = image.getAttribute("src");
      var alt = image.getAttribute("alt");

      
      modalImage.setAttribute("src", source);
      modalImage.setAttribute("alt", alt);

     
      modalContainer.style.display = "block";

     
      body.classList.add("overflow-hidden");
    });
  });

  closeButton.addEventListener("click", function () {
   
    modalContainer.style.display = "none";

    body.classList.remove("overflow-hidden");
  });
});
  
  
  
  
  
  
