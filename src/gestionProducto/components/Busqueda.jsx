import TextField from '@mui/material/TextField';

const Busqueda = ({ products, setProducts }) => {
  const find = (event) => {
    const regex = new RegExp(".*" + event.target.value + ".*");
    const productsFilter = products.filter((product) =>
      product.title.match(regex)
    );
    setProducts(productsFilter);
  };

  return <TextField fullWidth sx={{my:3}} 
                    size="small"
                    label="Buscar Producto"
                    onChange={find} 
                    type="text" 
                    helperText="Ingrese el nombre del producto a buscar"
                    />
};

export default Busqueda;
