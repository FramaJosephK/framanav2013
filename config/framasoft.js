var f$_config = 'local';

// Opt-in
var f$_email_field1 = '#email_auteur';

// Bandeau
var f$_url = window.location.href;
if(f$_url == 'http://www.framasoft.net/' || f$_url.indexOf('framasoft.net/accueil') > -1) {


} else {
  // Mise en forme « Juste une image »
  var flickr_t = jQuery('img[src$="_t.jpg"]').attr('src');
  var flickr_m = flickr_t.replace('_t.jpg', '_m.jpg');
  jQuery('img[src$="_t.jpg"]').attr('src', flickr_m).css('width', '90%');
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
