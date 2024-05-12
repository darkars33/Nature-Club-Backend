const Documentary = require("../models/documentry.model");

const postDocumentary = async (req, res) =>{
          try {
                    const {name, url, description} = req.body;
                    const existingDocumentary = await Documentary.findOne({name});
                    if(existingDocumentary){
                              return res.status(400).json({message: "Documentary already exists"});
                    };

                    const documentary = new Documentary({
                              name,
                              url,
                              description,
                    })
                    if(documentary){
                              await documentary.save();
                              res.status(201).json({
                                        name: documentary.name,
                                        url: documentary.url,
                                        description: documentary.description,
                              })
                    }
          } catch (error) {
                    console.log("Error: ", error.message);
                    res.status(500).json({message: error.message});
          }
};

const getDocumentaries = async (req, res) =>{
          try {
                 const documentaries = await Documentary.find();
                 res.status(200).json(documentaries);   
          } catch (error) {
                    console.log("Error: ", error.message);
                    res.status(500).json({message: error.message});   
          }
};

module.exports = {postDocumentary, getDocumentaries};