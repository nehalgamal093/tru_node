import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const token = req.header('token');
  jwt.verify(token, "NehalGamal", (err, decoded) => {
    if (err) return res.json(err);
    req.userId = decoded.user._id;
    next();
  });
};
