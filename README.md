# AngularJS Tutorial
## Installation 

Pour installer AngularJS, vous pouvez utiliser le gestionnaire de paquets npm. Exécutez la commande suivante dans votre terminal :  
```bash
npm install angular
```

## Ng-app

`ng-app` est une directive qui initialise une application AngularJS. Elle définit le domaine d'application.  
```html
<body ng-app="myApp">
```

## Ng-init

`ng-init` initialise les données de l'application AngularJS (permet de créer des variables dans le html directement)  
```html
<div ng-init="numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
```

## Ng-bind

`ng-bind` remplace le contenu d'un élément HTML (innerHTML) par la valeur d'une variable donnée.
```html
<p ng-bind="name">
```

## Ng-repeat

`ng-repeat` répète un élément HTML pour chaque élément d'un tableau ou d'un objet (for).
```html
<li ng-repeat="name in names">{{ name }}</li>
```

## Ng-show / Ng-hide

`ng-show` et `ng-hide` sont des directives qui affichent ou cachent un élément HTML en fonction de la valeur d'une expression ou d'une variable.
```html
<p ng-show="show">Show me !</p>
<p ng-hide="hide">Hide me !</p>
```

## Ng-controller

`ng-controller` est une directive qui ajoute un contrôleur à votre application. Le contrôleur est où vous définissez l'état et le comportement de l'application.
```html
<div ng-controller="myCtrl">
```

## Ng-click

`ng-click` est une directive qui vous permet d'exécuter une expression ou une fonction lorsque l'élément est cliqué.
```html
<button ng-click="count = count + 1">Click me !</button>
```

## Ng-model (in form)

`ng-model` est une directive qui lie la valeur d'une entrée HTML à une propriété sur le scope. C'est essentiel pour la liaison bidirectionnelle des données.

```html
<input type="text" ng-model="name">
```

## Ng-submit

`ng-submit` est une directive qui permet d'éxecuter une expression ou une fonction lorsque le formulaire est soumis
```html
<form ng-submit="submitForm()">
```

## Ng-valid / Ng-invalid

`ng-valid` et `ng-invalid` sont des classes en CSS qui sont ajoutées automatiquement par AngularJS en fonction de la validité des champs de votre formulaire

## Ng-pristine / Ng-dirty

`ng-pristine` et `ng-dirty` sont des classes CSS qui sont ajoutées automatiquement par AngularJS. `ng-pristine` est ajouté si le champ n'a pas été modifié, `ng-dirty` si le champ à été modifié.

## Ng-include

`ng-include` est une directive qui permet d'inclure du contenu HTML externa dans votre vue.
```html
<div ng-include="'mytemplate.html'"></div>
```

## Concaténation 

En AngularJS, vous pouvez concaténer des chaînes de caractères en utilisant l'opérateur `+`.
```javascript
$scope.fullName = $scope.firstname + " " + $scope.lastname;
```

## Contrôleur

En AngularJS, un contrôleur est une fonction JavaScript qui ajoute des données et des fonctions supplémentaires à $scope.
```javascript
app.controller('myCtrl', function($scope) {
  $scope.firstname = "Eliott";
  $scope.lastname = "BURKLE";
});
```

## Object Scope

L'object `$scope` est l'application du modèle MVC (Model_View-Controller). Il relie le contrôleur et la vue. Les données du modèle sont stockées dans l'objet `$scope`.
```javascript
app.controller('myCtrl', function($scope) {
  $scope.firstname = "Eliott";
  $scope.lastname = "BURKLE";
});
```

## Filters

Les filtres en AngularJS permettent de formater les données pour l'affichage à l'utilisateur. Ils peuvent être utilisés dans les directives, les vues, les contrôleurs ou les services. AngularJS fournit un ensemble de filtres intégrés, mais vous pouvez également créer vos propres filtres.

Voici quelques filtres intégrés :

- `uppercase` : transforme le texte en majuscules.
- `lowercase` : transforme le texte en minuscules.
- `currency` : formate un nombre en devise.
- `limitTo` : limite un tableau ou une chaîne à une longueur spécifique.
- `orderBy` : trie un tableau par un critère spécifique.

Exemple d'utilisation d'un filtre dans une directive :

```html
<p>{{ name | uppercase }}</p>
```

## Submitting forms

Pour soumettre un formulaire en AngularJS, vous pouvez utiliser la directive `ng-submit` comme mentionné ci-dessus. Vous pouvez également utiliser `ng-click` sur le boutton de soumission.

## Valid attribute

La validation des formulaires en AngularJS peut être effectuée en utilisant des attributs HTML tels que `required`, `min`, `max`, `pattern`, etc.

## Form validation

AngularJS fournit une validation de formulaire puissante et flexible. Vous pouvez utiliser des attributs HTML pour la validation, et AngularJS ajoutera automatiquement certaines classes CSS pour vous aider à styliser les éléments valides et invalides.

## Custom directives 

Les directives personnalisées vous permettent de créer vos propres directives, par exemple :
```javascript
app.directive('myDirective', function() {
  return {
    template: '<h1>Custom directive!</h1>'
  };
});
```

## Dependencies

Les dépendances en AngularJS sont gérées par l'injection de dépendances. Vous pouvez ajouter des dépendances à votre module en les ajoutant dans la liste des  dépendances lors de la création du module, ou à votre contrôleur en les ajoutant à la fonction du contrôleur.
```javascript
let app = angular.module('myApp', ['ngRoute']); // Ajout de ngRoute comme dépendance du module

app.controller('myCtrl', ['$scope', '$http', function($scope, $http) { // Ajout de $http comme dépendance du contrôleur
  // ...
}]);
```
