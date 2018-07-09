$(function() {
    // Do bootstrap validation for the registration field
    $("#tshirtForm").find("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            
            var email =      $("#tshirtForm").find("#email").val();
            var tshirt =     $("#tshirtForm").find("#tshirt").val();

            var input = { tshirtpatch: true,
                          email: email,
                          tshirt: tshirt }

            console.log("Sending TShirt information...");
            console.log(input);

            var firebase_callback =
              function(arg) {
                if (arg == null) {
                  // Show positive result
                  $("#tshirt-status").html("<div class='alert alert-success'>");
                  $('#tshirt-status > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                  $('#tshirt-status > .alert-success')
                    .append("<strong>We've registered your TShirt size. Thanks!</strong>");
                  $('#tshirt-status > .alert-success')
                    .append('</div>');

                  // Clear all fields
                  $('#tshirtForm').trigger("reset");
                } else {
                  // Fail message
                  $('#tshirt-status').html("<div class='alert alert-danger'>");
                  $('#tshirt-status > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                  $('#tshirt-status > .alert-danger').append("<strong>Registration failed. Try again in a minute, contact us if error persists.");
                  $('#tshirt-status > .alert-danger').append('</div>');
                }
              }

            var registrationDB = new Firebase("https://minnehack-register.firebaseio.com");


            registrationDB.push(input, firebase_callback);
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#tshirtForm input#email').focus(function() {
    $('#contact-status').html('');
});
