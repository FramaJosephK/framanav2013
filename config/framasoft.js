var f$_config = 'local';

// Opt-in
var f$_email_field1 = '#email_auteur';

// Bandeau APRIL
var f$_url = window.location.href;
if(f$_url == 'http://www.framasoft.net/' || f$_url.indexOf('framasoft.net/accueil') > -1) {
  var f$_alert_type = 'info';
  var f$_rand = Math.random();
	
  // CLibre.eu
    var f$_alert_text =
  '<div style="text-align:center"><a href="http://fr.ulule.com/adopte-le-libre/">'+
  '<img width="468" height="60"'+
  'src="http://www.clibre.eu/wp-content/uploads/cLibre.eu-banniere-campagne.gif"'+
  'alt="Campagne de don CLibre.eu" />'+
  '</a></div>';
}


/** Piwik **/
var _paq = _paq || [];
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);

(function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://stats.framasoft.org/";
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", "1"]);
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
})();
/** Fin Piwik **/
