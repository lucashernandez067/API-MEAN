document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});

function showHide(checked) {
    if (checked) {
        $("#fecha-fallecimiento-div").fadeIn();
    } else {
        $("#fecha-fallecimiento-div").fadeOut();
    }
}

$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
});

