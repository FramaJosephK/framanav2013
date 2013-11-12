var f$_config = 'local';

// Popup de don
var f$_modal_don_liendl = 'a[href*="files.framakey.org"]';

// Alertes
var f$_alert_type = 'don';

var f$_rand = Math.random();
if (f$_rand < .5){
var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">Framasoft - Campagne 2013 - « Moins de Google / Plus de Libre »</p>'+
					'<p>Depuis 12 ans, Framasoft promeut le Libre. '+
					'Une communauté de bénévoles et 3 salariés mènent une vingtaine de projets, des actions et évènements... '+
					'Tous avec un meme objectif : l\'éducation populaire vers plus de Libre.</p>'+
					'<p>Votre don (défiscalisable) nous aidera à nous libérer de Google (pub, analytics, gmail...) et à developper des alternatives libres et respectueuses tel le Framacloud (framapad, framadate, framacalc...)</p>'+
					'<p style="font-weight:bold; text-align:center">Merci de votre soutien <a href="http://soutenir.framasoft.org/?f=bandeau1">soutenir.framasoft.org</a></p></div>';
} else {
var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">Framasoft - Campagne 2013 - « Moins de Google / Plus de Libre »</p>'+
					'<p>Framasoft  s\'efforce de faire connaître et  promouvoir le « Libre » depuis 12 ans. '+
					'Nous poursuivons cet objectif d\'éducation populaire avec plus d\'une vingtaine de projets menés par une communauté de bénévoles et trois  salariés.</p>'+
					'<p>Avec votre don (défiscalisable) vous permettrez de poursuivre ces actions.</p>'+
					'<p>Aidez-nous  à nous libérer de Google (pubs, analytics, gmail…) et nous vous  proposerons davantage d\'alternatives libres et respectueuses comme celles du « Framacloud » (Framapad, Framadate, Framacalc…)</p>'+
					'<p style="font-weight:bold; text-align:center">Merci de votre soutien <a href="http://soutenir.framasoft.org/?f=bandeau2">soutenir.framasoft.org</a></p></div>';
}

var f$_donate = false;
