import * as React from 'react';
import { inject, observer } from 'mobx-react'
interface Props {
  allquestion: any,
  result: any
}
@inject('allquestion')
@observer
class Looktext extends React.Component<Props>{
  constructor(props: any) {
    super(props)
    this.getList()
  }
  public getList = async () => {
    const { getAllQuestion } = this.props.allquestion
    getAllQuestion()
    const result = await this.props.allquestion.getAllQuestion()
    console.log(result)
  }
  public render() {
    return (
      <div className="box">
        this is Looktext page
        </div>
    );
  }
}
export default Looktext