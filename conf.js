exports.config={
   seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
specs:['./demoproject/checklist.js'],

capabilities: {
    'browserName': 'chrome'
    

}
};