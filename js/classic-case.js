$(document).ready(function () {
    /*成功案例选中效果*/
    $('.classic-case-nav .btn').on('click',function () {
        $('.classic-case-nav .btn').removeClass('active');
        $(this).addClass('active');
        var $type = $(this).attr('data-type');
        if($type==='all'){
            $('.classic-case-list').show();
        }else {
            $('.classic-case-list').each(function () {
                if($(this).attr('data-type')===$type){
                    $(this).show();
                }else{
                    $(this).hide();
                }
            })
        }
    })
})