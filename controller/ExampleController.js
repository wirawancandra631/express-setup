

class ExampleController {
    static index(req,res,next){
        try{
           res.send("example controller")
        }
        catch(m){
            res.send(m)
        }
    }
}


module.exports=ExampleController