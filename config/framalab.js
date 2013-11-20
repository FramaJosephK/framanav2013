var f$_config = 'local';

var f$_url = window.location.href;
if(f$_url.indexOf('/accueil') > -1) {
// Sur la page d'accueil de test
	// Alertes
	var f$_alert_type = 'don';

	var f$_rand = Math.random();
	if (f$_rand < .5){
	var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">Framasoft - Campagne 2013 - « Moins de Google / Plus de Libre »</p>'+
					'<p>Depuis 12 ans, Framasoft promeut le Libre. '+
					'Une communauté de bénévoles et 3 salariés mènent une vingtaine de projets, des actions et des évènements... '+
					'Tous avec un même objectif : l\'éducation populaire vers plus de Libre.</p>'+
					'<p>Votre don (défiscalisable) nous aidera à développer des alternatives libres et respectueuses tel le Framacloud (Framapad, Framadate, Framacalc...)</p>'+
					'<p style="font-weight:bold; text-align:center">Merci de votre soutien <a href="http://soutenir.framasoft.org/?f=bandeau1">soutenir.framasoft.org</a></p></div>';
	} else {
	var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">Framasoft - Campagne 2013 - « Moins de Google / Plus de Libre »</p>'+
					'<p>Framasoft  s\'efforce de faire connaître et promouvoir le « Libre » depuis 12 ans. '+
					'Nous poursuivons cet objectif d\'éducation populaire avec plus d\'une vingtaine de projets menés par une communauté de bénévoles et trois salariés.</p>'+
					'<p>Avec votre don (défiscalisable) vous permettez de poursuivre ces actions.</p>'+
					'<p>Aidez-nous à proposer davantage d\'alternatives libres et loyales comme celles du « Framacloud » (Framapad, Framadate, Framacalc…)</p>'+
					'<p style="font-weight:bold; text-align:center">Merci de votre soutien <a href="http://soutenir.framasoft.org/?f=bandeau2">soutenir.framasoft.org</a></p></div>';
	}

}

if(f$_url.indexOf('/bot') > -1) {
	// Force la désactivation des fenêtres modales, du bandeau et du macaron
	var f$_alert_text = '';
  	var f$_alert_modal_text = '';
  	var f$_modal_don_liendl = '';
  	var f$_donate = false;
}
