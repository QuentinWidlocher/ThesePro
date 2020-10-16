# Méthode de notation des critères

Afin de noter les hypothèses entre elles et les comparer d'un point de vue strictement mathématique, il est intéressant de trouver un système capable d'agréger les résultats obtenus aux critères et d'en extraire une note unique.

Pour commencer, il y a certains critères qui sont pires plus leur résultat est haut (temps passé, poids de l'app etc.) et d'autre inversement (notes).\
Ensuite là ou les notes sont données sur un maximum, chaque critères peut se voir donner un seuil maximum estimé (ou celui de la pire note) comme par exemple fixer le seuil du poids de l'app à 50Mb. On estime qu'au delà de 50Mb c'est déjà foutu.

On peux commencer à trier les critères par tendance à s'améliorer en augmentant ou pas :

- S'améliore en augmentant :
  - Critère 1.2
  - Critère 2.1
  - Critère 2.2
  - Critère 2.3
- S'améliore en diminuant :
  - Critère 1.1
  - Critère 3.1
  - Critère 3.2
  - Critère 3.2

Ensuite on peux donner le seuil de chaque critère :

- Critère 1.1 : 500h (estimé)
- Critère 1.2 : 5pts
- Critère 2.1 : 5pts
- Critère 2.2 : 5pts
- Critère 2.3 : 100%
- Critère 3.1 : 100%
- Critère 3.2 : 1000ms (estimé)
- Critère 3.2 : 50Mb (estimé)

Si l'on raccourci les écritures en :

↑ = S'améliore en augmentant
↓ = S'améliore en diminuant
seuil de X = /X
seuil estimé de X = *X
cXY = Critère X.Y

Et qu'on se passe d'unité on a :

- c11 : ↓ *500
- c12 : ↑ /5
- c21 : ↑ /5
- c22 : ↑ /5
- c23 : ↑ /100
- c31 : ↓ /100
- c32 : ↓ *1000
- c33 : ↓ *50

Maintenant créons trois scénarios différents de h1 (hypothèse 1) à h3 :

h1 {
  c11: 1000,
  c12: 4.6,
  c21: 4.2,
  c22: 4.7,
  c23: 33,
  c31: 50,
  c32: 200,
  c33: 20
}

h2 = {
  c11: 500,
  c12: 4.6,
  c21: 4.2,
  c22: 4.7,
  c23: 24,
  c31: 50,
  c32: 200,
  c33: 7
}

h3 = {
  c11: 200,
  c12: 4.6,
  c21: 4.2,
  c22: 4.7,
  c23: 100,
  c31: 50,
  c32: 200,
  c33: 7
}

Ces scénarios sont exprimé sous la forme d'un objet JS parce que j'utilise Node pour mes calculs.

Ces scénarios ont été créé en sachant que certains était meilleurs que d'autre de tel façon que :

h2 < h1 < h3

Si on fait la somme proportionnelle à leurs seuils de toutes les critères qui s'améliore en augmentant :

↑ = ((c21/5 + c22/5 + c23/100)/3)

Et que l'on fait pareil avec les critères qui s'améliore en diminuant :

↓ = (c11/500 + c31/100 + c32/1000 + c33/50)

On peux imaginer pourvoir faire un ratio à l'aide de ↑/↓ :

((c21/5 + c22/5 + c23/100)/3)/(c11/500 + c31/100 + c32/1000 + c33/50)

Quand on réalise ce calcul sur les scénarios on obtiens :

- h1 = 0.19175627240143372
- h2 = 0.32289855072463775
- h3 = 0.48118279569892475

Et on retrouve bien l'ordre attendu à savoir que :

0.19175627240143372 < 0.32289855072463775 < 0.48118279569892475

Si on multiplie ces résultats par 100 et qu'on arrondi à la centaine on obtiens :

- h1 = 19,18
- h2 = 32,29
- h3 = 48,18

Où :

19,18 < 32,29 < 48,18

Maintenant comment être sûr que ce raisonnement tiens la route et n'est pas une coïncidence ? Il faut trouver les deux valeurs extrêmes.

Prenons le pire scénario possible h4 et le meilleur scénario h5 :

h4 = {
  c11: 500,
  c12: 0,
  c21: 0,
  c22: 0,
  c23: 0,
  c31: 100,
  c32: 1000,
  c33: 50
}

h5 = {
  c11: 0,
  c12: 5,
  c21: 5,
  c22: 5,
  c23: 100,
  c31: 0,
  c32: 0,
  c33: 0
}

Bien évidement ces valeurs sont délirantes mais c'est pour exprimer le ratio.
Appliquons la formule à ces deux scénarios pour s'assurer que :

h4 < h1 < h2 < h3 < h5

On obtiens :

- h4 : 0
- h5 : Infini

Bien sûr, ces valeurs n'indiquent pas grand chose cependant on peux vérifier que :

h4 < h1 < h2 < h3 < h5
0 < 19,18 < 32,29 < 48,18 < Infinity

