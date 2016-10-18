import angular from 'angular';

import PageModule from '../grocery_items/page.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    PageModule.name,
])
    .component('app', appComponent);

export default AppModule;
