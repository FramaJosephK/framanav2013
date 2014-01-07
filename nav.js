var f$_site = window.location.host
f$_site = f$_site.replace(/^(www|test)\./i,"");
f$_site = f$_site.replace(/\.(com|net|org)$/i,"");

var f$_nav_js = document.getElementById('nav_js').src;
var f$_nav = f$_nav_js.replace('nav.js',''); // = 'http://'+f$_site+'/nav/';

// console n'existe pas sur IE8
(function() {
  if (!window.console) {
    window.console = {};
  }
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = function() {};
    }    
  } 
})();

var f$_not_in_frame = (top.location==self.document.location); // Pas dans une Frame
console.log('Not in frame ? '+f$_not_in_frame);
/**
 * f$() = jQuery() = $()
 * f$_  = variables ou fonctions
 * f$   = free $oftware = frama$oft :P
 **/

var f$_start_global_config = function() {
	if (f$_config == 'global') {
		console.log('Ok config.js');
		f$_loadScript(f$_nav+'config/'+f$_site+'.js', f$_start_local_config);
	} else {
		console.error('config.js');
	}
};

var f$_start_local_config = function() {
	if (f$_config == 'local') {
		console.log('Ok '+f$_site+'.js');
		if (f$_jquery == 'jQuery') {
			if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.10.2') {
				console.log('jQuery chargé par AJAX - Mode isolé');
				f$_loadScript(f$_nav+'lib/jquery/jquery.min.js', f$_start_jquery);
			} else {
				console.log('jQuery chargé par HTML');
				f$_start_jquery();
			}				
		} else {
			if (window.fQuery === undefined) {
				console.log('fQuery chargé par AJAX - Mode isolé');
				f$_loadScript(f$_nav+'lib/jquery/fquery.min.js', f$_start_jquery);
			} else {
				console.log('fQuery chargé par HTML');
				f$_start_jquery();
			}
		}
	} else {
		console.error(f$_site+'.js');
	}
}


f$_loadScript(f$_nav+'config/config.js', f$_start_global_config);


