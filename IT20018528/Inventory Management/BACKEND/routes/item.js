const router = require("express").Router();
let Item = require("../models/Item");

router.route("/add").post((req,res)=>{
    
    const  ProductID = req.body.  ProductID;
    const ItemName = req.body.ItemName;
    const Category = req.body.Category;
    const UnitPrice = req.body.UnitPrice;
    const SellingPrice = req.body.SellingPrice;
    const Quantity  = req.body.Quantity;
    const ReorderLevel = req.body.ReorderLevel;
    const TotalAmount = req.body.TotalAmount;


    const newItem = new Item({

        ProductID,
        ItemName,
        Category,
        UnitPrice,
        SellingPrice,
        Quantity,
        ReorderLevel,
        TotalAmount,
    })

    newItem.save().then(()=>{

        res.json("Item Added")

    }).catch((err)=>{

        console.log(err);
    })

})

router.route("/all").get((req,res)=>{

    Item.find().then((item)=>{

        res.json(item)

    }).catch((err)=>{
        console.log(err)
    })
})




router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
        .then(Item => {
            Item.ProductID = req.body.ProductID;
            Item.ItemName = req.body.ItemName;
            Item.Category = req.body.Category;
            Item.UnitPrice = req.body.UnitPrice;
            Item.SellingPrice = req.body.SellingPrice;
            Item.Quantity = req.body.Quantity;
            Item.ReorderLevel = req.body.ReorderLevel;
            Item.TotalAmount = req.body.TotalAmount;


            Item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Item.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delelte", error: err.message});
    })
})
router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(Item => res.json(Item))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;