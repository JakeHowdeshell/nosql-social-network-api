const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatedDate');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
        type:String,
        required: true,
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => formatDate(time),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema.set('toObject', { virtuals: true });

module.exports = reactionSchema;