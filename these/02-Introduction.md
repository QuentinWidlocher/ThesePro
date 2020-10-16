---
title: Introduction
slug: introduction
layout: post
---

1. [Objet de la thèse](#objet-de-la-thèse)
1. [Contexte](#contexte)
1. [Problématique](#problématique)
1. [Cibles visées](#cibles-visées)
1. [Hypothèses proposées](#hypothèses-proposées)
   1. [Première hypothèse](#première-hypothèse)
   1. [Deuxième hypothèse](#deuxième-hypothèse)
   1. [Troisième hypothèse](#troisième-hypothèse)
   1. [Quatrième hypothèse](#quatrième-hypothèse)
   1. [Cinquième hypothèse](#cinquième-hypothèse)
1. [Démarche proposée](#démarche-proposée)
   1. [Qu'est ce qu'un *proof of concept*](#quest-ce-quun-proof-of-concept)
   1. [Les critères](#les-critères)
      1. [**Critères 1** : Pendant le développement](#critères-1--pendant-le-développement)
         1. [**Critère 1.1** : Le temps de développement](#critère-11--le-temps-de-développement)
         1. [**Critère 1.2** : Les limitations des technologies](#critère-12--les-limitations-des-technologies)
      1. [**Critères 2** : Après le développement](#critères-2--après-le-développement)
         1. [**Critères 2.1** : Le déploiement](#critères-21--le-déploiement)
         1. [**Critères 2.2** : La maintenance](#critères-22--la-maintenance)
         1. [**Critères 2.3** : La réutilisation](#critères-23--la-réutilisation)
      1. [**Critères 3** : Le résultat](#critères-3--le-résultat)
         1. [**Critères 3.1** : Utilisation du processeur et de la mémoire](#critères-31--utilisation-du-processeur-et-de-la-mémoire)
         1. [**Critères 3.2** : Temps de réponse moyen](#critères-32--temps-de-réponse-moyen)
         1. [**Critère 3.3** : Le poids de l'exécutable](#critère-33--le-poids-de-lexécutable)
   1. [RealWorld](#realworld)
      1. [Conduit](#conduit)
         1. [Les fonctionnalités](#les-fonctionnalités)
         1. [Visuels application bureau](#visuels-application-bureau)
         1. [Visuels application mobile](#visuels-application-mobile)
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

## Cibles visées

Cette question brasse un champ bien trop vague des possibles pour pouvoir en extraire une réponse valable pour tous les appareils informatiques existants.\
Aussi nous allons réduire la portée de notre recherche aux systèmes d'exploitation les plus populaires aujourd'hui, chez les particuliers comme chez les professionnels. <!-- TODO: source -->

Ces systèmes d'exploitation peuvent être groupés en deux catégories de support physique à savoir les terminaux fixes et mobiles :

- Terminaux fixes :
  - Linux
  - Microsoft Windows (à partir de la version 7[^3])
  - macOS (OSX)
- Terminaux mobiles (smartphones) :
  - Android
  - iOS

Ces cinqs systèmes d'exploitation seront notre principale préoccupation étant donné qu'ils représentent ensemble plus de ??%<!-- TODO: source --> de l'utilisation de machines informatiques.

## Hypothèses proposées

Devant cette problématique, nous pouvons émettre plusieurs hypothèses afin de tenter de répondre à la question posée.\
Chaque hypothèse propose une piste de réflexion prenant en compte les subtilités techniques ainsi que les risques de chaque technologies.

### Première hypothèse

Tout d'abord, afin de partir d'une hypothèse qui semblerait évidente, et qui aura pour but d'être comparée avec d'autres hypothèses plus recherchées, nous pouvons annoncer cette solution potentielle :

> Une application native pour chaque appareil cible.

De ce fait, cette hypothèse servira de "témoin" puisqu'elle ne nécessite pas de travaux de recherche particuliers et se contente de l'existant pour répondre à la problématique posée.\
C'est en comparant les résultats de cette hypothèse aux autres que nous pourrons déterminer l'utilité de cette recherche de solution, ainsi que le bien fondé de la problématique.

<div class="mermaid">
graph TD
    CS1((Code)) --> UI1(Interface) -->|Application native| MC1[Linux]
    CS2((Code)) --> UI2(Interface) -->|Application native| MC2[Windows]
    CS3((Code)) --> UI3(Interface) -->|Application native| MC3[OSX]
    CS4((Code)) --> UI4(Interface) -->|Application native| MC4[Android]
    CS5((Code)) --> UI5(Interface) -->|Application native| MC5[iOS]
</div>

> Schéma d'un exemple de cette hypothèse

### Deuxième hypothèse

> Un seul code source natif pour tous les appareils cibles communs.

Bien entendu, s'il est possible d'avoir un seul code source qui puisse produire une application native pour chaque appareil cible, qu'il soit bureau ou mobile, et indépendamment de son système d'exploitation, cette solution devrait être la plus performante.\
Les applications natives permettent de jouir au mieux des capacités de l'appareil tout en donnant accès au développeurs (et par là même aux  utilisateurs) à toutes les fonctionnalités de celui-ci, sans trop de freins. Une application multiplateforme native représente un gain de temps de développement considérable, et présente des avantages techniques indéniables.

<div class="mermaid">
graph TD
    CS1((Code))
    UI1(Interface Bureau)
    UI2(Interface Mobile)
    MC1[Linux]
    MC2[Windows]
    MC3[OSX]
    MC4[Android]
    MC5[iOS]
    CS1 --> UI1 -->|Application Native| MC1 & MC2 & MC3
    CS1 --> UI2 -->|Application Native| MC4 & MC5
</div>

> Schéma d'un exemple de cette hypothèse

### Troisième hypothèse

> Séparer les cibles en deux grands groupes, à savoir "Logiciels Bureaux" et "Applications Mobiles" et faire deux applications différentes pour ces groupes.

En limitant les applications, le temps de développement se retrouve lui aussi réduit. Si nous nous concentrons sur deux groupes de cibles il n'y a alors que deux codes sources à créer et à maintenir. Leurs deux langages de programmation étant très probablement différents, les fonctionnalités seront donc écrites deux fois mais on peux facilement imaginer que c'est un coût supplémentaire éclipsé par les performances des applications ainsi que leurs possibilités.

<div class="mermaid">
graph TD
    subgraph Mobile
        CS2((Code))
        UI2(Interface)
        MC4[Android]
        MC5[iOS]
        CS2 --> UI2 -->|Application Native| MC4 & MC5
    end
    subgraph Bureau
        CS1((Code))
        UI1(Interface)
        MC1[Linux]
        MC2[Windows]
        MC3[OSX]
        CS1 --> UI1 -->|Application Native| MC1 & MC2 & MC3
    end
</div>

> Schéma d'un exemple de cette hypothèse

### Quatrième hypothèse

> Une seule application web et une interface *responsive* pour tout les appareils cibles.

Les applications web peuvent tourner sur n'importe quel appareil doté d'un navigateur internet. Le responsive design permet d'afficher un site sur toute taille d'écran. Il devrait donc être possible d'avoir une seule application web qui puisse être déployée sur une multitude de supports compatible tout en ne gardant qu'un seul code source.\
Cette solution potentielle se rapproche de la deuxième hypothèse dans sa limitation des coûts et son optimisation de la quantité du code.

<div class="mermaid">
graph TD
    CS1((Code))
    UI1(Interface)
    MC1[Linux]
    MC2[Windows]
    MC3[OSX]
    MC4[Android]
    MC5[iOS]
    CS1 --> UI1 -->|Application Web| MC1 & MC2 & MC3 & MC4 & MC5
</div>

### Cinquième hypothèse

> Une application web pour les cibles bureau et une application hybride pour les cibles mobiles

Grâce au langage de programmation commun (JavaScript), il est possible partager un maximum de code entre les deux applications tout en gardant les spécificités de l'affichage sur grand et petit écran. De plus l'application hybride permet d'accéder à plus de fonctionnalités du système d'exploitation et à mieux se fondre dans l'écosystème d'application de l'utilisateur.

<div class="mermaid">
graph TD
    CS1((Code))
    CS1 --> UI1 & UI2
    subgraph Mobile
      UI2(Interface)
      MC4[Android]
      MC5[iOS]
      UI2 -->|Application Hybride| MC4 & MC5
    end
    subgraph Bureau
      UI1(Interface)
      MC1[Linux]
      MC2[Windows]
      MC3[OSX]
      UI1 -->|Application Web| MC1 & MC2 & MC3
    end
</div>

## Démarche proposée

Afin de vérifier nos hypothèses et s'assurer du résultats des solutions proposées, nous allons mettre en place une démonstration de faisabilité, souvent appelé par les développeurs un *Proof of Concept* (littéralement "preuve de concept").\

### Qu'est ce qu'un *proof of concept*

Ces *proofs of concept* sont de petites démonstrations techniques mêlant plusieurs technologies au sein d'une application dont l'usage se rapproche au plus près possible d'une réelle application "métier", tout en conservant une portée réduite (démonstration oblige).

Cette méthode permet, lorsque son utilisation est correcte, d'effectuer des mesures sur une panel de critères aussi complet que possible afin de pouvoir confronter les résultats des différentes hypothèses.\
Afin que chaque relevé soit aussi assimilable aux autres que possible, il faut que les *proof of concept* suivent tous des règles communes. Il faut, si possible, que chacun d'eux soient une itération d'une même application, dans des technologies différentes.

### Les critères

Les critères de jugement sont multiples et s'appliquent tous à des parties cruciales d'une application réelle.\
Nous scinderont ces critères en trois grandes parties afin de simplifier au mieux la lecture et la compréhension.

#### **Critères 1** : Pendant le développement

Ces critères sont des mesures des problématiques encourues lors de la phase de conception d'une application. Ils se rapportent principalement aux développeurs et aux obstacles qui leurs font face tout au long du développement.

##### **Critère 1.1** : Le temps de développement

L'un des critères les plus important, tant aux yeux des développeurs qu'à ceux des managers et des responsables, c'est bien entendu le temps qu'une application met à être produite.\
Ce temps, mesuré en jours/homme se devra d'être aussi court que possible afin de limiter les coûts salariaux et de répondre au plus vite au besoin client.

Dans le cas de nos *proofs of concept*, je serais le seul développeur affecté à la réalisation des démonstrations. Le niveau d'aisance dans une technologie ayant un impact non négligeable lors de la réalisation d'un *proof of concept* malgré la faible portée de ce dernier, mon niveau personnel dans chaque technologie sera à prendre en compte et précisé dans l'analyse des résultats.

Pour mesurer ce critère, nous relèveront le temps passé à developer une démonstration quotidiennement et nous compareront les résultats obtenus.

##### **Critère 1.2** : Les limitations des technologies

Une application native possède, par définition, un accès complet aux fonctionnalités qu'offre le système d'exploitation sur lequel il exécute, sous réserve qu'il possède les droits nécessaires.\
Une application web en revanche n'a pas ces accès et souvent il existe certaines fonctionnalités inaccessibles qui brident ce qu'il est possible de faire pour l'utilisateur.

Ces limitations peuvent se révéler cruciales pour une application métier et même s'il est souvent possible pour les développeurs de les contourner, il faut tout de même prendre cela en compte lors du comparatifs des solutions.  

Pour mesurer ce critère, nous utiliseront un système de note arbitraire en fonction de différents sous-critères liés à celui ci.

#### **Critères 2** : Après le développement

Ces critères se rapportent eux, à ce qui se passe une fois qu'une application est développée, qu'elle soit finie ou non. Nous allons donc nous intéresser à la livraison du produit, sa maintenance et l'optimisation des ressources en cas de réutilisation du code.

##### **Critères 2.1** : Le déploiement

Le déploiement fait référence au moment où un logiciel est mis à la disposition des utilisateurs. Dans le cas d'un logiciel métier, cela peut se référer à la méthode d'envoi de celui au client, et à la façon dont les utilisateurs finaux pourront l'utiliser. Dans le cas d'une application grand-publique, c'est la méthode de distribution de celle ci au monde entier.

Ce critères se base sur la simplicité du déploiement et les limitations possibles, mesurés tout deux sur une note arbitraire et la vitesse du déploiement qui sera chronométrée.

##### **Critères 2.2** : La maintenance

Une fois qu'un logiciel est déployé sur un grand nombre d'appareils divers, il est important de juger de la souplesse avec laquelle il est possible de le mettre à jour (périodiquement, ou "dans l'urgence") ainsi que l'impact que cette maintenance a sur les utilisateurs. Une bonne mise à jour ne doit pas interrompre le travail de l'usager.

Pour mesurer ce critère, nous jugeront différents sous-critères liés à celui ci avec des notes arbitraires.

##### **Critères 2.3** : La réutilisation

Toujours dans un soucis d'optimisation, il est très bénéfique pour une société de développement informatique de pouvoir compter sur des fonctionnalités qui existent déjà dans des projets, pour les utiliser dans des projets à venir. C'est cette réutilisation du code qui permet à une entreprise d'être de plus en plus performante et de pouvoir répondre aux besoins en un temps optimal.

Le code n'est pas la seule chose qui puisse être réutilisée, des morceaux de l'interface utilisateur sont aussi recyclable selon les technologie utilisées.

Pour mesurer ce critère, nous évalueront les mécanismes qui permettent de rendre du code réutilisable.

#### **Critères 3** : Le résultat

Enfin, ces derniers critères visent à juger de/des application(s) une fois que leur développement est terminé. Contrairement aux critères précédents, on regarda plutôt ici certaines caractéristiques techniques qu'on comparera d'un point de vu simplement mathématique. Ces caractéristiques seront les résultats de *benchmarks*, des évaluations précise des critères.

##### **Critères 3.1** : Utilisation du processeur et de la mémoire

Les performances d'une application sont un ensemble de mesures qui touche à sa consommation de ressources. Afin de s'exécuter convenablement, un logiciel doit utiliser la puissance de calcul du processeur et stocker/récupérer des données dans la mémoire vive de l'appareil.\
Une application trop gourmande en ressource aura donc tendance à "fatiguer" la machine, qui peinera donc à faire fonctionner l'application, ou les autres processus de l'appareil.

Même si la consommation de ressource est importante pour tous les supports matériels, c'est le cas des applicatifs mobile qui est le plus critique en raison des faibles performances des smartphones, comparés aux performances des ordinateurs.

Ces performances sont mesurables et quantifiables grâce à des outils d'analyse.

##### **Critères 3.2** : Temps de réponse moyen

On juge une application agréable quand elle "répond au doigt et à l'oeil", en d'autres termes : quand celle ci réagit aux interactions de l'utilisateur dans un temps très restreint. Si un logiciel met plusieurs seconde à sauvegarder un document (par exemple), on jugera l'application lente.

Cette problématique peut même se faire ressentir quand toutes les actions ont un délais de quelques millisecondes. Même si l'utilisateur ne s'en rend pas tout de suite compte, l'application dégagera une impression de lenteur et de frustration.

Le temps de réponse peut-être mesuré en obtenant la différence de temps entre une action de l'utilisateur et la réponse visible à l'écran de cette dernière.\
Il est aussi intéressant de calculer le *First Contentful Paint* ou premier affichage de contenu, le temps que met une application à afficher pour la première fois la page que verra l'utilisateur.

##### **Critère 3.3** : Le poids de l'exécutable

Le dernier critère, le plus aisé à mesurer, est le poids final de l'application.\
A l'inverse du code source, dont la taille n'a finalement que peu d'importance, le poids du logiciel qui devra loger sur la machine d'un utilisateur lui est plus capital. Encore une fois c'est les smartphones et autres appareils mobile qui sont les plus concernés en raison de leurs espaces de stockage relativement restreintes en comparaison avec les appareils fixes.

### RealWorld

Afin de rester dans un contexte technique, et de profiter au mieux du milieu du développement logiciels et de la vision qui l'entoure, nous allons baser nos travaux sur *RealWorld*[^4].

*RealWorld* est un dépôt de code qui regroupe plusieurs *proofs of concept* cherchant à reproduire une même application avec des technologies différentes.\
L'application en question est un clone de *Medium*[^5], un site web d'articles sur des sujets divers, appelé *Conduit*.

Pour que chaque itération de *Conduit* soient comparables entre elle, elle doivent toutes suivre les même consignes, le même cahier des charges technique.\
L'application est donc scindé en deux parties toujours interchangeables, d'un coté la partie interface utilisateur et de l'autre la gestion des données.

Baser les *proofs of concept* de cette thèse sur *RealWorld* permet de mettre en pratique ce dont nous parlions dans le [contexte](#Contexte), à savoir le désir de ne pas répéter les mêmes travaux que ceux qui existent déjà. Nous cherchons à réutiliser l'existant au profit de nouveaux ouvrages.\
De plus, *RealWorld* étant un travail *open source*, donc libre de droit, il est en parfait accord avec le format de cette thèse qui l'est tout autant, c'est une vision commune dans le monde du développement de logiciels qui mérite d'être partagé.

#### Conduit

Pour mieux présenter *Conduit* et donc la profondeur de notre application de démonstration, voici une liste des actions qu'il doit être capable de faire, ainsi quelques visuels pour aider à appréhender sa forme.

##### Les fonctionnalités

- Authentification
  - Connexion
  - Inscription
- Lecture d'articles
  - Flux global
  - Flux d'auteurs
  - Recherche par étiquettes
  - Partage d'articles
- Écriture d'articles
  - Titre
  - Sous Titre
  - Corps en texte riche (Markdown <!-- TODO: Définition -->)
  - Étiquettes

##### Visuels application bureau

![Authentification bureau](ConduitDesktopSignIn.png)
![Page d'accueil bureau](ConduitDesktopHome.png)
![Rédaction d'un article bureau](ConduitDesktopEditor.png)
![Lecture d'un article bureau](ConduitDesktopArticle.png)

##### Visuels application mobile

![Authentification mobile](ConduitMobileSignIn.jpg)
![Page d'accueil mobile](ConduitMobileHome.jpg)
![Rédaction d'un article mobile](ConduitMobileEditor.jpg)
![Lecture d'un article mobile](ConduitMobileArticle.jpg)

## Valeur ajoutée de cette recherche

Le but de ce travail de recherche est de fournir au sein d'un document synthétique un grand nombre de comparaison entre plusieurs architectures applicatives fréquemment utilisées. Ces comparaisons ont pour objectif d'aider au choix de la technologie au lancement d'un projet de développement informatique et d'accompagner le changement de ces technologies au sein d'une entreprise.

Plutôt que de fonder les réponses aux hypothèses sur les jugements subjectifs de développeurs, cette thèse aborde ce sujet d'un point de vue technique grâce aux *proofs of concept* et aux *benchmarks* qui leurs sont liés.\
Malgré cela, aucune réponse définitive ne saurait être apporté. Les solutions ont toujours des exceptions dans lesquelles elle brillent plus et le monde du développement de logiciel est en constante croissance, amenant de ce fait de nouveaux outils et de nouvelles solutions très fréquemment.\

C'est au sujet de ce dernier point que ce travail de recherche ne vise donc pas une réponse unique mais plutôt un conseil quand à l'état d'esprit à avoir lorsque l'on considère une architecture applicative. Si les technologies évoluent à une vitesse extraordinaire, les concepts et les notions d'architecture elles, restent toujours valables selon la nature d'un projet.

[^1]: [SlashData 2019](https://slashdata-website-cms.s3.amazonaws.com/sample_reports/EiWEyM5bfZe1Kug_.pdf)
[^2]: *The Pragmatic Programmer*, Addison-Wesley, 2000
[^3]: [Fin du support de Windows XP : 2009](https://docs.microsoft.com/en-us/lifecycle/products/windows-xp)
[^4]: [RealWorld](https://github.com/gothinkster/realworld)
[^5]: [Medium](https://medium.com/)