const products =[ 
        {
            id: "1" ,
            name: "Botines" ,
            price: "$89.000" ,
            category: "Botines" ,
            img:"c:\Users\Usuario\Desktop\Node JS- curso\EcommerceJb\ecommerce\src\img\botin1images.jpeg" ,
            stock: 20 ,
            description: "descripcion zapatillas"
        } ,
        {
            id: "2" , name: "ojotas" , price: "1000" , category: "zapatillas" , img: "#" , stock: 20 , description: "descripcion zapatillas"
        } ,
        {
            id: "3" , name: "ojotas" , price: "1000" , category: "zapatillas" , img: "#" , stock: 20 , description: "descripcion zapatillas"
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

