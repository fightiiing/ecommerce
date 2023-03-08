const productsArray = [
    {
        id: "price_1MjRPLLTgg43cl0o4ZCDxZ3G",
        title: "Iced Coffee",
        price: 4.99
    },
    {
        id: "price_1MjRQoLTgg43cl0opXr59V2B",
        title: "Donut",
        price: 2.99
    },
    {
        id: "price_1MjRS0LTgg43cl0oyUAZsqyy",
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