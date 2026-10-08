


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


require('datejs');


function combineUsers(...args)  { 
  const combinedObject = {
    users: []
  };


  for  (let i = 0; i < args.length; i++) {
    combinedObject.users = [
      ...combinedObject.users, 
      ...args[i]
  ];

  }

  combinedObject.merge_date =
    Date.today().toString('M/d/yyyy');

  return combinedObject;
}