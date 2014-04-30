var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_alert_text = '';

// Extra CSS sans attendre chargement du DOM (à intégrer dans nav.js faire de même avec nav.css)
var f$_extra_css_link = document.createElement('link');
    f$_extra_css_link.rel = "stylesheet";
    f$_extra_css_link.media="screen";
    f$_extra_css_link.href= f$_nav+"config/wiki.framasoft_extra.css";
document.getElementById('nav_js').parentNode.insertBefore(f$_extra_css_link, document.getElementById('nav_js').nextSibling);

/** Piwik **/
var _paq = _paq || [];
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);

(function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://stats.framasoft.org/";
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", "15"]);
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
})();
/** Fin Piwik **/
