$(document).ready(function () {

const canvas = $('#pixel_canvas');
const gridForm = $('#size_picker');

/**
 * @description Creates a new canvas
 * @param {number} height
 * @param {number} wodth
 */
function makeGrid(height, width) {

    if (canvas.is(':empty')) {
        // change button to 'Reset' after first grid created
        console.log('First canvas');
        $('input[type=submit]').val("Reset");
    } else {
        // clear canvas
        canvas.empty();
    }

    // add rows and columns to table
    for (let row = 0; row < height; row++) {
        canvas.append("<tr></tr>");
    }
    for (let col = 0; col < width; col++) {
        $('tr').append("<td></td>");
    }
}

// Event listener - grid size submitted
gridForm.submit(function(e) {
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    // prevent form submit from reloading page
    e.preventDefault();

    makeGrid(height, width);
});

// Event listener - canvas clicked
canvas.on('click', 'td', function(e) {
    let cell = $(e.target);
    let currentColor = $('#color_picker').val();
    cell.css('background-color', currentColor);
});

});