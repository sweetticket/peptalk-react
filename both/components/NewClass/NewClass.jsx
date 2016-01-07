NewClass = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      currentUser: Meteor.user()
    };
  },

	componentDidMount: function() {
		// debugger
		if (!this.data.currentUser) {
			FlowRouter.go('/');
		} else {
			if (this.data.currentUser.role != 'instructor') {
				FlowRouter.go('/');
			}
		}
	},

  componentWillUnmount: function() {
  	// $('.button-container').unbind();
  },

	render: function() {
		return (
			<div>
			<SignInModal />
			<LandingNav navMode="signUp"/>
			<div className="container-fluid">
			    <div className="row">
			      <div className="col-md-12">
			      	<h2>Create a Class</h2>
			      	<p>Start by creating your first class.</p>
			        <form className="new-class-form">
			          <div className="form-group has-error">
			            <span id="incomplete" className="help-block hide">Please fill out all fields</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="title">Class title</label>
			            <input type="text" className="form-control" name="title" id="title" />
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="code">Class code (eg. CS4700)</label>
			            <input type="text" className="form-control" name="code" id="code" />
			            <span id="duplicate-class" className="help-block hide">A class with that code already exists</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="self-enroll">Enable self-enrollment</label>
					        <input type="checkbox" className="form-control" name="self-enroll" id="self-enroll" />
			          </div>
			          <div className="form-group">
			          	<label className="control-label" htmlFor="password">Enroll students by email (separate emails with commas)</label>
			            <textarea className="form-control" name="enrolled-students" id="enrolled-students"></textarea>
			          </div>
			          <div className="signup-submit">
			            <button type="submit" className="btn btn-default">Sign Up</button>
			          </div>
			        </form>
			        
			      </div>
			    </div>
			  </div>
			  </div>
			);
	}
});