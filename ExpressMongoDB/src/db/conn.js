const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Akademia", {
}).then(() => {
    console.log('connecteion successful');
}).catch((e) => {
    console.log('no connection',e);
    
});