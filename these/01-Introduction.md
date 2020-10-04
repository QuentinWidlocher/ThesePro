---
title: Introduction
slug: introduction
layout: post
---

1. [Objet de la thèse](#objet-de-la-thèse)
1. [Contexte](#contexte)
1. [Problématique](#problématique)
1. [Hypothèses proposées](#hypothèses-proposées)
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
On peut donc se demander :

> Comment faire le choix d'une architecture applicative multi-plateformes ?

Cette problématique n'est pas seulement à propos de "comment", dans le sens technique du terme mais aussi de "faut-il" ou même "est-t'il possible".

En effet si une application peut être développée une seule fois et être compatible avec un grand nombre d'appareils différents, cela peut apporter une grande valeur ajoutée. Mais si ce développement est bien plus complexe et coûteux (en budget mais aussi en temps), l'effort vaut-t'il le coup ?

L'effort lui même, est-t'il envisageable au vu des technologies actuelles ? Existe-t'il un ou plusieurs outils à-même de répondre au besoin de portabilité d'une architecture applicative ? Et quel serait la difficulté de les mettre en place dans un projet à venir, ou un projet existant ?

## Hypothèses proposées
<!-- TODO Hypothèses proposées -->

## Démarche proposée
<!-- TODO Démarche proposée -->

## Valeur ajoutée de cette recherche
<!-- TODO Valeur ajoutée -->

[^1]: [SlashData 2019](https://slashdata-website-cms.s3.amazonaws.com/sample_reports/EiWEyM5bfZe1Kug_.pdf)
[^2]: *The Pragmatic Programmer*, Addison-Wesley, 2000
