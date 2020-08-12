// Routes
const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const characters = require('../models/characters');
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

var data = [
	{
	  name: "John",
	  age: 21,
	  bio: "John is a good guy.",
	  image: "ImageURL",
	  dem: 150,
	  id: "79b82da",
	  basestats: {
		  strength: 5,
		  perception: 5,
		  endurance: 5,
		  charisma: 5,
		  intelligence: 5,
		  agility: 5,
		  luck: 5
	  }
	}
  ];

// Dummy users
let users = [
	{
		id: 1,
		name: "tlouekar",
		email: "tlouekar@student.hive.fi",
		password: "p"
	},
	{
		id: 2,
		name: "User",
		email: "u@u",
		password: "p"
	}
]

// Register route
router.post("/register", function(req, res) {
	console.log('Yay, you pressed a button!');
	characters.insertMany(data, function(err, result) {
		if (err) {
			console.log(err);
			console.log('ERror');
		  res.json(err);
		} else {
			console.log('Maybe not error');
		  res.json(result);
		}
	  });
});

// Login route
router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
	console.log("Login found a user by email: " + req.user);
	console.log(req.user);
	//return res.send(req.user);
	res.json(req.user);
});

// Logout route
router.get("/logout", function(req, res) {
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
		console.log("Middleware req data (name): " + req.user.name);
		return next()
	}
}

// User is called when you want to get some data from them
router.get("/user", authMiddleware, function(req, res) {
	console.log("Trying to find the user");
	let user = users.find(user => {
	  return user.id === req.session.passport.user
	})
	console.log(user)
	//res.send("Jippii")
	//return res.send([req.session.passport.user, "Jippii"]);
	res.json(req.session);
});

// LocalStrategy to use username and password with passport.js
passport.use(new LocalStrategy({
		usernameField: "email",
		passwordField: "password"
		},
		(username, password, done) => {
			let user = users.find((user) => {
				return user.email === username && user.password === password
			})
			if (user) {
				console.log("There is a user");
				console.log("Passport Localstrategy email: " + user.email);
				console.log("Passport Localstrategy password: " + user.password);
				done(null, user)
			} else {
				console.log("Well somethings fucked")
				done(null, false, {message: 'Incorrect username or password'})
			}
		}
	)
)

// SerializeUser determines which data of 
// the user object should be stored in the session. 
passport.serializeUser((user, done) => {
	console.log("serializeUser fired.");
	done(null, user.id)
})

// DeserializeUser gets data by user id
passport.deserializeUser((id, done) => {
	console.log("deserializeUser fired.");
	let user = users.find((user) => {
		return user.id === id
	})
	done(null, user)
})

// Export router
module.exports = router;