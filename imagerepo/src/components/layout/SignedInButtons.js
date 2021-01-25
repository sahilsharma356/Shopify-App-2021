import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const SignedInButtons = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/create"><div><AddAPhotoIcon fontSize="small"></AddAPhotoIcon> Add New Image</div></NavLink></li>
            <li> <a onClick={props.signOut}><NavLink to="/">Logout</NavLink></a></li>
            <li><NavLink to="/" className="btn btn-floating orange lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInButtons); 