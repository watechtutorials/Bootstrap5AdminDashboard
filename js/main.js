(function($){

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

//Sidebar Toggler
$('.sidebar-toggler').click(function(){
    $('.sidebar, .content').toggleClass("open");
    return false;
});

//chart Global Color
Chart.defaults.color = "#6C7293";
Chart.defaults.borderColor = "#000000";

//Sales Chart
var ctxl = $("#worldwide-sale").get(0).getContext("2d");
var myChart1 = new Chart(ctxl, {
    type: "bar",
    data: {
        labels:["2016","2017","2018","2019","2020","2021","2022"],
        datasets: [
                {
                    label: "USA",
                    data: [15,30,55,65,60,80,95],
                    backgroundColor: "rgba(235,22,22,.7)"
                },
                {
                    label: "UK",
                    data: [8,35,40,60,70,55,75],
                    backgroundColor: "rgba(235,22,22,.5)"
                },
                {
                    label: "AU",
                    data: [12,25,45,55,65,70,60],
                    backgroundColor: "rgba(235,22,22,.3)"
                }
            ]
         },
        options: {
            responsive:true
        }

});

//Growth & Revenue Chart
var ctxl2 = $("#sale-revenue").get(0).getContext("2d");
var myChart2 = new Chart(ctxl2, {
    type: "line",
    data: {
        labels:["2016","2017","2018","2019","2020","2021","2022"],
        datasets: [
                {
                    label: "Sale",
                    data: [15,30,55,65,60,80,95],
                    backgroundColor: "rgba(235,22,22,.7)",
                    fill: true
                },
                {
                    label: "Revenue",
                    data: [8,35,40,60,70,55,75],
                    backgroundColor: "rgba(235,22,22,.5)",
                    fill: true
                }
            ]
         },
        options: {
            responsive:true
        }

});

//Calender
$('#calender').datetimepicker({
    inline: true,
    format: 'L'
});

//Back to top button
$(window).scroll(function(){

    if($(this).scrollTop() > 100){
        $('.back-to-top').fadeIn('slow');
    }
    else{
        $('.back-to-top').fadeOut('slow');
    }

});

$('.back-to-top').click(function(){

    $('html, body').animate({scrollTop: 0},1500,'easeInOutExpo');
    return false;
});



})(jQuery);