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
	var f$_alert_text = 
		'<div style="margin:0 auto; max-width:800px;font-weight:bold;font-size:13px">'+
			'<p>Framasoft s\'associe à la protestation générale des internautes contre '+
			'la surveillance massive de nos données révélée par Edward Snowden.<br /> Le '+
			'11 février est "la journée de la contre attaque" commémorant les '+
			'victoires obtenues contre les lois ACTA, SOPA et PIPA et en souvenir '+
			'd\'Aaron Schwartz.</p>'+
			'<p style="text-align:center">'+
				'<a href="http://www.framablog.org/index.php/post/2014/02/10/the-day-we-fight-back" style="color:#f2c45a;">Participez à la protestation</a>'+
			'</p>'+
		'</div>';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
 // 	var f$_donate = false;
}
