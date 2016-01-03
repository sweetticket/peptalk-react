MainLayout = React.createClass({
  // updateSignedInAs: function() {
  //   var items = this.state.items;
  //   items.signedInAs = Meteor.userId();
  //   this.setState({items:items});
  // },

  // getInitialState : function() {
  //   var items = {
  //     signUpMode : null
  //   };
  //   return { items : items };
  // },

  // mixins: [ReactMeteorData],
  // getMeteorData: function() {
  //   return {
  //     signedInAs: Meteor.userId(),
  //   };
  // },


	render: function() {
		return (
      <div>
    		<header>
        {/*header goes here*/}
        </header>
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
			
			);
	}
});