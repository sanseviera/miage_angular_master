# Projet Angular Master - Application de gestion des devoirs (Assignments)

<t>Nom : BREZZO</t>\
<t>Prenom : Jérémie</t>

<t>Nom : BORRENI</t>\
<t>Prenom : Théo</t>

## Comment utiliser l'application
Il suffit d'ouvrir le lien ci-dessous, les mots de passe sont détaillés plus bas dans la section "Notes supplémentaire".

## Liens du site web
https://angular-280n.onrender.com/

## Liens de la vidéo Youtube 
https://www.youtube.com/watch?v=rcy8KBR8c9o

## Pour construire et lancer le serveur localement voici les commandes
* `ng serve` ensuite, il faut sur un moteur de recherche entrer l'URL suivante `http://localhost:4200/`.
* `ng serve --open` avec ce paramètre une page web avec comme URL `http://localhost:4200/` s'ouvre directement.


# Angular : rendu terminal

## A faire
- [X] Hébergement sur render.com.
- [X] Vidéo YouTube.
- [X] Au moins 1000 assignments dans la base de données.
- [X] Ajouter une gestion de login/password (mais uniquement codé en dur côté client).
- [X] Ajout des propriétés (mais sans l'approche avancée).
- [X] Affichage avec "table" d' Angular avec toutes les différentes contraintes proposé comme la pagination,datasource, etc.
- [X] L'ajout de la nouvelle vue détaille .
- [X] L'ajout du filtre rendu/non rendu.
- [X] L'ajout du champ de recherche qui utilise une regex nous permettant ainsi de selectionner tous les devoirs qui posséde le même suffixe.
- [X] L'ajout du formulaire de type Stepper.

## En plus


* Ajout de voyants rouge et vert dans le tableau pour être plus lisible.
* Détails des devoirs sous forme de popup pour être plus fluide dans l'utilisation de l'application, pour notamment revenir rapidement dessus de la liste des devoirs
* Vérification que la note est bien comprise entre 0 et 20 inclut
* Ajout de notification (SnackBar Material) si la saisie des données ne convient pas dans l'ajout d'un devoir
* Génération de 1000 devoirs aléatoire en utilisant notamment une fonction générant des Lorem Ipsum directement dans l'application
* Nous avons en premier lieu hébergé notre serveur et client sur un VPS OVH grâce à notamment la création d'un serveur appache 2, mais nous avons rencontré plus tard des problèmes liés au certificat SSL, c'est pour ça que nous vous rendons un projet au final hébergé sur render.com 

# Notes supplémentaires

Les noms de connections et les mots de passes sont les suivants: 
- nom:admin mdp:123 (administrateur)
- nom:toto mdp:helloWorld (standard)
- nom:soso mdp:31/12/2017 (standard)

