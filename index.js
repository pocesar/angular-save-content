(function(){
    'use strict';
    
    angular
    .module('saveContent', [])
    .directive('saveContent', ['$templateCache', '$location', function($templateCache, $location){
        return {
            restrict: 'A',
            priority: 4000,
            compile: function(el, attrs){
                $templateCache.put(attrs.saveContent, el.html());
            }
        };
    }]);
    
})();
