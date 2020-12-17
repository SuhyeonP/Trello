import passport from 'passport';

const passportConfig = models => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await models.user.findByPk(id);
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });
};
export default passportConfig;
