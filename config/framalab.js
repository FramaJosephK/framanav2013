var f$_config = 'local';

var f$_url = window.location.href;
if(f$_url.indexOf('/accueil') > -1) {
// Sur la page d'accueil de test

}

if(f$_url.indexOf('/bot') > -1) {
	// Force la désactivation des fenêtres modales, du bandeau et du macaron
	var f$_alert_text = '';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
  	var f$_donate = false;
}
if(f$_url.indexOf('/accueil') > -1) {
	// Force la désactivation des fenêtres modales, du bandeau et du macaron
	var f$_alert_type = 'info';
	var f$_alert_text = 
		'<div style="text-align:center"><a href="http://april.org/campagne">'+
		'<img width="580" height="76"'+
			'src="http://april.org/campagne/images/priorite-logiciel-libre-je-soutiens-april.png"'+
			'alt="Priorité au Logiciel Libre! Je soutiens l’April." />'+
		'</a></div>';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
 // 	var f$_donate = false;
}
