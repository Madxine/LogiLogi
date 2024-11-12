const Items = require('../schemas/items');

const createItems = async(req, res) => {
    try{
        const {
            name,
            quantity,
        } = req.body;
        const items = await Items.create({
            name,
            quantity,
        });
        res.status(201).json({data:items});
    } catch(err){
        res.status(500).json({err})
    }
};

const getAllItems = async(req, res) => {
    try{
        const items = await Items.find();
        !items.length? res.status(200).json({msg:"No Item in DB"}): res.status(200),json({data:items})
    } catch(err){
        res.status(500).json({err})
    }
};

const getOneItems = async(req, res) =>{
    try{
        const {id} = req.params;
        const items = await Items.findById(id);
        items? res.status(200).json({data: items}): res.status(404).json({msg:'No such Item'})
    } catch(err){
        res.status(500).json({err})
    }
};

const updateItems = async(req, res) => {
    try{
        const {id} = req.params;
        const {
            name,
            quantity,
        } = res.body;
        const items = await Items.findByIdAndUpdate(
            id,
            {
                name,
                quantity,
            },
            {
                new: ture
            }
        );
        items? res.status(200).json({msg: 'Item updated sucessfully', data: items}): res.status(404).json({msg:'No such Item'})
    } catch(err){
        res.status(500).json({err})
    }
 };
    
 const deleteOneItems = async(req, res) => {
        try{
            const {id} = req.params;
            const items = await Items.findByIdAndDelete(id);
            items? res.status(200).json({msg:'Item deleted', data: items}): res.status(404).json({msg:'No such Item'})
            } catch(err){
                res.status(500).json({err})
            }
};

    module.exports = {
        createItems,
        getAllItems,
        getOneItems,
        updateItems,
        deleteOneItems,
    }


