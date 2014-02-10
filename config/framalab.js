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
	var f$_alert_type = 'black';
	var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">In celebration of the win against SOPA and PIPA two years ago, and in memory of one of its leaders, Aaron Swartz, we are planning a day of protest against mass surveillance, to take place this <span style="color:#f2c45a; font-size:110%">February 11th</span>.</p></div>';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
 // 	var f$_donate = false;
}
