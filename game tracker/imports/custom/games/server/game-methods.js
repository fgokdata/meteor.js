import { Games } from "../../../startup/lib/collection"

Meteor.methods({
    addGame(data) {
        try {
            return Games.insert(data);
        } catch(err) {
            throw new Meteor.Error(err.error, err.reason || err.message)
        }
    }
})