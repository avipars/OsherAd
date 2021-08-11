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
});