import './registration.html';
import '../../../../public/stylesheets/auth.css';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.register.events({
    'submit #register-form'(event) {
      event.preventDefault();
  
      const email = $('#email').val().trim().toLowerCase();
      const password = $('#password').val().trim();
  
      Accounts.createUser({
        email,
        password,
        loginAfterSignup: false
      }, error => {
        if (error) {
          alert(error.reason);
        } else {
          alert('Registered Successfully!');
          FlowRouter.go('login')
        }
      });
    }
  });
  