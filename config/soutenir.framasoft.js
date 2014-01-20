var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_css_position = 'end';   

var f$_nav_extra_css = true;

// Force la désactivation des fenêtres modales, du bandeau et du macaron
var f$_alert_text = '';
var f$_alert_modal_text = '';
var f$_modal_don_liendl = '';
var f$_donate = false;

// Opt-in
var f$_url = window.location.href;
if(f$_url.indexOf('add/temoignage') > -1) {
  f$_email_field1 = '#edit-field-t-email-0-value';
}
