import { Games } from '../../../startup/lib/collection';
import './games-list.html';
import '../../../../public/stylesheets/games-list.css';

Template.gamesList.onCreated(function(){
    Meteor.subscribe('getGamesList')
})

Template.gamesList.helpers({
    gamesList() {
        return Games.find().fetch();
    }
})