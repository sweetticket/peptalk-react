Meteor.publish('userInfo', function() {
  if (!this.userId) {
    return [];
  }

  return Meteor.users.find({_id: this.userId}, {fields: {
    '_id': true,
    'emails': true,
    'networkId': true,
    'courses': true,
    'role': true,
    'fullname': true,
  }});
  
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find({}, {fields: {
    '_id': true,
    'role': true,
    'courses': true,
  }});
});