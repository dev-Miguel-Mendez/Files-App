import {z} from 'zod'

export const registerRequestSchema = z.object({
    body: z.object({
        email: z.string().nonempty().email(),
        password: z.string().nonempty()
    })
})


export type RegisterRequestBody = z.infer<typeof registerRequestSchema>['body']