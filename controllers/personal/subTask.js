const path =  require('path')
const Projects = require('../../models/projects')
const Subtask = require('../../models/subTasks')

module.exports = {
    getAddTask: async (req,res) =>{
        const cat = req.originalUrl.split("/")[1]
        try{ 
            const project = await Projects.findById(req.params.id)
            res.render('sections/addTask',{
            title: `${cat}`, project: project , user:req.user.id })
            } catch(err){
            console.log(err)
        }
    },
    updateAndAddTask: async (req,res) =>{
        const cat = req.originalUrl.split("/")[1]
        try{ 
            let taskId = await Subtask.create({
                completed: false,
                name: req.body.name,
                description: req.body.desc,
                userId: req.user.id,
                projectId: req.params.id
            })
            await Projects.findOneAndUpdate(
                { _id: req.params.id },
                {$push: {tasksId: taskId._id} },
                )
                console.log('Task has been added to project!')
                res.redirect(`/${cat}/projects/planned`)
            } catch(err){
            console.log(err)
        }
    }
}
