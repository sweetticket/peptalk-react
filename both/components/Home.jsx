Home = React.createClass({

	toSignUp: function(e, mode) {
		e.preventDefault();
		Session.set("signUpMode", mode);
    	FlowRouter.go("/signup");
	},

	render: function() {
		Session.set("signUpMode", undefined);
		return (
			<div>
				<LandingNav />
				<div className="container-fluid">
				  <div className="row intro">
				    <img className="derpkid" src="/derpkid_icon.png" />
				    <h2>This is derpkid. He will be our placeholder for now.</h2>
				  </div>
				  <div className="row">
				    <div className="col-md-12">
				      <div className="button-container">
				        <button onClick={this.toSignUp.bind(null, "instructor")} className="btn btn-default signup-instructor">Instructors Get Started</button>
				        <button onClick={this.toSignUp.bind(null, "student")} className="btn btn-default signup-student">Students Get Started</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			);
	}
});