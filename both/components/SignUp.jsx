SignUp = React.createClass({

	_checkPasswordMatch: function() {
	  var password = $('#password').val();
	  var password2 = $('#password2').val();
	  if (!password2.length) {
	    $('#password').parent().removeClass('has-error');
	    $('#password2').parent().removeClass('has-error');
	    $('#password').parent().removeClass('has-success');
	    $('#password2').parent().removeClass('has-success');
	    $('#passwordHelpBlock').addClass('hide');
	    return false;
	  }
	  if (password != password2) {
	    $('#password2').parent().removeClass('has-success');
	    $('#password2').parent().removeClass('has-success');
	    $('#password').parent().addClass('has-error');
	    $('#password2').parent().addClass('has-error');
	    $('#passwordHelpBlock').removeClass('hide');
	    return false;
	  } else {
	    $('#password').parent().removeClass('has-error');
	    $('#password2').parent().removeClass('has-error');
	    $('#password').parent().addClass('has-success');
	    $('#password2').parent().addClass('has-success');
	    $('#passwordHelpBlock').addClass('hide');
	    return true;
	  }
	},

	_checkEmailValid: function() {
		var email = $('#email').val().trim();
		$('#blackListHelpBlock').addClass('hide');
		$('#emailExistsHelpBlock').addClass('hide');
		if (!email.length) {
		$('#email').parent().removeClass('has-error');
		$('#emailHelpBlock').addClass('hide');
		return false;
		} else if (!Utils.validateEmail(email)) {
		$('#email').parent().addClass('has-error');
		$('#emailHelpBlock').removeClass('hide');
		return false;
		} else {
		$('#email').parent().removeClass('has-error');
		$('#email').parent().addClass('has-success');
		$('#emailHelpBlock').addClass('hide');
		return true;
		}
	},

	attemptSignUp: function(e) {
		e.preventDefault();
		var email = $('#email').val().trim();
    var password = $('#password').val();
    var password2 = $('#password2').val();
    var fullname = $('#fullname').val().trim();

    if (!(fullname.length && email.length && password.length && password2.length)) {
      $('#incomplete').removeClass("hide");
      if (!email.length) {
        $('#email').parent().addClass('has-error');
      }
      if (!password.length) {
        $('#password').parent().addClass('has-error');
      }
      if(!password2.length) {
        $('#password2').parent().addClass('has-error');
      }
      if(!fullname.length) {
        $('#fullname').parent().addClass('has-error');
      }
    } else {
      $('#incomplete').addClass("hide");
      $('.has-error').removeClass('has-error');
      if (this._checkEmailValid() && this._checkPasswordMatch()) {
        console.log("all fields are valid..");
        // todo: send validation email

        Accounts.createUser({
          email: email.toLowerCase(),
          password: password,
          role: this.props.mode,
          fullname: fullname
        }, function (err) {
          if (err) {
            console.log("createUser failed", err);

            if (err.reason === "Email already exists.") {
             $('#emailExistsHelpBlock').removeClass('hide');
            } else if (err.reason === "BLACKLIST_DOMAIN") {
              $('#email').parent().addClass('has-success');
              $('#email').parent().addClass('has-error');
              $('#blackListHelpBlock').removeClass('hide');
            }
            return false;
          } else {
            var route;
            if (this.props.mode == "instructor") {
              route = '/new';
            } else {
              route = '/search';
            }
            FlowRouter.go(route);
          }
        
        // ga('send', 'event', 'user', 'signup', {
        //   email: Meteor.user().emails[0].address
        // });
      
        });
      }
    } 
	},

	renderSignUpMessage: function() {
		if (this.props.mode === "instructor") {
			return (<h2>Instructors Get Started</h2>);
		}
		return <h2>Students Get Started</h2>
	},

	componentDidMount: function() {
    $('.signup-submit button').click(this.attemptSignUp);
    $('#email').change(this._checkEmailValid);
    $('#password2').change(this._checkPasswordMatch);
  },

  componentWillUnmount: function() {
    $('.signup-submit button').unbind();
    $('#email').unbind();
    $('#password2').unbind();
  },

	render: function() {
		return (
			<div>
			<SignInModal />
			<LandingNav navMode="signUp"/>
			<div className="container-fluid">
			    <div className="row">
			      <div className="col-md-12">
			      	{this.renderSignUpMessage()}
			        <form className="signup-form">
			          <div className="form-group has-error">
			            <span id="incomplete" className="help-block hide">Please fill out all fields</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="fullname">Full name</label>
			            <input type="text" className="form-control" name="fullname" id="fullname" />
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="email">Your school email</label>
			            <input type="email" className="form-control" name="email" id="email" />
			            <span id="emailHelpBlock" className="help-block hide">Please enter a valid email</span>
			            <span id="blackListHelpBlock" className="help-block hide">You cannot use that domain. Please enter your school email.</span>
			            <span id="emailExistsHelpBlock" className="help-block hide">An account with that email already exists.</span>
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="password">Choose a password</label>
			            <input type="password" className="form-control" name="password" id="password" />
			          </div>
			          <div className="form-group">
			            <label className="control-label" htmlFor="password2">Confirm password</label>
			            <input type="password" className="form-control" name="password2" id="password2" />
			            <span id="passwordHelpBlock" className="help-block hide">Passwords do not match</span>
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