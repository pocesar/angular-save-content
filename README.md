# angular-save-content

A directive that will save the content of a part of your server rendered HTML, so it won't issue an AJAX call to fetch the templateUrl along side ui-view or ng-view

## Usage

```js
angular
.module('yourapp', ['saveContent'])
.config(['$stateProvider', function(){
  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'template.html'
  });
});
```

```html
<div ui-view save-content="template.html">
  <div>Hi, I was rendered at page load on the server and will stick around while the router path doesn't change</div>
</div>
```

This will save the inner HTML of the ui-view to `$templateCache` as `template.html`, saving you another round-trip to the server

## Why?

When using ng-view, ui-view along with templateUrl or ng-include, angular will issue an AJAX call to fetch the content for that view. When you are creating an hybrid page, that mix 'turbo links', many SPA views and server rendered content, you'll end up with the first load of the page already loaded inside ng-view / ui-view, so you don't need it for fetchin g the content that is already visible on the page, and usually refetching it will cause a flicker. So you save the content you already have to the templateCache, so it won't create another get request to the server.

## License

MIT
