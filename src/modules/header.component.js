import $ from 'jquery';

$('<h1 />')
  .text('Hello world from JQuery')
  .css({
    textAlign: 'center',
    color: '#3c3cbb'
  })
  .appendTo($('header'));