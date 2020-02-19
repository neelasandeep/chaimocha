exports.config={
   seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
specs:['./specfiles/synchronization.js'],

capabilities: {
    'browserName': 'chrome'
    

}
};