function f$_start_jquery() {
	console.log('Ok '+f$_jquery);
	if (f$_jquery == 'jQuery') {
		var f$ = (f$_jquery_noconflict) ? jQuery.noConflict() : jQuery;
	} else {
		var f$ = (f$_jquery_noconflict) ? fQuery.noConflict() : fQuery;
	}
	
	// On charge bootstrap css d'abord sans attendre le DOM (à l'ancienne, sans jquery)
	if (f$_bootstrap_css) {
		var f$_bootstrap_link = document.createElement('link');
		f$_bootstrap_link.rel = "stylesheet";
		f$_bootstrap_link.media="screen";
		f$_bootstrap_link.href= f$_nav+"lib/bootstrap/css/bootstrap.min.css";    

		switch (f$_css_position) {
			case 'start' : document.getElementsByTagName('head')[0].insertBefore(f$_bootstrap_link, document.getElementsByTagName('head')[0].firstChild);break;
			case 'next' : document.getElementById('nav_js').parentNode.insertBefore(f$_bootstrap_link, document.getElementById('nav_js').nextSibling);break;
			case 'end' : document.getElementsByTagName('head')[0].appendChild(f$_bootstrap_link);break;
		}
		console.log('Ok bootstrap.min.css');
	} else {
		console.info('bootstrap.min.css désactivé');
	}
	
	f$(document).ready(function() {
		// On charge ensuite le code HTML
		f$.ajax({
			url: f$_nav+'nav.html',
			cache: f$_cache
		})
		.fail(function() {
			console.error('nav.html');
		})			
		.done(function(html) {				
			// Import de nav.css
			f$('script[src$="nav/nav.js"]').after('<link rel="stylesheet" type="text/css" href="'+f$_nav+'nav.css" />');
			console.log('Ok nav.css');
			
			// On ajoute le viewport si Responsive
			if (f$_responsive) {
				f$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');				
				console.log('Ok Responsive activé');
			} else {
				console.info('Responsive désactivé');
			}
			
			// On affiche le code html
			f$('body').prepend(html); console.log('Ok nav.html');
			// Correctif sur les url relatives (les images) dans le code html
			f$('img[src^="nav/"]').each(function(){
				link=f$(this).attr('src');
				f$(this).attr('src',link.replace('nav/',f$_nav));
			});
		
			if (f$_bootstrap_js) {
				if (typeof f$().modal == 'function') { 
					console.log('Ok Bootstrap actif (html)');
					go_BootStrap();
				} else {
					console.log('Ok Bootstrap actif (ajax)');
					if (f$_jquery == 'jQuery') {
						f$.getScript(f$_nav+'lib/bootstrap/js/bootstrap.min.js', function() {
							console.log('Ok bootstrap.min.js');
							go_BootStrap();
						});
					} else {
						f$.getScript(f$_nav+'lib/bootstrap/js/fbootstrap.min.js', function() {
							console.log('Ok fbootstrap.min.js');
							go_BootStrap();
						});
					}
				}
			} else {
				console.info('bootstrap.min.js désactivé');
			}
			
			
			// Audio JS
			if (f$_audio_js) {
				f$('audio').each(function() {
					f$(this).wrap('<div class="audio" />');
    					var outer = this.outerHTML;
					var regex = new RegExp('<' + this.tagName, 'i');
    					var newTag = outer.replace(regex, '<video');
				        regex = new RegExp('</' + this.tagName, 'i');
    					newTag = newTag.replace(regex, '</video');
					f$(this).replaceWith(newTag);
				});
			}
			
			// Video JS
			if (f$_video_js) {
				f$('#nav_js').after('<link rel="stylesheet" type="text/css" href="'+f$_nav+'lib/video-js/video-js.css" />');
				console.log('Ok video-js.css');
				f$('video').attr({
					'class':'video-js vjs-default-skin',
					'data-setup':'{}'});
				f$.getScript(f$_nav+'lib/video-js/video.js', function() {
					console.log('Ok video.js');
					videojs.options.flash.swf = f$_nav+'lib/video-js/video-js.swf';
				});
			}
			
			/** On peut ajouter des scripts jQuery "génériques" ici mais... **/
			
			function go_BootStrap() {
			if (f$_not_in_frame) { // Pas de bandeau, nav, modale et macaron en mode iframe
				f$('#framanav').fadeIn('slow');
				
				// if(f$_nav_static) f$('#framanav').css('position','fixed'); 
				
				/** ... on ajoute surtout les scripts qui font appel à BootStrap et jQuery ici **/
				// Liens de la nav à ouvrir dans un onglet
				f$('#framanav .dropdown-menu a, #framanav .navbar-brand, #framanav .nous_soutenir').attr('target','_blank');
				
				// Liens rajoutés sur titre et description des popovers (ergonomie écrans tactiles)
				f$('a[rel="popover"]').each(function() {
					text = f$(this).attr('data-content');
					title = f$(this).attr('title');
					link = f$(this).attr('href');
					f$(this).attr({
						'data-content':'<a href="'+link+'" target="_blank">'+text+'</a>',
						'title':'<a href="'+link+'" target="_blank">'+title+'</a>'
					});
				});
				
				// Activation des popovers
				f$('a[rel="popover"]').popover({
					html: true,
					trigger: 'hover'
				});
				
				// Fenêtre modale et bandeau d'alerte
				var f$_alert_dejavu = getCookie('nav-alert');
				var f$_alert_modal_dejavu = getCookie('nav-alert-modal');
				f$_alert_more = '';
				
				// Ajout de la fenêtre modale
				if (f$_alert_modal_text!='') {
					f$('body').append(
					'<div class="modal fade" id="modal-alert">'+
						'<div class="modal-dialog">'+
							'<div class="modal-content">'+
								'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
									'<h3>'+f$_alert_modal_title+'</h3>'+
								'</div>'+
								'<div class="modal-body">'+f$_alert_modal_text+'</div>'+
								'<div class="modal-footer">'+
									'<button class="btn" id="modal-close" data-dismiss="modal" aria-hidden="true">Fermer</button>'+
								'</div>'+
							'</div>'+
						'</div>'+	
					'</div>');
					if(f$_alert_modal_btn) {
						f$_alert_more = ' <button type="button" id="nav-alert-more" class="btn btn-'+f$_alert_type+' btn-xs">plus d\'infos</button>';
					}
					
					if(!f$_alert_modal_dejavu && f$_alert_modal_onstart) {
						f$('#modal-close').after('<button class="btn btn-primary" id="modal-set-cookie" >Ne plus afficher</button>')
						f$('#modal-alert').modal('show');
						f$('#modal-set-cookie').click(function() {
							setCookie('nav-alert-modal',true,f$_alert_cookie); // cookie pour 7 jours par défaut (cf config.js)
							f$('#modal-alert').modal('hide');
						});
					}
					f$('#modal-alert .close, #modal-close').click(function() {
						setCookie('nav-alert-modal',true); // cookie pour la session
						f$('#modal-alert').modal('hide');
					});
				}
				
				// Ajout du bandeau d'alerte
				if (f$_alert_text!='' && !f$_alert_dejavu) {
					
					f$('#framanav').after(
						'<div id="nav-alert" class="alert alert-'+f$_alert_type+' fade in" style="border-radius:0">'+
							'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+
							'<p style="text-align:center">'+f$_alert_text+f$_alert_more+'</p>'+
						'</div>'
					);
					
					// Cookie enregistré en fermant (7 jours par défaut cf config.js)
					f$('#nav-alert').bind('closed.bs.alert', function () {
						setCookie('nav-alert',true,f$_alert_cookie);
					});
					
					// Ouvrir la modal sur "plus d'info"
					f$('#nav-alert-more').click(function() {
						f$('#modal-alert').modal('show');
					});
				}
			
				// Fenêtre modal pour dons sur téléchargements
				if (f$_modal_don_liendl!='') {
					f$('body').append(
					'<div class="modal fade" id="modal-soutenir">'+
						'<div class="modal-dialog">'+
							'<div class="modal-content">'+
								'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
									'<h3>Soutenez Framasoft</h3>'+
								'</div>'+
								'<div class="modal-body">'+
									'<img src="http://soutenir.framasoft.org/files/lldemars-framasoft.png" style="float:right;width:150px;margin-left:15px" alt="" />'+
									'<p>Vous êtes sur le point '+f$_modal_don_txtdl1+' une ressource <b>libre</b> issue de la vingtaine de projets du réseau Framasoft.</p>'+
									'<p>Cette ressource est <b>gratuite</b> (et le sera tant que nous existerons) parce que <b>Framasoft est une association d\'intérêt général à but non lucratif</b> dont l\'objectif est justement la diffusion du logiciel libre et sa culture au plus large public.'+
									'<p>Mais tout ceci est rendu possible parce que Framasoft est <b>soutenue par les dons (défiscalisables) de ses utilisateurs</b>.</p>'+
									'<p>Merci de prendre quelques minutes en nous aidant à pérenniser et développer notre action.</p>'+
								'</div>'+
								'<div class="modal-footer">'+
									'<div style="width:100%; float:left; text-align:center"><a target="_blank" id="modal-don" href="http://soutenir.framasoft.org/?f=modal&s='+f$_site+'" style="color:white;margin:5px" class="btn btn-large btn-success">Je veux faire un don à l\'association Framasoft</a></div>'+
								//  '<div style="width:50%; float:left; text-align:center"><a target="_blank" id="modal-contact" href="http://contact.framasoft.org/?f=modal&s='+fsite+'"  style="color:white;margin:5px" class="btn btn-large btn-info">Je veux participer. Par où on commence ?</a></div>'+
									'<p style="clear:left;text-align:right"><a id="modal-dl" href="javascript:void(0);" class="text-warning" >Non merci, je souhaite seulement '+f$_modal_don_txtdl2+'</a></p>'+
								'</div>'+
							'</div>'+
						'</div>'+	
					'</div>');
					f$(f$_modal_don_liendl).click(function() {
						var dejavu = getCookie('dondl')
						if(!dejavu) {
							link=f$(this).attr('href');
							f$('#modal-soutenir').modal('show');
							f$('#modal-contact, #modal-don, #modal-dl').click(function() {
								setCookie('dondl',true,f$_modal_don_cookie)
								f$('#modal-soutenir').modal('hide');
								window.location.href = link;
							});
						return false;
						}
					});
				}
				
				// Opt-in
				if (f$_email_field1!='') {
					f$(f$_email_field1).after('<div class="alert alert-info fade in" id="fs_opt-in" style="display:none"><input type="checkbox" value="false" /> J\'accepte de recevoir à cette adresse des informations de la part de Framasoft<br /><small>(Framasoft s\'engage bien évidement à ne pas transmettre votre adresse à des tiers)</small></div>');

					// Juste un effet pour afficher l'opt-in quand l'adresse est valide
					f$(f$_email_field1).focusout(function() {
						if(f$_email_field2!='') { // Cas où il y a un champs pour confirmer email
							if(f$_isValidEmail(f$(f$_email_field1).val()) && f$(f$_email_field1).val()==f$(f$_email_field2).val()) {
								f$('#fs_opt-in').fadeIn('slow');
							}
						} else { // Cas où il y en a pas
						   if(f$_isValidEmail(f$(f$_email_field1).val())) {
								f$('#fs_opt-in').fadeIn('slow');
						   }
						}
					});

					// Requête ajax crossdomain lorsque la case est cochée
					f$('#fs_opt-in input').on('click', function() {
						f$_email = f$(f$_email_field1).val();
						if(f$_isValidEmail(f$_email)) {
							f$.ajax({
								type: "POST",
								url: 'http://asso.framasoft.org/php_list/lists/?p=subscribe&id=3', // URL d'abonnement à la liste
								crossDomain:true,
								data: 'makeconfirmed=1&htmlemail=0&list%5B1%5D=signup&listname%5B1%5D=test&email='+f$_email.replace('@','%40')+'&VerificationCodeX=&subscribe=test', // Paramètres habituellement passés dans le formulaire
							});
							// On supprime la case à cocher (pas possible de décocher ; l'annulation se fait depuis le mail reçu)
							f$('#fs_opt-in').remove();
							// Message d'alert pour confirmer l'inscription
							f$(f$_email_field1).after('<div class="alert alert-success fade in">'+
								'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+
								'Votre adresse email <strong>'+f$_email+'</strong> a été ajoutée à notre liste. Vous devriez recevoir un email de confirmation.</div>');
						}
					});
				}
				
				// Macaron
				if(f$_donate) {
					f$('#framanav_donation').show();
					p_donationsTimer(false)
				}
			}
					
				if(f$_nav_extra_js) {
					f$.getScript(f$_nav+'config/'+f$_site+'_extra.js', function() {
						console.log('Ok extra.js');
					});
				}
				if(f$_nav_extra_css) {
					f$('script[src$="nav/nav.js"]').after('<link rel="stylesheet" type="text/css" href="'+f$_nav+'config/'+f$_site+'_extra.css" />');
					console.log('Ok extra.css');
				}
			}
		});
	});
}

