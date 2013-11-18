var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_url = window.location.href;
if(f$_url.indexOf('svg-editor') > -1) {
// Si on n'est dans svg-editor
var f$_nav_extra_css = true;
var f$_donate = false;
} else {
// Si on est sur la page d'accueil
var f$_alert_type = 'info'; 
var f$_alert_text = '<p style="text-align:center"><strong>Information</strong> : Framavectoriel a été mis à jour (<a href="https://code.google.com/p/svg-edit/">version 2.6 de SVG-Edit</a>) et fonctionne de nouveau avec les versions récentes de Firefox.</p>';
}

var f$_modal_don_txtdl1 = 'd\'utiliser';
var f$_modal_don_txtdl2 = 'créer une image';
var f$_modal_don_liendl = 'a.btn-large[href*="/svg-editor.html"]';
