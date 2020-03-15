import React, {Component} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AuthUtils from "./utils/authUtils";
import {NavBar, ScrollToTop} from "./components/common";
import LoginContainer from "./views/login/LoginContainer";

export const AppRoutes = {
  index: "/",
  login: "/login",
  profile: "/profile",
  public_profile: "/u/:username",
  settings: "/profile/settings",
  blog: {
    index: "/blog",
    detail: "/blog/:blogId",
    my_blog: "/my-blog",
    composer: "/my-blog/compose/:blogId",
  },
  project: {
    index: "/project",
  },
  warehouse: {
    index: "/warehouse",
  }
};

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={
      props => {
        if (!AuthUtils.getAccessToken()) {
          return (<Redirect to={{pathname: AppRoutes.login, state: {from: props.location}}}/>);
        }
        return <Component {...props} />;
      }
    }
  />
);

export default class Routes extends Component{
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.login} component={props =><LoginContainer {...props}/>}/>
          <>
            <NavBar/>
            <>
              {/*<Route exact path={AppRoutes.index} component={props => <Index {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.profile} component={props => <Profile {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.public_profile} component={props => <PublicProfile {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.blog.index} component={props => <BlogIndex {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.blog.detail} component={props => <BlogDetail {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.project.index} component={props => <ProjectIndex {...props}/>}/>*/}
              {/*<Route exact path={AppRoutes.warehouse.index} component={props => <WarehouseIndex {...props}/>}/>*/}
              {/*<ProtectedRoute exact path={AppRoutes.blog.my_blog} component={props =><MyBlog {...props}/>}/>*/}
              {/*<ProtectedRoute exact path={AppRoutes.blog.composer} component={props =><Composer {...props}/>}/>*/}
              {/*<ProtectedRoute exact path={AppRoutes.settings} component={props =><Settings {...props}/>}/>*/}
            </>
            <ScrollToTop/>
          </>
        </Switch>
      </BrowserRouter>
    )
  }
};