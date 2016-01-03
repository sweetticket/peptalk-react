LandingNav = React.createClass({

  // mixins: [ReactMeteorData],
  // getMeteorData: function() {
  //   return {
  //     signedInAs: Meteor.userId(),
  //   };
  // },

  signOut: function(e) {
    e.preventDefault();
    Meteor.logout(function(err) {
      if (err) {
        console.log("failed to logout");
      } else {
        FlowRouter.go('/');
      }
    });
  },

  toSignUp: function(e) {
    e.preventDefault();
    if ($(e.target).hasClass('signup-instructor-nav')) {
      FlowRouter.go("/signup/instructor");
    } else if ($(e.target).hasClass('signup-student-nav')) {
      FlowRouter.go("/signup/student");
    }
  },
	
  render: function() {
    var navButtons;
    if (this.props.navMode === "signUp") {
      navButtons = (<li>
                    <button type="button" className="btn btn-default navbar-btn signin-btn" data-toggle="modal" data-target="#signInModal">
                      Sign In
                    </button>
                </li>);
    } else {
      if (this.props.navMode === "home") {
        navButtons = (<span><li className="dropdown signup-btn">
                    <button type="button" className="btn btn-default navbar-btn signup-btn dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign Up</button>
                    <ul className="dropdown-menu" onClick={this.toSignUp}>
                      <li><a href="#" className="signup-instructor-nav">As Instructor</a></li>
                      <li><a href="#" className="signup-student-nav">As Student</a></li>
                    </ul>
                  </li>
                  <li className="signin-btn">
                    <button type="button" className="btn btn-default navbar-btn signin-btn" data-toggle="modal" data-target="#signInModal">
                      Sign In
                    </button>
                  </li>
                </span>);
      } else {
        navButtons = (<li><button onClick={this.signOut} type="button" className="btn btn-default navbar-btn signout-btn">Sign Out</button></li>);
      }
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">PEPTALK</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            {navButtons}
            </ul>
          </div>{/*.navbar-collapse*/}
        </div>{/*.container-fluid*/}
      </nav>
      );
  }
});