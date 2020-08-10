// Routes
const express = require('express');
const router = express.Router();
var cookieSession = require('cookie-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
const characters = require('../models/characters');
router.use(express.json());
const authMiddleware = (req, res, next) => {
	if (!req.isAuthenticated()) {
		console.log("Not authorized!")
		res.status(401).send('You are not authenticated')
	} else {
		return next()
	}
}
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

router.post("/login", function(req, res, next) {
	console.log("Login?")
	passport.authenticate("local", (err, user, info) => {
		console.log(req.body.email);
		console.log(req.body.passwords);
		console.log(info);
		if (err) {
			return next(err);
		}
		if (user) {
			return res.status(200).send([user, "Jippii", info]);
		}
		if (!user) {
			return res.status(400).send([user, "Cannot log in", info]);
		}
		req.login(user, err => {
			res.send("Logged in");
		});
	})(req, res, next);
});


router.get("/logout", function(req, res) {
	req.logout();
  
	console.log("logged out")
  
	return res.send();
});

router.get("/user", authMiddleware, (req, res) => {
	console.log("Checking the user")
	let user = users.find(user => {
	  return user.id === req.session.passport.user
	})
  
	console.log([user, req.session])
  
	res.send({ user: user })
});

passport.use(
	new LocalStrategy(
		{
		usernameField: "email",
		passwordField: "password"
		},

		(username, password, done) => {
		let user = users.find((user) => {
			return user.email === username && user.password === password
		})

		if (user) {
				console.log("There is a user")
				done(null, user)
			} else {
				console.log("Well somethings fucked")
				done(null, false, { message: 'Incorrect username or password'})
			}
		}
	)
)

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
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