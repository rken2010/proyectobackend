//? LOGIN DE USUARIO //

const passport = require("passport");

passport.use('login', new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err)
          return done(err);
   
        if (!user) {
          console.log('User Not Found with username ' + username);
          return done(null, false);
        }
   
        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');
          return done(null, false);
        }
   
        return done(null, user);
      });
    })
   );

//? REGISTRAR //

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
   },
    (req, username, password, done) => {
      User.findOne({ 'username': username }, function (err, user) {
   
        if (err) {
          console.log('Error in SignUp: ' + err);
          return done(err);
        }
   
        if (user) {
          console.log('User already exists');
          return done(null, false)
        }
   
        const newUser = {
          username: username,
          password: createHash(password),
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        }
        User.create(newUser, (err, userWithId) => {
            if (err) {
              console.log('Error in Saving user: ' + err);
              return done(err);
            }
            console.log(user)
            console.log('User Registration succesful');
            return done(null, userWithId);
          });
        });
      })
     )
     
     function createHash(password) {
       return bCrypt.hashSync(
                 password,
                 bCrypt.genSaltSync(10),
                 null);
     }

//? SERIALIZAR Y DESERIALIZAR //

passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, done);
  });
  

//? PONER EN APP.USE //

app.use(session({
    secret: 'keyboard cat',
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: config.TIEMPO_EXPIRACION
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
   }));
   
   app.use(passport.initialize());
   app.use(passport.session());

//! RUTAS //
//?index//
routerAuth.get("/", controladorAuth.getRoot )
//?LOGIN//
    .get("/login", controladorAuth.getLogin);
    .post("/login", passport.authenticate("login", { failureRedirect:"/errorLogin"}), controladorAuth.postLogin);
    .get("/errorLogin", controladorAuth.getFailLogin)

//?REGISTRO //  
   .get("/signup", controladorAuth.getSignup)
   .post("/login", passport.authenticate("signup", { failureRedirect:"/errorLogin"}), controladorAuth.postSignup);
   .get("/errorSignup", controladorAuth.getFailSignup)

//?LOGOUT //
   .get("/logout", controladorAuth.getLogout)
