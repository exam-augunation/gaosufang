    
import User from './moudles/user'
import Question from './moudles/question'
import Allquestion from './moudles/allquestion'
import Subject from './moudles/subject'
const user =new User()
const question= new Question()
const allquestion =new Allquestion()
const subject=new Subject()
export default {
    user,
    question,
    allquestion,
    subject
}