import express,{Router} from 'express'
const router=new Router()
import Products from '../models/productsSchema.js'


router.get("/getproducts", async (req, res) => {
    try {
        const producstdata = await Products.find();
        console.log(producstdata + "data mila hain");
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});
export default router;


