const productsArray = [
    {
        id: "1",
        title: "Iced Coffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Donut",
        price: 2.99
    },
    {
        id: "3",
        title: "Gift Card",
        price: 24.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log("Product data does not exist for id: " + id)
    }
    
    return productData;
}

export {productsArray, getProductData} ;