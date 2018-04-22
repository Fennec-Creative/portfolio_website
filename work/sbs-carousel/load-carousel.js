// Owl -- WF
jQuery(document).ready(function($){
	var $window = $(window);
    var elements = $(".sbs .owl-carousel");
    var options = {
    autoplay: false,
    autoplayTimeout: 10000,
    callbacks: true,
    loop: true,
    items: 1,
    lazyLoad: false,
    center: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true
        },
        768: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 14000,
            dots: false
        }
    }
  };
	
  elements.each(function() {
    $(this).on("initialized.owl.carousel", function(event) {
      var matched = $(".sbs .owl-carousel .active div").attr("class").match(/\d+$/)
        , currentInit = null == matched || matched.length < 1 ? null : matched[0];
      if (currentInit && $(".tab-" + currentInit).addClass("current"),
      $window.width() < 768) {
          var image = $(this).find("img").first()
            , navPrev = $(this).find(".owl-prev")
            , navNext = $(this).find(".owl-next");
          image && $(image).on("load", function() {
              var height = $(this).height();
              navPrev && $(navPrev).css({
                  top: height / 2 - 15 + "px"
              }),
              navNext && $(navNext).css({
                  top: height / 2 - 15 + "px"
              })
          })
      }
    });

    $(this).owlCarousel(options);

    $(this).on("changed.owl.carousel", function(event) {
      var currentIndex = event.item.index
        , image = $(event.target).find(".owl-item").eq(currentIndex).find("img").get(0) || !1
        , video = $(event.target).find(".owl-item").eq(currentIndex).find("video").get(0) || !1
        , inactiveVideos = $(event.target).find(".owl-item video").not("active") || !1;
      if ($(inactiveVideos).each(function() {
          var inactiveVideo = $(this).get(0) || !1;
          inactiveVideo && (inactiveVideo.currentTime = 0,
          inactiveVideo.pause())
      }),
      video && _html5ComponentUtils2["default"].attemptVideoPlayBack(video),
      image) {
          var src = $(image).attr("src");
          $(image).attr("src", src)
      }
    });

    $(this).on("translated.owl.carousel", function(event) {
      $(".current").removeClass("current");
      var matched = $(".sbs .owl-carousel .active div").attr("class").match(/\d+$/)
        , currentItem = null == matched || matched.length < 1 ? null : matched[0]
        , currentSlideUrl = $(".sbs .owl-carousel .active div a").attr("href");
      currentItem && $(".tab-" + currentItem).addClass("current")
    });
  });

  $(".pagination").click(function() {
    var tabCount = $(this).attr("class").split(" ")[0].match(/\d+$/)[0];
    elements.trigger("to.owl.carousel", [tabCount, 200])
  });
  
});