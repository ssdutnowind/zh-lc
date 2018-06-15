$(document).ready(function () {
    $('#ad-carousel').carousel();
    $('#menu-nav .navbar-collapse a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#feature-tab a[href=#' + tabId + ']').tab('show');
            }
        }
    });

    /* 首页经典案例选中效果*/

    $('.classic-case div').on('click',function () {
        $('.classic-case div').removeClass('active');
        $(this).addClass('active');
        var $type = $(this).attr('data-type');
        if($type==='all'){
            $('.classic-solution .col-sm-6').show();
        }else {
            $('.classic-solution .col-sm-6').each(function () {
                if($(this).attr('data-type')===$type){
                    $(this).show();
                }else{
                    $(this).hide();
                }
            })
        }
    })
});
