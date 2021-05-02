import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../../UI/ProductCard/ProductCard';
import { useContext, useEffect } from 'react';
import ProductContext from '../../../context/productsContext';
function Shop() {
  const { products, getAllProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!products) getAllProducts();
  });

  return (
    <Container>
      <Typography gutterBottom variant='h3' component='h2'>
        Shop
      </Typography>

      {products ? (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress
          size={60}
          style={{ display: 'block', margin: '4rem auto' }}
        />
      )}
    </Container>
  );
}

export default Shop;
