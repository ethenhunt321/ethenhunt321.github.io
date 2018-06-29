function LoadHeaderFooter() {
    $(document).ready(function () {
        $("#Header").load("./Header.html");
        $("#Footer").load("./Footer.html");
    });
}

function PlayPause() {
        $("#playbutton").click(function () {
            $("#mycarousel").carousel('cycle');
        });

        $("#pauseButton").click(function () {
            $("#myCarousel").carousel("pause");
        });
}


