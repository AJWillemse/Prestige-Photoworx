$(window).on('load', function() {
  var image = $('#cover');
  image.css('opacity', 1);
});




$(window).on('load', function() {
    var image = $('#profile');
    image.css('opacity', 1);
});




$(document).ready(function() {
    $('#downArrows').css('opacity', 1);
});





  function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
  
    var isTopVisible = rect.top < windowHeight && rect.bottom >= 0;
    var isLeftVisible = rect.left < windowWidth && rect.right >= 0;
  
    return isTopVisible && isLeftVisible;
  }
  
  function handleScroll() {
    var fadeIns = $('.fade-in');
  
    fadeIns.each(function(index, element) {
      var div = $(element);
  
      if (isElementPartiallyInViewport(element)) {
        div.css('opacity', '1');
      } else {
        div.css('opacity', '0');
      }
    });
  }
  
  $(window).on('scroll', handleScroll);
  $(window).on('resize', handleScroll);





  $(document).ready(function() {
    var previewImages = $("#imageContainer img");
    var modalContainer = $("<div></div>").attr("id", "modalContainer").addClass("modal-container");
    var modalContent = $("<div></div>").attr("id", "modalContent").addClass("modal-content");
    var modalImage = $("<img>").attr("id", "modalImage").addClass("modal-image").attr("alt", "");
    var closeButton = $("<span></span>").addClass("close-button").html("&times;");
    var body = $("body");
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

      modalContainer.append(modalContent);

      modalContent.append(modalImage);
      modalContent.append(closeButton);
    
      $("body").append(modalContainer);
    
      previewImages.each(function() {
        var image = $(this);
    
        image.on("click", function() {
          var source = image.attr("src");
          var alt = image.attr("alt");
    
          modalImage.attr("src", source);
          modalImage.attr("alt", alt);
    
          modalContainer.css("display", "block");
    
          body.addClass("overflow-hidden");
        });
      });
    
      closeButton.on("click", function() {
        modalContainer.css("display", "none");
    
        body.removeClass("overflow-hidden");
      });
    });
  
  
  
  
  
  
