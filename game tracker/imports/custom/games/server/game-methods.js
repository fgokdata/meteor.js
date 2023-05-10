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
    }
})