const path =  require('path')
const Projects = require(path.join(process.cwd() + '/models' + '/projects'))

module.exports = {
    getInProgress: async (req,res) =>{
        try{
            const project = await Projects.find({userId: req.user.id, category: "personal", state:"in progress"})
            res.render('sections/projects',{
                title: 'In progress', project: project , user:req.user.id })
            } catch(err){
            console.log(err)
        }
    }
}