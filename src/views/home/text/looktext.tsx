import * as React from 'react';
import { inject, observer } from 'mobx-react'
import './look.css'
import { Button ,Select} from 'antd'
const { Option } = Select;

interface Props {
  allquestion: any,
  subject: any,
  result: any
}
@inject('allquestion', 'subject')
@observer

class Looktext extends React.Component<Props>{
  constructor(props: any) {
    super(props)
    this.getList()
  }
  public getList = async () => {
    const { getAllQuestion } = this.props.allquestion
    const { getSubject } = this.props.subject
    getAllQuestion()
    getSubject()
    const result = await this.props.allquestion.getAllQuestion()
    const subresult = await this.props.subject.getSubject()
    console.log(subresult)
    this.setState({
      list: result
    })
  }
  public state = {
    list: []
  }

  public render() {
    const { list } = this.state
    return (
      <div className="box">
        this is Looktext page
        <h2>查看试题</h2>

        <div className="top_content">
        课程类型:<span>All</span><span>javaScript下</span><span>模块化开发</span><span>移动端开发</span><span>node基础</span>
            <span>组件化开发(vue)</span><span>组件化开发(react)</span><span>项目实战</span><span>javaScript高级</span><span>node高级</span>
            <div className="m-input">
            <span>
              考试类型:
              <Select defaultValue="" style={{ width: 200 }} >
                  <Option value="周考一">周考一</Option>
                  <Option value="周考二">周考二</Option>
                  <Option value="周考三">周考三</Option>
                  <Option value="月考">月考</Option>


              </Select>
            </span>
            <span>
              题目类型:
              <Select defaultValue="" style={{ width: 200 }}>
                  <Option value="简答题">简答题</Option>
                  <Option value="代码阅读题">代码阅读题</Option>
                  <Option value="代码补全题">代码补全题</Option>
                  <Option value="修改bug">修改bug</Option>
                  <Option value="手写代码">手写代码</Option>
              </Select>
              </span>  
              <span><Button>查询</Button></span>
          </div>
          </div>
      
        <div className="bottom_con">
          <div className="bottom_content">
            {list.length && list.map((item: any, index: number) => <div className="dev" key={index}>
              <div className="dev_left">
                <p className="dev_title">{item.title}</p>
                <ul>
                  <Button>{item.questions_type_tex}</Button>
                  <Button>{item.subject_text}</Button>
                  <Button>{item.exam_name}</Button>
                </ul>
                <p className="dev_name"> <a href="">{item.user_name}发布</a></p>

              </div>
              <div className="dev_right">
                <a href="">编辑</a>
              </div>

            </div>)}
          </div>

        </div>

      </div>
    );
  }
}
export default Looktext