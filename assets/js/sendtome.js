$('#btn-submit-form').click(function() {
    $.ajax({
        url: "sendtome.php",
        data: $('form').serialize(),
        type: "POST"
    }).done(function(data) {
        $('#form-message').html(data);
    }).fail(function(data) {
        $('#form-message').html("<div class='alert alert-danger' role='alert'>Error Terkirim</div>");
    });
});