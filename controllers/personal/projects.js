const path =  require('path')
const Projects = require(path.join(process.cwd() + '/models' + '/projects'))
const Subtask = require(path.join(process.cwd() + '/models' + '/subTasks'))

module.exports = {
    getInProgress: async (req,res) =>{
        try{
            const project = await Projects.find({userId: req.user.id, category: "personal", state:"in progress"})
            res.render('sections/projects',{
                title: 'personal', project: project , user:req.user.id })
            } catch(err){
            console.log(err)
        }
    },
    postProject: async (req,res) =>{
        try{
           // await SubTask.create({})
            await Projects.create({
                category: 'personal',
                state: 'planned',
                name: req.body.name,
                description: req.body.desc,
                userId: req.user.id,
                process: 0
                //tasksId://array of id of the tasks created,
            })
            console.log("Project has been added!");
            res.render('sections/projects/planned')
            } catch(err){
            console.log(err)
        }
    },
    getPlanned: async (req,res) =>{
        try{
            const project = await Projects.find({userId: req.user.id, category:"personal",  state:"planned"})
            console.log(project)
            res.render('sections/projects',{
                title: 'personal', project: project , user:req.user.id })
            } catch(err){
            console.log(err)
        }
    },
}