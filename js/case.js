$(function () {
    var caseName = urlQuery2Obj().case;
    if (!caseName) caseName = 'case1';

    $.ajax({
        type: "GET",
        url: caseName + '.html',
        dataType: 'html',
        success: function (data) {
            $('#caseContainer').html(data);
        }
    });

    function urlQuery2Obj() {
        var str = location.search;

        if (str[0] === '?' || str[0] === '#') {
            str = str.substring(1);
        }
        var query = {};

        str.replace(/\b([^&=]*)=([^&=]*)/g, function (m, a, d) {
            if (typeof query[a] != 'undefined') {
                query[a] += ',' + decodeURIComponent(d);
            } else {
                query[a] = decodeURIComponent(d);
            }
        });

        return query;
    }
});