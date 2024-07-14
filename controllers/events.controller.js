const Event = require('../models/events.model');
const cloudinary = require('cloudinary').v2;


const postEvents = async (req, res) =>{
          try {
                    const {name, date, description, location} = req.body;
                    const {eventPic} = req.body;

                    const existingEvent = await Event.findOne({name});
                    if(existingEvent){
                              return res.status(400).json({message: "Event already exists"});
                    };

                    if(eventPic){
                              const uploadResponse= await cloudinary.uploader.upload(eventPic);
                              eventPic= uploadResponse.secure_url;
                    }

                    const event = new Event({
                              name,
                              date,
                              description,
                              location,
                              eventPic
                    });

                    if(event){
                              await event.save();
                              res.status(201).json({
                                        name: event.name,
                                        date: event.date,
                                        description: event.description,
                                        location: event.location,
                                        eventPic: event.eventPic
                              })
                    }

          } catch (error) {
                    console.log("Error: ", error.message);
                    res.status(500).json({message: error.message});
          }
};

const getEvents = async (req, res) =>{
          try {
                    const events = await Event.find();
                    res.status(200).json(events);
          } catch (error) {
                    console.log("Error: ", error.message);
                    res.status(500).json({message: error.message});
          }
}

const getTopEvents = async (req, res) =>{
          try {
                    const topEvents= await Event.find().sort({date: -1}).limit(3);
                    res.status(200).json(topEvents);
          } catch (error) {
                    console.log("Error: ", error.message);
                    res.status(500).json({message: error.message});      
          }
}

module.exports = {postEvents, getEvents, getTopEvents};