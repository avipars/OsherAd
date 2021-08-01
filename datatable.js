$(document).ready(function() {
    $('#locationTable').DataTable({
        "paging": false,
        select: true,
        language: {
            search: "חיפוש - Search:"
        }
    });
});