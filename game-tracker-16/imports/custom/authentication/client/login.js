import './login.html';
import '../../../../public/stylesheets/auth.css';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.login.events({
    'submit #login-form'(event) {
      event.preventDefault();
      const email = $('#email').val().trim().toLowerCase();
      const password = $('#password').val().trim();
  
      Meteor.loginWithPassword(email, password, error => {
        if (error) {
          alert(error.reason);
        } else {
          FlowRouter.go('gamesList')
        }
      });
    },
  });
  
  