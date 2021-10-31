const mongooseSlugPlugin = require('mongoose-slug-plugin');
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
organizer: {
    type: String,
    
},
name:{
    type: String,
},
email:{
    type:String
},
image:{
    type: String,
},
numOfseats:{
    type: Number,
},
bookSeats:{
    type: Number,
},
startDate:{
    type: Number,
},
endDate:{
    type: Number,
}

});

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model("Products", ProductSchema)