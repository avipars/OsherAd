$(document).ready(function() {
    $('#locationTable').DataTable({
        "paging": false,
        select: true,
        language: {
            search: "חיפוש - Search:"
        }
    });
    // $("table[id*='Table']").DataTable({
    //     "paging": false,
    //     select: true,
    //     responsive: true,
    //     language: {
    //         search: "חיפוש - Search:"
    //     }
    // });

    console.log("Contribute to our project https://github.com/avipars/OsherAd");
    console.log("we are on telegram too " + "https://t.me/osheradnews");
});