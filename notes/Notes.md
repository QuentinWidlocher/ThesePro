# Notes <!-- omit in toc -->

1. [Problématiques potentielles](#problématiques-potentielles)
1. [Glossaire](#glossaire)
1. [État de l'art](#état-de-lart)
1. [Hypothèses](#hypothèses)
1. [Méthodes à appliquer](#méthodes-à-appliquer)
1. [Performances](#performances)
1. [Efficacité de prod](#efficacité-de-prod)
1. [Critères de comparaison](#critères-de-comparaison)
1. [Liens intéressants](#liens-intéressants)
1. [Stats nécessaires](#stats-nécessaires)

## Problématiques potentielles

- Peut on créer des application multi-plateforme sans coût supplémentaire ?
- Comment porter des solutions applicatives sur un maximum de plateformes avec le moins d'impact sur la code base et les performances ?
- Comment faire le choix d'un architecture applicative multi plateformes.

## Glossaire

- Soft Natif
- Soft Hybride
- Soft Web
- Cross Platform (XP)

## État de l'art

- Les logiciels dans notre vie
  - L'utilisation des logiciels
  - La place des applis Desktop
  - La place des applis Web
    - Pourquoi le responsive design
  - La place des applis Mobile
    - La plus faible puissance de calcul
- Le coût de fabrication des logiciels
- Le gain qu'apportent les applis mobiles
- Ouverture sur la promesse des applis hybrides

## Hypothèses

- 1 app native par cible
  - Long, couteux et dur à maintenir
- 1 app native pour chaque cible
  - Mauvaises performances
  - Très peu de fonctionnalité (jointure interne entre les features)
  - Pistes : Xojo, WinDev
- 1 app native desktop + 1 app native mobile
  - Pas full multiplateforme
  - Code dupliqué
  - Efficace
  - PC (Java/JavaFx, C++/Qt, Python/Kivy)
  - Mobile (Dart/Flutter, C#/Xamarin)
- 1 app web desktop et pwa
- 1 app web desktop et 1 app hybride
  - Ionic / NativeScript

## Méthodes à appliquer

- Partir de zéro et alterner mobile/bureau
- Partir de zéro, monter la logique, monter l'affichage mobile puis bureau
- Ajouter la notion mobile à la fin

## Performances

- Natif VS Sandbox
- Full Natif VS Compilé en natif
- Web VS Web + Server

## Efficacité de prod

- Projet bureau natif puis mobile natif VS Projet XP hybride natif VS Projet XP Web
- Différents outils
  - Natif
    - C# Xamarin
    - Java Android + Swift iOS
    - Dart Flutter
  - Hybride
    - React Native
    - Angular Ionic
    - Angular NativeScript
    - Vue NativeScript
  - Web (Cordova)
    - React
    - Angular
    - Vue
    - Blazor WASM
    - Blazor Server

## Critères de comparaison

- Pendant le dev
  - Temps de dev
  - Étendu de l'API (est ce qu'on est limité)
- Après le développement
  - Rapidité/facilité de déploiement
  - Facilité de maintenance
  - La réutilisation
- Résultat
  - Performance de l'app (Benchmark)
    - L'utilisation du processeur
    - L'utilisation de la mémoire vive
    - Le temps de réponse moyen
  - Consommation Électrique
  - Poids de l'app

Bureau : Performant\
Mobile : Portable\
Web : Pratique

## Liens intéressants

- <https://stackoverflow.com/questions/2098492/why-are-web-apps-prevalent-for-internal-corporate-apps>
- <https://www.trustradius.com/erp>
- <https://xpda.net/>
- <https://github.com/edvin/tornadofx>

## Stats nécessaires

- Combien de sites web VS applications web
- Combien d'entreprises utilisent des web apps

Méthodologie

Plan d'expérience
pour chaque expériences, quels critère à fixer/varier\
Interview d'experts
