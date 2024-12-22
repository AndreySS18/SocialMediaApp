import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Проверка на наличие заголовка Authorization
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    const token = authHeader.split(" ")[1]; // Получаем токен из заголовка
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    // Проверяем, является ли это кастомным токеном или токеном от сторонней службы (например, Firebase)
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {      
      // Проверка кастомного JWT
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      // Декодируем токен, если это сторонний токен
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    // Если данных не было получено из токена
    if (!decodedData) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Если все в порядке, передаем управление следующему middleware
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error during authentication" });
  }
};

export default auth;
