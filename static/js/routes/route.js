
// All Module export here
const express = require('express')
const route = express.Router();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyparser = require("body-parser");
const session = require('express-session');
const cookieParser = require('cookie-parser')
// const flash = require('connect-flash');

// Express-Session set here
route.use(session({
    cookie: { maxAge: 60000 },
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

// Message Middleware here
route.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

// All schema in mongoose templates
const quote = require("../models/quoteschema");
const login = require("../models/loginschema");
// const { redirect } = require('express/lib/response');



// All Create New Pages here        ******************* New Pages *************************

// Starting pages
route.get('/', (req, res) => {
    res.status(200).render('index');
})

// Login pages
route.get('/signin', (req, res) => {
    res.status(200).render('signin');
})

// Sign Up pages
route.get('/signup', (req, res) => {
    res.statusCode = 200
    res.render('signup');
})

// // Sign Up pages Message
route.get('/data', (req, res) => {
    res.status(200).render('data', { message: req.flash('message'), message: req.flash('message') });
})

// All Navbar pages
route.get('/home', (req, res) => {
    // if (req.session.email) {
    res.status(200).render('./navbar/home', { name: req.session.fname, messages: req.flash('success') });
    // }
    // else {
    //     res.redirect('./signin')
    // }
})

route.get('/contact', (req, res) => {

    // if (req.session.email) {
    res.status(200).render('./navbar/contact', { name: req.session.fname });
    // }
    // else {
    //     res.redirect('./signin')
    // }
})

route.get('/about', (req, res) => {
    // if (req.session.email) {
    res.status(200).render('./navbar/about', { name: req.session.fname });
    // }
    // else {
    //     res.redirect('./signin')
    // }
})

route.get('/career', (req, res) => {
    // if (req.session.email) {
    res.status(200).render('./navbar/career', { name: req.session.fname });
    // }
    // else {
    //     res.redirect('./signin')
    // }
})

// Area Page here

route.get('/area', (req, res) => {
    res.status(200).render('./navbar/area', { name: req.session.fname });
})

// All Demo Payment Page here

route.get('/payment-card', (req, res) => {
    res.status(200).render('./payments/payment-card', { name: req.session.fname });
})

// route.get('/payment', (req, res) => {
//     res.status(200).render('./payments/payment', { name: req.session.fname, amount: req.body.amount });
// })

route.get('/payment-receipt', (req, res) => {
    res.status(200).render('./payments/payment-receipt', { name: req.session.fname });
})


// All Service pages

route.get('/service', (req, res) => {
    res.status(200).render('./services/service', { name: req.session.fname });
})

route.get('/service-solar-power', (req, res) => {
    res.status(200).render('./services/service-solar-power', { name: req.session.fname });
})

route.get('/service-battery-backup-stystem', (req, res) => {
    res.status(200).render('./services/service-battery-backup-stystem', { name: req.session.fname });
})


route.get('/service-electrical-services', (req, res) => {
    res.status(200).render('./services/service-electrical-services', { name: req.session.fname });
})

route.get('/service-solar-carports', (req, res) => {
    res.status(200).render('./services/service-solar-carports', { name: req.session.fname });
})

route.get('/service-EV', (req, res) => {
    res.status(200).render('./services/service-EV', { name: req.session.fname });
})

route.get('/service-generators-system', (req, res) => {
    res.status(200).render('./services/service-generators-system', { name: req.session.fname });
})

// Blogger pages

route.get('/blog', (req, res) => {
    res.status(200).render('./blog', { name: req.session.fname });
})

// All Shopping pages

route.get('/shop', (req, res) => {
    res.status(200).render('./shopping/shop', { name: req.session.fname });
})

route.get('/solar-panel', (req, res) => {
    res.status(200).render('./shopping/solar-panel', { name: req.session.fname });
})

route.get('/solar-battery', (req, res) => {
    res.status(200).render('./shopping/solar-battery', { name: req.session.fname });
})

route.get('/solar-fan', (req, res) => {
    res.status(200).render('./shopping/solar-fan', { name: req.session.fname });
})

route.get('/solar-torch', (req, res) => {
    res.status(200).render('./shopping/solar-torch', { name: req.session.fname });
})

route.get('/solar-watch', (req, res) => {
    res.status(200).render('./shopping/solar-watch', { name: req.session.fname });
})

route.get('/solar-calculator', (req, res) => {
    res.status(200).render('./shopping/solar-calculator', { name: req.session.fname });
})

route.get('/solar-water-heater', (req, res) => {
    res.status(200).render('./shopping/solar-water-heater', { name: req.session.fname });
})

route.get('/solar-cooker', (req, res) => {
    res.status(200).render('./shopping/solar-cooker', { name: req.session.fname });
})

route.get('/solar-charger', (req, res) => {
    res.status(200).render('./shopping/solar-charger', { name: req.session.fname });
})

route.get('/solar-lamp', (req, res) => {
    res.status(200).render('./shopping/solar-lamp', { name: req.session.fname });
})

route.get('/solar-inverter', (req, res) => {
    res.status(200).render('./shopping/solar-inverter', { name: req.session.fname });
})



// All Data Store In Database here *********************************************************

// Quote Data Store in Database
route.post('/main', (req, res) => {
    const mydatamain = new quote(req.body);
    // console.log(mydatamain)
    mydatamain.save().then(() => {
        // res.send("This Items will save to the Database")
        req.session.message = {
            type: 'success',
            intro: 'Request at Quote',
            message: 'You Entry is  Stored in Database!'
        }
        res.redirect('./home')
        // res.alert("This Information will save to the Database")

    }).catch(() => {
        // res.send("This Items was not save to the Database")
        console.log("This Items was not save to the Database");
    })
});





// Signup Data Store in Database
route.post('/signup', async (req, res) => {
    try {
        // User entered email and password here
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        // console.log(email)

        // generate a salt and hash password here
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Fetch email on database here
        const user = await login.findOne({ email: email });
        // console.log(user)

        // Checking email exit or not (Email is unique) here
        if (user == null) {
            const user2 = await login.findOne({ phone: phone });
            // console.log(user2)
            if (user2 == null) {
                // Comparing password here
                if (bcrypt.compareSync(cpassword, hash)) {
                    const mydata = new login({
                        fname: req.body.fname,
                        lname: req.body.lname,
                        email: req.body.email,
                        phone: req.body.phone,
                        password: hash,
                        cpassword: hash
                    })

                    mydata.save().then(() => {
                        // res.status(200).redirect(`data`)
                        // res.send("This Items will save to the Database")
                        console.log('You have signup successfully!')
                        req.session.message = {
                            type: 'success',
                            intro: 'Success',
                            message: 'You have signup successfully!'
                        }
                        res.redirect('./signin')
                    })
                }
                else {
                    // res.send('Password Are Not Matching')  
                    console.log('Password Are Not Matching!')
                    req.session.message = {
                        type: 'danger',
                        intro: 'Do not match the Password',
                        message: 'Please, Enter the Valid Password.'
                    }
                    res.redirect('./signup')
                }
            }
            else {
                console.log('This phone number already Present, please enter unique phone number !')
                req.session.message = {
                    type: 'danger',
                    intro: 'This Phone Number is already present',
                    message: 'Please, Enter the Valid Phone Number.'
                }
                res.redirect('./signup')
            }
        }
        else {
            console.log('This email already Present, please enter unique email !')
            req.session.message = {
                type: 'danger',
                intro: 'This email is already present',
                message: 'Please, Enter the Valid email.'
            }
            res.redirect('./signup')
        }
    } catch (error) {
        // res.status(400).send(error)
        console.log(error)
        console.log('Invaild input!')
        req.session.message = {
            type: 'danger',
            intro: 'Error ',
            message: 'Invaild Input!'
        }
        res.redirect('./signup')
    }
});





// Login(signin) Data Store in Database
route.post('/signin', async (req, res) => {
    try {
        // User entered email and password here
        const email = req.body.email;
        const password = req.body.password;
        // console.log(email)

        // This is Checking code for user
        // findOne({Database Wala email : user enter email}) 
        const user = await login.findOne({ email: email });
        // console.log(user)
        // console.log(user.fname)
        // console.log(user.email)

        if (user) {
            const check = await bcrypt.compareSync(password, user.password)
            // console.log(check)
            if (check) {
                // console.log('ok............')
                let sess = req.session
                sess.fname = user.fname
                sess.lname = user.lname
                sess.email = user.email
                sess.save()
                // console.log(sess)
                // console.log('You have login successfully!')
                req.session.message = {
                    type: 'success',
                    intro: 'Success',
                    message: 'You have login successfully!'
                }
                res.redirect('./home')
            }
            else {
                // res.send('Invaild Password')
                // console.log('Invaild Password!')
                req.session.message = {
                    type: 'danger',
                    intro: 'Error',
                    message: 'Invaild Password!'
                }
                res.redirect('./signin')
            }
        }
        else {
            res.redirect('./signin')
            // res.send('Invaild email Password')
            // console.log('Invaild email Password!')
            req.session.message = {
                type: 'danger',
                intro: 'Error',
                message: 'Invaild email Password!'
            }
            res.redirect('./signin')
        }

    } catch (error) {
        // res.status(500).send('Invaild email Password..............................')
        console.log(error)
    }
});





// LogOut page here

route.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('./signin')
            // console.log('Data Destroy Successfully.............')
            // req.session.message = {
            //     type: 'success',
            //     intro: 'success',
            //     message: 'Your Data Destroy Successfully!'
            //   }
        }
    })
});



module.exports = route;

