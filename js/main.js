$(window).on('load',function()
{
    $('.preloader').fadeOut('slow');
})

$(document).ready(function()
{
    $(window).on('scroll',function()
    {
        if($(this).scrollTop() > 90)
        {
            $(".navbar").addClass('navbar-shrink');
        }
        else{
            $(".navbar").removeClass('navbar-shrink');
        }
    });
    $('.features-box').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
    
                items:3,
            }
        }
    });
    // clients------------------------
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })
    // -----------------team-----------------
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })
    // ---------------------page scrolling------------------------------
    $.scrollIt(
        {
            topOffset:-50
        }
    );
    // --------------dark/light toggle------------------
    
    
    // -------------------------navbar-close------------------------
    
});
function toggleTheme()
{
    if(localStorage.getItem('happy')!==null)
    {
        if(localStorage.getItem('happy')==='dark')
        {
            $('body').addClass('dark');
        }
        else{
            $('body').removeClass('dark');
        }
    }
    updateIcon();
}
toggleTheme();
$('.toggle-theme').on('click',function()
{
    $('body').toggleClass('dark');
    if($('body').hasClass('dark'))
    {
        localStorage.setItem('happy','dark');
    }
    else{
        localStorage.setItem('happy','light');
    }
})
function updateIcon()
{
    if($('body').hasClass('dark'))
    {
        $('.toggle-theme i').removeClass('fa-moon');
        $('.toggle-theme i').addClass('fa-sun');

    }
    else{
        $('.toggle-theme i').removeClass('fa-sun');
        $('.toggle-theme i').addClass('fa-moon');
    }
}

$('.nav-link').on('click',function()
{
    $('.navbar-collapse').collapse('hide');
})
// slider---------------------------
