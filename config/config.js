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
var f$_alert_type = 'black'; 					// warning = jaune ; danger = rouge ; info = bleu ; success = vert
var f$_alert_cookie = 7*24*60*60*1000;				// durée d'expiration du cookie en milliseconde
var f$_alert_text =						// /!\ aux \' dans le texte
'<div style="margin:0 auto; max-width:800px;font-weight:bold;">'+
'<p style="font-size:13px">Framasoft s\'associe à la protestation générale des internautes contre '+
'la surveillance massive de nos données révélée par Edward Snowden.<br /> Le '+
'11 février est "la journée de la contre attaque" commémorant les '+
'victoires obtenues contre les lois ACTA, SOPA et PIPA et en souvenir '+
'd\'Aaron Schwartz.</p>'+
'<p style="text-align:center">'+
'<a href="http://www.framablog.org/index.php/post/2014/02/10/the-day-we-fight-back" style="color:#f2c45a;border:none">Participez à la protestation</a>'+
'</p>'+
'</div>';


var f$_alert_modal_btn = false;						// bouton "plus d'info" dans le bandeau pour ouvrir la fenêtre modale
var f$_alert_modal_title = '';						// /!\ aux \' dans le texte
var f$_alert_modal_text = '';						// idem
var f$_alert_modal_onstart = true;					// s'affiche à l'ouverture de la page ?

// Faire un don (macaron)
var f$_donate = true;
var f$_donate_blink_time = 30000;

// Audio JS
var f$_audio_js = false;
// Video JS
var f$_video_js = false;

// Opt-in
f$_email_field1 = '';
f$_email_field2 = '';


