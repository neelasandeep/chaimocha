exports.config={
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
specs:['./specfiles/locatorbybinding.js'],

capabilities: {
    'browserName': 'chrome'
    

}
};