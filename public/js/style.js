/*!
 * Based on Grayscale Bootstrap Theme (http://startbootstrap.com)
 * 2015-16 Kajetan Krykwiński
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



$(window).scroll(function()
{
  if ($("#con-head").offset().top > 50)
  {
    $("#con-head").addClass("head-solid")
  }
  else
  {
    $("#con-head").removeClass("head-solid")
  }
});

//płynne przewijanie linków do czesci strony
$(function()
{
  $("#con-head a, .smooth-scroll").click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    $('#menu-container').addClass("mobile-hidden");
    return false;
  });
});

$(function()
{
  $("#menu-button").click(function()
  {
    $('#menu-container').toggleClass("mobile-hidden");
    return false;
  });
});

function switcher() {
	var delay = 0;
	var total = jQuery(".main-bg-container").length;
	jQuery(".main-bg-container").each(function(i){
		delay = delay + 7000;
		jQuery(this).css( "zIndex", 20 - i )
		if(i === total -1)
			{
			jQuery(this)
				.delay(delay)
				.queue(function(){
					jQuery(this).css( "zIndex", 20  );
					jQuery(".main-bg-container").each(function(){
						jQuery(this).show();
						});
					jQuery(this).dequeue();
					})
				.fadeOut("slow")
				.queue(function(){
					jQuery(this).css( "zIndex", 20 - total ).show();
					switcher();
					jQuery(this).dequeue();
					});

			}
		else
			{
			jQuery(this).delay(delay).fadeOut("slow");
			}

		});
	}


function insertbgs() {
	if(!mobileAndTabletcheck())
	{
		var lastNode = null;
		for(i = 2; i <= 9; i++)
		{
			lastNode = document.querySelectorAll(".main-bg-container");
			lastNode = lastNode[lastNode.length -1];
			var div = document.createElement("div");
			div.className = "main-bg-container";
			div.style.backgroundImage = "url('/img/tla/" + i + ".jpg')";
			lastNode.parentNode.insertBefore(div, lastNode.nextSibling);
		}
		switcher();
	}
}

jQuery(document).ready(function($){
		insertbgs();
	});

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-73387544-1', 'auto');
ga('send', 'pageview');

mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


/*
function replaceForm(form_text, form_id="#form_rejestracja")
{
  $( form_id ).replaceWith( '<p style="text-align: center; font-weight: bold; color: #F00">' + form_text + '</p>' );
}

$(document).ready(function() {
  var frm = $('#form_rejestracja');
  frm.submit(function (ev)
  {
    $.ajax(
    {
      type: frm.attr('method'),
      url: frm.attr('action'),
      data: frm.serialize(),
      error: function(request, textStatus, errorThrown)
      {
        var err_registered = "Ten adres został juz zarejestrowany";
        var err_unknown = "Wystąpił błąd. Prosimy spróbować ponownie, a jeśli się powtórzy - skontaktować się z nami.";

        if(window.location.href.indexOf("en") > -1) //wersja ang strony
        {
          err_registered = "This adress has been submitted already!";
          err_unknown = "An error occured! Please try again, and if the issue still persists - contact us.";
        }

        if(request.status == 400)
        {
          replaceForm(err_registered);
        }
        else
        {
          replaceForm(err_unknown);
        }
      },
      success: function (data)
      {
        var err_success = "Dziękujemy za rejestrację!";
        if(window.location.href.indexOf("en") > -1) //wersja ang strony
        {
          err_success = "Thank you for signing up!";
        }
          replaceForm(err_success);
      }
    });
    ev.preventDefault();
  });
});
*/
//mapy googla
google.maps.event.addDomListener(window, "load", init);
function init()
{
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(51.108828, 17.056726),
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  };
  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = "/img/map-marker.png";
  var myLatLng = new google.maps.LatLng(51.108828, 17.056726);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  })
};
