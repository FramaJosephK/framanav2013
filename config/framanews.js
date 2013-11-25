var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_url = window.location.href;
if(f$_url.indexOf('framanews.org/ttrss') > -1) {
// Si on n'est dans ttrss
//  var f$_nav_extra_css = true;

// Force la désactivation des fenêtres modales, du bandeau et du macaron
  var f$_alert_text = '';
  var f$_alert_modal_text = '';
  var f$_modal_don_liendl = '';
  var f$_donate = false;

}
