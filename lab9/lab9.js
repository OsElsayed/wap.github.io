$(document).ready(function () {

    $('#myForm').submit(function (e) {

        $('#errorSpan')[0].innerHTML = '';
        let first_name = $('#name').val();
        if (first_name.length < 2) {
            $('#errorSpan').append($('<li>', {
                text: 'name too short',
                css: {
                    color: 'red'
                }
            }));
        }
        let zip = parseInt($('#zip').val());
        if (zip === NaN || $('#zip').val().length < 5) {
            $('#errorSpan').append($('<li>', {
                text: 'Zip code should be number of 5 digits',
                css: {
                    color: 'red'
                }
            }));
        }

        let state = parseInt($('#state').val());
        if (state === -1) {
            $('#errorSpan').append($('<li>', {
                text: "you should select state",
                css: {
                    color: 'red'
                }
            }));
        }
        let seat = parseInt($('#seats').val());
        if (seat < 1 || seat >= 200) {
            $('#errorSpan').append($('<li>', {
                text: "you can't take more than 200 seats",
                css: {
                    color: 'red'
                }
            }));
        }
        let taxi = $("input:radio[name ='taxi']:checked").val();
        if (taxi == undefined) {
            $('#errorSpan').append($('<li>', {
                text: 'you must select taxi type',
                css: {
                    color: 'red'
                }
            }));
        }
        let extras = $('input:checkbox[name="Extras"]:checked')
            .map(function () {
                return $(this).val();
            }).get();
        if (extras.length === 0) {
            $('#errorSpan').append($('<li>', {
                text: 'you must select at least one Extras',
                css: {
                    color: 'red'
                }
            }));
        }
        if ($('#errorSpan')[0].innerHTML !== '') {
            e.preventDefault();
        }
    });

});