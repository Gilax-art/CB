$(function() {
        $('form').submit(function(e) {
          var form = $(this);
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize(),
          });
          e.preventDefault(); 
        });
});

$('.final').addClass('flex');
$('.final').fadeOut(0);

$('.button').on('click',function(){
    $('.front__contant').animate({
        left: "-100%",
    },600);
    setTimeout(function (){
      $('.front__contant').hide();
      $('.staps_contant').fadeIn();
      $('.staps').fadeIn();
    },600);
});

var s1 = true;
var s2 = true;
var s3 = true;
var s4 = true;
var s5 = true;

$('input[name="st1"]').one('change',function(){
  $('.fill_line').addClass('on1');
  if(s1==true){
    $('.percent').text('20%');
    s1 = false;
  }
});
$('input[name="st2"]').one('change',function(){
  $('.fill_line').addClass('on2');
  if(s2==true){
    $('.percent').text('40%');
    s2 = false;
  }
});
$('input[name="st3"]').one('change',function(){
  $('.fill_line').addClass('on3');
  if(s3==true){
    $('.percent').text('60%');
    s3 = false;
  }
});
$('input[name="st4"]').one('change',function(){
  $('.fill_line').addClass('on4');
  if(s4==true){
    $('.percent').text('80%');
    s4 = false;
  }
});
$('input[name="st5"]').one('change',function(){
  $('.fill_line').addClass('on5');
  if(s5==true){
    $('.percent').text('100%');
    s5 = false;
  }
});

$('.back_btn').on('click',function(){
  if($('.sld').hasClass('s4')){
      $('.sld').removeClass('s4');
      $('.next_btn').addClass('on');
      toombler4 = true;
  }else if($('.sld').hasClass('s3')){
    $('.sld').removeClass('s3');
    $('.next_btn').addClass('on');
    toombler3 = true;
  }else if($('.sld').hasClass('s2')){
    $('.sld').removeClass('s2');
    $('.next_btn').addClass('on');
    toombler2 = true;
  }else if($('.sld').hasClass('s1')){
    $('.sld').removeClass('s1');
    $('.next_btn').addClass('on');
    $('.back_btn').addClass('on');
    toombler1 = true;
  }
});

var toombler1 = true;
var toombler2 = false;
var toombler3 = false;
var toombler4 = false;
var toombler5 = false;

$('.back_btn').addClass('on');

$('.s-1').on('click',function(){
  if($('input[name="st1"]').is(':checked')){
    $('.next_btn').addClass('on');
  }
});

$('.next_btn').on('click',function(){
  if(toombler1 == true & $('input[name="st1"]').is(':checked')){
      $('.sld').addClass('s1');
      $('.next_btn').removeClass('on');
      $('.back_btn').removeClass('on');
      toombler1 = false;
      toombler2 = true;
  }else if(toombler2 == true & $('input[name="st2"]').is(':checked')){
    $('.sld').addClass('s2');
    $('.next_btn').removeClass('on');
    toombler2 = false;
    toombler3 = true;
  }else if(toombler3 == true & $('input[name="st3"]').is(':checked')){
    $('.sld').addClass('s3');
    $('.next_btn').removeClass('on');
    toombler3 = false;
    toombler4 = true;
  }else if(toombler4 == true & $('input[name="st4"]').is(':checked')){
    $('.sld').addClass('s4');
    $('.next_btn').removeClass('on');
    toombler4 = false;
    toombler5 = true;
  }else if(toombler5 == true & $('input[name="st5"]').is(':checked')){
    $('.staps').fadeOut(600);
    $('.final').fadeIn(600);
  }
});

$('form').submit(function(){
  $('.final').fadeOut(600);
  $('.lastframe').fadeIn(600);
});

$('.number').on('click',function(){
  window.open(this.href="tel:74951183934");
});

$('#name').on('keyup',function(){
  var count = $(this).val().length;
    if(count >= 2){
      $('#name').addClass('red');
    }
});

$('#phone').on('keyup',function(){
  var count = $(this).val().length;
    if(count >= 4){
      $('#phone').addClass('red');
    }
});