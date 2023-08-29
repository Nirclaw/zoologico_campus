import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { ValidarToken } from "./jwt.js";

passport.use(
  new BearerStrategy({ passReqToCallback: true }, async (req, token, done) => {
    const usuario = await ValidarToken(req, token);
    if (!usuario) return done(null, false);
    return done(null, usuario);
  })
);
export default passport;
