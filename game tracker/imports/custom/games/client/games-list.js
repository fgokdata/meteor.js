import { Games } from '../../../startup/lib/collection';
import './games-list.html';
import '../../../../public/stylesheets/games-list.css';

let modalTemplateInst = null;

Template.gamesList.onCreated(function(){
    Meteor.subscribe('getGamesList')
})

Template.gamesList.helpers({
    gamesList() {
        return Games.find().fetch();
    },
    gamesPlayed(sessions) {
        return sessions?.length;
    }
})

Template.gamesList.events({
    'click .add-game-session-btn'(event, template) {
        modalTemplateInst = Blaze.renderWithData(Template.sessionModal, { id: $(event.currentTarget).attr('data-id') }, document.getElementById('modal-parent'));
    },
})

Template.sessionModal.events({
    'click .close-modal'(event, template) {
        event.preventDefault();
        if(modalTemplateInst) {
            Blaze.remove(modalTemplateInst);
            modalTemplateInst = null;
        }
    },
    'submit #add-session-form': (event, template) => {
        event.preventDefault();
        const gameId = template.data.id;
        const date = $('#session-date').val()?.trim();
        const players = $('#session-players').val();
        const duration = $('#session-duration').val()
        const outcome = $('#session-outcome').val()?.trim()

        if(!gameId) {
          alert('Please provide game id!');
          return;
        }
    
        // Validate form fields
        if (!date || !players || !duration || !outcome) {
          alert('Please fill out all fields!');
          return;
        }
  
        const data = {
          date,
          players,
          duration,
          outcome
        }
    
        Meteor.call('addGameSession',data, gameId, (err, result) => {
          if(err) {
              alert(err.reason);
          } else {
              if(modalTemplateInst) {
                Blaze.remove(modalTemplateInst);
                modalTemplateInst = null;
              }
              alert('Session successfully!');
          }
        })
      }
})