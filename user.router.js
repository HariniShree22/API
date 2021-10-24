const {
  createBrand,
  getBrand,
  } = require("./user.controller");


const router=require("express").Router();
const{checkToken}=require("../../auth/token_vaildation");
router.get("/", getBrand);
router.post("/",  createBrand);
//router.get("/wishlist",  getwishlist);


module.exports=router;
/*
{
    "Brandname":"hp",
    "RAM":"8gb",
    "ROM":"EPROM",
    "Price":"57000",
    "Processor":"intel",
    "Operatingsystem":"windows",
    "Color":"black",
    "Customerrating":"4"

}
*/