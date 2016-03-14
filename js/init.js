(function ($) {
    $(function () {

        function loadFooter() {
            // ¶¯Ì¬¼ÓÔØfooter
            var src, path;
            $('script').each(function () {
                src = $(this).attr('src');
                if (src.indexOf('js/init.js') >= 0) {
                    path = src;
                }
            });

            if (path) {
                var url = path.replace('js/init.js', 'template/footer.html');
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: 'html',
                    success: function (data) {
                        var $el = $(data);
                        $('footer').replaceWith($el);

                        var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
                        var cnzz = '<script src="' + cnzz_protocol + 's11.cnzz.com/z_stat.php?id=1257972001&show=pic" type="text/javascript"></script>';
                        $el.append(cnzz);
                    }
                });
            }
        }

        loadFooter();

        $('.button-collapse').sideNav();

        $('.parallax').parallax();

        $('.modal-trigger').leanModal();

    }); // end of document ready
})(jQuery); // end of jQuery name space
