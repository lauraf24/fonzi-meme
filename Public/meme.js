document.getElementById('create-button').addEventListener('click',function(e) {
	html2canvas(document.getElementById('nugg'), {
	  onrendered: function(canvas) {
	    document.body.appendChild(canvas);
	    var png = document.getElementsByTagName('canvas')[0].toDataURL();
	    var imgTag = document.getElementById('image');
	    imgTag.src = png;
	    canvas.remove();
	  }
	});
});
