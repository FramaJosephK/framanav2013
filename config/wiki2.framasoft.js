var f$_config = 'local';

var f$_alert_text = '';

// Extra CSS sans attendre chargement du DOM (à intégrer dans nav.js faire de même avec nav.css)
var f$_extra_css_link = document.createElement('link');
    f$_extra_css_link.rel = "stylesheet";
    f$_extra_css_link.media="screen";
    f$_extra_css_link.href= f$_nav+"config/wiki2.framasoft_extra.css";
document.getElementById('nav_js').parentNode.insertBefore(f$_extra_css_link, document.getElementById('nav_js').nextSibling);

