import Clipboard from 'clipboard/dist/clipboard.min.js';
import * as Toastr from 'toastr';
import 'toastr/build/toastr.css';

window.buttonClicked =  function(){
  document.getElementById("guid").value = guid();

  Toastr.options.timeout = 2000;
  Toastr.success('Copied to clipboard!');
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

window.onload = function(e){
    document.getElementById("guid").value = guid();
    new Clipboard('#copy-button');
}
