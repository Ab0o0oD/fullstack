$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


// activate the buttons "play" "pause" 

  $(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
      }
    });

    //reservtablemodal toggled when the Reserve Table button is clicked:
    $("#btnreserve").click(function () {
      $("#ReserveTable").modal("toggle");
    });

    //LogginnModal toggled when the logg inn Table button is clicked:
    $("#btn-logginn").click(function () {
      $("#loginModal").modal("toggle");
    });
  });