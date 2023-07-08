import mongoose from "mongoose"

const connection = async() => {
    try{
        await mongoose.connect('mongodb+srv://kunaljha2214:kunal2214@cluster0.t4lllyz.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true})
        console.log('db connected')
    }catch(error){
        console.error('Error while connecting database', error.message)
    }
}
export default connection