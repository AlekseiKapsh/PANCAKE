const app = require ('./app')
const port = process.env.PORT || 3000

// app.get('/', function (req, res){
//     res.status(200).json({
//         message: 'Working'
//     })
// })


app.listen (3000, function (){
    console.log ('server has been started')
})

