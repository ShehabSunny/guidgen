import Clipboard from 'clipboard/dist/clipboard.min.js';
import * as Toastr from 'toastr';
import 'toastr/build/toastr.css';

window.buttonClicked =  function(){

  var hyphens = document.getElementById("hyphens").checked;
  var braces = document.getElementById("braces").checked;
  var uppcase = document.getElementById("uppcase").checked;

  var guid_value = guid();

  if(braces){
    guid_value = "{"+guid_value+"}";
  }

  if(uppcase){
    guid_value = guid_value.toUpperCase();
  }

  if(!hyphens){
    guid_value = guid_value.split("-").join("");
  }

  document.getElementById("guid").value = guid_value;
  
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
