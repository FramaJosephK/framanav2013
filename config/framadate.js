var f$_config = 'local';

var f$_modal_don_txtdl1 = 'd\'utiliser';
var f$_modal_don_txtdl2 = 'créer un sondage';
var f$_modal_don_liendl = 'a[href*="./infos_sondage.php?choix_sondage="]';

// Tests
// Opt-in
var f$_url = window.location.href;
if(f$_url.indexOf('infos_sondage.php?fs=test&choix_sondage') > -1) {
  f$_email_field1 = '#formulaire input[name="adresse"]';
}
