console.log("Your Index.js file is loaded correctly!")

$( "li.star" ).hover(
  function() {
    $( this ).append( $( "<span> <sup>+1</sup> </span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

$( "h1.logotext" ).hover(
  function() {
    $( this ).append( $( "<span> <sup>+1</sup> </span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});