var f$_config = 'local';

var f$_url = window.location.href;
if(f$_url.indexOf('/accueil') > -1) {
// Sur la page d'accueil de test

var f$_bootstrap_css = false;

var f$_bootstrap_link = document.createElement('link');
    f$_bootstrap_link.rel = "stylesheet";
    f$_bootstrap_link.media="screen";
    f$_bootstrap_link.href= f$_nav+"lib/bootstrap/css/bootstrap.min.css";    

switch (f$_css_position) {
	case 'start' : document.getElementsByTagName('head')[0].insertBefore(f$_bootstrap_link, document.getElementsByTagName('head')[0].firstChild);break;
	case 'next' : document.getElementById('nav_js').parentNode.insertBefore(f$_bootstrap_link, document.getElementById('nav_js').nextSibling);break;
	case 'end' : document.getElementsByTagName('head')[0].appendChild(f$_bootstrap_link);break;
}				
console.log('Test bootstrap.min.css');


}

if(f$_url.indexOf('/bot') > -1) {
	// Force la désactivation des fenêtres modales, du bandeau et du macaron
	var f$_alert_text = '';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
  	var f$_donate = false;
}
