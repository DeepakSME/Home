const CategoryModel = require('../models/CategoryModel')



const list = async (req, rest) => {

    try{
        //---------- insert data ----------//
        // let insertData = await CategoryModel.create({
        //     category_name: "Web Devlopment"
        // })

        //---------- Update data ----------//
        // let dataUpdate = await CategoryModel.update({
        //     category_name:'code Improvel'
        // },
        // {
        //     where:{category_id:101}
        // })

        //---------- delete data ----------//
        // let datadelete = await CategoryModel.destroy({
        //     where:{category_id:101}
        // })
        let result = await CategoryModel.findAll();
        // let result = {text:"data is coming from the server"}
            rest.status(200).json(result)
    }catch(e){
        rest.status(400).json(e)
    }
}

module.exports = {
    list
}