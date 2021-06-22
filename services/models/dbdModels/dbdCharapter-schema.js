const mongoose = require ('mongoose')


const DbdCharapterSchema = new mongoose.Schema({
    _id:String,
    name:String,
    characterImgUrl:String,
    typeCharacter:String,
    descriptionCharacter:String,
    gender:String,
    role:String,
    nationality:String,
    perks:[{
        type:String,
        ref:"DbdPerkSchema"
    }]

});
module.exports = mongoose.model('DbdCharapterSchema',DbdCharapterSchema);