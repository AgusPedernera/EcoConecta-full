const getProducts = async () => {
    const products = await http.get('http://127.0.0.1:8080/api/cards/');
    products.forEach(product => {
        console.log(product);
        addProductToList(product);
    });
};