const WorkstyleProfile =
require("../models/WorkstyleProfile");

// CREATE
exports.createWorkstyleProfile = async(req,res)=>{
 try{
  req.body.userId = req.user.userId;

  const profile =
  await WorkstyleProfile.create(req.body);

  res.status(201).json({
   success:true,
   message:"Workstyle Profile Created",
   data:profile
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }
};

// GET ALL
exports.getWorkstyleProfiles = async(req,res)=>{
 try{

  const profiles =
  await WorkstyleProfile.find({ userId: req.user.userId });

  res.status(200).json({
   success:true,
   count:profiles.length,
   data:profiles
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }
};

// GET SINGLE
exports.getWorkstyleProfileById = async(req,res)=>{
 try{

  const profile =
  await WorkstyleProfile.findOne({ _id: req.params.id, userId: req.user.userId });

  if(!profile){
   return res.status(404).json({
    success:false,
    message:"Profile Not Found"
   });
  }

  res.status(200).json({
   success:true,
   data:profile
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }
};

// UPDATE
exports.updateWorkstyleProfile = async(req,res)=>{
 try{

  const profile =
  await WorkstyleProfile.findOneAndUpdate(
   { _id: req.params.id, userId: req.user.userId },
   req.body,
   {
    new:true,
    runValidators:true
   }
  );

  if(!profile){
   return res.status(404).json({
    success:false,
    message:"Profile Not Found"
   });
  }

  res.status(200).json({
   success:true,
   message:"Profile Updated",
   data:profile
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }
};

// DELETE
exports.deleteWorkstyleProfile = async(req,res)=>{
 try{

  const profile =
  await WorkstyleProfile.findOneAndDelete(
   { _id: req.params.id, userId: req.user.userId }
  );

  if(!profile){
   return res.status(404).json({
    success:false,
    message:"Profile Not Found"
   });
  }

  res.status(200).json({
   success:true,
   message:"Profile Deleted"
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }
};