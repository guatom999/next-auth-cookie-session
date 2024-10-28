'use server'

import { getIronSession } from "iron-session"
import { sessionOptions , SessionData, defaultSession } from "./lib"
import { cookies } from "next/headers"
// import { redirect } from "next/dist/server/api-utils"
import { redirect } from 'next/navigation'
import { revalidatePath } from "next/cache"


let username = "boss"
let isPro = true

export const getSession = async() => {
 
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)

    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    session.isBlocked = true
    session.isPro = isPro

    return session

}
export const login = async(prevState:{error: undefined | string},formData: FormData) => {
    const session = await getSession()

    const formUsername = formData.get("username") as string
    // const formPassword = formData.get("password") as string

    // const user = await db.getUser()
    if (formUsername !== username) {
        return { error : "Wrong Credential"}
    }

    session.userId = "1";
    session.username = formUsername;
    session.isPro = isPro;
    session.isLoggedIn = true

    await session.save()
    redirect("/")
}
export const logout = async() => {
    const session = await getSession()
    session.destroy()
    redirect("/")
}

export const changePremium = async () => {
    const session = await getSession()

    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/profile")
}

export const updateUsername = async (formData: FormData) => {
    const session = await getSession()

    const newUsername = formData.get("username") as string

    username = newUsername
    session.username = username
    await session.save()
    revalidatePath("/profile")
}