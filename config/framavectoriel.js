var f$_config = 'local';

var f$_jquery = 'fQuery';

if(window.location.indexOf('svg-editor') > -1) {
// Si on n'est dans svg-editor
var f$_extra_css = true;
} else {
// Si on est sur la page d'accueil
var f$_alert_type = 'info'; 
var f$_alert_text = '<p style="text-align:center"><strong>Attention</strong> Le logiciel ne fonctionne malheureusement plus correctement sur Firefox à partir de la version 23.</p>';
}

var f$_modal_don_txtdl1 = 'd\'utiliser';
var f$_modal_don_txtdl2 = 'créer une image';
var f$_modal_don_liendl = 'a.btn-large[href*="/svg-editor.html"]';
