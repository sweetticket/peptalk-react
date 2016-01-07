FlowRouter.route('/', {
  subscriptions: function() {
    // var selector = {category: {$ne: "private"}};
    this.register('allUsers', Meteor.subscribe('allUsers'));
  },
  action: function() {
    ReactLayout.render(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/signup/:mode', {
  subscriptions: function() {
    this.register('allUsers', Meteor.subscribe('allUsers'));
  },
  action: function (params, queryParams) {
    ReactLayout.render(App, {
      content: <SignUp mode={params.mode}/>
    });
  }
});

FlowRouter.route('/new', {
  subscriptions: function() {
    this.register('userInfo', Meteor.subscribe('userInfo'));
  },
  action: function() {
    ReactLayout.render(App, {
      content: <NewClass />
    });
  }
});

// FlowRouter.route('/add', {
//   action: function() {
//     ReactLayout.render(App, {
//       content: <AddClass />
//     });
//   }
// });

// FlowRouter.route('/post/:_id', {
//   name: 'post',
//   subscriptions: function(params) {
//     this.register('singlePost', Meteor.subscribe('singlePost', params._id));
//   },
//   action: function(params) {
//     ReactLayout.render(BlogLayout, {
//       content: <PostPage _id={params._id} />
//     });
//   }
// });