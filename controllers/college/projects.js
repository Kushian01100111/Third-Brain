const path =  require('path')
const Projects = require(path.join(process.cwd() + '/models' + '/projects'))
const SubTask = require(path.join(process.cwd() + '/models' + '/subTasks'))

module.exports = {
    getInProgress: async (req,res) =>{
        try{
            const project = await Projects.find({userId: req.user.id, category: "college", state:"in progress"})
            res.render('sections/projects',{
                title: 'college', project: project , user:req.user.id })
            } catch(err){
            console.log(err)
        }
    },
    postProject: async (req,res) =>{
        try{
            console.log(req.body)
           // await SubTask.create({})
            await Projects.create({
                category: 'college',
                state: 'planned',
                name: req.body.name,
                description: req.body.desc,
                userId: req.user.id,
                //tasksId://array of id of the tasks created,
            })
            console.log("Project has been added!");
            //res.send(window.reload)
            } catch(err){
            console.log(err)
        }
    }
}