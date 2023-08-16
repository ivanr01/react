const misProductos = [
    { id: "1", nombre: 'Coca Cola', precio: 1500, stock: 100, img: "../img/cocacola.jpg", idCat: "2" },
    { id: "2", nombre: "Hamburguesa", precio: 180, stock: 100, img: "../img/hamburguesa.webp", idCat: "2" },
    { id: "3", nombre: "Ensalada", precio: 200, stock: 100, img: "../img/ensalada.png", idCat: "3" },
    { id: "4", nombre: "Sopa", precio: 900, stock: 100, img: "../img/sopa.png", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}
