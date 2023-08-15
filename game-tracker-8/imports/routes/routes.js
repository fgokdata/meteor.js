import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout', { main: 'home' });
  },
});

FlowRouter.route('/add-game/:id?', {
  name: 'addGame',
  action() {
    BlazeLayout.render('mainLayout', { main: 'addGame' });
  },
});

FlowRouter.route('/games-list', {
  name: 'gamesList',
  action() {
    BlazeLayout.render('mainLayout', { main: 'gamesList' });
  },
});

// define the main layout
BlazeLayout.setRoot('body');