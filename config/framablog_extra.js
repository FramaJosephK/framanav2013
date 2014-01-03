// Ajout checkbox
f$('#c_content').parent('.textarea').after('<p style="display:none"><input type="checkbox" value="false" id="fs_opt-in" /> Je souhaite m\'abonner à la newsletter</p>');

// Juste un effet pour afficher l'opt-in quand l'adresse est valide
f$('#c_mail').focusout(function() {
    if(f$_isValidEmail(f$('#c_mail').val())) {
        f$('#fs_opt-in').parent('p').show();
    }
});

// Requête ajax crossdomain lorsque la case est cochée
f$('#fs_opt-in').on('click', function() {
    f$_email = f$('#c_mail').val();//f$('input[name="email"]').val();//
    if(f$_isValidEmail(f$_email)) {
        f$.ajax({
            type: "POST",
            url: 'http://asso.framasoft.org/php_list/lists/?p=subscribe&id=3',
            crossDomain:true,
            data: 'makeconfirmed=0&htmlemail=0&list%5B1%5D=signup&listname%5B1%5D=test&email='+f$_email.replace('@','%40')+'&VerificationCodeX=&subscribe=test',
        });
        f$('#fs_opt-in').parent('p').remove();
        f$('#c_content').parent('.textarea').after('<div class="alert alert-success fade in">'+
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+
            'Votre adresse email <strong>'+f$_email+'</strong> a été ajoutée.</div>');
            console.log('L\'adresse '+f$_email+' a été ajoutée.');   
    }
});

function f$_isValidEmail(emailAddress) {
    var pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);    
    if (pattern.test(emailAddress)==true) {
        return true;
    } else {
	   return false;
    }    
}
