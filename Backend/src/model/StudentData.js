const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/StudentEnrollment');
const Schema = mongoose.Schema;

const ApprovedSchema = new Schema({
         value:String,
         fname: String,
         age:String,
         address:String,
         district:String,
         email:String,
         phno:String,
         dob:String,
         gender:String,
         quali:String,
         poy:String,
         skill:String,
         wstatus:String,
         techtrain:String,
         year:String,
         course:String,
         photo:String
});

var StudentData = mongoose.model('studentdata', ApprovedSchema);

module.exports = StudentData;