import React,{Component} from 'react'
export default class DisplayerComponent extends Component {
    shouldComponentUpdate(props,state) {
        return props.value %3 == 0
    }
    constructor(props) {
        super(props)
        this.value = 0
    }
    componentWillReceiveProps(props,state) {
        this.value = props.value * 10
    }
    render() {
        return <div>{this.value}</div>
    }
}
