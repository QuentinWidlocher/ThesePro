---
title: Introduction
slug: introduction
layout: post
---

1. [Objet de la thèse](#objet-de-la-thèse)
1. [Contexte](#contexte)
1. [Problématique](#problématique)
1. [Hypothèses proposées](#hypothèses-proposées)
   1. [Première hypothèse](#première-hypothèse)
   1. [Deuxième hypothèse](#deuxième-hypothèse)
   1. [Troisième hypothèse](#troisième-hypothèse)
   1. [Quatrième hypothèse](#quatrième-hypothèse)
   1. [Cinquième hypothèse](#cinquième-hypothèse)
1. [Démarche proposée](#démarche-proposée)
1. [Valeur ajoutée de cette recherche](#valeur-ajoutée-de-cette-recherche)

## Objet de la thèse

Cette thèse professionnelle s'inscrit dans une volonté d'éclaircir des points de détails qui, au sein d'un environnement de travail axé sur le développement de logiciels informatiques, sont trop souvent mal compris, mal interprétés, voire tout à fait mis de côtés.\
Si ces obstacles sont victimes de ce traitement, ce n'est pas en raison de leurs complexités mais bien devant la charge de travail requise afin de déceler leurs subtilités. C'est ce problème que je m'engage à adresser dans cette thèse.

Son but est de chercher à analyser le sujet en profondeur et de proposer des pistes de résolution à une préoccupation majeure des entreprises de ce secteur. Nous verrons aussi d'où vient cette problématique et s'il est juste de chercher à la résoudre plutôt que de la contourner si cela est possible.

## Contexte

Lorsque j'écrit cette thèse, je suis actuellement en poste dans une entreprise de développement de logiciels sur mesure. Je suis donc un développeur comme plus de vingt-six millions de personnes dans le monde[^1], et comme eux, je suis sans cesse à la recherche **d'optimisation**.\
Le désir constant d'optimisation peut-être perçu comme la lutte continuelle pour l'amélioration d'un fonctionnement, pour la minimisation des contraintes et des coûts pour mener à bien une activité.

Dans mon (notre) cas de figure, au sein de sociétés dont le but est de fournir à ses clients des logiciels capables de répondre à leurs besoins les plus directs, cette optimisation est bien entendu fondamentale. Limiter le temps de réponse de l'entreprise pour adresser les besoins du client, qui lui même demande une solution informatiques très souvent dans l'optique d'optimiser son temps de production ou de réponse.\
Le temps n'est d'ailleurs bien souvent pas la seule contrainte que l'on cherche à optimiser, le budget est aussi très sollicité aussi. De toute manière, il n'y a pas de contrainte que l'on ne désirerais pas réduire à zéro.

Le métier de développeur est en cela le plus à même d'amener des pistes de réflexion sur l'optimisation étant donné la nature même du travail. Les ingénieurs logiciels font de la résolution de problèmes et de la vitesse ainsi que de l'efficacité de ces résolutions un enjeu premier.\
Dans un cœur de métier aussi technique, il est donc normal d'avoir une multitude d'outils dont le but premier est la minimisation des coûts et des obstacles, et la maximisation de la qualité du résultat.

Il existe un principe de programmation très employé qui cristallise un facette de l'optimisation, à savoir le principe *DRY*.\
*DRY*, pour *Don't Repeat Yourself*, soit littéralement "Ne vous répétez pas" est un rappel constant aux développeurs de ne pas ré-écrire ce qui a déjà été écrit auparavant. Souvent entend on "Si vous devez écrire plus de deux fois la même chose, c'est que vous pouvez mieux faire", ou pour reprendre les mots de Andy Hunt et Dave Thomas[^2], initiateurs du principe *DRY* :

> Dans un système, toute connaissance doit avoir une représentation unique, non-ambiguë, faisant autorité.

## Problématique

Parmi les nombreuses raisons de chercher à optimiser et à "ne pas se répéter" lorsque l'on développe une application, il y en a une qui s'avère être depuis bien longtemps particulièrement chronophage et par conséquent, onéreuse.\
Pour qu'un logiciel puisse être disponible pour le plus grand nombre, il faut que celui-ci puisse exécuter sur un grand nombre d'appareils tous bien différents. La forme de l'écran, les performances de la machine, la méthode de saisie, tous ces paramètres sont à prendre en compte et il faut parfois redévelopper une application identique à l'aide un autre langage de programmation si l'on veut une version compatible.

Devant cela bien sûr, le principe *DRY* est violé et, par là même, l'optimisation devient très compliquée.\
Nous pouvons donc nous demander :

> Comment faire le choix d'une architecture applicative multiplateforme ?

Cette problématique n'est pas seulement à propos de "comment", dans le sens technique du terme mais aussi de "faut-il" ou même "est-t'il possible".

En effet si une application peut être développée une seule fois et être compatible avec un grand nombre d'appareils différents, cela peut apporter une grande valeur ajoutée. Mais si ce développement est bien plus complexe et coûteux (en budget mais aussi en temps), l'effort vaut-t'il le coup ?

L'effort lui même, est-t'il envisageable au vu des technologies actuelles ? Existe-t'il un ou plusieurs outils à-même de répondre au besoin de portabilité d'une architecture applicative ? Et quelle serait la difficulté de les mettre en place dans un projet à venir, ou un projet existant ?

## Hypothèses proposées

Devant cette problématique, nous pouvons émettre plusieurs hypothèses afin de tenter de répondre à la question posée.\
Chaque hypothèse propose une piste de réflexion prenant en compte les subtilités techniques ainsi que les risques de chaque technologies.

### Première hypothèse

Tout d'abord, afin de partir d'une hypothèse qui semblerait évidente, et qui aura pour but d'être comparée avec d'autres hypothèses plus recherchées, nous pouvons annoncer cette solution potentielle :

> Une application native pour chaque appareil cible.

De ce fait, cette hypothèse servira de "témoin" puisqu'elle ne nécessite pas de travaux de recherche particuliers et se contente de l'existant pour répondre à la problématique posée.\
C'est en comparant les résultats de cette hypothèse aux autres que nous pourrons déterminer l'utilité de cette recherche de solution, ainsi que le bien fondé de la problématique.

### Deuxième hypothèse

> Un seul code source natif pour tous les appareils cibles communs.

Bien entendu, s'il est possible d'avoir un seul code source qui puisse produire une application native pour chaque appareil cible, qu'il soit bureau ou mobile, et indépendamment de son système d'exploitation, cette solution devrait être la plus performante.\
Les applications natives permettent de jouir au mieux des capacités de l'appareil tout en donnant accès au développeurs (et par là même aux  utilisateurs) à toutes les fonctionnalités de celui-ci, sans trop de freins. Une application multiplateforme native représente un gain de temps de développement considérable, et présente des avantages techniques indéniables.

### Troisième hypothèse

> Séparer les cibles en deux grands groupes, à savoir "Logiciels Bureaux" et "Applications Mobiles" et faire deux applications différentes pour ces groupes.

En limitant les applications, le temps de développement se retrouve lui aussi réduit. Si nous nous concentrons sur deux groupes de cibles il n'y a alors que deux codes sources à créer et à maintenir. Leurs deux langages de programmation étant très probablement différents, les fonctionnalités seront donc écrites deux fois mais on peux facilement imaginer que c'est un coût supplémentaire éclipsé par les performances des applications ainsi que leurs possibilités.

### Quatrième hypothèse

> Une seule application web et une interface *responsive* pour tout les appareils cibles.

Les applications web peuvent tourner sur n'importe quel appareil doté d'un navigateur internet. Le responsive design permet d'afficher un site sur toute taille d'écran. Il devrait donc être possible d'avoir une seule application web qui puisse être déployée sur une multitude de supports compatible tout en ne gardant qu'un seul code source.\
Cette solution potentielle se rapproche de la deuxième hypothèse dans sa limitation des coûts et son optimisation de la quantité du code.

### Cinquième hypothèse

> Une application web pour les cibles bureau et une application hybride pour les cibles mobiles

Grâce au langage de programmation commun (JavaScript), il est possible partager un maximum de code entre les deux applications tout en gardant les spécificités de l'affichage sur grand et petit écran. De plus l'application hybride permet d'accéder à plus de fonctionnalités du système d'exploitation et à mieux se fondre dans l'écosystème d'application de l'utilisateur.

## Démarche proposée
<!-- TODO Démarche proposée -->

## Valeur ajoutée de cette recherche
<!-- TODO Valeur ajoutée -->

[^1]: [SlashData 2019](https://slashdata-website-cms.s3.amazonaws.com/sample_reports/EiWEyM5bfZe1Kug_.pdf)
[^2]: *The Pragmatic Programmer*, Addison-Wesley, 2000
