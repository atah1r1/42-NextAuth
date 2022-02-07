import NextAuth from "next-auth"
import FortyTwoProvider from "next-auth/providers/42-school";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        FortyTwoProvider({
            clientId: process.env.FORTY_TWO_CLIENT_ID,
            clientSecret: process.env.FORTY_TWO_CLIENT_SECRET,

        })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
    },
})