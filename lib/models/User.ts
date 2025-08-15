import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Not required for OAuth users
  },
  image: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  preferences: {
    preferredStates: [String],
    preferredBranches: [String],
    preferredCollegeTypes: [String],
    rank: Number,
    category: String,
  },
  savedColleges: [{
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    addedAt: { type: Date, default: Date.now },
  }],
  choiceList: [{
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    branch: String,
    priority: Number,
    addedAt: { type: Date, default: Date.now },
  }],
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
