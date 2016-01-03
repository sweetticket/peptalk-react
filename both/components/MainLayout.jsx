MainLayout = React.createClass({
  // updateSignedInAs: function() {
  //   var items = this.state.items;
  //   items.signedInAs = Meteor.userId();
  //   this.setState({items:items});
  // },

  // getInitialState : function() {
  //   var items = {
  //     signedInAs : Meteor.userId(),
  //     signUpMode : Session.get("signUpMode")
  //   };
  //   return { items : items };
  // },


	render: function() {
		return (
      <div>
    		<header>
        {/*header goes here*/}
        </header>
        <SignInModal />
        <LandingNav />
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
			
			);
	}
});