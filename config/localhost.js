var f$_config = 'local';

var f$_bootstrap_css = false;
var f$_css_position = 'start';

var f$_nav_extra_css = true;

var f$_bootstrap_link = document.createElement('link');
    f$_bootstrap_link.rel = "stylesheet";
    f$_bootstrap_link.media="screen";
    f$_bootstrap_link.href= f$_nav+"lib/bootstrap/css/bootstrap.min.css";    
    
switch (f$_css_position) {
	case 'start' : document.getElementsByTagName('head')[0].insertBefore(f$_bootstrap_link, document.getElementsByTagName('head')[0].firstChild);break;
	case 'next' : document.getElementById('nav_js').parentNode.insertBefore(f$_bootstrap_link, document.getElementById('nav_js').nextSibling);break;
	case 'end' : document.getElementsByTagName('head')[0].appendChild(f$_bootstrap_link);break;
}				
console.log('Ok bootstrap.min.css');


var f$_video_js = true;
