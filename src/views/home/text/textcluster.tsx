import * as React from 'react';
import { inject, observer } from 'mobx-react'
interface  Props{
  question:any,
  result:any
}
@inject('question')
@observer
class Textcluster extends  React.Component<Props> {
   constructor(props:any){
     super (props)
      this.getList()
  }
  public getList=async ()=>{
    const { getQuestion } = this.props.question
    getQuestion() 
    const result=await this.props.question.getQuestion() 
    console.log(result)
  }
 public render() {
   this.getList()

    return (
      <div className="box">
        <h2>试题分类</h2>
       {/* {result.length&&result.map((item:any,index:number)=><ul key={index}>
         <li>{item.questions_type_text}</li>
         <li>1</li>
         <li>2</li>
       </ul>)} */}
        
        </div>
    );
  }
}
export default Textcluster