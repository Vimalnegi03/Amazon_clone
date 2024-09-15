import Products from "./models/productsSchema.js";
import products from "./constant/productsdata.js";
const productsdata=products;


const DefaultData=async()=>{
    try {
        await Products.deleteMany({})//to remove extra data as everytime our app will start this data will keep on adding
        const storeData=await Products.insertMany(productsdata)
        console.log(storeData);
    } catch (error) {
        console.log(error);
    }
}
export default DefaultData;