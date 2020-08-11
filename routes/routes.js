// Routes
const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const characters = require('../models/characters');
router.use(express.json());
//router.use(express.urlencoded({ extended: true }));

// const index = require('./index');

// // index.js
// router.get('/', function(req, res, next) {
// 	search.get(req, res, next);
// });

// Init cookies
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

router.post("/insert", function(req, res) {
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

/*
router.post("/login", function(req, res, next) {
	console.log("\nLogging in..")
	passport.authenticate("local", (err, user, info) => {
		//console.log(req.body.email);
		//console.log(req.body.passwords);
		console.log("Login info:" + user.isAuthenticated);
		if (err) {
			return next(err);
		}
		if (user) {
			console.log("Login found a user by email: " + user.email);
			console.log("Login found users password: " + user.password);
			return res.status(200).send([user, "Jippii", info]);
		}
		if (!user) {
			console.log("No user. This should be undefined: " + user.email);
			console.log("No user. This should be undefined: " + user.password);
			return res.status(400).send([user, "Cannot log in", info]);
		}
		req.login(user, err => {
			res.send("Logged in");
		});
	})(req, res, next);
});
*/

router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	console.log("Login found a user by email: " + req.user.email);
	return res.status(200).send([req.user, "Jippii", info]);
});


router.get("/logout", function(req, res) {
	req.logout();
	console.log("logged out")
	return res.send();
});

const authMiddleware = function(req, res, next) {
	console.log("Middleware req data: " + req.user);
	if (!req.isAuthenticated()) {
		console.log("Not authorized, says middleware.\n")
		res.status(401).send('You are not authenticated')
	} else {
		return next()
	}
}

router.get("/user", authMiddleware, function(req, res) {
	console.log("Trying to find the user");
	let user = users.find(user => {
	  return user.id === req.session.passport.user
	})
	console.log(user)
	res.send({ user: user })
});

passport.use(new LocalStrategy({
		usernameField: "email",
		passwordField: "password"
		},
		(username, password, done) => {
			let user = users.find((user) => {
				return user.email === username && user.password === password
			})
			// if (!user.verifyPassword(user.password)) {
			// 	done(null, false, { message: 'User not verified!'}); 
			// }
			if (user) {
			//if (user.verifyPassword(user.password)) {
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

passport.serializeUser((user, done) => {
	console.log("serializeUser fired.");
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	console.log("serializeUser fired.");
	let user = users.find((user) => {
		return user.id === id
	})
	done(null, user)
})

/*
router.post("/login", function(req, res, next) {
	if (req.body.email == "u@u") {
		console.log('Got the right email:', req.body.email);
		console.log('Logging in');
		res.send("Yup");
		//router.push('insert');
	} else {
		console.log('Wrong email');
		//throw new Error('wrong email');
		//next(err);
	}
	//router.push("./insert");
});
*/

module.exports = router;