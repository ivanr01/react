const menu = [
    {id: 1, nombre: 'Coca Cola', precio: 1900, img: "./img/cocacola.jpg"},
    {id: 2, nombre: 'Hamburguesa', precio: 14900, img: "./img/hamburguesa.webp"},
    {id: 3, nombre: 'Ensalada', precio: 10900, img: "./img/ensalada.png"},
    {id: 4, nombre: 'Sopa', precio: 6900, img: "./img/sopa.png"}
]

export const getMenu = () => {
    return new Promise((res, rej)=> {
        setTimeout( ()=> {
            res(menu)
        }, 3000)
    })
}