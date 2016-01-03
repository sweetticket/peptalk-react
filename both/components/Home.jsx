Home = React.createClass({

	// getInitialState : function() {
 //    var items = {
 //      signUpMode : null
 //    };
 //    return { items : items };
 //  },

 //  mixins: [ReactMeteorData],
 //  getMeteorData: function() {
 //    return {
 //      signedInAs: Meteor.userId(),
 //    };
 //  },

	toSignUp: function(e) {
    e.preventDefault();
    if ($(e.target).hasClass('signup-instructor')){
      FlowRouter.go("/signup/instructor");
    } else if ($(e.target).hasClass('signup-student')){
      FlowRouter.go("/signup/student");
    }
	},

	componentDidMount: function() {
    $('.button-container').click(this.toSignUp);
    // $('.button-container').click(function(e) {
    // 	this.toSignUp(e);
    // });
  },

  componentWillUnmount: function() {
  	$('.button-container').unbind();
  },

	render: function() {
		return (
			<div>
			<SignInModal />
      <LandingNav navMode="home"/>
				<div className="container-fluid">
				  <div className="row intro">
				    <img className="derpkid" src="/derpkid_icon.png" />
				    <h2>This is derpkid. He will be our placeholder for now.</h2>
				  </div>
				  <div className="row">
				    <div className="col-md-12">
				      <div className="button-container">
				        <button className="btn btn-default signup-instructor">Instructors Get Started</button>
				        <button className="btn btn-default signup-student">Students Get Started</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			);
	}
});