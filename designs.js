// Global variables
const canvas = $('#pixel_canvas');
const gridForm = $('#size_picker');
// Used to detect mouse drag for painting effect
let isDown = false;

/**
 * @description Creates a new grid
 * @param {number} height
 * @param {number} width
 */
function makeGrid(height, width) {
    let gridButton = $('input[type=submit]');
    // Check if first canvas created, otherwise clear existing one
    if (canvas.is(':empty')) {
        // Change button to 'Reset' after first grid created
        gridButton.val("Reset");

        // Show instructions paragraphs
        $('.instructions').slideDown(600);
    } else {
        // Clear canvas
        canvas.empty();
    }

    // Build the grid
    for (let row = 0; row < height; row++) {
        canvas.append('<tr></tr>');
    }
    for (let col = 0; col < width; col++) {
        setTimeout(function () {
            $('tr').append('<td></td>');
        }, col * 50);
    }
}

// Event listener - grid size submitted
gridForm.submit(function (e) {
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    // Prevent form submit from reloading page
    e.preventDefault();

    // Call function to create a grid
    makeGrid(height, width);
});

// Store if mouse is up or down - used to detect mouse drag
$(document)
    .mousedown(function () {
        isDown = true;
    })
    .mouseup(function () {
        isDown = false;
    }
    );

// Event listener - canvas click, move with mouse down or double click
canvas.on('click mousemove dblclick', 'td', function (e) {
    let cell = $(e.target);
    if (e.type == "click" || isDown) {
        let currentColor = $('#color_picker').css('background-color');
        cell.css('background-color', currentColor);
    }
    if (e.type == 'dblclick') {
        cell.css('background-color', 'floralwhite');
    }
});