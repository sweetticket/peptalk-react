SignInModal = React.createClass({

	attemptSignIn: function(e) {
		e.preventDefault();
		$('.help-block').addClass('hide');
		var email = $('#signin-email').val().trim();
		var password = $('#signin-password').val();
		if (email.length === 0 || password.length === 0) {
			$('#signin-incomplete').removeClass("hide");
		} else {
			Meteor.loginWithPassword(email, password, function (err) {
	      if (err) {
	        console.log(err);
	        if (err.reason === "Incorrect password") {
	          $('#signin-incorrect-pw').removeClass('hide');
	        } else if (err.reason === "User not found") {
	          $('#signin-not-registered').removeClass('hide');
	        }
	      } else {
	      	console.log('Login sucess!');
	      	// if student: if is in a class, go to a class page. else, go to class search
	      	// if professor: if has a class, go to a class page, else, go to create new class
	      }
	    });
		}
	},

	componentDidMount: function() {
    // $('.signin-submit button').click(this.attemptSignIn);
  },

  componentWillUnmount: function() {
    // $('.signin-submit button').unbind();
  },

	render: function() {
		return (
			<div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="signInModelLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="signInModelLabel">Sign In</h4>
			      </div>
			      <div className="modal-body">
			        <form className="signup-form">
			          <div className="form-group has-error">
				          <span id="signin-incomplete" className="help-block hide">Please fill out all fields.</span>
				          <span id="signin-incorrect-pw" className="help-block hide">Incorrect password.</span>
				          <span id="signin-not-registered" className="help-block hide">Email not registered.</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="signin-email">Email</label>
			            <input type="email" className="form-control" name="signin-email" id="signin-email" />
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="signin-password">Password</label>
			            <input type="password" className="form-control" name="signin-password" id="signin-password" />
			          </div>
			         </form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="cancel btn btn-default" data-dismiss="modal">Cancel</button>
			        <button type="button" onClick={this.attemptSignIn} className="signin-submit btn btn-primary">Sign In</button>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});