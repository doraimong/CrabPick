const req = require("express/lib/request");
const res = require("express/lib/response");

/**
 * Basic example demonstrating passport-steam usage within Express framework
 */
/*
// Example store.js usage with npm
var store = require('store')
store.set('user', { name:'Marcus' })
store.get('user').name == 'Marcus'
 
// Store current user
store.set('user', { name:'Marcus' })
 
// Get current user
store.get('user')
 
// Remove current user
store.remove('user')
 
// Clear all keys
store.clearAll()
 
// Loop over all stored values
store.each(function(value, key) {
    console.log(key, '==', value)
})


출처: https://oneshottenkill.tistory.com/316 [잘하고 싶은 백엔드 개발자]
*/
var express = require("express"),
  passport = require("passport"),
  util = require("util"),
  session = require("express-session"),
  SteamStrategy = require("../../").Strategy;

var cors = require("cors");

var store = require("store");

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Steam profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(
  new SteamStrategy(
    {
      // returnURL: "http://j8e107.p.ssafy.io:4000/auth/steam/return",

      returnURL: "https://j8e107.p.ssafy.io/auth/steam/return",

      // realm: "http://j8e107.p.ssafy.io:4000/",

      realm: "https://j8e107.p.ssafy.io/",

      apiKey: "21680047922CC0CA013B6EFEC720919A",
    },

    function (identifier, profile, done) {
      console.log("리리1##app.js -> passport.use - new SteamStrategy"); //@@ 리턴1.
      console.log(identifier);
      console.log("----------passport.use(new SteamStrategy)------------");
      console.log(profile);
      // res.writeHead(200, {
      //   "Userinfo-Cookie": profile,
      // });
      // console.log("브라우저에 데이터 저장 완료");
      // userInfoAllTime = profile;
      console.log("----------------------------------------------------");
      console.log(done);
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's Steam profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Steam account with a user record in your database,
        // and return that user instead.
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

var app = express();

app.use(cors());
// configure Express
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");

app.use(
  session({
    secret: "your secret",
    name: "name of session id",
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/../../public"));

// 여기서 보내주면 되지 않을까?
app.use("/node/user/:id", function (req, res) {
  console.log(req.params.id, "param");
  // console.log(req.user.id);
  // 문제 ( javascript에서 접근하는 것과, node상에서 접근하는 것이 달라 문제가 생긴다...)
  console.log(store.get("user").id);
  if (req.params.id === store.get("user").id) {
    res.json({ userLoggedIn: true });
  } else res.json({ userLoggedIn: false });
});
// app.use("/user/:id", function (req, res) {
//   // console.log(req.params.id);
//   // console.log(req.user.id);
//   // if (req.params.id === req.user.id) {
//   //   res.send({ userLoggedIn: true });
//   // } else res.send({ userLoggedIn: false });
//   res.json({ userLoggedIn: true });
// });
app.get("/node", function (req, res) {
  // res.render("index", { user: req.user });
  res.redirect("https://j8e107.p.ssafy.io/signin");
});

app.get("/node/account", ensureAuthenticated, function (req, res) {
  res.render("account", { user: req.user });
});

app.get("/node/logout", function (req, res) {
  req.logout();
  res.clearCookie("userId", { path: "/user" });
  res.redirect("/node");
});

// GET /auth/steam
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Steam authentication will involve redirecting
//   the user to steamcommunity.com.  After authenticating, Steam will redirect the
//   user back to this application at /auth/steam/return
/*'passport.authenticate ()'을 사용합니다. 요청을 인증하는 경로 미들웨어로 지정합니다.  
   Steam 인증의 첫 번째 단계는 리디렉션을 포함합니다 
   사용자가 steamcommunity.com 에 접속할 수 있습니다.
인증 후, 스팀은 사용자를 /auth/steam/return에서 이 애플리케이션으로 다시 리디렉션합니다 */

//@@1.리액트에서 신호가 와서 입장 //@@2.steam로그인 바로 리다이렉트
app.get("/auth/steam", passport.authenticate("steam", { failureRedirect: "https://www.naver.com/" }), function (req, res) {
  //@@3. steam로그인 페이지로 으로 이동
  console.log("##app.js -> /auth/steam");
  console.log("app.js -> /auth/steam");
  console.log("----------app.get('/auth/steam')------------");
  console.log(res.data);
  res.redirect("https://j8e107.p.ssafy.io/"); //리액트로 리다이렉트
  // res.redirect("http://localhost:3000/"); //리액트로 리다이렉트
});

app.get("/auth/userinfo", (req, res) => {
  console.log("##app.js -> /auth/test");
  res.send(userInfoAllTime);
});

// GET /auth/steam/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
/*'passport.authenticate ()'을 사용합니다. 요청을 인증하는 경로 미들웨어로 지정합니다.  
인증에 실패하면 사용자는 다시 로그인 페이지로 리디렉션됩니다.  
그렇지 않으면 기본 경로 함수가 호출되며, 이 예에서는 홈 페이지로 사용자를 리디렉션합니다. */
app.get("/auth/steam/return", passport.authenticate("steam", { failureRedirect: "https://www.daum.net/" }), function (req, res) {
  console.log("리리3##app.js -> /auth/steam/return"); //@@ 리턴3.
  console.log("----------app.get('/auth/steam/return')------------");
  console.log(res.data);
  res.redirect("https://j8e107.p.ssafy.io/"); //react로 리다이렉트
  // res.redirect("http://localhost:3000/"); //react로 리다이렉트
});

const options = {
  ca: fs.readFileSync(__dirname + "/fullchain2.pem"),
  key: fs.readFileSync(__dirname + "/privkey2.pem"),
};
// console.log("파일 경로 : " + __filename);
// console.log("파일 경로 : " + __dirname);
// app.listen(4000);

https.createServer(options, app).listen(4000, function (/*req, res*/) {
  /*res.writeHead(200, {
    "test-Cookie": "mycookie=test",
  });*/
  console.log("브라우저에 데이터 저장을 위한 준비 완료");
  console.log("Steam login app listening on port 4000! Go to 4000/");
});

// https
//   .createServer(function (req, res) {
//     res.writeHead(200, {
//       "test-Cookie": "mycookie=test",
//     });
//     console.log("브라우저에 데이터 저장을 위한 준비 완료");
//   })
//   .listen(4000);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
