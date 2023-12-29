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