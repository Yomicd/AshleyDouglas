// This controller is to create a new learner
  // lets create our first learner
 

//IMPORT THE MODEL TO CREATE NEW LEARNERS
const { response, resource } = require('../app');
const Learner = require('../models/learnerModel')

// Refactor route controllers
// This is to retrieve all the learners at once
exports.getAllLearners = async (request, response) => {
// retrieve all learners at once
  const learners = await Learner.find();
  try {

  //send response
    response.status(200).json({
      status: "success",
      data: {
        learners: learners,
      },
    });
  } catch(error){
      response.status(500).json({
        status: "error",
        message: error,
      })
    }
  };
  
  // This controller is to create a new learner
  exports.createLearner = async (request, response) => {
    try {
    // Model goes here
    //Crete first learner
    const newLearner = await Learner.create(request.body);
    response.status(201).json({
      status: "success",
      data: {
        newLearner: newLearner,
      },
    });
 
} catch(error){
  response.status(500).json({
    status: "error",
    message: error,
  })
}
};
  
  // This controller is to retrieve a single learner
  exports.getSingleLearner = async (request, response) => {
    try {
    // find single by using id
    const learner = await learner.findById(request.params.id);

    //send response
    response.status(200).json({
      status: "success",
      data: {
        learner: learner,
      },
    });
  } catch(error){
    response.status(500).json({
      status: "error",
      message: error,
    })
  }
  };
  
  // This controller is to update a single learner data
  exports.updateLearner =  async (request, response) => {
    try{
     // find and update user
     
     const updatedLearner = await Learner.findByIdAndUpdate(request.params.id, request.body, {new: true});

    response.status(500).json({
      status: "fail",
      data: {
        updatedLearner,
        message: "undefined routes",
      },
    });
  } catch(error){
    response.status(500).json({
      satus: "error",
      message: error
    })
  }
  };
  
  // This controller is to delete a single learner
  exports.deleteLearner = async (request, response) => {
    try{
      await Learner.findByIdAndDelete(request.params.id);

    response.status(204).json({
      status: "success",
      data: {},
    });
    } catch(error){
      response.status(500).json({
        status: "error",
        message: error
      })
    }
  };
  
  // WHEN YOU DO SINGLE EXPORT YOU EXPORT ONLY THE FUNCTION
  // module.exports = getAllLearners;
  
  // const learnerController = {
  //     getAllLearners = (request, response) => {
  //         response.status(500).json({
  //           status: "fail",
  //           data: {
  //             message: "undefined routes",
  //           },
  //         });
  // }