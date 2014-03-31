function $id(id) {
  return document.getElementById(id);
}

function convert() {
  var selected_file = $id('file').files[0];
  var reader = new FileReader();

  reader.onload = function(aEvent) {
    convertToPDF(btoa(aEvent.target.result));
  };

  // reader.readAsArrayBuffer(selected_file);
  reader.readAsBinaryString(selected_file);
}

function convertToPDF(aDocxContent) {
  var content = docx(aDocxContent);
  $id('container').textContent = '';
  console.log('content length: ' + content.DOM.length);
  while (content.DOM.length > 0) {
    var node = content.DOM[0];
    $id('container').appendChild(node);
  }
}

window.addEventListener('load', function() {
  document.getElementById('convert').onclick = convert;
});

