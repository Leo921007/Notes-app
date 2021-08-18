const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    //Match Email'user
    const user = await User.findOne({
        email
    });
    if (!user) {
        return done(null, false, {
            message: 'Not User Found'
        });
    } else {
        //Match Password's User
        const match = await user.matchPassword(password);
        console.log('el match es: ');
        console.log(match);
        if (match) {
            console.log('hay match de contraseñas!');
            return done(null, user)
        } else {
            console.log('NO hay match de contraseñas');
            return done(null, false, {
                message: 'Incorrect Password'
            });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err,user);
    });
});