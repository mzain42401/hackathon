import { allBlog, allMyblog } from "./services/helperfunction";

export default function handler(req, res) {
const {email}=req.body
    if (req.method==="POST") {
      
        const data=allMyblog(email)
      res.status(200).json(data)

    }
    if (req.method==="GET") {
      const data=allBlog()
      res.status(200).json(data)
    }
}