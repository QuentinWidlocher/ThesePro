---
title: État de l'art
slug: etat-de-lart
layout: post
---

1. [Les programmes dits "Bureau"](#les-programmes-dits-bureau)
   1. [Historique](#historique)
      1. [Naissance de l'informatique](#naissance-de-linformatique)
      1. [L'informatique au quotidien](#linformatique-au-quotidien)
   1. [Le problème de sous-optimisation](#le-problème-de-sous-optimisation)
1. [Les applications mobiles](#les-applications-mobiles)
   1. [Historique nomade](#historique-nomade)
      1. [Les début de l'air mobile](#les-début-de-lair-mobile)
      1. [Les applications](#les-applications)
      1. [Les smartphones au quotidien](#les-smartphones-au-quotidien)
   1. [Pour les entreprises](#pour-les-entreprises)
1. [Les logiciels du Web](#les-logiciels-du-web)

Les logiciels ont une place très importante dans notre monde depuis plusieurs dizaines d'années et leur importance ne cesse de croitre.\
Nous utilisons des appareils électroniques chaque jour et ces logiciels sont notre moyen de communiquer avec la machine, afin de la laisser agir pour notre confort.

Il est donc primordial de rendre ces interfaces le plus accessible possible et continuer d'améliorer leur utilité auprès des utilisateurs.

## Les programmes dits "Bureau"

### Historique

#### Naissance de l'informatique

Lors de la genèse de l'informatique, il n'était pas encore question de portabilité applicative, chaque logiciel devait être développé pour une (et une seule) machine.\
Si un logiciel devait exister sur un ordinateur d'une marque et sur un autre d'un marque différente, il devait être redéveloppé deux fois car le langage machine de ces ordinateurs était tout bonnement différent.

Bien évidemment, ce problème de taille fut rapidement réglé avec l'arrivé des langages de programmation à haut niveau d'abstraction et des systèmes d'exploitations.

#### L'informatique au quotidien

> Il n'y a aucune raison pour qu'un particulier possède un ordinateur chez lui.

<span style="text-align: right;">*Ken Olsen - 1977*</span>

Contrairement à ce qu'annonçait l'ingénieur Olsen, aujourd'hui, les ordinateurs personnels sont toujours au cœur de notre utilisation de l'informatique, principalement pour leur puissance de calcul et la précision et la rigueur de leur maniement.\

Malgré l'essor des smartphones, s'il y a bien un milieu dans lequel les terminaux fixe sont toujours très amplement utilisés, c'est dans les milieu professionnels.\
Les logiciels de gestion ou les logiciels métiers sont bien entendu profusément répandus dans la plupart des professions de toute sorte.

Il ne faut pas non plus mettre de côté la culture des jeux vidéos qui elle aussi est en croissance depuis les années 1980. Même si le marché du jeu vidéo est aussi en plein essor sur les téléphones portables, les ordinateurs de bureau ont toujours une place prépondérante dans ce domaine.

### Le problème de sous-optimisation

Lorsque le développement informatique nécessitait de gérer l'état de la machine à une couche presque *physique*, et qu'il fallait manuellement accéder à des zones de la mémoire vive pour faire fonctionner un logiciel, il était bien évidemment essentiel de passer un temps non négligeable à optimiser le code afin de ne pas surcharger la machine.\
Aujourd'hui les ordinateurs ont une puissance de calcul telle qu'il est parfois facile d'oublier le chemin qui a été parcouru.\
On parle de sous-optimisation lorsqu'une application fonctionne normalement, sauf qu'elle est très (parfois trop) gourmande en ressource pour ce qu'elle accompli. Le manque de rigueur lié à la gestion des ressources et à l'optimisation du code engendrant donc cette consommation excessive.\
Cette problématique est assez connue des développeur mais il existe pourtant assez peu de solutions pour y remédier, si ce n'est passer plus de temps à chercher à optimiser le code source d'un logiciel.

D'un autre côté, certains voient d'un bon œil ce problème en montrant que le code écrit aujourd'hui et bien plus facile à lire (et donc à maintenir) qu'il y a des années.\
Si le code représentait autrefois des instructions précises pour indiquer à la machine comment se comporter, aujourd'hui la machine est bien plus à même que nous de savoir comment se comporter. Le code que nous écrivons représente alors de simples *suggestions* et il paraît cohérent de vouloir l'optimiser pour la lecture par les humains, plutôt que pour l'exécution par la machine.

Ces deux faces d'un même pièce représentent un conflit qui existe depuis quelques années dans le monde de la programmation, notamment depuis l'utilisation grandissante du JavaScript, dont nous reparleront plus tard dans la partie consacrée aux application web.

## Les applications mobiles

### Historique nomade

#### Les début de l'air mobile

Propulsé en 2007 avec l'arrivé de l'iPhone de première génération, le marché des téléphones portables intelligent (renommés par la suite *smartphones*) n'a cessé de croître.\
C'est avec la démocratisation de l'usage d'Internet sur les mobiles que grandi cette nouvelle air nomade.
Si en 2010, l'utilisation d'Internet sur un appareil mobile était d'à peine 3%[^1], 10 ans plus tard cela représente maintenant **plus de la majorité** de la consommation d'information du web[^2] !

#### Les applications

Les applications disponibles sur les smartphones on pu bénéficier d'une approche bien différente de celles des logiciels bureau.\
Tout d'abord, leurs utilités était souvent plus restreinte et il fallait posséder plusieurs applications pour faire ce que l'on voulait, poussant à une consommation assez importante d'applicatifs.

Grâce à des "marchés d'application" comme le *Google Play* pour Android et *l'AppStore* pour iOS, il est très aisé de trouver des applications qui peuvent satisfaire nos besoins.\
Même les systèmes d'exploitations bureau comme Windows ou Mac n'ont intégré ces système de que trois ou quatre ans après la première version de l'AppStore. (Linux quand à lui faisant exception avec son gestionnaire de paquet APT, créé en 1998)

Aujourd'hui, cette "frénésie de l'application" se perd petit à petit au profit de logiciels plus poussés, essayant souvent de regrouper en un seul paquet de nombreux utilitaires communs.

#### Les smartphones au quotidien

Les téléphones portables sont aujourd'hui de parfait outils du quotidien et, bien que leur puissance de calcul soit toujours (et irrémédiablement) inférieure à celles des ordinateurs de bureau, ils sont capable de faire fonctionner des applications toujours plus performantes. (Sous la contrainte cependant que ces applicatifs ne soient pas trop demandeur en ressource)

On estime en 2020 que deux tiers des habitant du monde possèdent un téléphone portable[^3]

### Pour les entreprises

Certaines entreprises se sont mises à utiliser des terminaux mobiles (des smartphones mais aussi parfois des tablettes pour profiter de dimensions d'affichage confortables) dans leurs cœurs de métiers. Parfois simplement pour l'aspect communicatif mais aussi pour profiter d'applications qu'il est possible d'embarquer. Par exemple un commercial sur la route serait en mesure de se déplacer avec une version allégé de l'ERP utilisé en interne pour pouvoir accéder à des donnés de son entreprise depuis n'importe où.

Les entreprises ayant le rapport le plus important aux appareils mobiles sont celles qui ont choisi de faire des applications leur priorité et qui s'adresse généralement au plus grand public.\
Pourtant quand on observe les grandes entreprises utilisant des applications mobile pour fournir des services (*Google*, *Uber*, *Facebook* pour ne citer qu'elles), ont remarque qu'elles possède toute une présence plus "fixe" sur les utilisateurs d'ordinateurs.\
Cependant, **aucune n'a de logiciel bureau**. Ces entreprises se basent uniquement sur des versions web de leurs portails.

## Les logiciels du Web

À ses premiers pas avec le grand public au début des années 1990, l'Internet avait comme but d'afficher des pages de contenus fixe. On pouvait de ce fait rédiger des articles et les agrémenter de quelques images d'illustration.

Bien évidemment, l'usage d'Internet tel qu'on le connait aujourd'hui est très loin de se résumer à de simples murs de texte. Très nombreuses sont les entreprises à avoir saisi l'opportunité d'Internet en ayant créé des façades visuellement attrayante pour promouvoir leurs produits ou leurs services.

Cependant, en plus des sites qu'on appelle communément "vitrine", certaines entreprises exposent des sites qui proposent directement des services.\
Le plus connu mais aussi le plus souvent négligé est bien sûr le géant *Google* qui, avec son moteur de recherche éminemment célèbre, offre depuis 1998 la possibilité à ses visiteurs de devenirs **utilisateurs** en recherchant la toile à la recherche d'information.

Aujourd'hui, un très grand nombre d'applications sont disponibles, leur croissance a été si rapide qu'il est parfois difficile de s'imaginer que l'Internet n'avait pas du tout comme intention de remplacer les logiciels tels qu'il le fait.\
Des moteurs de recherches, aux sites marchands en passant par les galeries en ligne et les réseaux sociaux, notre utilisation quotidienne des applications web est immense et pourtant tout cela nous apparaît généralement comme trivial.

[^1]: [Statcounter 2010](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2010)
[^2]: [Statcounter 2020](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2020)
[^3]: [Data Reportal](https://datareportal.com/global-digital-overview)
