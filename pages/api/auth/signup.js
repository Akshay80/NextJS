const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function signup(req, res) {
    if(req.method === "POST")
    {
        const { firstname, lastname, email, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);

        const token = jwt.sign(
                      {
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: hashPassword
                      },
                      process.env.ACCESS_SECRET_KEY
                    );

           const userVerification = await jwt.verify(
          token,
          process.env.ACCESS_SECRET_KEY
        );
        const data = {
            success: true,
            message: "Signup Successful",
            firstname,
            lastname,
            email,
        }
    
        res.status(201).json({data: data})
    }
    else
    {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} is not allowed!` });
    }
}
