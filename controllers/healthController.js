const HealthProfile =
require("../models/HealthProfile");

// CREATE
exports.createHealthProfile = async(req,res)=>{
 try{
  req.body.userId = req.user.userId;
  const profile =
  await HealthProfile.create(req.body);

  res.status(201).json({
   success:true,
   message:"Health Profile Created",
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
exports.getHealthProfiles = async(req,res)=>{
 try{
  const profiles =
  await HealthProfile.find({ userId: req.user.userId });

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
exports.getHealthProfileById = async(req,res)=>{
 try{

  const profile =
  await HealthProfile.findOne({ _id: req.params.id, userId: req.user.userId });

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
exports.updateHealthProfile = async(req,res)=>{
 try{

  const profile =
  await HealthProfile.findOneAndUpdate(
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
exports.deleteHealthProfile = async(req,res)=>{
 try{

  const profile =
  await HealthProfile.findOneAndDelete(
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