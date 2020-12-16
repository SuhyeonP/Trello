import passport from 'passport';
import local from './local.js';
import createUserInstance from '../model/user.js';

const passportConfig = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await createUserInstance.findOne({ where: { id } });
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });
  local();
};
export default passportConfig;
