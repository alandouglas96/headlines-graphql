

module.exports = function (app, passport) {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      console.log('auth/google/callback', req.user)
      res.redirect('http://localhost:3000');
    });

}
