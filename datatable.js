$(document).ready(function() {
    // $('#locationTable').DataTable({
    //     "paging": false,
    //     select: true,
    //     language: {
    //         search: "חיפוש - Search:"
    //     }
    // });
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();


    console.log("Contribute to our project https://github.com/avipars/OsherAd");
    console.log("we are on telegram too " + "https://t.me/osheradnews");
    var dayOfWeek = new Date().getDay();
    var num = -1; //select which P to show

    if (dayOfWeek >= 0 && dayOfWeek <= 3) { //sunday through tuesday
        num = 0;
    } else if (dayOfWeek > 3 && dayOfWeek <= 4) { //wednesday through thursday
        num = 1;
        //w,t 
    } else if (dayOfWeek == 5) { //friday  - check months for summer/winter
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
    $("#locationTable tr").click(function() {
        $(this).closest("tr").next(".hidden").toggle();
    });
});