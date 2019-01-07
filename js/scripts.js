$(document).ready(function(){
    $("#btnloginModal").click(function(){
        $("#loginModal").modal("show");
    });

    $("#goToTop").click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});