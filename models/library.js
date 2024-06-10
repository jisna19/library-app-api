const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "authorName":String,
        "price":String,
        "edition":String
    }
)
let librariesmodel=mongoose.model("libraries",schema)
module.exports={librariesmodel}