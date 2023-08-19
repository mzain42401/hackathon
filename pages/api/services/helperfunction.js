import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcrypt'

const allBlogPath=path.join(process.cwd(),"pages","data","blogData.json")
const userPath=path.join(process.cwd(),"pages","data","userdata.json")


export const allData=()=>{
    const data= fs.readFileSync(userPath)
    return JSON.parse(data)
}

export const checkEmail=(email)=>{
    const data=allData()
  return  data.find((element)=>{
return element.email===email
    })
}


export const checkPassword=async(hashPassword,password)=>{
    const data=await compare(password,hashPassword)
    return data
   }




export const saveData=async(firstName,lastName,email,password)=>{
    const hashpassword= await hash(password,8)
    const data=allData()

    data.push({
        firstName,lastName,email,password:hashpassword,blogs: []
    })
    fs.writeFileSync(userPath,JSON.stringify(data))
   

    
}
export const saveBlog=(title,description,email)=>{
    const data=allData()
   const user= data.find((element)=>{
        return element.email===email
            })
           
            
    user.blogs.push({title,description})
    fs.writeFileSync(userPath,JSON.stringify([user]))

}

export const allMyblog=(email)=>{
    
    const data=allData()
    const user= data.find((element)=>{
        return element.email===email
            })
   return user.blogs
   

    
}


export const saveAllBlog=(title,description)=>{
    const data=allBlog()
    data.push({
        title,description
    })
    fs.writeFileSync(allBlogPath,JSON.stringify(data))
   

    
}



export const allBlog=()=>{
    
    const data= fs.readFileSync(allBlogPath)
   return JSON.parse(data)
}





