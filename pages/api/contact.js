import connectToMongo from "../../apidata/db";
import Contact from "../../apidata/models/contactmodel";

export default async function handler(req, res) {
    connectToMongo();
  if (req.method === "POST") {
    
    // res.send(["Hello"]);

    const { lastname, firstname, email, phone, subject, message } = req.body;
    const contact = await Contact.create({
      lastname,
      firstname,
      email,
      phone,
      subject,
      message,
    });
    let success= true;
    res.send({contact,success});
  } else {
  }
}
