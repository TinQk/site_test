
// changer le titre h1
var monTitre = document.querySelector('h1');
monTitre.textContent = 'ca a été changé avec le js ;)' ;



// ajout d'un popup quand on clique sur le titre
monTitre.onclick= function(){
  alert('Aie Ouille stop !');
}



// changer l'image de mario quand on passe dessus avec la souris

var monImage = document.querySelector('img');

monImage.onmouseover = function() {
    var monSrc = monImage.getAttribute('src');
    if(monSrc === 'pictures/mario.png'){
      monImage.setAttribute ('src','pictures/boo.png');
    }
    else {
      monImage.setAttribute ('src','pictures/mario.png');
    }
}
