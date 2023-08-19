
import { allMyblog, saveAllBlog, saveBlog } from "./services/helperfunction"

export default function handler(req, res) {
 
    const {title,description,email}=req.body
 


    
    if (req.method==="POST") {
        saveBlog(title,description,email)
        saveAllBlog(title,description)
        res.status(200).send()
    }
   

}