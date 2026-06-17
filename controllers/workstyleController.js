const WorkstyleProfile =
require("../models/WorkstyleProfile");

// CREATE
exports.createWorkstyleProfile = async(req,res)=>{
 try{

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
  await WorkstyleProfile.find();

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
  await WorkstyleProfile.findById(req.params.id);

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
  await WorkstyleProfile.findByIdAndUpdate(
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
exports.deleteWorkstyleProfile = async(req,res)=>{
 try{

  const profile =
  await WorkstyleProfile.findByIdAndDelete(
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