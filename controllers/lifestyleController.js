const LifestyleProfile =
require("../models/LifestyleProfile");

// CREATE
exports.createLifestyleProfile = async(req,res)=>{
 try{

  const profile =
  await LifestyleProfile.create(req.body);

  res.status(201).json({
   success:true,
   message:"Lifestyle Profile Created",
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
exports.getLifestyleProfiles = async(req,res)=>{
 try{

  const profiles =
  await LifestyleProfile.find();

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
exports.getLifestyleProfileById = async(req,res)=>{
 try{

  const profile =
  await LifestyleProfile.findById(req.params.id);

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
exports.updateLifestyleProfile = async(req,res)=>{
 try{

  const profile =
  await LifestyleProfile.findByIdAndUpdate(
   req.params.id,
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
exports.deleteLifestyleProfile = async(req,res)=>{
 try{

  const profile =
  await LifestyleProfile.findByIdAndDelete(
   req.params.id
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