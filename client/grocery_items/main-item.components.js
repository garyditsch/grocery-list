import template from './main-item.html';

import MainItemController from './main-item.controllers';

const mainItemComponent = {
    template,
    bindings: {
        item: '<',
        update: '&',
        delete: '&',
    },
    controller: MainItemController,
    controllerAs: 'mainItemCtrl',
};

export default mainItemComponent;
