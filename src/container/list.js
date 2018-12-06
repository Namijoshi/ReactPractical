import React, { Component } from 'react'
import Input from '../component/input';
import Button from '../component/button'
import CheckBox from '../component/checkbox'
import '../App.css';
import {connect} from 'react-redux'
import {createTodo, checkedTodo, uncheckedTodo, allTodo} from '../actions/postAction'


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listData: [],
            item: '',
            test: {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.checkedd = this.checkedd.bind(this);
        this.notcheckedd = this.notcheckedd.bind(this);
        this.allcheck = this.allcheck.bind(this);
    }

   

    handleClick(e) {
        e.preventDefault();
        let obj = { item: this.state.item, isChecked: false };
        if (obj.item == "") {alert("please enter task") }
        else {
            this.state.lists.push(obj)
            let list = this.props.posts.items;
            list.push(obj);
            // ////////console.log("list===============>",list)
            this.setState({ item: '' });
            this.props.createTodo(list);
        }
    }
    handlechange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCheckBox(e, index) {
        const { lists } = this.state;
        lists[index].isChecked = e.target.checked;
        this.setState({ lists, listData: lists });
    }

    checkedd(e) {
        this.props.checkedTodo(this.props.posts);
        this.setState({ lists: this.props.post2});
       
    }

    notcheckedd(e) {
        this.setState({ lists: this.props.post2});
        this.props.uncheckedTodo(this.props.posts);
        

    }
    allcheck(e){
        this.props.allTodo(this.props.posts.items);
    }

    render() {
        console.log("this.state.lists", this.state.lists);
        console.log("this.props.post2", this.props.post2);
        return (
            <body>
                <div>
                    <div>

                        <Input
                            type="text"
                            name="item"
                            value={this.state.item}
                            onChange={this.handlechange}
                        />
                        <Button
                            name="Add"
                            type="primary"
                            onClick={this.handleClick}
                        />
                    </div>
                    {/* <div><label>TODO list</label></div> */}
                    <div>
                        <CheckBox title={'lists'}
                            name={'lists'}
                            options={this.props.post2.items}
                            // options={this.state.lists}
                            handleChange={this.handleCheckBox}
                        />
                    </div>
                    <div></div>
                    <div>
                        <Button
                            name="All"
                            type="primary"
                            onClick={this.allcheck}
                        />
                        <Button
                            name="Checked"
                            type="primary"
                            onClick={this.checkedd}
                        />
                        <Button
                            name="Unchecked"
                            type="primary"
                            onClick={this.notcheckedd}
                        />
                    </div>
                </div>
            </body>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {
        posts: state.posts,
        post2: state.post2
    }
}


export default connect(mapStateToProps, {createTodo,checkedTodo,uncheckedTodo,allTodo})(List);