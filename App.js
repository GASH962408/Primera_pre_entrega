const express = require('express'); 
const app = express();

const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');

app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

// Escucho en el servidor 3000:
app.listen(8080, () => console.log('Escuchando al servidor'));
