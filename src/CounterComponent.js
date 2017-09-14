import React,{Component} from 'react'
import DisplayerComponent from './DisplayerComponent'
export default class CounterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {value:0}
    }
    componentDidMount() {
        setInterval(()=>{
            const value = this.state.value + 1
            this.setState({value})
        },1000)
    }
    render() {
        return (<div>
                  <DisplayerComponent value={this.state.value}/>
              </div>)
    }
}
