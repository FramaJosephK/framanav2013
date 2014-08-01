var f$_config = 'local';

var f$_jquery = 'fQuery';

if (f$_not_in_frame) {
  var f$_extra_css = true;
} else {
  var f$_bootstrap_css = false;
}

// Force la désactivation des fenêtres modales, du bandeau et du macaron
var f$_alert_text = '';
var f$_alert_modal_text = '';
var f$_modal_don_liendl = '';
var f$_donate = false;

/** Piwik **/
var _paq = _paq || [];
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);

(function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://stats.framasoft.org/";
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", "4"]);
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
})();
/** Fin Piwik **/
