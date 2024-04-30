const { timeStamp } = require("console")
const mongoose = require("mongoose")

const CountryShema = mongoose.Schema(
    {
        country_name : {
            type : String,
            require : [true, "Please enter country name"]
        },
        country_code : {
            type : String,
            require : [true, "Please enter country code"]
        },
        description : {
            type : String,
            require : true
        },
        image : {
            type : String,

        },
        logo_url : {
            type : String
        },
        status : {
            type : Boolean,
            require : true
        },
       
    },
    {
        timeStamp : true
    }
)

const Country = mongoose.model("Country", CountryShema)

module.exports = Country
