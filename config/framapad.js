var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_css_position = 'end';	

/*
var f$_modal_don_txtdl1 = 'd\'utiliser';
var f$_modal_don_txtdl2 = 'créer un pad';
var f$_modal_don_liendl = 'a[href*=".framapad.org/p/"]';
*/

var f$_alert_type = 'warning'; // warning = jaune ; danger = rouge ; info = bleu ; success = vert
var f$_alert_cookie = 24*60*60*1000;	// durée d'expiration du cookie en milliseconde
var f$_alert_text = '<p style="max-width:900px; font-weight:bold; margin:0 auto; text-align:center">Soutenez <a href="http://www.ulule.com/etherpad-framapad">la campagne de financement participatif « MyPads »</a>, lancée par Framasoft,<br />'+
                    ' pour la création d’un formidable plugin pour Etherpad/Framapad !<p>';	

var f$_alert_modal_title = 'Ensemble, améliorons Framapad !';
var f$_alert_modal_text = '<p>Framasoft est à l’initiative d’un <strong>financement participatif</strong> ayant pour objectif d’ajouter un plugin au logiciel <strong>Etherpad</strong> afin de bénéficier d’une gestion pérenne des <strong>pads, groupes et comptes privés</strong>.</p>'+
    '<p><a href="http://www.ulule.com/etherpad-framapad" style="float:right"><img alt="" src="data:image/jpeg;base64,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" /></a>'+
    '<br />Pour faire exister cette future application libre, rendez vous sur <strong><a href="http://www.ulule.com/etherpad-framapad">le site de la campagne</a></strong>.</p>'+
    '<br /><p>Merci d’avance.</p>';


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
