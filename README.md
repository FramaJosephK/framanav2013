framanav2013
============

Barre de navigation commune aux sites du réseau 

Installation
--------------------
1. Se placer en ligne de commande dans le dossier du *site* et importer les fichiers du dépôt
```bash
	cd /home/site/www
	git clone https://github.com/framasoft/framanav2013.git nav
```

2. Créer le fichier config/site.js contenant au moins une ligne 
```JavaScript
	f$_config = 'local';
```
Prendre modèle sur config/config.js pour connaître les paramètres à personnalisables

3. a) Ajouter le script nav.js dans le `<head>` du site où la nav est requise :
```HTML
	<script src="/nav/nav.js" id="nav_js" type="text/javascript"></script>
```
**ne pas oublier id="nav_js"**
 
   b) Ajouter jquery.min.js et bootstrap.min.js avant si nécessaire pour le bon fonctionnement du site
```HTML
	<script src="/nav/lib/jquery/jquery.min.js" type="text/javascript"></script>
	<script src="/nav/lib/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
```
Si jQuery existe déjà sur le site dans une version antérieure à la 1.10.2 et qu'il y a de nombreuses incompatibilités,
mettre dans le fichier de config du site
```JavaScript
	f$_jquery = 'fQuery';
```
	
Note : pour désactiver les éléments de la nav (message d'alerte, fenêtres modales, nav, macaron),
mais profiter tout de même des CSS de bootstrap et de jQuery on peut ajouter ce paramètre au fichier de config :
```JavaScript
	f$_not_in_frame = false;
```

Mises à jour planifiées
--------------------
Editer le crontab de l'utilisateur :
```bash
	(sudo) crontab -u site -e
```
Et ajouter une ligne à la fin
```
	00 4 * * * cd /home/site/www/nav && git pull
```
