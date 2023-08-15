import './add-game.html';
import '../../../../public/stylesheets/add-game.css';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Games } from '../../../startup/lib/collection';

Template.addGame.onCreated(function() {
    if(FlowRouter.getParam('id')) {
        Meteor.subscribe('getGameById', FlowRouter.getParam('id'));
    }
})

Template.addGame.helpers({
    getGame() {
        return Games.findOne({ _id: FlowRouter.getParam('id') })
    },
    limitArray(arr) {
        return arr.slice(0,5);
    }
})

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
  
      Meteor.call('addGame',data, FlowRouter.getParam('id'), (err, result) => {
        if(err) {
            alert(err.reason);
        } else {
            alert(`Game ${FlowRouter.getParam('id') ? 'updated' : 'added'} successfully!`);
            FlowRouter.go('gamesList');
        }
      })
    },
    'click .delete-session'(event, template) {
        event.preventDefault();
        const index = $(event.currentTarget).attr('data-index');
        Meteor.call('removeGameSession', FlowRouter.getParam('id'), index, (err, result) => {
            if(err) {
                alert(err.reason);
            } else {
                alert('Session deleted successfully!');
            }
        })
    }
  });
  