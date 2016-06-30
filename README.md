# Création d'un site web basé sur une liste de films

## Fonctionnement du site
<ul>Nos pages
  <li> Page d'accueil contenant la liste de tous les films <li>
  <li> Panier <li>
<ul>  


## Nos pages
  <li> Page d'accueil contenant la liste de tous les films </li>
  <li> Panier contenant nos films favoris (panier) </li>


## Nos fonctionnalités
  <li> Ajout des films dans notre panier </li>
  <li> Supression des films de notre panier </li>
  <li> Vu des détails des films présents dans notre panier </li>
  
  
## Problèmes rencontrés
###Impossible de lancer le serveur (une de nous deux)
>Nous avons travaillés sur une machine (celui de Elodie) car Flavienne a rencontré un problème (impossible de démarrer le serveur et d'installer la dépendance Bower. mahleureusement nous n'avons pu résoudre ce soucis ce qui nous a pénalisé sur la gestion de notre travail en groupe).
>Donc une de nous pouvait lancer le serveur et voir les modifications apportés en local.

### LocalStorage supression d'un item
>Nous avons eu du soucis à supprimer un élément présent dans le localStorage (Panier) car le localstorage doit être synchroniser avec une seule liste. 
>L'erreur commise fut de créer deux listes accessibles seulement dans les services et non dans le scope de l'application.
>Pour corriger cela, nous avons utiliser le debugger pour comprendre le fonctionnement de notre fonction lors de la supression d'un élément. Et de là nous avons découvert que notre liste était modifiée et non la liste présente dans LocalStorage.
>Il a falllu créer une fonction qui charge les données de localStorage vers une liste accessible dans toute l'application. Donc nous pouvons l'utiliser, la modifier et apres l'enregisterer dans localStorage. --> PERSISTANCE

### Affichage d'un film sur une page
>Nous avons pensé chercher les informations dans le localStorage pour le détails d'un film passé en paramètre. 
>Après plusieurs tests nous nous sommes rendues comptes que les données devaient provenir du site via l'API et que nous devons passer en paramètre l'Id du film. Ceci a été facile à mettre en place.

### Bouton d'ajout vers panier
>Pour éviter d'avoir plusieurs fois le même film dans le panier, nous avons pensé à cacher le bouton d'ajout vers le panier. Nous avons constaté que le bouton pouvait être caché grâce à une propriété Angular ng-hide. 
>Pour exploiter cette propriété nous avons créé une fonction qui nous retourne un boolean. Le resultat de ce boulean permet de cacher le bouton ajout une fois que le film est présent dans le panier.

