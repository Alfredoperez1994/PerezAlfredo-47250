const misProductos = [

    { id: "1", nombre: "dogchow", precio: 5000, img: "../img/dogchow.webp", idCat: "1" },
    { id: "2", nombre: "pedigree", precio: 5500, img: "../img/pedigree.webp" , idCat: "1"},
    { id: "3", nombre: "razaperro", precio: 2500, img: "../img/razaperros.webp" , idCat: "1"},
    { id: "4", nombre: "eukanubaperro", precio: 7500, img: "../img/eukanubaperro.png", idCat: "1" },
    { id: "5", nombre: "whiskas", precio: 6500, img: "../img/whiscas.jpg", idCat: "2" },
    { id: "6", nombre: "razagato", precio: 4500, img: "../img/razagato.webp" , idCat: "2"},
    { id: "7", nombre: "infinitygato", precio: 7500, img: "../img/infinitygato.jpg", idCat: "2" },
    { id: "8", nombre: "gati", precio: 5500, img: "../img/gati.webp", idCat: "2" },
    { id: "9", nombre: "monocuerda", precio: 1500, img: "../img/monocuerda.png" , idCat: "3"},
    { id: "10", nombre: "ratonplumas", precio: 800, img: "../img/ratonplumas.jpeg", idCat: "3" },
    { id: "11", nombre: "kitgato", precio: 3500, img: "../img/kitgato.jpg" , idCat: "3"},
    { id: "12", nombre: "cuerda", precio: 1100, img: "../img/cuerda.png", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout(()=> {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })

}