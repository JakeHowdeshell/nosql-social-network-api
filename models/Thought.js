const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('createdAt').formatTime.get(function () {
    // need to write the code to format ***!!!
    return this.createdAt.toDateString();
});

// Create a virtual property `reactionCount` that gets the amount of reactions associated with an application
thoughtsSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our thoughts model
const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;
