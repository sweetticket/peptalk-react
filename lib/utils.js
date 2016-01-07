// This is loaded first because it's located in a deeper subdirectory
// than other view files
// It contains code that works across the view templates

Meteor.startup(function() {
  Utils = {};

  Utils.BLACKLISTED_EMAILS = [
    "gmail.com",
    "naver.com",
    "hotmail.com",
    "daum.net",
    "hanmail.net",
    "nate.com",
    "yahoo.com",
    "aol.com",
    "outlook.com",
    "sharklasers.com",
    "msn.com",
    "att.net",
    "live.com",
    "verizon.net"
  ];

  Utils.userExists = function(username) {
    return !!Meteor.users.findOne({username: username});
  }

  Utils.getDomain = function (email) {
    var indexAt = email.indexOf("@");
    return email.substr(indexAt+1, email.length);
  };

  Utils.validateEmail = function (email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  Utils.redirectIfNeeded = function(currentUser) {
    var user = currentUser || Meteor.user();
    if (!user) {
      FlowRouter.go('/');
    }
    // if student: if is in a class, go to a class page. else, go to class search
    // if professor: if has a class, go to a class page, else, go to create new class
    if (user.courses.length === 0) {
      console.log("redirect to /profile/" + user._id);
      // FlowRouter.go('/profile/' + user._id);
    } else {
      FlowRouter.go('/course/' + user.courses[0]);
    }
  };

  Utils.redirectStudents = function(currentUser) {
    debugger
    var user = currentUser || Meteor.user();
    if (!user) {
      FlowRouter.go('/');
    }
    if (user.role === 'student') {
      if (user.courses.length === 0) {
        console.log("redirect to /profile/" + user._id);
        // FlowRouter.go('/profile/' + user._id);
      } else {
        FlowRouter.go('/course/' + user.courses[0]);
      }

    }
    if (user.courses.length === 0) {
      if (user.role === 'instructor') {
        FlowRouter.go('/new');
      } else {
        FlowRouter.go('/add');
      }
    } else {
      FlowRouter.go('/course/' + user.courses[0]);
    }
  };

  GARecordPage = function(pageLocation) {
    ga('create', 'UA-51592195-5', 'auto'); //fixme: replace with an eivornment var
    ga('send', 'pageview', {
      page: pageLocation
    });
  }

});

