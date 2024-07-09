const Product = require("../db/model");
const User = require("../db/user");
// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get product by custom ID
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ id });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const signUp=async (req,res)=>{
    try {
        const id=req.body.uid;
        const pw=req.body.pw;
        const user=await User.findOne({id});
        if(!user){
            const createdUser=await User.create({
                uid: id,
                pw: pw
            })
            return res.status(200).json(createdUser)
        }
        return res.status(500).json({error:"user exists"})
    } catch (error) {
        return res.status(500).json({error:"some error"})
    }
}

const signIn = async (req, res) => {
    try {
      const { uid, pw } = req.body;
      if (!uid || !pw) {
        return res.status(400).json({ error: "Missing uid or pw" });
      }
      const user = await User.findOne({ uid });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ 
        uid: user.uid,
        name: user.name,
        email: user.email 
      });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
  

module.exports = {
    getAllProducts,
    getProductById,
    signIn,
    signUp
};
