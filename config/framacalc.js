var f$_config = 'local';

var f$_url = window.location.href;
if(f$_url.indexOf('framacalc.org/_start') > -1) {
// Si on est sur la page d'accueil
 var f$_modal_don_txtdl1 = 'd\'utiliser';
 var f$_modal_don_txtdl2 = 'créer un calc';
 var f$_modal_don_liendl = 'a.btn-large[href*="/_new"]';
 
} else {
 var f$_jquery ='fQuery';
// Si on n'est dans ethercalc
  if (f$_not_in_frame) {
    var f$_nav_extra_css = true;
  } else {
    var f$_bootstrap_css = false;
  }

// Force la désactivation des fenêtres modales, du bandeau et du macaron
  var f$_alert_text = '';
  var f$_alert_modal_text = '';
  var f$_modal_don_liendl = '';
  var f$_donate = false;
}



