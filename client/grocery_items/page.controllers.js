function PageController($interval, groceryAPIService) {
    const ctrl = this;
    ctrl.editedItem = {};

    function getGroceries() {
        groceryAPIService.grocery_items.get().$promise.then((data) => {
            ctrl.grocery_items = data.results;
        });
    }
    getGroceries();
    $interval(getGroceries, 10000);

    ctrl.saveItem = function saveItem(editedItem) {
        groceryAPIService.grocery_items.save(editedItem).$promise.then((savedItem) => {
            ctrl.grocery_items = [
                savedItem,
                ...ctrl.grocery_items,
            ];
            ctrl.editedItem = {};
        });
    };

    ctrl.deleteItem = function deleteItem(itemToDelete) {
        console.log(itemToDelete);
        groceryAPIService.grocery_items.delete(itemToDelete);
    };
}
export default PageController;
