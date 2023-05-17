import { Games } from "../../../startup/lib/collection"

Meteor.publish({
    getGameById(id) {
        if(id) {
            return Games.find({ _id: id, userId: Meteor.userId() });
        } else {
            this.ready()
        }
    },
    getGamesList(query) {
        return Games.find(query);
    }
})