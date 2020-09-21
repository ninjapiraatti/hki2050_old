// Routes
const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const passport = require('passport');
//const LocalStrategy = require('passport-local').Strategy
const characters = require('../models/characters');
const User = require('../models/muser');
router.use(express.json());

// Set cookie
router.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Init passport and session
router.use(passport.initialize());
router.use(passport.session());

// Register route
router.post("/register", function(req, res) {
	console.log(req.body)
	User.register(new User({username: req.body.name}), req.body.password); // Is this safe?
});

// Create route
router.post("/create", function(req, res) {
	console.log(req.body)
	characters.insertMany(req.body, function(err, result) {
		if (err) {
			//console.log(err);
			console.log('Character creation failed');
			res.json(err);
		} else {
			console.log('Character created');
			res.json(result);
		}
	});
});

// Edit a character
router.post("/edit", function(req, res) {
	//console.log("EDITING " + req.body._id);
	characters.findOneAndUpdate({'_id': req.body._id}, req.body, {new: true}, function(err,obj) { 
		if (err) {
			console.log("\nDID NOT UPDATE CHARACTER\n");
			res.json(err);
		} else {
			console.log("\nCharacter updated\n"); 
			res.json(obj);
		}
	});
});

// Login route
router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
	//console.log("Login found a user by name: " + req.user.username);
	User.findOne({'username': req.user.username}, function(err,obj) { console.log("Login found a user by name: " + obj.username); });
	//return res.send(req.user);
	res.json(req.user);
});

// Logout route
router.get("/logout", function(req, res) {
	//User.register(new User({username: "tuoppi"}), "p");
	User.findOne({'username': req.user.username}, function(err,obj) { console.log(obj.username); });
	req.logout();
	console.log("logged out")
	return res.send();
});

// Middleware to check if passport.js has user authenticated
const authMiddleware = function(req, res, next) {
	if (!req.isAuthenticated()) {
		console.log("Not authorized, says middleware.\n")
		res.status(401).send('You are not authenticated')
		return;
	} else {
		console.log("Middleware req data (name): " + req.user.username);
		User.findOne({'username': req.user.username}, function(err,obj) { console.log("Middleware says username " + obj.username); });
		return next()
	}
}

// User route basically just returns the session which we can use to print user data and such
router.get("/user", authMiddleware, function(req, res) {
	res.json(req.session);
});

// List user's characters
router.get("/get_characters", authMiddleware, function(req, res) {
	console.log("Getting characters of: " + req.user._id);
	characters.find({'owner': req.user._id}, function(err,obj) { 
		if (err) {
			console.log(err);
			console.log('Characters not found on this owner');
			res.json(err);
		} else {
			//console.log(obj); 
			res.json(obj);
		}
	});
});

// Find one character
router.get("/get_character", authMiddleware, function(req, res) {
	console.log("Getting ONE character.");
	characters.findOne({'owner': req.user._id}, function(err,obj) { 
		if (err) {
			console.log(err);
			console.log('ONE character not found on this owner');
			res.json(err);
		} else {
			console.log(obj); 
			res.json(obj);
		}
	});
});

//Using passport here with mongoose
//passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Export router
module.exports = router;