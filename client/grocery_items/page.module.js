import angular from 'angular';
import 'angular-resource';

import pageComponent from './page.components';
import mainItemComponent from './main-item.components';
import groceryAPIService from './page-api.service';

const PageModule = angular.module('grocery_items', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('groceryAPIService', groceryAPIService)
    .component('pageMain', pageComponent)
    .component('mainItem', mainItemComponent);

export default PageModule;
