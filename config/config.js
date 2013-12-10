var f$_config = 'global'; 							// Paramètre pour vérifier si la config est chargée 
													// ("global" ici, "local" sur config par site)
var f$_jquery = 'jQuery'; 							// jQuery ; fQuery ;
var f$_jquery_noconflict = false;

var f$_cache = true;

var f$_bootstrap_js = true;
var f$_bootstrap_css = true;

var f$_css_position = 'start';						// 'start' = head > bootstrap.css > ... > nav.js > ... > /head ;
													// 'next'  = head > ... > nav.js > bootstrap.css > ... > /head ;
													// 'end'   = head > ... > nav.js > ... > bootstrap.css > /head ;

var f$_responsive = true;

var f$_nav_static = false;							// Pas encore implémenté correctement
var f$_nav_extra_css = false;						// nav/config/nom-de-domaine_extra.css
var f$_nav_extra_js = false;						// nav/config/nom-de-domaine_extra.js

// Popup de don
var f$_modal_don_txtdl1 = 'de télécharger';
var f$_modal_don_txtdl2 = 'télécharger';
var f$_modal_don_liendl = '';
var f$_modal_don_cookie = 3*24*60*60*1000;			// durée d'expiration du cookie en milliseconde

// Alertes
var f$_alert_type = 'don'; 						// warning = jaune ; danger = rouge ; info = bleu ; success = vert
var f$_alert_cookie = 7*24*60*60*1000;				// durée d'expiration du cookie en milliseconde
var f$_alert_text = '<div style="margin:0 auto; max-width:800px; text-align:justify"><p style="font-weight:bold">Framasoft - Campagne 2013 - « Moins de Google / Plus de Libre »</p>'+
	'<p>Framasoft s\'efforce de faire connaître et promouvoir le « Libre » depuis 12 ans. '+
	'Nous poursuivons cet objectif d\'éducation populaire avec plus d\'une vingtaine de projets menés par une communauté de bénévoles soutenue par une association qui compte 3 salariés.</p>'+
        '<p>Avec votre don (défiscalisable) vous nous permettez de poursuivre ces actions.</p>'+
        '<p>Aidez-nous à proposer ensemble davantage d\'alternatives libres et loyales comme celles du « Framacloud » (Framapad, Framadate, Framacalc…)</p>'+
        '<p style="font-weight:bold; text-align:center">Merci de votre soutien <a href="http://soutenir.framasoft.org/?f=bandeau">soutenir.framasoft.org</a></p></div>';						// /!\ aux \' dans le texte

var f$_alert_modal_btn = false;						// bouton "plus d'info" dans le bandeau pour ouvrir la fenêtre modale
var f$_alert_modal_title = '';						// /!\ aux \' dans le texte
var f$_alert_modal_text = '';						// idem
var f$_alert_modal_onstart = true;					// s'affiche à l'ouverture de la page ?

// Faire un don (macaron)
var f$_donate = true;
var f$_donate_blink_time = 30000;

// Video JS
var f$_video_js = false;
