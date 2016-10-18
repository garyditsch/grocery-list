function PageController($interval, groceryAPIService) {
    const ctrl = this;

    function getGroceries() {
        groceryAPIService.grocery_items.get().$promise.then((data) => {
            ctrl.grocery_items = data.results;
        });
    }
    getGroceries();
    $interval(getGroceries, 3000);

    ctrl.groceryItem = {

    };
}
export default PageController;
