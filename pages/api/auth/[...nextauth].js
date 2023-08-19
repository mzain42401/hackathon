import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { checkEmail ,checkPassword} from "../services/helperfunction";

export const authOptions = {
    secret:process.env.NEXTAUTH_SECRET,
    session:{
            jwt:true
        },
  providers: [
    CredentialsProvider({
        
        async authorize({email,password}) {
            const user=checkEmail(email)
            if (user===undefined) {
                throw new Error("user not found")
            }
         const isPassword=  await checkPassword(user.password,password)
         if (!isPassword) {
            throw new Error("wrong password")
         }
    
    return{email}


        }
    }),
  ],
}

export default NextAuth(authOptions)