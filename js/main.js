var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $p = $('p');
var $h2 = $('h2');
var $img = $('img');
var $li = $('li');
var $dl = $('dl');
var $dt = $('dt')

$header.addClass('masthead');
$('big-heading').remove();
$h1.addClass('logo');
$main.addClass('wrapper');

$('main p:first-child').addClass('intro');

$h2.addClass('slug-head');

$('main ul').addClass('slug-list');

$img.addClass('slug-img');

$('main li:first-child').addClass('slug-list-first');

$('main li:last-child').addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$('ul li:last-child').show();
