const express = require("express");

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app = express();



app.use(express.urlencoded({extended:false}));

// app.get('/add-product', (req, res) => {
//     const html = `<form action="/product" method="POST">Product Name: <input type="text" name="product">
//     Product Size : <input type="number" name="size">
//     <button type="submit">Add Product</button></from>`;
//     res.send(html);
// });

// app.post('/product',(req,res)=>{
//     const body=req.body;
//     console.log(body);
//     res.redirect('/add-product');
// })

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})


app.listen(8000);