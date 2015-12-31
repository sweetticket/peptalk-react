MainLayout = React.createClass({
  updateSignedInAs: function() {
    this.setState({"signedInAs": Meteor.userId()});
  },

  getInitialState : function() {
    return {
      signedInAs : Meteor.userId(),
    };
  },


	render: function() {
		return (
      <div>
    		<header>
        {/*header goes here*/}
        </header>
        <SignInModal />
        <LandingNav signedInAs={this.state.signedInAs} />
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
			
			);
	}
});