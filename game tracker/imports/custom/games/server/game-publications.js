import { Games } from "../../../startup/lib/collection"

Meteor.publish({
    getGameById(id) {
        if(id) {
            return Games.find({ _id: id });
        } else {
            this.ready()
        }
    },
    getGamesList() {
        return Games.find();
    }
})