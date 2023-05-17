import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout', { main: 'home' });
  },
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    BlazeLayout.render('mainLayout', { main: 'register' });
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('mainLayout', { main: 'login' });
  },
});

FlowRouter.route('/add-game/:id?', {
  name: 'addGame',
  action() {
    if(Meteor.userId()) {
      BlazeLayout.render('mainLayout', { main: 'addGame' });
    } else {
      FlowRouter.go('register')
    }
  },
});

FlowRouter.route('/games-list', {
  name: 'gamesList',
  action() {
    if(Meteor.userId()) {
      BlazeLayout.render('mainLayout', { main: 'gamesList' });
    } else {
      FlowRouter.go('register')
    }
  },
});

// define the main layout
BlazeLayout.setRoot('body');