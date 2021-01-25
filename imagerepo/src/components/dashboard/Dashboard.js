import React, { Component } from 'react'
import ImageList from '../images/ImageList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const { images, auth } = this.props; //destructure

        if(!auth.uid) return <Redirect to="/signin" />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <ImageList images={images}></ImageList>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        images: state.firestore.ordered.images,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'images'} //this component now listens to the images collection, on change fires the action to the firebaseReducer in order to sink local store with firebase
    ])
)(Dashboard)