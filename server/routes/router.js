import express,{Router} from 'express'
const router=new Router()
import Products from '../models/productsSchema.js'

//get all products
router.get("/getproducts", async (req, res) => {
    try {
        const producstdata = await Products.find();
        console.log(producstdata + "data mila hain");
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});

//get prdoucts data
router.get("/getproductsone/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const individualdata=await Products.findOne({id});
        res.status(200).json(individualdata)
    } catch (error) {
        res.status(400).json(error.message)
    }
})
export default router;


