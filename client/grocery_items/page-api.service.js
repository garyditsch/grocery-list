function groceryAPIService($resource) {
    const api = {
        grocery_items: $resource('/api/grocery/'),
    };
    return api;
}

export default groceryAPIService;
