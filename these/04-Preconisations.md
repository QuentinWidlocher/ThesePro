---
title: Synthèse et préconisation
slug: preconisations
layout: post
---

1. [Synthèse](#synthèse)
   1. [Les application natives](#les-application-natives)
      1. [Le temps de développement](#le-temps-de-développement)
      1. [Les limitations techniques](#les-limitations-techniques)
      1. [Les limitations esthétiques](#les-limitations-esthétiques)
      1. [Le déploiement](#le-déploiement)
      1. [La maintenance](#la-maintenance)
      1. [La réutilisation](#la-réutilisation)
      1. [La consommation des ressources](#la-consommation-des-ressources)
      1. [Les temps de réponses](#les-temps-de-réponses)
      1. [Le poids de l'application](#le-poids-de-lapplication)

## Synthèse

Nos hypothèse finalisées et analysé, il est temps d'observer de manière synthétique chaque méthode de développement d'application et d'apprécier leurs points forts et leurs points faibles.\
Nous verrons aussi comment palier grâce à ces derniers grâce à des agencements d'outils au sein d'architectures applicatives.

Afin d'analyser au mieux ces méthodes, nous allons nous servir des critères utilisés précédemment pour nos hypothèse, et nous allons comparer les résultats des hypothèses se servant de ces méthodes au hypothèses qui ne s'en servent pas.

### Les application natives

#### Le temps de développement

L'hypothèse 1 est celle qui possède le temps de développement le plus long et cela semble tout à fait évident.

Bien que développer une application native ne demande pas beaucoup plus de temps que de développer une application web, c'est la grande variété de langages et d'outils existant qui demande une duplication faramineuse du code, et ainsi un temps de développement important.

L'hypothèse 2 a pu prouver qu'il existe un terrain d'entente et que certaines technologies permettent de cibler un grand nombre de cibles native pour peux qu'on sacrifie certains critères (sur lesquels nous reviendront plus loin).

#### Les limitations techniques

Ce critère est sans conteste le plus grand point fort des applications natives.\
Après tout, c'est avec celles ci que l'informatique a d'abord connu son essor, et il semble naturel que ces applications tirent partie de leur machines au maximum.

#### Les limitations esthétiques

Exceptés certains outils assez poussé, il est difficile d'avoir une totale liberté d'expression sur l'aspect visuel d'une interface graphique pour une application native.\
Et quand bien même la charte graphique par défaut d'un système d'exploitation est de nature élégante (macOS, iOS et Android par exemple), il peut-être souvent difficile de sortir des limites de ce qui a été prévu par les concepteurs.

#### Le déploiement

iOS et ses règles particulière sur les applications de son store mis à part, il est assez aisé de déployer une application native.\
Encore une fois, cela est cohérent en vertu du fait que cette méthode a très longtemps été l'unique manière de créer des logiciels pour un poste de travail.

#### La maintenance

Là encore, iOS mis à part, la maintenance des applications natives est aisé pour les même raisons, permettant une haute vitesse de mise à jour de correctif. C'est d'autant plus vrai pour les systèmes d'exploitations proposant des *stores* (principalement Android et iOS) capable de mettre à jour les application sans que celles ci aient besoin d'être ouverte au préalable par l'utilisateur. 

#### La réutilisation

Dans le cas d'un projet mono-plateforme ou multi-plateforme limité (peu de cibles) utilisant le même langage de programmation, la réutilisation du code d'un projet natif n'est pas plus mauvais que pour une autre méthode.

Cependant, dans le cas d'un projet pleinement multiplateforme (visant les cinq principales cibles) comme c'est le cas dans notre analyse, il est très compliqué de partager les fonctionnalités déjà existantes d'une application à une autre, et pas plus simple pour les projets futurs si ceux si usent des mêmes outils.

#### La consommation des ressources

De part leur statut naturellement adaptés aux machine sur lesquelles elles tournent, les applications natives ne sont pas trop "gourmandes" en ressources.\
Elles sont donc capable de gérer de plus grandes quantités de données sans montrer de signe de ralentissement, même sur les machines les moins performantes.

#### Les temps de réponses

Pour les mêmes raisons que pour la consommation des ressources, les logiciels natifs présentent souvent de bonnes performances et des temps de réponses rapides.

Ce sont donc des logiciels adaptés aux besoins métier les plus exigeant, dans des cadres ou le temps passé vaut de l'argent qu'il est capital de ne pas gaspiller.

#### Le poids de l'application

Le poids d'un logiciel natif est très dépendant des technologies qu'il utilise si ces dernières nécessitent des paquet installés sur la machine de l'utilisateur.\
Nous n'avons pas pris en compte ces restrictions car les cas de figures sont très important, aussi nous nous somme concentrés sur le poids réel final.\
Dans ce cas, le poids des logiciels natifs ne sont pas forcément déraisonné.