const inventryModel=require("../models/inventoryModel")


exports.createProduct= async(req,res)=>{

    try {
        let data=req.body

        let saveData= await inventryModel.create(data)
         res.status(201).send({status:true,msg:"operation add and data created succesfully in db"})   
    }
    catch (error) {
        return res.status(500).send({status:false,msg:error.msg})
         
    }

}

exports.updateQuentity=(req,res)=>{

    let id=req.params.id
 console.log(id)
    let saveData=inventryModel.findById(id)
    console.log(saveData.quantity)
// if(saveData){
//    let subTract=saveData.quantity-1
// }
    
    return res.status(200).send({status:true,msg:"operation subtract"})
    
    }