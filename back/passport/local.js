import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import createUserInstance from '../model/user.js';

const local = () => {
  console.log('isti');
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'userPassword',
      },
      async (userId, userPassword, done) => {
        console.log('isti2', userId, userPassword);
        try {
          const existUser = await createUserInstance.findOne({
            where: {
              userId,
            },
          });
          if (!existUser) {
            return done(null, false, { reason: 'wrong Id' });
          }
          const result = await bcrypt.compare(
            userPassword,
            existUser.userPassword,
          );
          if (result) {
            return done(null, existUser);
          }
          return done(null, false, { reason: 'wrong password' });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      },
    ),
  );
};
export default local;
