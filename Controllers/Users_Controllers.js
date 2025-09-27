// Users_Controllers_JS

// Here, we are going to store all callbacks, which will work to render all Users

// Requiring Users Models
const User = require("../Models/Users_models");

// Function 1:-
module.exports.renderSignupForm = (req, res) => {
    res.render("Users/SignUp.ejs");
};

// Function 2:-
module.exports.signUp = async(req, res) => {

    try {
        // Extrtacting Username Email and password
        let { username, email, password } = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        // Calling Login method:-
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }

            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });

    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// Function 3:-
module.exports.renderLoginForm = (req, res) => {
    res.render("Users/Login.ejs");
};

// Function 4:-
module.exports.afterLogin = async(req, res) => {
    req.flash( "success", "Welcome back to Wanderlust!");
        
    let redirectUrl = res.locals.redirectUrl || "/listings";
        
    // res.redirect(req.session.redirectUrl); // in general cases this should be workout but 
    // here is passport will create an issue

    res.redirect(redirectUrl);
};

// Function 5:-
module.exports.logout = (req, res, next) => {
    req.logout((err) => {

        // Condition 1:-
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
};

// ..............................................................................................................