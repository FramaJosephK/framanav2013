var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_url = window.location.href;
if(f$_url.indexOf('framindmap.html') > -1) {
// Si on n'est dans framindmap
  var f$_nav_extra_css = true;

// Force la désactivation des fenêtres modales, du bandeau et du macaron
  var f$_alert_text = '';
  var f$_alert_modal_text = '';
  var f$_modal_don_liendl = '';
  var f$_donate = false;

} else {

// Si on est sur la page d'accueil
  var f$_modal_don_txtdl1 = 'd\'utiliser';
  var f$_modal_don_txtdl2 = 'créer une carte mentale';
  var f$_modal_don_liendl = 'a.btn-large[href*="/framindmap.html"]';
  
  var f$_video_js = true;

}
