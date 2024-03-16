import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Ungültige E-Mail-Adresse"
    }),
    password: z.string().min(1, {
        message: "Passwort wird benötigt"
    })
})


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Ungültige E-Mail-Adresse"
    }),
    password: z.string().min(6, {
        message: "Mindestens 6 Zeichen"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
})