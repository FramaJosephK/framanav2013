var f$_config = 'local';

// Opt-in
var f$_email_field1 = '#email_auteur';

// Bandeau APRIL
var f$_url = window.location.href;
if(f$_url == 'http://www.framasoft.net/' || f$_url.indexOf('framasoft.net/accueil') > -1) {
  var f$_alert_type = 'info';
  var f$_rand = Math.random();
	if (f$_rand < .5){
  // April
    var f$_alert_text =
  '<div style="text-align:center"><a href="http://april.org/campagne">'+
  '<img width="580" height="76"'+
  'src="http://april.org/campagne/images/priorite-logiciel-libre-je-soutiens-april.png"'+
  'alt="Priorité au Logiciel Libre! Je soutiens l’April." />'+
  '</a></div>';
	} else {
  // Racketiciel
    var f$_alert_text =
  '<div style="text-align:center"><a href="http://racketware.info/petition/click/fr">'+
  '<img width="580" height="76"'+
  'src="https://lut.im/7hdUqDi1/l4HdUJqf"'+
  'alt="Informatique : choisissez avant de payer, signez la pétition !" title="Informatique : choisissez avant de payer, signez la pétition !" />'+
  '</a></div>';
	}
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
