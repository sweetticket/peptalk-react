NewCourse = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData: function() {
  	var handle = Meteor.subscribe('userInfo');
  	return {
  		currentUser: Meteor.user(),
  		ready: handle.ready()
  	}
  },

	componentDidMount: function() {
		if (this.data.ready) {
			Utils.redirectStudents();
		}
	},

  componentWillUnmount: function() {
  	// $('.button-container').unbind();
  },

	render: function() {
		if (!this.data.ready) {
			return (<div className="loading">Loading...</div>);
		}
		return (
			<div>
			<SignInModal />
			<LandingNav navMode="signedIn"/>
			<div className="container-fluid">
			    <div className="row">
			      <div className="col-md-12">
			      	<h2>Create a Course</h2>
			      	<h4>Start by creating your first course.</h4>
			        <form className="new-course-form">
			          <div className="form-group has-error">
			            <span id="incomplete" className="help-block hide">Please fill out all fields</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="title">Course title</label>
			            <input type="text" className="form-control" name="title" id="title" />
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="code">Course code (eg. CS4700)</label>
			            <input type="text" className="form-control" name="code" id="code" />
			            <span id="duplicate-course" className="help-block hide">A course with that code already exists</span>
			          </div>
			          <div className="form-group">
			            <label className="checkbox-inline">
			            <input type="checkbox" id="self-enroll" name="self-enroll" value="1" />
			            Enable self-enrollment
			            </label>
			          </div>

			          <div className="form-group">
			          	<label className="control-label" htmlFor="enrolled-students">Enroll students by email (separate emails with commas)</label>
			            <textarea className="form-control" name="enrolled-students" id="enrolled-students"></textarea>
			          </div>
			          <div className="new-course-submit">
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