/************** Fonctions globales ****************/
function p_donationsTimer(t) {
	if(f$_jquery=='jQuery') {
		if (t) jQuery('#framanav_donation').fadeOut(600).fadeIn(600);
	} else {
		if (t) fQuery('#framanav_donation').fadeOut(600).fadeIn(600);
	}
	t = f$_donate_blink_time + Math.floor(Math.random()*f$_donate_blink_time); 
	setTimeout('p_donationsTimer(1)',t);
}

function setCookie(sName, sValue, sTime) {
    sTime = typeof sTime !== 'undefined' ? sTime : 365*24*60*60*1000;
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + sTime);
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sName) {
	var oRegex = new RegExp("(?:; )?" + sName + "=([^;]*);?");
	if (oRegex.test(document.cookie)) {
		return decodeURIComponent(RegExp["$1"]);
	} else {
		return null;
	}
}			

function addScript(filename) {
	var add_script = document.createElement('script')
	add_script.setAttribute("type","text/javascript")
	add_script.setAttribute("src", filename)
	if (typeof add_script!="undefined")
		document.getElementsByTagName("head")[0].appendChild(add_script)
}

// Fonction pour ajouter les scripts au head et vérifier le chargement
function f$_loadScript(url, callback, forceCallback) {
	if (!this.loadedScript) {
		this.loadedScript = new Array();
	}
  
	// indexOf n'existe pas pour IE8
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0)
			 ? Math.ceil(from)
			 : Math.floor(from);
		if (from < 0)
		  from += len;
		for (; from < len; from++) {
		  if (from in this &&
			  this[from] === elt)
			return from;
		}
		return -1;
		};
	}
	// fin teste indexOf
  
  
	if (this.loadedScript.indexOf(url) == -1) {
		this.loadedScript.push(url);
		var e = document.createElement("script");
		e.src = url;
		e.type = "text/javascript";
		e.charset ="utf-8";
		if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
		// IE
		e.onreadystatechange = function(){
			if (this.readyState == 'loaded') {
			callback();
			}
		}
		} else {
		// Other browsers
			e.onload = callback;
		}
		document.getElementsByTagName("head")[0].appendChild(e);
	} else {
		if (forceCallback) { // pas utilisé
			callback();
		}
	}
}

function f$_isValidEmail(emailAddress) {
    var pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);    
    if (pattern.test(emailAddress)==true) {
        return true;
    } else {
	   return false;
    }    
}
