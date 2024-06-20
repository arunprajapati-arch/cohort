const express = require("express");
const router = express.Router();
const zod = require("zod");
const {User} = require("../db")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {authMiddleware} = require("../middleware")

const signupBody = zod.object({
    usesrname: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async(req,res) => {
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const userExists = await User.findOne({
        username: req.body.username
    })
    if(userExists){
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        usesrname: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: Math.floor(Math.random() * 1000) + 1,
    })

    const token = jwt.sign({
        userId: user._id
    },JWT_SECRET)

    res.json({
        msg: "Signed Up successfully",
        token
    })
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async(req,res) => {
const {success} = signinBody.safeParse(req.body);
if(!success){
    return res.status(411).json({
        msg: "Error while logging in"
    })
}
const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
})

if(user){

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    return res.json({
        token
    });

}

    res.status(411).json({
        msg: "error while logging in"
    })
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/",authMiddleware, async(req,res) => {
    const {success}  = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg: "Error while updating"
        })
    }
    const updatedUser = await User.updateOne({_id: req.userId},req.body)
    res.json({
        msg: "Updated successfully"
    })
})

router.get("/bulk", authMiddleware, async(req,res) => {
    const filter = req.query.filter || "";
    const users = await User.findOne({
        $or: [{
            firstName: {
                "$regex": filter
            }
        },{
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName, 
            _id: user._id
        }))
    })
});



module.exports = router;        