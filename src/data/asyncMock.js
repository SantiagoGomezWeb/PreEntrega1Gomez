export const products = [
    { 
        id: 1, 
        nombre: 'A la Montaña', 
        precio: 100,
        categoria: 'pasajes',
        img: 'https://res.cloudinary.com/dx8qtftjt/image/upload/v1664896319/cld-sample-2.jpg',
        stock: 25,
        descripcion: 'Descripcion de a la Montaña'
    },
    { 
        id: 2, 
        nombre: 'Brunch', 
        precio: 210,
        categoria: 'comidas',
        img: 'https://res.cloudinary.com/dx8qtftjt/image/upload/v1664896320/cld-sample-4.jpg',
        stock: 2,
        descripcion: 'Descripcion de Brunch'
    },
    { 
        id: 3, 
        nombre: 'Al Campo', 
        precio: 1000,
        categoria: 'pasajes',
        img: 'https://res.cloudinary.com/dx8qtftjt/image/upload/v1664896290/sample.jpg',
        stock: 4,
        descripcion: 'Descripcion de Al campo'
    },
  ];
  
  export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000);
    }
    )
  };
  