const products = [
    {
        id: '1',
        name: 'I Phone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/11/analisis-iphone-12-pro-max-2150165.jpg?tf=1200x',
        stock: 25,
        description: 'I phone 12 Apple'
    },
    {
        id: '2',
        name: 'I Phone 13',
        price: 1500,
        category: 'celular',
        img: 'https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6206281_823x.jpg?v=1661520210',
        stock: 12,
        description: 'I phone 13 Apple'
    },
    {
        id: '3',
        name: 'I Phone 14',
        price: 2000,
        category: 'celular',
        img: 'https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6206281_823x.jpg?v=1661520210',
        stock: 14,
        description: 'I phone 14 Apple'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    }) 
}

export const getProductByCategory = (CategoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === CategoryId))
        }, 500)
    }) 
}