---
title: Glossaire
slug: glossaire
layout: post
---

1. [Cross Platform](#cross-platform)
1. [Logiciel *Natif*](#logiciel-natif)
1. [Logiciel *Web*](#logiciel-web)
1. [Logiciel *Hybride*](#logiciel-hybride)
1. [Software](#software)
1. [Logiciel propriétaire](#logiciel-propriétaire)
1. [Logiciel libre (de droit)](#logiciel-libre-de-droit)
1. [Compilateur](#compilateur)
1. [Interpréteur](#interpréteur)
1. [Transpileur](#transpileur)
1. [Frontend / Front office](#frontend--front-office)
1. [Backend / Back office](#backend--back-office)
1. [UI / UX](#ui--ux)
1. [Architecture logicielle](#architecture-logicielle)
1. [Framework](#framework)
1. [Markdown](#markdown)
1. [Abstraction](#abstraction)

## Cross Platform

Mot anglais se traduisant par "Multi-plateforme". Se dit de logiciel qui peuvent tourner sur plusieurs systèmes d'exploitation (PC, Mac, Android etc.) sans nécessiter de le recréer de zéro.

## Logiciel *Natif*

On dit d'un logiciel qu'il est natif s'il a été développé avec les outils pensé à la base pour son système d'exploitation (OS).
Cette appellation remonte au début de l'informatique ou il servait à définir un logiciel développé à l'aide du même langage que celui de son système d'exploitation.
Aujourd'hui cette appellation peut avoir plusieurs sens mais elle désigne en général un logiciel bénéficiant des outils pensés à la base pour le support sur lequel il s'exécute, ou du moins qui s'exécute directement au sein de l'OS.

Exemples :

- Windows est un OS développé en C++, dont le noyau est développé en C. Ces deux langages sont donc *natifs*
- Android est lui aussi développé en C et en C++, mais son Kit de Développement de Logiciel (SDK) est fourni en Java. Ce sont donc ces **trois** langages qui peuvent être considérés comme natifs.

## Logiciel *Web*

Un logiciel Web est une application conçue pour fonctionner au sein d'un navigateur internet.
La plupart des systèmes d'exploitation ayant déjà des navigateurs web aboutit et à jour, ces applications peuvent donc fonctionner sur la plupart des OS, sans modification nécessaire sur le code.
Ces logiciels sont jugé séparés des [logiciels *natifs*](#logiciel-natif) car ils nécessitent que l'OS fasse d'abord tourner un navigateur avant d'exécuter l'application.

## Logiciel *Hybride*

Ces logiciels sont un mélange d'applications [natives]((#logiciel-natif)) et [web](#logiciel-web). Elle sont généralement développé avec des technologie Web mais sont présenté à l'utilisateur final dans un navigateur "camouflé".
Contrairement aux applications web qui doivent tourner dans le navigateur de l'utilisateur, les applications hybrides intègre un navigateur souvent plus léger, sans interface, n'ayant d'autre but que exécuter l'application.
Cette méthode permet de contourner certaines limitation dû au choix Web ou Natif.

## Software

Mot anglais désignant un logiciel. Souvent abrégé "soft".

## Logiciel propriétaire

Un logiciel propriétaire désigne la licence de distribution de ce dernier. La mention "propriétaire" indique que le code source du logiciel n'est pas rendu publique et qu'il ne doit en aucun cas être partagé, dévoilé ou réutilisé en dehors de la société qui le conçoit.\
Un logiciel propriétaire n'est pas forcément payant, la nuance ne s'effectuant exclusivement que sur sa distribution.

## Logiciel libre (de droit)

Un logiciel libre désigne la licence de distribution de ce dernier. La mention libre indique que le code source du logiciel peut-être librement consulté, distribué et réutilisé à des fin commerciales ou non. Ces différents points sont spécifié par le biais de licenses comme la licence [MIT](https://choosealicense.com/licenses/mit/) ou [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/).\
Cette thèse professionnelle, bien que n'étant pas un logiciel, est partagé en ligne selon une licence [Creative Commons](https://choosealicense.com/licenses/cc-by-sa-4.0/). Vous pouvez retrouver sont contenu source sur un [dépôt GitHub](https://github.com/QuentinWidlocher/ThesePro).\
Un logiciel libre n'est pas forcément gratuit, la nuance ne s'effectuant exclusivement que sur sa distribution.

## Compilateur

Un compilateur est un logiciel qui traduit un code source écrit dans un langage de programmation (le langage source) dans un autre langage (le langage cible).\
Le nom "compilateur" est principalement utilisé pour les programmes qui traduisent un langage de programmation de haut niveau d'[abstraction](#abstraction) vers un langage de niveau inférieur (par exemple, de l'assembleur vers du binaire) afin de créer un programme exécutable.

## Interpréteur

Contrairement au [compilateur](#compilateur), un interpréteur exécute directement des instructions écrites dans un langage de programmation, sans exiger qu'elles aient été préalablement compilées dans un langage machine ou inférieur.\
L'interpréteur lit le code écrit ligne par ligne et *interprète* les actions "à la volé".

Bien que ce procédé accélère la vitesse à laquelle on peux passer d'un code source à un logiciel (puisque la lecture du code se fait simultanément avec l'exécution), les langages interprétés souffrent souvent d'un vitesse d'exécution inférieure au langages compilés.

NB : Il est possible de mélanger du code compilé et du code interprété dans le but de mitiger les lacunes de chacune de ces méthodes

## Transpileur

A l'instar d'un [compilateur](#compilateur), un transpileur se content de "traduire" un code source dans un langage, vers un autre, quelque soit les niveaux d'abstraction qui les séparent.

## Frontend / Front office

Le *front end*, ou littéralement la "boutique" (en opposition au [*backend*](#backend)), constitue l'interface visuelle d'une application. Ses boutons, ses formulaires ses pages etc.

Le rôle d'une application de *front end* (souvent raccourcie à "un front" en français) est de communiquer avec l'utilisateur afin de récolter des données, de faire un pré-traitement de ces données et de les envoyer "au back" où des traitement plus complexe seront effectués.\
Son rôle est aussi dans l'autre sens, à savoir de récupérer des informations "du back" et de les afficher à l'utilisateur.

## Backend / Back office

Le *back end*, ou littéralement "l'arrière boutique" (en opposition au [*frontend*](#frontend)), constitue souvent la partie non visible d'une application où les traitement des données se font. C'est cette partie qui est chargé de communiquer avec la base de données pour assurer le stockage desdites données. Il communique aussi avec le *frontend* pour lui permettre d'afficher des données, et en reçoit par la même occasion les saisies de l'utilisateur.

## UI / UX

La *User Interface*, appelé "interface utilisateur" en français, est ce que voit l'utilisateur qui se sert d'une application. Elle fait partie intégrante du [*frontend*](#frontend) mais ne se réfère pas au traitement des données, uniquement de l'aspect visuel.

En plus de l'UI, on entend aussi souvent parler de l'UX, la *User Experience* ou l'expérience utilisateur. Cette appellation concerne non pas l'aspect visuel mais l'ergonomie d'une application. Cette notion prend en compte le positionnement des élément, leurs *affordance* et leur lisibilité.

## Architecture logicielle

L'architecture logicielle est un terme qui désigne l'ensemble des technologies employé dans la création d'un projet de développement informatique.\
Le langage de programmation, les outils de constructions, et la relation client/serveur sont des composante de cette architecture.

Dans cette thèse, nous nous intéressons surtout aux langages utilisés ainsi qu'au différentes applications permettant de couvrir l'ensemble des cinq systèmes d'exploitation principaux.

## Framework

Littéralement une "structure" ou une "charpente", un framework est un ensemble d'outils de développement adapté à un langage pour gagner en efficacité lors de la construction d'un logiciel.\Cettennalités poussée.

## Markdown

Le *Markdown* viens de l'appellation *Markup Language* signifiant littéralement "langage de balisage".\
C'est une façon d'écrire du texte brut en y incorporant des éléments de mise en page comme des mots en gras, italique, soulignés, barré, des listes à puces, des tableaux etc.\
Ces éléments sont ajouté à l'aide de caractères spéciaux comme l’astérisque \* ou les dièses \#.\
Un texte en gras aura donc cette forme par exemple : `**Ceci est un texte en gras**`

Cette méthode permet le stockage de fichier à mise en page complexe sous la forme de texte brut, très léger et facile à interpréter pour une machine comme pour un humain.

Cette thèse même a d'abord été écrite en *Markdown* avant d'être convertie en fichier Word pour la touche esthétique final.

## Abstraction

L'abstraction est un concept informatique visant à simplifier quelque chose en "cachant" (encapsulant) la complexité quelque part et en n'en affichant qu'une partie utile.

L'informatique est souvent répartie en "couches", bâties les une sur les autres. L'abstraction sert à masquer les spécificités de la couche inférieure afin d'en simplifier l'utilisation dans la couche actuelle.

On peux considérer n'importe quel langage de programmation comme une abstraction du binaire, et les fonctionnalités d'un système d'exploitation sont elles même des abstractions de fonctionnalités du processeur.