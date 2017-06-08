window.onload = function(e){
    document.getElementById("guid").value = guid();
    new Clipboard('#copy-button');
}

function buttonClicked(){
  document.getElementById("guid").value = guid();
  alertify.set({ delay: 1200 });
  alertify.success('Copied');
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
