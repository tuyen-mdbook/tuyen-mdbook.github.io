$(function () {
  $('img').each(function () {
    var title = $(this).attr('title');
    if (typeof title === typeof undefined || title === false) {
      $(this).attr('title', $(this).attr('alt'));
      //$(this).attr("title", $(this).attr("src"));
    }
  });
  $('a[href]').each(function () {
    var href = $(this).attr('href').toLowerCase();
    var isExternal =
      href.startsWith('http:') ||
      href.startsWith('https:') ||
      href.startsWith('/');
    if (isExternal) {
      $(this).attr('target', '_blank');
    }
  });
});

function walkText(walkElement) {
  if (
    1 == walkElement.nodeType &&
    'SCRIPT' != walkElement.nodeName &&
    'CODE' != walkElement.nodeName
  ) {
    walkElement.childNodes.forEach((el) => {
      if (3 == el.nodeType) {
        el.textContent = el.textContent.replace('-->', '\u27F6');
      } else walkText(el);
    });
  }
}
walkText(document.body);
