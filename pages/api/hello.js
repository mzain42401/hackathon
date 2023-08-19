import path, { join } from "path";
import { allData, checkEmail, saveData } from "./services/helperfunction";
import fs from 'fs'
const mypath=path.join(process.cwd(),"pages","data","userData.json")

export default function handler(req, res) {
  const { firstName, lastName, email, password } = req.body
  if (req.method === "POST") {

    
    
    const valisdEmail = checkEmail(email)
    if (valisdEmail === undefined) {
      
      saveData(firstName, lastName, email, password)
      
      res.status(200).send()

    }
    else {
      res.status(401).json({ error: "email already exit" })


    }


  }
  

  // res.status(200).json({ name: 'John Doe' })
}
