import jwt from "jsonwebtoken";

export default async function generateToken(req, res) {
  try {
    let user = req.body;
    const payload = {
      email: user.email,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECERT_KEY, {
      expiresIn: "1h",
    });
    res.send({
      token,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
}
