const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
          name:{
                    type: String,
                    required: true,
          },
          position:{
                    type: String,
                    required: true,
          },
          instagramLink:{
                    type: String,
                    required: true,
          },
          linkedInLink:{
                    type: String,
                    required: true,
          },
          profile:{
                    type: String,
                    required: false,
          }
},
{
          timestamps: true,
}
);

const Team= mongoose.model('Team', teamSchema);
module.exports = Team;