const express=require("express");
const router=express.Router();

router.get('/add-product', (req, res) => {
    const html = `<form action="/admin/add-product" method="POST">Product Name: <input type="text" name="product">
    Product Size : <input type="number" name="size">
    <button type="submit">Add Product</button></from>`;
    res.send(html);
});

router.post('/add-product',(req,res)=>{
    const body=req.body;
    console.log(body);
    res.redirect('/shop');
});

module.exports=router;