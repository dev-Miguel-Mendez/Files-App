import {z} from 'zod'

export const registerRequestSchema = z.object({
    body: z.object({
        email: z.string().nonempty(),
        password: z.string().nonempty().email()
    })
})