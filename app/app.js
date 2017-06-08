window.onload = function(e){
    document.getElementById("guid").value = guid();
    new Clipboard('#copy-button');
}

function buttonClicked(){
  document.getElementById("guid").value = guid();
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
