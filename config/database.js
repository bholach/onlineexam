const dbURL = "mongodb://oexam:oexampass@ds255958.mlab.com:55958/oexam";//"mongodb://localhost:27017/oexam";
module.exports = {
    //database: 'mongodb://oexam:oexampass@ds255958.mlab.com:55958/oexam',   //prod
    database: dbURL,    //dev
    secret: 'yoursecret'
  };
