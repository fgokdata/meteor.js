import { Games } from "../../../startup/lib/collection"

Meteor.publish({
    getGamesList() {
        return Games.find();
    }
})