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



var bindLanguage = function(){
    var alllanguage = ["common","codedui","selenium","specflow","nunit"];
    this.self=this;
    this.language=ko.observableArray();
    this.language.push.apply(this.language,alllanguage);
}

function SetLanguage(currentlanguage){
    document.getElementById('codes').innerHTML="";
    document.getElementById('selected').innerHTML = currentlanguage;
    $("#codes").load("./"+currentlanguage+".html");
}



