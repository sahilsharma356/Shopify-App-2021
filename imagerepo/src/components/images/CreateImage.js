import React, { Component } from 'react'
import { createImage } from "../../store/actions/imageActions"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateImage extends Component {
    state = {
        title: "",
        image: null
    }

    handleChange = (e) => {
        if (e.target.id === 'title'){
            this.setState({
                title: e.target.value
            })
        } 
        
        if (e.target.id === 'image'){
            this.setState({
                image: e.target.files[0]
            })
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("outputting state")
        console.log(this.state)
        this.props.createImage(this.state)

        this.props.history.push("/")
    }

    render() {
        const { auth } = this.props;

        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Add a new Image</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <input type="file" id="image" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn orange lighten-1 z-depth-0">ADD</button>
                        </div>      
                    </form>    
                </div>            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth 
    }
}

const mapDispatchToProps = (dispatch) => { //makes function createImage available from within props, can pass the image via dispatch
    return {
        createImage: (image) => dispatch(createImage(image))
    }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(CreateImage)
