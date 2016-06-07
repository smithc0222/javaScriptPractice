var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
var getQuote = function(data) {
  $(".getQuote").text("\"" + data.quoteText + "\"");
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author- ' + data.quoteAuthor;
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".getAuthor").text(data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
  $('#watch').fadeOut('fast');
  $('#watch').fadeIn('slow');
});
