// Home.js
import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import cakeImage from '../images/cake.webp'; // Add your cake image here
import BannerSlider from './BannerSlider';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '50px' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Cake Delights
        </Typography>
        <Typography variant="h5" gutterBottom>
          The Best Cakes in Town
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="https://media.istockphoto.com/id/467245498/photo/strawberry-cupcakes.webp?b=1&s=170667a&w=0&k=20&c=tzb8iwNKg5V0aFs_OFZIQIPVll32VMRDfsjOhDgB6EE=" alt="Delicious Cake" style={{ width: '100%', borderRadius: '10px' }} />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            textAlign="left"
          >
            <Typography variant="h4" gutterBottom>
              Our Specialty
            </Typography>
            <Typography variant="body1" gutterBottom>
              We bake the most delicious and visually stunning cakes for every occasion. Whether it's a birthday, wedding, or any celebration, our cakes are sure to impress and satisfy.
            </Typography>
            <Button
              component={motion.button}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              variant="contained"
              color="primary"
              size="large"
            >
              Order Now
            </Button>
          </Box>
        </Grid>
      </Grid>
      <BannerSlider />
    </Container>
  );
};

export default Home;
