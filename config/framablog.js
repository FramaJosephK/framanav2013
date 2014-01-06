var f$_config = 'local';

var f$_jquery = 'fQuery';

var f$_video_js = true;


// Sous-titres dans les vidéos (jQuery 1.4.2 est déjà présent sur le framablog)
jQuery(document).ready(function() {
  jQuery('video').each(function(){
    id = jQuery(this).attr('id').replace('k-','');
    jQuery(this).children('track').attr('src','http://www.framablog.org/public/playk/cache/'+id+'/fr.vtt');
  });
});

// Tests
// Opt-in
var f$_url = window.location.href;
if(f$_url.indexOf('no-es-una-crisis-documentaire-libre') > -1) {
// Si on est sur no-es-una-crisis
  var f$_nav_extra_js = true;
}

// Audio JS
var f$_url = window.location.href;
if(f$_url.indexOf('preview/josephk') > -1) {
  var f$_audio_js = true;
}
