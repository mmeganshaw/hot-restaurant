$(".submit").on("click", function () {
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };
    console.log(newReservation);
    var currentURL = window.location.origin;
    $.post(currentURL + "apiTables", newReservation,
        function (data) {
            if (data == true) {
                alert("Your reservation is confirmed!")
            }
            if (data == false) {
                alert("Too slow! You're on the wait list don't worry!")
            }
            $('#reserve_name').val("");
            $('#reserve_phone').val("");
            $('#reserve_email').val("");
            $('#reserve_uniqueID').val("");
        });
    return false;
});