const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/BookStore", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("fullfil");
}).catch((e) => {
    console.log("noconnection");
})