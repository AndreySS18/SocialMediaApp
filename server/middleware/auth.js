import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    if (!decodedData) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error during authentication" });
  }
};

export default auth;
