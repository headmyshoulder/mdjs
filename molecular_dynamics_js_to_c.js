var ambrosys_libs = {};
ambrosys_libs.init_window = function(windowid) 
{ 
  //document.writeln('init_window ' + windowid) 
  var window_handel = document.createElement('div');
  window_handel.setAttribute('id', 'windowid'+windowid);
  window_handel.style.background = "#FF9933";
  window_handel.style.border = "1px solid gray";
  window_handel.style.height = "600px";
  window_handel.style.width = "600px";
  window_handel.style.position = "relative";
  document.getElementsByTagName("body")[0].appendChild(window_handel);
};

ambrosys_libs.init_point =  function(id, windowid) 
{ 
  var point_handel = document.createElement('div');
  point_handel.setAttribute('id', 'point'+id);
  point_handel.style.background = "#FF0000";
  //point_handel.style.border = "3px solid gray";
  point_handel.style.height = "4px";
  point_handel.style.width = "4px";
  point_handel.style.position = "absolute";
  document.getElementById('windowid'+windowid).appendChild(point_handel);

};

ambrosys_libs.move_point =  function(id, x, y, time) 
{
  var func= function(){
    var point_handel = document.getElementById('point'+id);
    point_handel.style.right=""+ (x * 4 - 2) + "px";
    point_handel.style.top = ""+ (y * 4 - 2) + "px";
  }
  window.setTimeout(func,time);
};

ambrosys_libs.get_cycel_time =  function() 
{
  return 1000;
};

ambrosys_libs.sleep =  function(milliseconds) 
{
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

mergeInto(LibraryManager.library, ambrosys_libs);


