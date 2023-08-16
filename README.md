Traqueur de jeu de société

Il s'agit d'une application Web Meteor.js construite à l'aide du système de modèles Blaze et de FlowRouter pour le routage. Le but de cette application est de permettre aux utilisateurs de suivre leurs sessions de jeux de société, y compris le nombre de jeux joués, le taux de victoire et d'autres détails pour chaque jeu.

Installation

Pour installer et exécuter l'application, procédez comme suit :
1. Clonez le référentiel GitHub sur votre machine locale.
2. Installez Meteor.js si vous ne l'avez pas déjà fait.
3. Ouvrez la ligne de commande et accédez au répertoire du projet "game-tracker-16".
4. Exécutez « meteor npm install » pour installer les dépendances requises.
5. Exécutez « npm run start » pour obtenir le lien de l'application.

Caractéristiques

• Créer un nouveau jeu avec le nom et l'URL de la photo
• Ajoutez des sessions pour chaque jeu, y compris la date, le nombre de joueurs, le temps de jeu et le résultat
• Afficher le taux de victoire pour chaque jeu à l'aide d'un système de code couleur
• Modifier et supprimer des jeux
• Bouton d'action rapide pour ajouter une nouvelle session

Usage

Pour utiliser l'application, suivez ces étapes :
1. Créez un nouveau compte en cliquant sur le bouton "s'inscrire" et en remplissant le formulaire d'inscription.
2. Connectez-vous à votre compte en cliquant sur le bouton "Connexion" et en saisissant vos identifiants.
3. Créez un nouveau jeu en cliquant sur le bouton "Ajouter un jeu" et en remplissant le formulaire.
4. Ajoutez une nouvelle session pour un jeu en cliquant sur le bouton "Nouvelle session" sur la page de liste du jeu.
5. Supprimez une partie ou une session en cliquant sur le bouton "Supprimer" sur la page correspondante.

Difficultés rencontrées

L'une des principales difficultés rencontrées lors du développement de ce projet a été la mise en place du système de taux de réussite à code couleur. Je devais comprendre comment calculer le taux de victoire en fonction du nombre de parties gagnées et jouées, puis attribuer la couleur appropriée en fonction du taux de victoire calculé. Après quelques recherches et expérimentations, j'ai réussi à implémenter cette fonctionnalité en utilisant une instruction conditionnelle dans le modèle Blaze.


