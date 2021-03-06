//Copyright 2021 - 2022 AmCan Tech
$(document).ready(function() {
    console.log("Contribute to our project https://github.com/avipars/OsherAd");
    console.log("we are on telegram too " + "https://t.me/osheradnews");

    var dayOfWeek = new Date().getDay();
    var num = -1; //select which P to highlight

    if (dayOfWeek >= 0 && dayOfWeek <= 2) { //sunday through tuesday
        num = 0;
    } else if (dayOfWeek > 2 && dayOfWeek <= 3) { //wednesday through thursday
        num = 1;
        //w,t 
    } else if (dayOfWeek == 4) { //friday  - check months for summer/winter
        var month = new Date().getMonth() + 1; //1-12 not 0-11
        if (month >= 3 && month <= 10) { //summer from march to october
            num = 3;
        } else { //winter
            num = 2;
        }
    } else {
        num = -1; //don't show
    }

    //add attribute to the line with the right day of week 
    //add class to specific line based on day
    if (num != -1) {
        $('.hours p').each(function() {
            var row = $(this); //get current row
            if (row.index() == num) { //ensure it matches with the right day 
                row.addClass('today'); //highlighter 
            }
        });
    }

    //only toggle hours for the current clicked on branch
    //ignore the table header 
    $("#locationTable tbody > tr").click(function() {
        $(this).closest("tr").next(".hidden").toggle();
    });

    //scroll to where the user anchor is 
    var hash = window.location.hash;
    if (hash) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }

    //hide special hours after they "expire"
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1; //1-12 not 0-11
    if (month >= 4 && day >= 22) {
        $("#pesachtime").fadeOut();
    }
});

//search for branches 
function search() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("locationTable");
    tr = table.getElementsByTagName("tr");
    //also check description and phone fields 

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; ++i) {
        td = tr[i] //search via all the fields
            //.getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText; //search based on how the table was written in html

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none"; //hidden 
            }
        }
    }
}
