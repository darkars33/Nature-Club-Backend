const Team = require('../models/teams.model');

const postTeam = async (req, res) =>{
          try {
                  const {name, position, instagramLink, linkedInLink, profile} = req.body;

                  if(!name || !position || !instagramLink || !linkedInLink || !profile){
                            return res.status(400).json({message: "All fields are required"});
                  }

                  const exitingMember = await Team.findOne({name});
                  if(exitingMember){
                    return res.status(400).json({message: "Member already exists"});
                  }

                  const team = new Team({
                                  name,
                                  position,
                                  instagramLink,
                                  linkedInLink,
                                  profile,
                  });

                  if(team){
                                  await team.save();
                                  res.status(201).json({
                                              name: team.name,
                                              position: team.position,
                                              instagramLink: team.instagramLink,
                                              linkedInLink: team.linkedInLink,
                                              profile: team.profile,
                                  });
                  }

          } catch (error) {
                    console.log("Error:" , error.message);
                    res.status(500).json({message: error.message});
          }
};

const getTeams = async (req, res) =>{
          try {
                 const team = await Team.find();
                 res.status(200).json(team);   
          } catch (error) {
                    console.log("Error:" , error.message);
                    res.status(500).json({message: error.message});   
          }
};

module.exports = {postTeam, getTeams};