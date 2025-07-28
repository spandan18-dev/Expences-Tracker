import expences from '../model/exp.model.js'

const home = async (req,res)=>{
    const exp = await expences.find().sort({time:-1})
    res.render("home",{exp})
}

const addexp = async (req,res)=>{
    const {expence , amount}= req.body
    const newexp = new expences ({
        expence : expence,
        amount:amount
    })

    await newexp.save()
    res.redirect("/")
}

export {home,
    addexp
}