/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Modified by Association of Computing Machinery, University of Minnesota,
 * Twin Cities.
 */

// Enable tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("a.page-scroll").bind('click', function(event) {
        // .page-scroll must be used with anchor links.
        // The link's href should contain both the anchor tag
        // and _the page the anchor tag is on_.
        var href = $(this).attr("href");
        var anchor = href.substring(href.lastIndexOf('#'));
        var query = $(anchor);

        if(query.length > 0) {
            // Target is on this page, take over the event and
            // scroll smoothly to the target.
            event.preventDefault();
            $("html, body").stop().animate(
                {
                    scrollTop: query.offset().top,
                },
                1250,
                'easeOutQuint'
            ).promise().then(function() {
                history.pushState({}, "", anchor);
            });
        } // Otherwise, let the page jump normally to the target.
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
