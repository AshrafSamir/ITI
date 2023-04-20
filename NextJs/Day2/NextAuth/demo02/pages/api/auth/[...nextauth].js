import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
    providers : [
        GithubProvider({
             clientId : process.env.CLIENT_ID,
             clientSecret : process.env.CLIENT_SECRET
        })
    ],
    // database:'mongodb_url',
    // session:{
    //     jwt:true
    // },
    // jwt:{
    //     secret:'jdlkjc'
    // }
})