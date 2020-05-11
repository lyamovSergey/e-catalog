$(function() {



    $('.item').on('click', function() {
        $(this).toggleClass('zoom')
    })

    $('.inputs-block input[type="checkbox"]').on('input', function() {
        let n = $("input:checked").length;
        if (n != 0) {
            $('.aside-footer').addClass('checked-filters')
        } else {
            $('.aside-footer').removeClass('checked-filters')
        }
    });

    $('.closeFilter').on('click', function() {
        $('aside').animate({ right: '-230px' }, 500)
    })
    $('.filter-button').on('click', function() {
        $('aside').animate({ right: '0' }, 500)
    })






})