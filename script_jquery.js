$(document).ready(function () {
    const $input = $('#inputxt');
    const $clearBtn = $('#clear');
    const $delBtn = $('#del');
    const $equalBtn = $('#equal');
    const $numBtns = $('.btn-nmbr');
    const $opBtns = $('.dig-btn');

    $clearBtn.click(function() {
        $input.val('');
    });

    $delBtn.click(function () {
        $input.val(function (_, value) {
            return value.slice(0, -1);
        });
    });

    $equalBtn.click(function() {
        const expression = $input.val();
        const result = eval(expression);
        $input.val(result);   
    });

    $numBtns.on('click', addNumber);
    $opBtns.on('click', addOperator);

    function addNumber(e) {
        const num = $(e.target).text();
        $input.val($input.val() + num);
    }

    function addOperator(e) {
        const op = $(e.target).text();
        $input.val($input.val() + op);
    }
});
