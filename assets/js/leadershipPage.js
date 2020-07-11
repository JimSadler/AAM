$('header.OT, header#work_0, header.services, header.contact-header,header.blog-header, header.blog_Article1, header.testimonials, header.contact-header,header.PDFAbout1').prev('.navbar.navbar-dark.navbar-fixed-top').css('background-color','black');

// breadcrumb dividers
// $breadcrumb-divider: quote("|");


$('.navbar-toggle').click(function() {
	setTimeout(function() {
	if($('.navbar-collapse.navbar-right.navbar-main-collapse.collapse').hasClass('in')) {
		$('.navbar.navbar-dark.navbar-fixed-top').not('.top-nav-collapse').css('background-color','black');
	} else {
		$('.navbar.navbar-dark.navbar-fixed-top').not('.top-nav-collapse').css('background-color','transparent');
	}
    },400);
});
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:20,
		nav:true,
		dots: false,
		touchDrag: true,
		singleItem: true,
		autoPlay: 5000,
		// autoplayTimeout:5000,
		// autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            600:{
                items:3
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
        margin:20,
		nav:true,
        singleItem: true,
        touchDrag: true,
		autoPlay: 5000,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            },
            1800:{
                items:3
            }
        }
    });

    $('.team_carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        singleItem: true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

// Adding CMS Ids and Classes to pages

    // homepage
$(document).ready(function() {
    var indxID = 0;
    $('header#index_0').closest('body').find('.home.portfolio-2, #features, .home.craft, .clients, #home_slider').find('p,:header,a').not('[id]').each(function() {
        $(this).attr('id','indx_' + indxID);
        $(this).addClass('cms-editable');
        indxID++;
    });
});

    // About page
$(document).ready(function() {
    var abouID = 0;
    $('header#about_0').closest('body').find('.intro-body, #about, #coreValues').find(':header, img , p, a').not('[id]').each(function() {
        $(this).attr('id','abou_' + abouID);
        $(this).addClass('cms-editable');
        abouID++;
    });
});

    // contact page
$(document).ready(function() {
    var contactID = 0;
    $('header#contact_0').closest('body').find('.contact_addressInfo, .contact-list, #coreValues, #contact').find(':header, img , p, a, button').not('[id]').each(function() {
        $(this).attr('id','cont_' + contactID);
        $(this).addClass('cms-editable');
        contactID++;
    });
});

    // services page
$(document).ready(function() {
    var servID = 0;
    $('header#services_0').closest('body').find('.intro-body, #services, .serv-list').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','serv_' + servID);
        $(this).addClass('cms-editable');
        servID++;
    });
});
    // Leadership page
$(document).ready(function() {
    var leaderID = 0;
    $('header#lead_0').closest('body').find('.intro-body, #portfolio, #team_carousel, div[id^="portfolio-modal-1_"]').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','lead_' + leaderID);
        $(this).addClass('cms-editable');
        leaderID++;
    });
});
    //  work pages
$(document).ready(function() {
    var workID = 0;
    $('header#work_0').closest('body').find('#portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk_' + workID);
        $(this).addClass('cms-editable');
        workID++;
    });

    var work1ID = 0;
    $('header#work_1').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk1_' + work1ID);
        $(this).addClass('cms-editable');
        work1ID++;
    });

    var work2ID = 0;
    $('header#work_2').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk2_' + work2ID);
        $(this).addClass('cms-editable');
        work2ID++;
    });

    var work3ID = 0;
    $('header#work_3').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk3_' + work3ID);
        $(this).addClass('cms-editable');
        work3ID++;
    });

    var work4ID = 0;
    $('header#work_4').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk4_' + work4ID);
        $(this).addClass('cms-editable');
        work4ID++;
    });

    var work5ID = 0;
    $('header#work_5').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk5_' + work5ID);
        $(this).addClass('cms-editable');
        work5ID++;
    });

    var work6ID = 0;
    $('header#work_6').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk6_' + work6ID);
        $(this).addClass('cms-editable');
        work6ID++;
    });
    var work7ID = 0;
    $('header#work_7').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk7_' + work7ID);
        $(this).addClass('cms-editable');
        work7ID++;
    });
    var work8ID = 0;
    $('header#work_8').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk8_' + work8ID);
        $(this).addClass('cms-editable');
        work8ID++;
    });
    var work9ID = 0;
    $('header#work_9').closest('body').find('.intro-body, .work_sample, #work_sample_results, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','wrk9_' + work9ID);
        $(this).addClass('cms-editable');
        work9ID++;
    });
});

//  blog pages
$(document).ready(function() {
    var blogID = 0;
    $('header#blog_0').closest('body').find('#portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg__' + blogID);
        $(this).addClass('cms-editable');
        blogID++;
    });

    var blog1ID = 0;
    $('header#blog_1').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg1_' + blog1ID);
        $(this).addClass('cms-editable');
        blog1ID++;
    });

    var blog2ID = 0;
    $('header#blog_2').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg2_' + blog2ID);
        $(this).addClass('cms-editable');
        blog2ID++;
    });

    var blog3ID = 0;
    $('header#blog_3').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg3_' + blog3ID);
        $(this).addClass('cms-editable');
        blog3ID++;
    });

    var blog4ID = 0;
    $('header#blog_4').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg4_' + blog4ID);
        $(this).addClass('cms-editable');
        blog4ID++;
    });

    var blog5ID = 0;
    $('header#blog_5').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg5_' + blog5ID);
        $(this).addClass('cms-editable');
        blog5ID++;
    });

    var blog6ID = 0;
    $('header#blog_6').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg6_' + blog6ID);
        $(this).addClass('cms-editable');
        blog6ID++;
    });

    var blog7ID = 0;
    $('header#blog_7').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg7_' + blog7ID);
        $(this).addClass('cms-editable');
        blog7ID++;
    });

    var blog8ID = 0;
    $('header#blog_8').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg8_' + blog8ID);
        $(this).addClass('cms-editable');
        blog8ID++;
    });

    var blog9ID = 0;
    $('header#blog_9').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg9_' + blog9ID);
        $(this).addClass('cms-editable');
        blog9ID++;
    });

    var blog10ID = 0;
    $('header#blog_2').closest('body').find('.intro-body, .breadcrumb, #blog_article, #blog_article+, #blog_article++, #portfolio').find(':header, img , p, a, li').not('[id]').each(function() {
        $(this).attr('id','blg10_' + blog10ID);
        $(this).addClass('cms-editable');
        blog10ID++;
    });
});

// testimonial page
$(document).ready(function() {
    var TestID = 0;
    $('header#test_0').closest('body').find('#testimonials').find('blockquote, img, p, :header').not('[id]').each(function() {
        $(this).attr('id','test_' + TestID);
        $(this).addClass('cms-editable');
        TestID++;
    });
});

// read more links
$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
        $(this).closest('.box-part').css({'height':'470px','transition':'.5s','transition-duration':'1s'});
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
        $(this).closest('.box-part').css({'height':'320px','transition':'.3s','transition-duration':'.7s'});
      }
    });
  });


