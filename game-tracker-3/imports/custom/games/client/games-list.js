import { Games } from '../../../startup/lib/collection';
import './games-list.html';

Template.gamesList.onCreated(function(){
    Meteor.subscribe('getGamesList')
})

Template.gamesList.helpers({
    gamesList() {
        return Games.find().fetch();
    }
})