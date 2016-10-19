import { merge } from 'ramda';

function MainItemController() {
    const ctrl = this;

    ctrl.editItem = function editItem() {
        ctrl.itemToEdit = merge({}, ctrl.grocery_item);
        ctrl.update({ itemToUpdate: ctrl.itemToEdit });
        ctrl.grocery_item = ctrl.itemToEdit;
    };

    ctrl.deleteItem = function deleteItem() {
        ctrl.delete({ itemToDelete: ctrl.kroger_item });
    };
}

export default MainItemController;
