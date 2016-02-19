$(function () {
    var caseName = 'case1';
    $.ajax({
        type: "GET",
        url: caseName + '.html',
        dataType: 'html',
        success: function (data) {
            $('#caseContainer').html(data);
        }
    });
});