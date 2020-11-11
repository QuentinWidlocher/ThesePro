---
title: Synthèse et préconisation
slug: preconisations
layout: post
---

1. [Synthèse](#synthèse)
   1. [Les application natives](#les-application-natives)
      1. [Applications Natives - Le temps de développement](#applications-natives---le-temps-de-développement)
      1. [Applications Natives - Les limitations techniques](#applications-natives---les-limitations-techniques)
      1. [Applications Natives - Les limitations esthétiques](#applications-natives---les-limitations-esthétiques)
      1. [Applications Natives - Le déploiement](#applications-natives---le-déploiement)
      1. [Applications Natives - La maintenance](#applications-natives---la-maintenance)
      1. [Applications Natives - La réutilisation](#applications-natives---la-réutilisation)
      1. [Applications Natives - La consommation des ressources](#applications-natives---la-consommation-des-ressources)
      1. [Applications Natives - Les temps de réponses](#applications-natives---les-temps-de-réponses)
      1. [Applications Natives - Le poids de l'application](#applications-natives---le-poids-de-lapplication)
   1. [Les application web](#les-application-web)
      1. [Applications Web - Le temps de développement](#applications-web---le-temps-de-développement)
      1. [Applications Web - Les limitations techniques](#applications-web---les-limitations-techniques)
      1. [Applications Web - Les limitations esthétiques](#applications-web---les-limitations-esthétiques)
      1. [Applications Web - Le déploiement](#applications-web---le-déploiement)
      1. [Applications Web - La maintenance](#applications-web---la-maintenance)
      1. [Applications Web - La réutilisation](#applications-web---la-réutilisation)
      1. [Applications Web - La consommation des ressources](#applications-web---la-consommation-des-ressources)
      1. [Applications Web - Les temps de réponses](#applications-web---les-temps-de-réponses)
      1. [Applications Web - Le poids de l'application](#applications-web---le-poids-de-lapplication)
   1. [Les application hybrides](#les-application-hybrides)
      1. [Applications Hybrides - Le temps de développement](#applications-hybrides---le-temps-de-développement)
      1. [Applications Hybrides - Les limitations techniques](#applications-hybrides---les-limitations-techniques)
      1. [Applications Hybrides - Les limitations esthétiques](#applications-hybrides---les-limitations-esthétiques)
      1. [Applications Hybrides - Le déploiement](#applications-hybrides---le-déploiement)
      1. [Applications Hybrides - La maintenance](#applications-hybrides---la-maintenance)
      1. [Applications Hybrides - La réutilisation](#applications-hybrides---la-réutilisation)
      1. [Applications Hybrides - La consommation des ressources](#applications-hybrides---la-consommation-des-ressources)
      1. [Applications Hybrides - Les temps de réponses](#applications-hybrides---les-temps-de-réponses)
      1. [Applications Hybrides - Le poids de l'application](#applications-hybrides---le-poids-de-lapplication)
1. [Préconisations](#préconisations)
   1. [Exemples de choix](#exemples-de-choix)
      1. [Exemples fictifs](#exemples-fictifs)
         1. [Exemple 1 - Industriel](#exemple-1---industriel)
            1. [Pour l'automatisation des machines, une application native](#pour-lautomatisation-des-machines-une-application-native)
            1. [Pour la visualisation des statistiques, une application web](#pour-la-visualisation-des-statistiques-une-application-web)
      1. [Exemples réels](#exemples-réels)

## Synthèse

Nos hypothèse finalisées et analysé, il est temps d'observer de manière synthétique chaque méthode de développement d'application et d'apprécier leurs points forts et leurs points faibles.\
Nous verrons aussi comment palier ces derniers grâce à ces derniers grâce à des agencements d'outils au sein d'architectures applicatives.

Afin d'analyser au mieux ces méthodes, nous allons nous servir des critères utilisés précédemment pour nos hypothèse, et nous allons comparer les résultats des hypothèses se servant de ces méthodes au hypothèses qui ne s'en servent pas.

### Les application natives

#### Applications Natives - Le temps de développement

L'hypothèse 1 est celle qui possède le temps de développement le plus long et cela semble tout à fait évident.

Bien que développer une application native ne demande pas beaucoup plus de temps que de développer une application web, c'est la grande variété de langages et d'outils existant qui demande une duplication faramineuse du code, et ainsi un temps de développement important.

L'hypothèse 2 a pu prouver qu'il existe un terrain d'entente et que certaines technologies permettent de cibler un grand nombre de cibles native pour peux qu'on sacrifie certains critères (sur lesquels nous reviendront plus loin).

#### Applications Natives - Les limitations techniques

Ce critère est sans conteste le plus grand point fort des applications natives.\
Après tout, c'est avec celles ci que l'informatique a d'abord connu son essor, et il semble naturel que ces applications tirent partie de leur machines au maximum.

#### Applications Natives - Les limitations esthétiques

Exceptés certains outils assez poussé, il est difficile d'avoir une totale liberté d'expression sur l'aspect visuel d'une interface graphique pour une application native.\
Et quand bien même la charte graphique par défaut d'un système d'exploitation est de nature élégante (macOS, iOS et Android par exemple), il peut-être souvent difficile de sortir des limites de ce qui a été prévu par les concepteurs.

#### Applications Natives - Le déploiement

iOS et ses règles particulière sur les applications de son store mis à part, il est assez aisé de déployer une application native.\
Encore une fois, cela est cohérent en vertu du fait que cette méthode a très longtemps été l'unique manière de créer des logiciels pour un poste de travail.

#### Applications Natives - La maintenance

Là encore, iOS mis à part, la maintenance des applications natives est aisé pour les même raisons, permettant une haute vitesse de mise à jour de correctif. C'est d'autant plus vrai pour les systèmes d'exploitations proposant des *stores* (principalement Android et iOS) capable de mettre à jour les application sans que celles ci aient besoin d'être ouverte au préalable par l'utilisateur.

#### Applications Natives - La réutilisation

Dans le cas d'un projet mono-plateforme ou multi-plateforme limité (peu de cibles) utilisant le même langage de programmation, la réutilisation du code d'un projet natif n'est pas plus mauvais que pour une autre méthode.

Cependant, dans le cas d'un projet pleinement multiplateforme (visant les cinq principales cibles) comme c'est le cas dans notre analyse, il est très compliqué de partager les fonctionnalités déjà existantes d'une application à une autre, et pas plus simple pour les projets futurs si ceux si usent des mêmes outils.

#### Applications Natives - La consommation des ressources

De part leur statut naturellement adaptés aux machine sur lesquelles elles tournent, les applications natives ne sont pas trop "gourmandes" en ressources.\
Elles sont donc capable de gérer de plus grandes quantités de données sans montrer de signe de ralentissement, même sur les machines les moins performantes.

#### Applications Natives - Les temps de réponses

Pour les mêmes raisons que pour la consommation des ressources, les logiciels natifs présentent souvent de bonnes performances et des temps de réponses rapides.

Ce sont donc des logiciels adaptés aux besoins métier les plus exigeant, dans des cadres ou le temps passé vaut de l'argent qu'il est capital de ne pas gaspiller.

#### Applications Natives - Le poids de l'application

Le poids d'un logiciel natif est très dépendant des technologies qu'il utilise si ces dernières nécessitent des paquet installés sur la machine de l'utilisateur.\
Nous n'avons pas pris en compte ces restrictions car les cas de figures sont très important, aussi nous nous somme concentrés sur le poids réel final.\
Dans ce cas, le poids des logiciels natifs ne sont pas forcément déraisonné.

### Les application web

#### Applications Web - Le temps de développement

Les applications web ne sont pas différentes des applications native dans le sens ou leurs temps de développement ne sont pas si différents.\
Cependant, là où les applications web sont généralement plus rapide à produire, c'est dans leur capacités à s'exécuter sur un nombre généreux de supports.

Dans le cas de notre hypothèse 3, elle possède le temps le plus court de développement et pour cause, une seule application web suffit pour couvrir les cinq systèmes d'exploitations majeurs.

#### Applications Web - Les limitations techniques

Contrairement à sa contrepartie native, l'application web est très limitée dans ses accès aux fonction du système.\
Sa lacune la plus importante est son absence d'accès au système de fichier du système d'exploitation.

Cette lacune l'empêche de stocker une base de données local et d'y accéder même en étant hors ligne par exemple.\
Il existe des solution de gestion de base de données intégré au navigateur afin de pallier ce problème (*Local Storage*, *Indexed Database* etc.)

Néanmoins cette limitation n'existe pas par hasard et permet une plus grande sécurité de navigation sur Internet.\
Prenons un moment pour imaginer un Internet où les sites web ont la possibilité d'accéder au système de fichier de l'utilisateur.

Là ou une application native doit faire l'objet d'une installation consciente de l'utilisateur, une application web n'a pas cette préoccupation. N'importe quelle URL valide entrée dans la barre d'adresse mène directement à une application et il n'est pas rare pour des sites aux moralités douteuses d'ouvrir des pages web sans l'accord de l'utilisateur (généralement dans le but d'afficher une publicité).

Imaginons maintenant que ces pages intempestives puissent accéder sans notre accord aux fichiers stocké sur nos disques dur.\
Bien sûr ce serait une faille de sécurité si importante qu'il n'existe aujourd'hui aucun moyen pour une application web d'accéder au système de fichier. La seule communication doit venir de l'utilisateur lui même (quand on *upload* une image de profil par exemple, c'est un acte délibéré de fournir un fichier que nous contrôlons.)

#### Applications Web - Les limitations esthétiques

Devant cette limitations importante, il existe néanmoins pour les logiciels web une énorme liberté créative en ce qui concerne les interfaces graphiques.\
Comme expliqué dans la section précédente, cette liberté est dû au *CSS*, ce langage - non pas de programmation mais de balisage proposant une syntaxe aux possibilités virtuellement infinies.

C'est grâce à cette technologie que les sites web actuels sont si variés et intéressants, mais aussi grâce à elle que le *responsive design* est né et permet d'afficher des interfaces adaptées à la taille de l'écran sur lesquelles ils s'affichent.

Cette syntaxe est si populaire que de nombreux outils de mise en page pour applications natives tentent d'en proposer un dialecte, très souvent bien moins complet que l'original. ([Ultralight](https://ultralig.ht/) ou [Sciter](https://sciter.com/) par exemple)

#### Applications Web - Le déploiement

Déployer une application web reviens simplement à mettre en ligne un ensemble de fichiers composants l'application en question.\
Il s'agit ensuite de fournir le lien vers la page au utilisateurs et ils pourront le consulter grâce à leur navigateur Internet de prédilection.

La seule complexité qui peut survenir de la mise en fonction d'une application serait potentiellement la mise en place d'un système de *clustering* et/ou de répartition de charge sur les serveurs applicatifs. Cependant ce sujet technique n'est pas en rapport avec le sujet de cette thèse aussi nous ne le prenons pas en compte dans le résultat final.

#### Applications Web - La maintenance

Cependant, là ou la première mise en place d'une application web est aisée car aucun utilisateur ne l'utilise encore, la maintenance d'un site est bien plus complexe pour les mêmes raisons.

Contrairement à une application native installé sur le poste de travail d'un utilisateur, qui contrôlera lui même le moment de la mise à jour, une application web doit être mise à jour **pendant** son utilisation.\
Même s'il est possible de bloquer l'accès à un logiciel web pendant sa maintenance, cela n'est pas aisé, peu agréable pour l'utilisateur et demande une mise en place manuelle de cette fonctionnalité.

Le plus grand avantage de cette technologie devient alors un de ses points faible : une application web est accessible à n'importe quel moment sur pratiquement n'importe quel support.

#### Applications Web - La réutilisation

À l'opposé des application natives aux langages variés et difficilement partageables, les applications web ne connaissent finalement que très peu de langages. Parmi eux, le *PHP* est encore utilisé mais la plus grande partie des développeurs utilisent aujourd'hui le *Javascript*. Il existe plusieurs autres langages et outils capables de produire des pages web, mais ceux-ci ne se contentent généralement que de traduire le code source en *PHP* ou en *Javascript*.

Entre deux applications web en *Javascript*, il est très aisé de partager du code et ce, même si ces deux applications n'utilisent pas le même outil de conception (*framework*). C'est pourquoi beaucoup d'entreprise se tournent aujourd'hui vers les technologies du web pour accélérer leurs temps de développements, et créent des librairies de code prêt à être réutilisé sur les projets à venir.

#### Applications Web - La consommation des ressources

La plus grande problématique des applications web est celle de leurs performances.\
Étant des applicatifs s’exécutant au sein d'un navigateur Internet, lui même s'exécutant au sein d'un système d'exploitation, ces premières souffrent d'une consommation excessive en ressource, principalement en mémoire vive.

Ces limitations ne viennent pas vraiment des applications elles même mais plutôt des navigateurs qui sont de véritables machines à interpréter du code. Ces navigateurs contiennent des moteurs qui se chargent d'interpréter le code HTML, CSS et Javascript à tout moment. Note amusante, le moteur permettant d'exécuter le code Javascript aujourd'hui s'appelle le moteur [V8](https://v8.dev/) (Moteur utilisant un intérpréteur appellé *Ignition* et une infrastructure de compilation appelée *Crankshaft* (Vilebrequin)).

C'est cette limitation qui rend les logiciels web peux adaptés pour les métier très rigoureux ou demander un très haut niveau de réflexe. Même chose si une application complexe doit s'exécuter sur une machine faible en performance (ex: terminaux de gestion portatifs)

#### Applications Web - Les temps de réponses

Pour les mêmes raisons que la consommation des ressources, les temps de réponses d'une application web sont souvent en deçà par rapport à leurs contreparties native.\

Il est donc important pour les développeur de prêter une attention particulière aux logiciels web, surtout s'ils sont censé s'exécuter sur des appareils peu puissants.

Une note technique cependant, la gestion de code asynchrone est bien plus aisée avec cette technologie, ce qui amène souvent à des impressions de fluidité pour les utilisateurs.

#### Applications Web - Le poids de l'application

Là ou une application native doit embarquer avec elle tout ce dont elle a besoin pour s'exécuter, et souvent doit se reposer sur des paquets exécutifs ([voir plus haut](#applications-natives---le-poids-de-lapplication)) ajoutant encore plus de poids, les application web n'ont pas cette problématique.

Si nous n'avons pas pris en compte les paquets supplémentaire pour les application native, nous ne prenons donc pas en compte le poids du navigateur intégré au système d'exploitation de l'utilisateur car, comme les paquets, il n'est pas livré avec le logiciel même s'il est indispensable.

De plus, les applications web sont envoyées au fur et à mesure aux utilisateurs via Internet là ou les applications natives doivent êtres téléchargées de A à Z.\
Cette récupération plus fragmentée permet d'augmenter drastiquement la vitesse d'accès à un applicatif.

### Les application hybrides

#### Applications Hybrides - Le temps de développement

De la même façon que les application web et native, le temps de développement des applications hybride ne dépend surtout que de l'architecture multiplateforme choisie.

À l'instar du web, l'hybride est naturellement multiplateforme et permet à un seul projet de se contenter de deux applications pour couvrir l'ensemble des systèmes d'exploitations majeurs correctement.

#### Applications Hybrides - Les limitations techniques

Ces limitations sont, nous l'avons vu, le point fort des applications natives et le point faible des applications web.\

En "mélangeant" ces deux technologies, une solution hybride est capable de tirer profit de sa condition de logiciel natif et possède un accès - certes indirect, mais néanmoins assez complet - aux fonctionnalités offertes par le système d'exploitation.

Une application hybride installé sur une poste de travail est capable d'accéder au système de fichier de l'utilisateur afin de conserver la persistence des données de celui ci.\
Prenons comme exemple Microsoft Teams qui est capable de stocker des fichiers partagé sur le disque dur et de les envoyer sur une cloud.

Avec ce même exemple, nous remarquons que Microsoft Teams ne demande pas constamment à l'utilisateur l'autorisation à la caméra et au microphone, étant installé sur le poste, il possède directement ces droits, là ou la version web doit sans cesse réitérer ces demandes.\
Pourtant la version web et la version hybride partagent probablement plus de 75% de leurs code source.

#### Applications Hybrides - Les limitations esthétiques

À l'inverse des limitations techniques, les limitations esthétiques sont le point faible des application native et le point fort des applications web.

Là encore, une application hybride tire le meilleur de ses deux composantes et propose une liberté de création d'interface aussi grande que celle du web grâce au CSS.

#### Applications Hybrides - Le déploiement

Pour le déploiement, les logiciels hybrides sont identiques aux logiciels natifs, le système d'exploitation et l'utilisateur ne pouvant pas réellement faire la différence entre les deux.

#### Applications Hybrides - La maintenance

Idem pour la maintenance, qui est rigoureusement la même que pour les applications natives.

#### Applications Hybrides - La réutilisation

La réutilisation du code cependant est similaire à celle des application web, à savoir excellente.

Une application native peut très aisément partager du code avec une autre, et même avec une application web.

Pour peu qu'une application hybride n'ai pas besoin d'accéder à des fonctionnalités du  système d'exploitation, il est possible de convertir une application web en hybride avec un travail supplémentaire minime.\
De cette première version, il est possible d'ajouter ces fonctionnalités au fur et à mesure des mises à jour, et ainsi d'opérer une évolution graduelle.

#### Applications Hybrides - La consommation des ressources

La partie applicative d'un logiciel hybride étant identique à celle d'un logiciel web, la consommation des ressources est virtuellement la même que ces derniers.

#### Applications Hybrides - Les temps de réponses

Encore une fois, idem pour les temps de réponse, pour les même raisons.\
Notons toutefois un léger gain dû à la présence des ressources nécessaires (code, images...) en local.

#### Applications Hybrides - Le poids de l'application

Le plus gros point faible des application hybrides bureau reste le poids final de l'applicatif.\
Rappelons que cette méthode demande la plupart du temps de livrer un navigateur complet afin de pouvoir y exécuter le logiciel. Sans code ajouté, c'est un poids supplémentaire de 50MB.

Ce n'est pas le cas des applications hybrides mobile cependant qui utilisent directement le navigateur intégré au système d'exploitation. C'est une chose possible car ce navigateur est réellement intégré et ne peux être retiré contrairement aux système d'exploitations bureau.

## Préconisations

Voyons un dernière fois, sous une forme plus synthétique, les raisons de privilégier une méthode à une autre

Voyons une dernière fois, sous une forme très synthétique, ce qu'apportent ces méthodes et dans quelle intention les choisir

**Quand choisir une application native ?**

- Pour des métier où le temps de réaction est clé
- Pour des besoins métiers complexes
- Pour des solutions indépendante capable de fonctionner sans réseau
- Pour des solutions multiplateforme visant peu de plateformes, et d'un même groupe (bureau ou mobile)
- Pour des besoins de mises à jour fréquentes.
- Pour des appareils peu puissants
- Pour des entreprises se concentrant sur peu de projets

**Quand choisir une application web ?**

- Pour des projet aux cibles très nombreuses
- Pour des solutions à l'aspect élégantes et/ou originales
- Pour des cibles non connues à l'avance
- Pour des mises en production très rapide
- Pour des temps de production rapide
- Pour des entreprises créant fréquemment de nouveaux projets

**Quand choisir une application hybride ?**

- Pour des besoins métiers complexes
- Pour des solutions indépendante capable de fonctionner sans réseau
- Pour des besoins de mises à jour fréquentes.
- Pour des solutions à l'aspect élégantes et/ou originales
- Pour des temps de production rapide
- Pour des entreprises créant fréquemment de nouveaux projets

Rappelons à nouveau que le but de cette thèse n'est pas de donner une unique réponse à la problématique, mais d'orienter et de conseiller le choix des lecteurs.

Aucune des méthodes présentées n'est exempte de faiblesses. Il est important de bien analyser le besoin d'un projet et de connaître les forces et les faiblesses de chacune de ces méthodes pour faire le choix le plus adapté.

Il est aussi important de noter que ces trois méthodes ne constituent pas uniquement trois réponses, mais sont plutôt des outils pour composer une multitude de solutions applicatives plus ou moins adaptées au besoin d'un projet.

### Exemples de choix

Donnons quelques exemples de projets à but multiplateforme afin de mieux saisir comment faire le choix de l'architecture applicative.

#### Exemples fictifs

##### Exemple 1 - Industriel

Imaginons une usine où sont manufacturés des produits quelconques à la chaîne. L'entreprise cherche à informatiser la chaîne de production et à dégager des statistiques variés quand au fonctionnement quotidien de celle ci.

La chaîne de production doit être automatisée mais doit offrir aux employés de l'usine un accès aux contrôles des machines en cas de problème ou simplement pour ajuster la production.

Il faut aussi que les responsables naviguant la chaîne de production puisse avoir accès à des statistiques diverses (Temps de production d'un produit, ralentissements, consommation électrique etc., les possibilités sont infinie).\
Ces donnés doivent aussi être accessible aux employés du bureau d'étude pour faciliter les choix futurs.

Cette situation est de nature multiplateforme, les appareils opérants les machines de la chaîne de production, les terminaux mobiles des responsable et les postes de travail du bureau d'études sont autant de plateforme différentes à prendre en compte.

Voici une choix possible d'architecture applicative pour cette situation :

###### Pour l'automatisation des machines, une application native

- Parce que ces logiciels doivent répondre au commande au plus vite pour éviter les problèmes
- Parce que l'accès au réseau est optionnel tant que les machines peuvent êtres manœuvrés
- Parce que l'interface graphique doit-être fonctionnelle bien plus qu'élégante
- Parce qu'il est bien plus aisé à une application native de pouvoir contrôler des machines
- Parce que tous les appareils sont tous identiques et fonctionnent sur le même système d'exploitation

###### Pour la visualisation des statistiques, une application web

- Parce qu'il faut pouvoir y accéder depuis de nombreux terminaux variés (mobiles et fixes)
- Parce que les statistiques sont stockés sur un réseau, donc l'accès au réseau est obligatoire
- Parce que l'application doit être agréable à naviguer et doit apporter des résultat faciles à appréhender
- Parce que la consultation des données n'est pas une tâche critique
- Parce qu'il est très facile d'ajouter cette application sur des nouveaux terminaux

#### Exemples réels 