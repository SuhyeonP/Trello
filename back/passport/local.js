import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

function local(models) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'userPassword',
      },
      async (userId, userPassword, done) => {
        try {
          const existUser = await models.user.findOne({
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
}
export default local;
