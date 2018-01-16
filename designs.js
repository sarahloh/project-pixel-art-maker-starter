$(document).ready(function () {

/**
 * @description Creates a new canvas
 * @param {number} width
 * @param {number} height
 */
function makeGrid(rows, cols) {
    console.log(`rows: ${rows}, columns: ${cols}`);

    const canvas = $('#pixel_canvas');

    // clear previous canvas
    canvas.empty();

    // add rows and columns to table
    for (let row = 0; row < rows; row++) {
        canvas.append("<tr></tr>");
    }
    for (let col = 0; col < cols; col++) {
        $('tr').append("<td></td>");
    }
}

// Event listener - grid size submitted
$('#size_picker').submit(function(e) {
    // prevent form submit from reloading page
    e.preventDefault();

    const height = $('#input_height').val();
    const width = $('#input_width').val();

    makeGrid(height, width);
});

// Event listener - canvas clicked
$('#pixel_canvas').on('click', 'td', function(e) {
    const cell = $(e.target);
    cell.css('background-color', $('#color_picker').val());
});

});