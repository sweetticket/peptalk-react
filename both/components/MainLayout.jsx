MainLayout = React.createClass({

	render() {
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