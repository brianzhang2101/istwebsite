$(function() {
  $('[data-include]').each(function() {
    var elem = $(this);
    var file = elem.data('include');
    $.ajax(file)
      .done(function(data) {
        elem[0].outerHTML = data;
      });
  })
});