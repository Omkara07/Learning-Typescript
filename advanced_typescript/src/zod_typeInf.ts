import express from "express";
import {z} from "zod";

const app = express()

const userProfileSchema = z.object({
    name: z.string().min(1,{message:"Name cannot be empty"}),
    email: z.string().email({message:"Invalid email format"}),
    age: z.number().min(18,{message:"You must be 18 years old"}).optional()  
})

// infer gives the type of the zod schema (exported to be used on the frontend)
export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.get("/user", (req,res)=>{
    const result = userProfileSchema.safeParse(req.body);

    if(!result.success){
        res.status(400).json({
            error: result.error
        })
        return 
    }

    // what will be the type of updatedBody (also the type will be automatically infered)
    const updatedBody: FinalUserSchema = result.data;

    res.json({
        message: "User Udpated",
        updatedBody
    })

})

app.listen(300)