$(function() {
    $("#contact-form")
        .find("input,textarea")
        .jqBootstrapValidation({
            preventSubmit: true,
            submitSuccess: function($form, event) {
                event.preventDefault();  // prevent default submit behaviour
                // get values from FORM
                var email = $("#contact-form").find("#contact-email").val();
                var subject = $("#contact-form").find("#contact-subject").val();
                if (subject.length === 0) {
                    subject = "[MinneHack] " + email;
                } else {
                    subject = "[MinneHack] " + subject;
                }
                var message = $("#contact-form").find("#contact-text").val();

                console.log("Sending email...");

                $('#contact-status').html('<div class="progress-anim"></div>');

                $.ajax({
                    url: "https://formspree.io/acm@umn.edu",
                    method: "POST",
                    crossDomain: true,
                    dataType: "json",
                    data: {
                        'body': message,
                        '_replyto': email,
                        '_subject': subject,
                    },
                    cache: false,
                    success: function() {
                        $('#contact-status')
                            .html(`
                        <div class="alert alert-success">
                          <strong>Thanks, your message has been sent!</strong>
                          <button type="button" class="close" data-dismiss="alert"
                                  aria-hidden="true">
                            &times;
                          </button>
                        </div>
                        `);
                        // clear form fields
                        $('#contact-form').trigger("reset");
                    },
                    error: function(xhr, error, exception) {
                        // Fail message
                        $('#contact-status')
                            .html(`
                        <div class="alert alert-danger">
                          <strong>
                            Sorry, your message failed to send.
                            Please try again later.
                          </strong>
                          <button type="button" class="close" data-dismiss="alert"
                                  aria-hidden="true">
                            &times;
                          </button>
                        </div>
                        `);
                    },
                })
            },
            filter: function() { return $(this).is(":visible"); },
        });

    $("a[data-toggle=\"tab\"]")
        .click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
});

$(function() {
    function _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    function submit(data) {
        console.log("Registering...");

        $.ajax({
            // This URL is to a Google Script-deployed application
            // owned by the ACM UMN Google account.
            url:
                "https://script.google.com/a/umn.edu/macros/s/AKfycbysGPpcMP1jxsAlyl75D7HtJedjkr_FnvBCvJp5xCTvIGSj0z9M/exec",
            method: "POST",
            data: data,
            dataType: "json",
            success: function(response) {
                console.log(response);
                $('#registration-status')
                    .html(`
                  <div class="alert alert-success">
                    <strong>
                      You've registered for MinneHack! Look out for an email from us in the coming weeks!
                    </strong>
                    <button type="button" class="close" data-dismiss="alert"
                            aria-hidden="true">
                      &times;
                    </button>
                  </div>
                `);
                // clear form fields
                $('#registration-form').trigger("reset");
            },
            error: function() {
                $('#registration-status')
                    .html(`
                 <div class="alert alert-danger">
                   <strong>
                     Sorry, your signup failed.
                     Please try again later.
                   </strong>
                   <button type="button" class="close" data-dismiss="alert"
                           aria-hidden="true">
                     &times;
                   </button>
                 </div>
               `);
            }
        });
    }

    // Submit and validate registration form.
    $("#registration-form")
        .find("input,textarea,select")
        .not("[type=submit]")
        .jqBootstrapValidation({
            submitSuccess: function($form, event) {
                event.preventDefault();

                console.log("Attempting to register for MinneHack.");

                if (!$("#registration-mlh").prop("checked")) {
                    console.log("MLH Code of Conduct not agreed to.");
                    return;
                }

                $("#registration-status")
                    .html(`
              <div class="progress-anim"></div>
            `);

                var firstname = $("#registration-firstname").val();
                var lastname = $("#registration-lastname").val();
                var nickname = $("#registration-nickname").val();
                var email = $("#registration-email").val();
                var phone = $("#registration-phone").val();
                var gender = $("#registration-gender").val();
                var resumeFiles = $("#registration-resume").prop("files");
                var school = $("#registration-school").val();
                if (school === "Other") {
                    school = $("#registration-school-other").val();
                }
                var diet = $("#registration-diet").val();
                if (diet === "Other") {
                    diet = $("#registration-diet-other").val();
                }
                var tshirt = $("#registration-tshirt").val();
                var special = $("#registration-special").val();
                var eighteen = $("#registration-age").prop("checked");
                var mailinglist =
                    $("#registration-mailinglist").prop("checked");

                var data = {
                    'firstname': firstname,
                    'lastname': lastname,
                    'nickname': nickname,
                    'email': email,
                    'phone': phone,
                    'gender': gender,
                    'school': school,
                    'diet': diet,
                    'tshirt': tshirt,
                    'special': special,
                    'eighteen': eighteen,
                    'mailinglist': mailinglist
                };

                if (resumeFiles.length > 0) {
                    console.log("Trying to submit with resume...");
                    var file = resumeFiles[0];
                    var dot = file.name.lastIndexOf('.');
                    var extension = "";
                    if (dot !== -1) {
                        extension = file.name.substring(dot);
                    }

                    data["resume-extension"] = extension;

                    var filereader = new FileReader();
                    filereader.onload =
                        function() {
                        console.log("Finished reading file.");
                        data.resume = _arrayBufferToBase64(filereader.result);
                        submit(data);
                    }

                        filereader.readAsArrayBuffer(file);
                } else {
                    $('#registration-status').children().hide();

                    $('#registration-noresume-register')
                        .on('click', function() {
                            $('#registration-status').children().show();
                            submit(data);
                        });

                    $('#registration-noresume').modal();
                }
            },

            filter: function() { return $(this).is(":visible"); },
        });
});

function resumeValidation($input, value, callback) {
    callback({
        value: value,
        valid: $input.prop("files")[0].size <= 2 * 1024 * 1024,
        message: "File size must be less than 2MB",
    });
}

$(function() {
    // Hide/show the School (Other) field based on School selection.
    var school = $("#registration-school");
    var schoolOther = $("#registration-school-other");

    schoolOther.closest("div.form-group").hide();

    school.change(function(event) {
        if (school.val() === "Other") {
            schoolOther.closest("div.form-group").show();
            schoolOther.prop("required", true);
        } else {
            schoolOther.closest("div.form-group").hide();
            schoolOther.prop("required", false);
            schoolOther.val(null);
        }
    });
});

$(function() {
    // Hide/show the Dietary needs (Other) field based on Diet selection
    var diet = $("#registration-diet");
    var dietOther = $("#registration-diet-other");

    dietOther.closest("div.form-group").hide();

    diet.change(function(event) {
        if (diet.val() === "Other") {
            dietOther.closest("div.form-group").show();
            dietOther.prop("required", true);
        } else {
            dietOther.closest("div.form-group").hide();
            dietOther.prop("required", false);
            dietOther.val(null);
        }
    });
});
