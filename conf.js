exports.config={
   seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
specs:['spec1.js'],

capabilities: {
    'browserName': 'chrome'
    

}
};