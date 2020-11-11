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
         1. [Exemple 2 - Public](#exemple-2---public)
            1. [Pour la version bureau, une application web](#pour-la-version-bureau-une-application-web)
            1. [Pour la version mobile, une application hybride](#pour-la-version-mobile-une-application-hybride)
      1. [Exemple réel](#exemple-réel)
         1. [Pour le CRM, une application web](#pour-le-crm-une-application-web)
         1. [Pour l'APP, une application native. Ou web ? Peut-être hybride ?](#pour-lapp-une-application-native-ou-web--peut-être-hybride-)
   1. [Conclusion](#conclusion)

## Synthèse

Nos hypothèses finalisées et analysés, il est temps d'observer de manière synthétique chaque méthode de développement d'application et d'apprécier leurs points forts et leurs points faibles.\
Nous verrons aussi comment palier ces derniers grâce à des agencements d'outils au sein d'[architectures applicatives](/chapters/glossaire#architecture-logicielle).

Afin d'analyser au mieux ces méthodes, nous allons nous servir des critères utilisés précédemment pour nos hypothèse, et nous allons comparer les résultats des hypothèses se servant de ces méthodes, aux hypothèses qui ne s'en servent pas.

### Les application natives

#### Applications Natives - Le temps de développement

L'hypothèse 1 est celle qui possède le temps de développement le plus long et cela semble tout à fait évident.

Bien que développer une application native ne demande pas beaucoup plus de temps que de développer une application web, c'est la grande variété de langages et d'outils existants qui demande une duplication faramineuse du code, et ainsi un temps de développement plus important.

L'hypothèse 2 prouve qu'il existe un terrain d'entente et que certaines technologies permettent de cibler un grand nombre de cibles natives pour peu que l'on sacrifie certains critères (sur lesquels nous reviendront plus loin).

#### Applications Natives - Les limitations techniques

Ce critère est sans conteste le plus grand point fort des applications natives.\
Après tout, c'est avec celles-ci que l'informatique a d'abord connu son essor et il semble naturel que ces applications tirent partie de leurs machines au maximum.

#### Applications Natives - Les limitations esthétiques

Exceptés certains outils assez poussés, il est difficile d'avoir une totale liberté d'expression sur l'aspect visuel d'une interface graphique pour une application native.\
Et quand bien même la charte graphique par défaut d'un système d'exploitation est de nature élégante (macOS, iOS et Android par exemple), il peut être souvent difficile de sortir des limites de ce qui a été prévu par les concepteurs.

Aussi, une technologie capable de créer un logiciel natif multiplateforme (bureau ou mobile) fera souvent l'impasse sur les libertés de conception visuelles octroyées.

#### Applications Natives - Le déploiement

iOS et ses règles particulières sur les applications de son *store* mis à part, il est assez aisé de déployer une application native.\
Encore une fois, cela est cohérent en vertu du fait que cette méthode a très longtemps été l'unique manière de créer des logiciels pour un poste de travail.

#### Applications Natives - La maintenance

Là encore, iOS mis à part, la maintenance des applications natives est aisé pour les même raisons, permettant une haute vitesse de mise à jour de correctifs.\
C'est d'autant plus vrai pour les systèmes d'exploitations proposant des *stores* (principalement Android et iOS) capable de mettre à jour les applications sans que celles-ci aient besoin d'être ouvertes au préalable par l'utilisateur.

#### Applications Natives - La réutilisation

Dans le cas d'un projet mono-plateforme ou multi-plateforme limité (peu de cibles) utilisant le même langage de programmation, la réutilisation du code d'un projet natif n'est pas plus mauvaise que pour une autre méthode.

Cependant, dans le cas d'un projet pleinement multiplateforme (visant les cinq principales cibles) comme c'est le cas dans notre analyse, il est très compliqué de partager les fonctionnalités déjà existantes d'une application à une autre, idem pour les projets futurs si ceux si usent des mêmes outils.

#### Applications Natives - La consommation des ressources

De part leur statut naturellement adaptés aux machines sur lesquelles elles tournent, les applications natives ne sont pas trop "gourmandes" en ressources.\
Elles sont donc capable de gérer de plus grandes quantités de données sans montrer de signes de ralentissement, même sur les machines les moins performantes.

#### Applications Natives - Les temps de réponses

Pour les mêmes raisons que pour la consommation des ressources, les logiciels natifs présentent souvent de bonnes performances et des temps de réponses rapides.

Ce sont donc des logiciels adaptés aux besoins métier les plus exigeant, dans des cadres ou le temps passé vaut de l'argent qu'il est capital de ne pas en gaspiller.

#### Applications Natives - Le poids de l'application

Le poids d'un logiciel natif est très dépendant des technologies qu'il utilise si ces dernières nécessitent des paquet installés sur la machine de l'utilisateur.

Nous n'avons pas pris en compte ces restrictions dans les mesures car le nombre cas de figures différent est très important et difficilement mesurable, aussi nous nous somme concentrés sur le poids réel final.\
Dans ce cas, le poids des logiciels natifs ne sont pas forcément déraisonné.

### Les application web

#### Applications Web - Le temps de développement

Les applications web ne sont pas différentes des applications natives dans le sens ou leurs temps de développement sont à peu près égaux.\
Cependant, là où les applications web sont généralement plus rapides à produire, c'est dans leur capacité à s'exécuter sur un nombre important de supports.

Dans le cas de notre hypothèse 3, elle possède le temps de développement le plus court et pour cause, une seule application web suffit pour couvrir les cinq systèmes d'exploitations majeurs.

#### Applications Web - Les limitations techniques

Contrairement à sa contrepartie native, l'application web est très limitée dans ses accès aux fonctions du système.\
Sa lacune la plus importante est son absence d'accès au système de fichier de l'utilisateur.

Cette lacune l'empêche de stocker une base de données locale et d'y accéder, même en étant hors ligne par exemple.\
Il existe des solutions de gestion de base de données intégré au navigateur afin de pallier ce problème (*Local Storage*, *Indexed Database* etc.)

Néanmoins, cette limitation n'existe pas par hasard et permet une plus grande sécurité de navigation sur Internet.\
Prenons un moment pour imaginer un Internet où les sites web ont la possibilité d'accéder au système de fichier de l'utilisateur.

Là ou une application native doit faire l'objet d'une installation consciente de l'utilisateur, une application web n'a pas cette préoccupation. N'importe quelle URL valide entrée dans la barre d'adresse mène directement à une application et il n'est pas rare pour des sites aux moralités douteuses d'ouvrir des pages web sans l'accord de l'utilisateur (généralement dans le but d'afficher une publicité).

Imaginons maintenant que ces pages intempestives puissent accéder sans notre accord aux fichiers stockés sur nos disques dur.\
Bien sûr ce serait une faille de sécurité si importante qu'il n'existe aujourd'hui aucun moyen pour une application web d'accéder au système de fichier. La seule communication doit venir de l'utilisateur lui même (quand on envoie une image de profil par exemple, c'est un acte délibéré de fournir un fichier que nous contrôlons.)

#### Applications Web - Les limitations esthétiques

Devant cette limitations importante, il existe néanmoins pour les logiciels web une énorme liberté créative en ce qui concerne les interfaces graphiques.\
Comme expliqué dans le chapitre précédent, cette liberté est dû au *CSS*, ce langage - non pas de programmation mais de balisage - proposant une syntaxe aux possibilités virtuellement infinies.

C'est grâce à cette technologie que les sites web actuels sont si variés et intéressants, mais aussi grâce à elle que le *responsive design* est né et permet d'afficher des interfaces adaptées à la taille de l'écran sur lesquelles elles s'affichent.

Cette syntaxe est si populaire que de nombreux outils de mise en page pour applications natives tentent d'en proposer un dialecte, très souvent bien moins complet que l'original. ([Ultralight](https://ultralig.ht/) ou [Sciter](https://sciter.com/) par exemple)

#### Applications Web - Le déploiement

Déployer une application web reviens simplement à mettre en ligne un ensemble de fichiers composants l'application en question.\
Il s'agit ensuite de fournir le lien vers la page aux utilisateurs et ils pourront le consulter grâce à leurs navigateurs Internet de prédilection.

La seule complexité qui peut survenir dans la mise en fonction d'une application serait potentiellement la mise en place d'un système de mise en grappe et/ou de répartition de charge sur les serveurs applicatifs. Cependant ce sujet technique n'est pas en rapport avec le sujet de cette thèse, aussi nous ne le prenons pas en compte dans le résultat final.

#### Applications Web - La maintenance

Cependant, là ou la première mise en place d'une application web est aisée car aucun utilisateur ne l'utilise encore, la maintenance est bien plus complexe pour la raison contraire.

Contrairement à une application native installée sur le poste de travail d'un utilisateur, qui contrôlera lui même le moment de la mise à jour, une application web doit être mise à jour **pendant** son utilisation.\
Même s'il est possible de bloquer l'accès à un logiciel web pendant sa maintenance, cela n'est pas aisé, peu agréable pour l'utilisateur et demande une mise en place manuelle de cette fonctionnalité.

Le plus grand avantage de cette technologie devient alors un de ses points faible : une application web est accessible à n'importe quel moment sur pratiquement n'importe quel support.

#### Applications Web - La réutilisation

À l'opposé des application natives aux langages variés et difficilement partageables, les applications web ne connaissent finalement que très peu de langages différents.\
Parmi eux, le *PHP* est encore utilisé mais la plus grande partie des développeurs utilisent aujourd'hui le *Javascript*. Il existe plusieurs autres langages et outils capables de produire des pages web, mais ceux-ci ne se contentent généralement que de traduire le code source en *PHP* ou en *Javascript*.

Entre deux applications web en *Javascript*, il est très aisé de partager du code et ce, même si ces deux applications n'utilisent pas le même outil de conception ([*framework*](/chapters/glossaire#framework)). C'est pourquoi beaucoup d'entreprises se tournent aujourd'hui vers les technologies du web pour accélérer leurs temps de développement, et créent des librairies de code prêt à être réutilisé pour les projets à venir.

#### Applications Web - La consommation des ressources

La plus grande problématique des applications web est celle de leurs performances.\
Étant des applicatifs s’exécutant au sein d'un navigateur Internet, lui même tournant au sein d'un système d'exploitation, elles souffrent d'une consommation excessive en ressource et principalement en mémoire vive.

Ces limitations ne viennent pas vraiment des applications elles-même mais plutôt des navigateurs qui sont de véritables machines à [interpréter](/chapters/glossaire#interpréteur) du code. Ces navigateurs contiennent des moteurs qui se chargent d'interpréter le code HTML, CSS et Javascript à tout moment.\
Note amusante, le moteur permettant d'exécuter le code Javascript aujourd'hui s'appelle le moteur [V8](https://v8.dev/) (Moteur utilisant un interpréteur appelé *Ignition* et une infrastructure de [compilation](/chapters./glossaire#compilateur) appelée *Crankshaft* (Vilebrequin)).

C'est cette limitation qui rend les logiciels web peu adaptés aux métier très rigoureux ou demandant un très haut niveau de réflexes. Même chose si une application complexe doit s'exécuter sur une machine faible en performance (ex: terminaux de gestion portatifs)

#### Applications Web - Les temps de réponses

Pour les mêmes raisons que la consommation des ressources, les temps de réponses d'une application web sont souvent en deçà par rapport à leurs contreparties natives.\

Il est donc important pour les développeurs de prêter une attention particulière aux logiciels web, surtout s'ils sont censé s'exécuter sur des appareils peu puissants.

Une note technique cependant, la gestion de code asynchrone est bien plus aisée avec cette technologie, ce qui amène souvent à des impressions de fluidité pour les utilisateurs.

#### Applications Web - Le poids de l'application

Là ou une application native doit embarquer avec elle tout ce dont elle a besoin pour s'exécuter, et souvent doit se reposer sur des paquets exécutifs ([voir plus haut](#applications-natives---le-poids-de-lapplication)) ajoutant encore plus de poids, les application web n'ont pas cette problématique.

Si nous n'avons pas pris en compte les paquets supplémentaires pour les applications natives, nous ne prenons donc pas en compte le poids du navigateur intégré au système d'exploitation de l'utilisateur car, comme les paquets, il n'est pas livré avec le logiciel même s'il est indispensable.

De plus, les applications web sont envoyées au fur et à mesure aux utilisateurs via Internet là ou les applications natives doivent êtres téléchargées de A à Z.\
Cette récupération plus fragmentée permet d'augmenter drastiquement la vitesse d'accès à un applicatif web.

### Les application hybrides

#### Applications Hybrides - Le temps de développement

De la même façon que les applications web et natives, le temps de développement des applications hybrides ne dépend surtout que de l'architecture multiplateforme choisie.

À l'instar du web, l'hybride est naturellement multiplateforme et permet à un seul projet de se contenter de deux applications pour couvrir l'ensemble des systèmes d'exploitations majeurs correctement.

#### Applications Hybrides - Les limitations techniques

Ces limitations sont, nous l'avons vu, le point fort des applications natives et le point faible des applications web.\

En "mélangeant" ces deux technologies, une solution hybride est capable de tirer profit de sa condition de logiciel natif et possède un accès - certes indirect, mais néanmoins assez complet - aux fonctionnalités offertes par le système d'exploitation.

Une application hybride installée sur une poste de travail est capable d'accéder au système de fichier de l'utilisateur afin de conserver la persistence des données de celui ci.\
Prenons comme exemple Microsoft Teams qui est capable de stocker des fichiers partagés sur le disque dur et de les envoyer sur un serveur en ligne.

Avec ce même exemple, nous remarquons que Microsoft Teams ne demande pas constamment à l'utilisateur l'autorisation d'accès à la caméra et au microphone. Étant installé sur le poste, il possède directement ces droits, là ou la version web doit sans cesse réitérer ces demandes.\
Pourtant la version web et la version hybride partagent probablement plus de 75% de leurs codes source.

#### Applications Hybrides - Les limitations esthétiques

À l'inverse des limitations techniques, les limitations esthétiques sont le point faible des applications natives et le point fort des applications web.

Là encore, une application hybride tire le meilleur de ses deux composantes et propose une liberté de création d'interface aussi grande que celle du web grâce au CSS.

#### Applications Hybrides - Le déploiement

Pour le déploiement, les logiciels hybrides sont identiques aux logiciels natifs, le système d'exploitation et l'utilisateur ne pouvant pas réellement faire la différence entre les deux.

#### Applications Hybrides - La maintenance

Idem pour la maintenance, qui est rigoureusement la même que pour les applications natives.

#### Applications Hybrides - La réutilisation

La réutilisation du code cependant est similaire à celle des applications web, à savoir excellente.

Pour peu qu'une application hybride n'ai pas besoin d'accéder à des fonctionnalités du système d'exploitation, il est possible de convertir une application web en hybride avec un travail supplémentaire relativement minime.\
De cette première version, il est possible d'ajouter ces fonctionnalités au fur et à mesure des mises à jour, et ainsi d'opérer une évolution graduelle.

#### Applications Hybrides - La consommation des ressources

La partie applicative d'un logiciel hybride étant identique à celle d'un logiciel web, la consommation des ressources est virtuellement la même que ces derniers.

#### Applications Hybrides - Les temps de réponses

Encore une fois, idem pour les temps de réponse, pour les même raisons.\
Notons toutefois un léger gain dû à la présence des ressources nécessaires (code, images...) en local.

#### Applications Hybrides - Le poids de l'application

Le plus gros point faible des applications hybrides de bureau reste le poids final de l'applicatif.\
Rappelons que cette méthode demande la plupart du temps de livrer un navigateur complet afin de pouvoir y exécuter le logiciel. Sans code ajouté, c'est un poids supplémentaire de 50MB.

Ce n'est pas le cas des applications hybrides mobiles cependant qui utilisent directement le navigateur intégré au système d'exploitation. C'est une chose possible car ce navigateur est réellement intégré et ne peux donc pas être retiré contrairement aux systèmes d'exploitations bureau.

## Préconisations

Afin de choisir une architecture applicative pour un projet dans sa totalité ou une partie, on peut se poser de nombreuses questions sur la nature du projet et ainsi déterminer s'il existe une méthode capable de répondre aux besoins de manière précise.

Voici une liste de ces questions.

**Quand choisir une application native ?**

- Pour des métiers où le temps de réaction est clé
- Pour des besoins métiers complexes
- Pour des solutions indépendantes capables de fonctionner sans connexion au réseau
- Pour des solutions multiplateformes visant peu de cibles, et d'un même groupe (bureau ou mobile)
- Pour des besoins de mises à jour fréquentes.
- Pour des appareils peu puissants
- Pour des entreprises se concentrant sur peu de projets

**Quand choisir une application web ?**

- Pour des projets aux cibles très nombreuses et variées
- Pour des solutions à l'aspect élégantes et/ou originales
- Pour des cibles non connues à l'avance
- Pour des mises en production très rapides
- Pour des temps de production courts
- Pour des entreprises créant fréquemment de nouveaux projets

**Quand choisir une application hybride ?**

- Pour des besoins métiers complexes
- Pour des solutions indépendantes capable de fonctionner sans connexion au réseau
- Pour des besoins de mises à jour fréquentes.
- Pour des solutions à l'aspect élégantes et/ou originales
- Pour des temps de production courts
- Pour des entreprises créant fréquemment de nouveaux projets

Rappelons à nouveau que le but de cette thèse n'est pas de donner une unique réponse à la problématique, mais d'orienter et de conseiller le choix des lecteurs.

Cette liste de question permet donc de choisir plus facilement quelle méthode est la plus adaptée au besoin d'un projet.

Aucune des méthodes présentées n'est exempte de faiblesses. Il est important de bien analyser le besoin d'un projet et de connaître les forces et les faiblesses de chacune de ces méthodes pour faire le choix le plus adapté.

Il est aussi important de noter que ces trois méthodes ne constituent pas uniquement trois réponses, mais sont plutôt des outils pour composer une multitude de solutions applicatives plus ou moins adaptées au besoin d'un projet.

### Exemples de choix

Donnons quelques exemples de projets à but multiplateforme afin de mieux saisir comment faire le choix de l'architecture applicative la plus adaptée.

#### Exemples fictifs

##### Exemple 1 - Industriel

Imaginons une usine où sont manufacturés des produits quelconques à la chaîne.\
L'entreprise cherche à informatiser la chaîne de production et à dégager des statistiques variés quand au fonctionnement quotidien de celle ci.

La chaîne de production doit être automatisée mais doit offrir aux employés de l'usine un accès aux contrôles des machines en cas de problème ou simplement pour ajuster la production.

Il faut aussi que les responsables naviguant la chaîne de production puisse avoir accès à des statistiques diverses (Temps de production d'un produit, ralentissements, consommation électrique etc., les possibilités sont infinie).\
Ces donnés doivent aussi être accessible aux employés du bureau d'étude pour faciliter les choix futurs.

Cette situation est de nature multiplateforme, les appareils opérants les machines de la chaîne de production, les terminaux mobiles des responsables et les postes de travail du bureau d'études sont autant de plateformes différentes à prendre en compte.

Voici un choix possible d'architecture applicative pour cette situation :

###### Pour l'automatisation des machines, une application native

- Parce que ces logiciels doivent répondre aux commandes au plus vite pour éviter les problèmes
- Parce que l'accès au réseau est optionnel tant que les machines peuvent êtres manœuvrés
- Parce que l'interface graphique doit-être fonctionnelle bien plus qu'élégante
- Parce qu'il est bien plus aisé pour une application native de pouvoir contrôler des machines via un câble
- Parce que les appareils sont tous identiques et fonctionnent sur le même système d'exploitation

###### Pour la visualisation des statistiques, une application web

- Parce qu'il faut pouvoir y accéder depuis de nombreux terminaux variés (mobiles et fixes)
- Parce que les statistiques sont stockés sur un réseau, donc l'accès au réseau est obligatoire
- Parce que l'application doit être agréable à naviguer et doit apporter des résultats faciles à appréhender
- Parce que la consultation des données n'est pas une tâche critique
- Parce qu'il est très facile d'ajouter cette application sur des nouveaux terminaux

En utilisant seulement deux méthodes de conception d'application, il est possible de couvrir 100% des machines cibles et de tirer profit au maximum des capacités de ces méthodes.

##### Exemple 2 - Public

Imaginons un organisme de droit privé français opérant des prestations financières dans des conditions déterminées par la loi (similaire à la Caisse d'allocations familiales par exemple).

Cet organisme souhaite mettre à disposition de tout ses utilisateurs une solution applicative ayant pour but de leurs permettre de consulter leurs droits, de demander des prestations et de communiquer avec des intermédiaires.\
Il doit être possible aux utilisateurs d'accéder à toutes ces fonctionnalités depuis un terminal mobile comme une tablette ou un smartphone.

De nombreux autres services sont également proposés comme des informations hebdomadaires sur l’évolution des prestations, la mise à disposition des attestations numériques, le suivit des démarche en cours/effectuées etc.

Voici un choix possible d'architecture applicative pour cette situation :

###### Pour la version bureau, une application web

- Parce que le nombre de cibles est très élevé
- Parce que l'interface doit-être claire et élégante
- Parce qu'il faut être connecté à Internet pour pouvoir s'en servir
- Parce qu'aucune installation préalable n'est nécessaire
- Parce que le transit des fichiers est fait de manière consciente par l'utilisateur

###### Pour la version mobile, une application hybride

- Parce que les mises à jour sont simplifiées grace au *store*
- Parce que les nombreuses fonctionnalités de la version web peuvent être partagées avec cette application sans effort
- Parce que la mise en page de toutes ces fonctionnalités doit faire l'objet d'une réflexion différente
- Parce que c'est plus facile pour l'utilisateur d'accéder à ses fichiers sur mobile
- Parce que l'interface doit-être claire et élégante

Là encore, ces deux méthodes permettent de couvrir toutes les cibles en tirant profit de la vitesse octroyée par le partage de code entre hybride et web.\
La nécessité d'être en ligne ne justifie pas une application native, de même pour l'aspect graphique qui doit être travaillé pour seoir aux utilisateurs.

#### Exemple réel

Afin de démontrer la mise en place d'un choix, nous allons voir un exemple concret, mis en pratique dans l'entreprise dans laquelle je travaille actuellement, Erudo.

Ici, une entreprise officiant dans le domaine de la protection de l'habitat et de l'entretien des murs et des toitures nous a contacté. L'entreprise est composé de trois groupe d'employés aux fonctions complémentaires.\

D'une part les téléprospecteurs qui démarchent téléphoniquement les clients potentiels et prévoient des rendez vous que les commerciaux pourrons honorer.\
Ces commerciaux rencontrent ces clients potentiels et établissent un devis et conviennent peut-être d'une date de début de chantier avec eux sur leurs iPhones.\
C'est ensuite au tour des techniciens de mettre en place la rénovation de la maison.

Afin d'assister les téléprospecteurs et les commerciaux, Erudo a conçu *Habit'app* pour permettre à ces deux groupes de communiquer au mieux afin d'honorer un plus grand nombre de rendez-vous.

Ce projet a été scindé en deux applications distinctes, appelés en interne "CRM" et "APP" (Pour APPlication mobile).

##### Pour le CRM, une application web

Erudo travaille depuis toujours en utilisant des technologies du web. Ce choix est motivé par la quantité croissante de projets à gérer et la volonté de pouvoir partager un maximum de code d'un projet à l'autre.

De plus, bien que l'application soit complexe, ses performances ne constituent pas un élément clé et la vitesse de réponse de l'application n'est pas critique pour les utilisateurs.\
Aucune fonctionnalité du système d'exploitation n'a besoin d'être utilisée (les transits de fichiers se font de manière consciente pour l'utilisateur) mais l'aspect visuel de l'application a été soignée pour rendre l'utilisation plus agréable par les téléprospecteurs.

Le déploiement de la solution a pu être très rapide pour respecter la *deadline* (très utile pour la méthode Agile utilisé en interne donc) et les frictions liées aux mises à jour de l'application ont pu être réduites car l'application n'est utilisée qu'en périodes ouvrées, les mises à jour pouvant donc être effectuées automatiquement le week-end.

Le choix d'une solution web était donc le plus propice pour cette partie du projet, et ce choix n'a pas fait l'objet d'une réflexion particulière.

##### Pour l'APP, une application native. Ou web ? Peut-être hybride ?

La réalisation d'une application mobile était une première pour Erudo qui a toujours réalisé des applications bureau. Le choix de la technologie s'est donc posé, bien plus que pour le CRM.

Tout d'abord nous avons effectué une liste des critères qui nous paraissaient importants pour cette application :

- Livrer vite
- Faire évoluer facilement
- Fonctionner hors ligne
- Être attractif pour les commerciaux parfois réticents à changer de technologie

Prenons chaque point et tâchons de déterminer quelle technologie est la plus adaptée :

- **"Livrer vite"**
  - Afin de pouvoir accélérer au mieux les temps de développement, Erudo a tout intérêt à créer une application web ou hybride pour profiter du partage de code déjà existant.
  - Les applications web permettent aussi de déployer très rapidement là où les applications hybrides et natives requièrent une installation spécifique
- **"Faire évoluer facilement"**
  - Là encore, c'est au moyen des technologies web ou hybrides que l'équipe d'Erudo aura la plus grande vitesse de réaction.
  - Les mises à jour sont cependant très compliquées sur iOS où elles requièrent à l'application de passer entre les mains d'employés d'Apple.
- **"Fonctionner hors ligne"**
  - C'est aux applications natives et hybrides que revient souvent cette tâche car les applications web ne sont pas capable de fonctionner hors ligne sans une modification supplémentaire
- **"Être attractif pour les commerciaux parfois réticents à changer de technologie"**
  - Une application native pourra sembler familière à ces utilisateurs, mais les technologies web et hybrides permettent d'aller encore plus loin et de proposer des mises en page intuitives.

Devant tous ces critères, il apparaît évident qu'une application native ne possède pas les qualités requises pour cette partie du projet.\
La technologie hybride semble quand à elle particulièrement adapté au besoin mais se heurte au problème de déploiement et de mises à jour sur les appareils doté d'un système d'exploitation iOS.

C'est donc la technologie web qui a été choisie, malgré sa gestion peu évidente d'un mode hors ligne.\
Cette technologie a permis de rapidement construire l'application en réutilisant du code déjà produit pour la partie CRM. Elle a aussi permis de donner un aspect "natif" à l'application pour que les utilisateurs s'y retrouvent facilement.\
Le déploiement a pu se faire via une URL plutôt que par le *store* d'Apple et les mises à jour se font comme pour la partie CRM, à savoir pendant les jours non ouvrés.

### Conclusion

Rappelons la problématique posée originalement qui était :

> Comment faire le choix d'une architecture applicative multiplateforme ?

Nous pouvons désormais nous baser sur les hypothèses, les recherches et leurs résultats, pour y répondre en affirmant qu'il est important de connaitre chaque forces et chaque faiblesses des méthodes disponibles, et de savoir laquelle est la plus adaptée à un projet ou une partie.

Il est à noter que si toutes ces méthodes existent et sont chacune employées aujourd'hui, c'est véritablement car aucune méthode n'est "la bonne méthode".

Le principe même d'une architecture, c'est qu'elle doit être adaptée aux besoins de la personne qui la met en place, et qu'il n'existe aucune architecture parfaite.

Cette thèse a pour but d'aider tout chef de projet informatique à choisir la ou les technologies adaptée(s) au mieux à leurs projets.
