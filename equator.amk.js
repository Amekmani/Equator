/*
* Equator plugin equalises the height of blocks elements in a container based off of the tallest element
* http://github.com/Amekmani/equator
* Copyright 2015, Amekmani
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

$(document).ready(function(){

  var cont = $(document).find("[data-equator]");
  var elem = cont.find("[data-equator-watch]");
  var kevinhart = 0;
  $(elem).each(function () {
    if($(this).height() > kevinhart){
      kevinhart = $(this).height();
    }
  });
  elem.css({ height : kevinhart });

});
