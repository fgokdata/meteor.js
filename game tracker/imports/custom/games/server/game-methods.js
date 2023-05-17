import { Games } from "../../../startup/lib/collection"

Meteor.methods({
    addGame(data) {
        try {
            if (!Meteor.userId()) {
                throw new Meteor.Error("not-authorized", "You must be logged in to add a game");
            }
            data.userId = Meteor.userId();
            return Games.insert(data);
        } catch (err) {
            throw new Meteor.Error(err.error, err.reason || err.message);
        }
    },
    addGameSession(data, gameId) {
        try {
            const game = Games.findOne({ _id: gameId, userId: Meteor.userId() });
            if (!game) {
                throw new Meteor.Error(404, "Game not found");
            }

            return Games.update({ _id: gameId }, { $push: { sessions: data } });
        } catch (err) {
            throw new Meteor.Error(err.error, err.reason || err.message);
        }
    },
    removeGameSession(gameId, sessionIndex) {
        try {
            const game = Games.findOne({ _id: gameId, userId: Meteor.userId() });
            if (!game) {
                throw new Meteor.Error(404, "Game not found");
            }

            const sessions = game.sessions;
            sessions.splice(sessionIndex, 1);
            return Games.update({ _id: gameId }, { $set: { sessions } });
        } catch (err) {
            throw new Meteor.Error(err.error, err.reason || err.message);
        }
    },
    removeGame(gameId) {
        try {
            const game = Games.findOne({ _id: gameId, userId: Meteor.userId() });
            if (!game) {
                throw new Meteor.Error(404, "Game not found");
            }

            return Games.remove({ _id: gameId });
        } catch (err) {
            throw new Meteor.Error(err.error, err.reason || err.message);
        }
    },
});
