$('body template').each(function () {
    var $template = $(this);
    var id = $template.attr('id');

    $.ajax({
        type: "GET",
        url: './tpl/' + id,
        async: false,
        dataType: 'html',
        success: function (data) {
            $template.replaceWith(data);
        }
    });
});

var active = $('body').attr('data-active');
if(active){
    $('#' + active).addClass('active');
}