import {connect} from "react-redux";
import {Login} from "./_login";
import {loginActions} from "../../actions";

const mapDispatchToProps = dispatch => (
  {
    login: (email, password) => {dispatch(loginActions.login(email, password))},
    signup: (email, password) => {dispatch(loginActions.signup(email, password))},
  }
);

const mapStateToProps = (state) => ({auth:state.auth});

export default connect(mapStateToProps, mapDispatchToProps)(Login);