import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/UserModel";

interface tokenInterface {
   _id: string;
}

const secret: any = process.env.JWT_SECRET;

export const createToken = (id: tokenInterface) => {
   return jwt.sign({ id }, secret, {
      expiresIn: 3 * 24 * 60 * 60,
   });
};

export const LoginHelper = async (email: string, password: string) => {
   const user: any = await User.findOne({ email });
   if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
         return user;
      }
      throw Error("Incorrect Password");
   }
   throw Error("Incorrect email");
};
