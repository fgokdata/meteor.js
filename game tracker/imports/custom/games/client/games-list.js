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
    }
})

Template.gamesList.events({
    'click .add-game-session-btn'(event, template) {
        modalTemplateInst = Blaze.renderWithData(Template.sessionModal, { id: this.id }, document.getElementById('modal-parent'));
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
})