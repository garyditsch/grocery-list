import template from './main-item.html';

import MainItemController from './main-item.controllers';

const mainItemComponent = {
    template,
    bindings: {
        item: '<',
    },
    controller: MainItemController,
    controllerAs: 'mainItemCtrl',
};

export default mainItemComponent;
