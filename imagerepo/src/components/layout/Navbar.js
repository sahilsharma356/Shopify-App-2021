import React from 'react';
import { Link } from 'react-router-dom';
import SignedInButtons from './SignedInButtons';
import SignedOutButtons from './SignedOutButtons';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props 

    const links = auth.uid ? <SignedInButtons profile={profile}></SignedInButtons> : <SignedOutButtons></SignedOutButtons>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Image Repository</Link>
                {links}
        
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar); 