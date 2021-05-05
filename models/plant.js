const mongoose = require('mongoose')
//implement schema which mongoose offers
//we will always be creating a schema in our model ***remember
const Schema = mongoose.Schema




//we create a variable and equate it to the new schema which is a blueprint
const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String, required: true},
  },
  {timestamps: true},
)



module.exports = mongoose.model('plants', Plant)



