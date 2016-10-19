function groceryAPIService($resource) {
    const api = {
        grocery_items: $resource('/api/grocery/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };
    return api;
}

export default groceryAPIService;
