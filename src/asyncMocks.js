import { zapatillaAdidas, zapatillaNike, botinNike } from "./img/images"

const products =[ 
        {
            id: "1" ,
            name: "Botines Nike" ,
            price: "89.000" ,
            category: "Botines" ,
            img: botinNike ,
            stock: 20 ,
            description: "descripcion Botines"
        } ,
        {
            id: "2" , name: "zapatillas Nike" , price: "50.000" , category: "zapatillas" , img: zapatillaNike , stock: 30 , description: "descripcion zapatillas"
        } ,
        {
            id: "3" , name: "Zapatillas Adidas" , price: "45.000" , category: "zapatillas" , img: zapatillaAdidas , stock: 25 , description: "descripcion zapatillas"
        } 
    ]

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 500)
        })
    }

    export const getProductById = (productId) => {

        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve (products.find(prod=>prod.id === productId))
            }, 500)
        })

    }

    export const getProductByCategory = (category) => {

        return new Promise((resolve) => {
            const filteredProducts = products.filter(
                (product) => product.category.toLowerCase() === category.toLowerCase()
            );
    
        setTimeout(() => {
            resolve(filteredProducts);
            }, 500);
        });
    };
