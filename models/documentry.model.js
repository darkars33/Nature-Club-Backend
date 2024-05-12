const mongoose = require("mongoose");

const documentarySchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: true,
          },
          url:{
                    type: String,
                    required: true,
          },
          description: {
                    type: String,
                    required: true,
          }
},{
          timestamps: true,
});

const Documentary = mongoose.model("Documentary", documentarySchema);

module.exports = Documentary;