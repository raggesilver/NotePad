var $ = require("jquery");
var fs = require("fs");

function save() {
  var text = $("#editor").html();
  fs.writeFile(__dirname + "/document.txt", text,function(err){if(err)return alert(err);});
}

function open() {
  fs.access(__dirname + "/document.txt", fs.F_OK, function(err) {
    if (!err) {
      var text = fs.readFileSync(__dirname + "/document.txt", "utf8");
      document.getElementById('editor').innerHTML = text;
    } else {
      alert(err);
    }
  });
}

window.onload = function () {
  open();
};

window.onbeforeunload = function () {
  save();
};

$(function(){
  $(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
      switch (String.fromCharCode(event.which).toLowerCase()) {
        case '1':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h1");
          break;
        case '2':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h2");
          break;
        case '3':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h3");
          break;
        case '0':
          event.preventDefault();
          document.execCommand("formatBlock", false, "p");
          break;
        case 'b':
          event.preventDefault();
          document.execCommand("bold", false, false);
          break;
        case 'i':
          event.preventDefault();
          document.execCommand("italic", false, false);
          break;
        case 'u':
          event.preventDefault();
          document.execCommand("underline", false, false);
          break;
        }
    }
  });
});
