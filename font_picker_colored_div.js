$(document).ready(function(){
font_cycle();
set_div_color();
});

function set_div_color(){
  $('div').each(function(){
    var new_color = Math.floor(Math.random()*16777215);
    new_color = new_color.toString(16).toUpperCase();;
    console.log(new_color);
    $(this).css({
      'background-color': "#"+new_color,
      'opacity':0.5});
  });
  $('#background').css('opacity',0.8);
}

function font_cycle(){
  var p_click = 0;
  $('div').click(function(){
  console.log(p_click);
switch (p_click%47){
  case 0:
  $(this).css("font-family", 'Arial,"Helvetica Neue",Helvetica,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 1:
  $(this).css("font-family",' "Arial Black","Arial Bold",Gadget,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 2:
  $(this).css("font-family", '"Arial Narrow",Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 3:
  $(this).css("font-family", '"Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 4:
  $(this).css("font-family", '"Avant Garde",Avantgarde,"Century Gothic",CenturyGothic,AppleGothic,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 5:
  $(this).css("font-family",'Calibri,Candara,Segoe,"Segoe UI",Optima,Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 6:
  $(this).css("font-family", 'Candara,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 7:
  $(this).css("font-family", '"Century Gothic",CenturyGothic,AppleGothic,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 8:
  $(this).css("font-family",'"Franklin Gothic Medium","Franklin Gothic","ITC Franklin Gothic",Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 9:
  $(this).css("font-family", 'Futura,"Trebuchet MS",Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 10:
  $(this).css("font-family",  'Geneva,Tahoma,Verdana,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 11:
  $(this).css("font-family",'"Gill Sans","Gill Sans MT",Calibri,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 12:
  $(this).css("font-family",  '"Helvetica Neue",Helvetica,Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 13:
  $(this).css("font-family",  'Impact,Haettenschweiler,"Franklin Gothic Bold",Charcoal,"Helvetica Inserat","Bitstream Vera Sans Bold","Arial Black","sans serif"');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 14:
  $(this).css("font-family", '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 15:
  $(this).css("font-family", 'Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 16:
  $(this).css("font-family", '"Segoe UI",Frutiger,"Frutiger Linotype","Dejavu Sans","Helvetica Neue",Arial,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 17:
  $(this).css("font-family", 'Tahoma,Verdana,Segoe,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 18:
  $(this).css("font-family", '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 19:
  $(this).css("font-family", 'Verdana,Geneva,sans-serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 20:
  $(this).css("font-family", '"Big Caslon","Book Antiqua","Palatino Linotype",Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 21:
  $(this).css("font-family", '"Bodoni MT",Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 22:
  $(this).css("font-family", '"Book Antiqua",Palatino,"Palatino Linotype","Palatino LT STD",Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 23:
  $(this).css("font-family",   '"Calisto MT","Bookman Old Style",Bookman,"Goudy Old Style",Garamond,"Hoefler Text","Bitstream Charter",Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 24:
  $(this).css("font-family", 'Cambria,Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 25:
  $(this).css("font-family", 'Didot,"Didot LT STD","Hoefler Text",Garamond,"Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 26:
  $(this).css("font-family",  'Garamond,Baskerville,"Baskerville Old Face","Hoefler Text","Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 27:
  $(this).css("font-family", 'Georgia,Times,"Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 28:
  $(this).css("font-family", '"Goudy Old Style",Garamond,"Big Caslon","Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 29:
  $(this).css("font-family",  '"Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 30:
  $(this).css("font-family", 'font-family: "Lucida Bright",Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 31:
  $(this).css("font-family",  'Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 32:
  $(this).css("font-family", 'Perpetua,Baskerville,"Big Caslon","Palatino Linotype",Palatino,"URW Palladio L","Nimbus Roman No9 L",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 33:
  $(this).css("font-family",  'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 34:
  $(this).css("font-family", '"Rockwell Extra Bold","Rockwell Bold",monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 35:
  $(this).css("font-family", 'Baskerville,"Baskerville Old Face","Hoefler Text",Garamond,"Times New Roman",serif' );
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 36:
  $(this).css("font-family",  'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 37:
  $(this).css("font-family", 'Consolas,monaco,monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 38:
  $(this).css("font-family",  '"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 39:
  $(this).css("font-family", '"Lucida Console","Lucida Sans Typewriter",monaco,"Bitstream Vera Sans Mono",monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 40:
  $(this).css("font-family",  '"Lucida Sans Typewriter","Lucida Console",monaco,"Bitstream Vera Sans Mono",monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 41:
  $(this).css("font-family", 'monaco,Consolas,"Lucida Console",monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 42:
  $(this).css("font-family",  '"Andale Mono",AndaleMono,monospace');
  console.log($(this).css("font-family"));
  p_click ++;
  break;

  case 43:
  $(this).css("font-family", "Brush Script MT, cursive");
  console.log($(this).css("font-family"));
  p_click ++;
  break;
  case 44:
    p_click = 0;
    break;


}});

}
