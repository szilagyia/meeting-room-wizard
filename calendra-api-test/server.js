// load the express package and create our app
var express = require('express'),
    app = express();
var path = require('path');

// send our index.html file to the user for the home page
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// create routes for the admin section

// get an instance of the router

var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard!');
});

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
  res.send('I show all the users');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts');
});

// create routes for the calendars section
var calendarsRouter = express.Router();

// calendars main page. (http://localhost:1337/calendars)
calendarsRouter.get('/', function(req, res) {
  res.send('Here are the calendars!');
});

// route with parameters (http://localhost:1337/calendars/:room)
calendarsRouter.get('/:room', function(req, res) {
  res.send('This is the calendar for the room ' + req.params.room + ':');
});

// apply the routes to our application
app.use('/admin', adminRouter);
app.use('/calendars', calendarsRouter);
app.use('/staticevents', express.static('dist/staticevents'));
// start the server
app.listen(1337);
console.log('1337 is the magic port!');
