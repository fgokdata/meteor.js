import './add-game.html';
import '../../../../public/stylesheets/add-game.css';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.addGame.events({
    'submit #add-game-form': (event) => {
      event.preventDefault();
  
      const name = $('#game-name').val()?.trim();
      const photoUrl = $('#game-photo').val()?.trim();
  
      // Validate form fields
      if (!name || !photoUrl) {
        alert('Please fill out all fields!');
        return;
      }

      const data = {
        name,
        photoUrl,
        sessions: []
      }
  
      Meteor.call('addGame', data, (err, result) => {
        if(err) {
            alert(err.reason);
        } else {
            alert('Game added successfully!');
            FlowRouter.go('gamesList');
        }
      })
  
    }
  });
  