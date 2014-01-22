var f$_config = 'local';

var f$_alert_text = '';

var f$_url = window.location.href;
if(f$_url.indexOf('/asso/') > -1) {
  // Sur la page d'accueil de test
  var f$_extra_css_link = document.createElement('link');
      f$_extra_css_link.rel = "stylesheet";
      f$_extra_css_link.media="screen";
      f$_extra_css_link.href= f$_nav+"config/wiki2.framasoft_extra.css";
  document.getElementById('nav_js').parentNode.insertBefore(f$_extra_css_link, document.getElementById('nav_js').nextSibling);

} else {
  var f$_nav_extra_css = true;
}
            
