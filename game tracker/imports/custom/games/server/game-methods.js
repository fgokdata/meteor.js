import { Games } from "../../../startup/lib/collection"

Meteor.methods({
    addGame(data, id) {
        try {
            return Games.upsert({_id: id}, data);
        } catch(err) {
            throw new Meteor.Error(err.error, err.reason || err.message)
        }
    },
    addGameSession(data, id) {
        try {
            return Games.update({_id: id}, { $push: { sessions: data } });
        } catch(err) {
            throw new Meteor.Error(err.error, err.reason || err.message)
        }
    },
    removeGameSession(gameId, sessionIndex) {
        try {
            const game = Games.findOne({_id: gameId});
            if(!game){
                throw new Meteor.Error(404, 'Game not found!')
            }
            const sessions = game.sessions;
            sessions.splice(sessionIndex, 1);
            return Games.update({_id: gameId}, { $set: { sessions } });
        } catch(err) {
            throw new Meteor.Error(err.error, err.reason || err.message)
        }
    },
    removeGame(id) {
        try {
            return Games.remove({_id: id});
        } catch(err) {
            throw new Meteor.Error(err.error, err.reason || err.message)
        }
    },
})