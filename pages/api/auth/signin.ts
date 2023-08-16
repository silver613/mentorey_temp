import { NextApiRequest, NextApiResponse } from "next";
import createConnection from "~/database/db";
import { RowDataPacket } from "mysql2/promise";
import bcrypt from "bcrypt";

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const dbConnect = await createConnection();
      const query = "SELECT * FROM users WHERE email = ?";
      const params = [email];
      const [results] = (await dbConnect.execute(
        query,
        params
      )) as RowDataPacket[];
      if (results.length === 0) {
        return res.status(400).json({ message: "EMAIL_NOT_FOUND" });
      } else {
        const getUser = results[0];
        // check if password is correct
        const re = await bcrypt.compare(password, getUser.password);
        re
          ? res.status(200).json({ user: getUser })
          : res.status(200).json({ message: "INVALID_PASSWORD" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default verifyHandler;
