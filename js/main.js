var $belowLi = $('<h2>');                     // Make a new HTML tag, notice the `<>`
$belowLi.html('Below ground veggies');
$('ul').prepend($belowLi);

var $aboveLi = $('<h2>');                     // Make a new HTML tag, notice the `<>`
$aboveLi.html('Above ground veggies');
$('ul').prepend($aboveLi);
