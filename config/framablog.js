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
