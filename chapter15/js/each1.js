// $( document ).ready(function() {
//     $( 'li' ).each(function( index ) {
//         console.log( index + ":" + $( this ).text())
//     })
// })



// $( document ).ready(function() {
//     $( 'li' ).each(( index, element )  => {
//         console.log( index + ":" + $( element ).text())
//     })
// })



// $( document ).ready(function() {
//     $( 'li' ).each(function() {
//         $( this ).addClass('error-text')
//     })
// })



//Implicit Iteration
// $(function() {
//     $('li').addClass('error-text')
// })





$( document ).ready(function() {
    $( 'li' ).each(( index, item ) {
        if ($(item).is('#link')) {
            $(item).append( '<a class="cf-link">Visit us</a>')
            $( '.cf-link').attr('href', 'https://www.aueb.gr/')
            return false
        }
    })
})
