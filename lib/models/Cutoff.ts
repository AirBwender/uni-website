import mongoose from 'mongoose';

const CutoffSchema = new mongoose.Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
    required: true,
  },
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  round: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['General', 'OBC-NCL', 'SC', 'ST', 'EWS', 'PwD', 'Female'],
    required: true,
  },
  openingRank: {
    type: Number,
    required: true,
  },
  closingRank: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    default: 0,
  },
  filledSeats: {
    type: Number,
    default: 0,
  },
  counselingType: {
    type: String,
    enum: ['JoSAA', 'CSAB', 'State', 'Private'],
    required: true,
  },
  quota: {
    type: String,
    enum: ['Home State', 'Other State', 'All India', 'Management', 'NRI'],
    default: 'All India',
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Gender Neutral'],
    default: 'Gender Neutral',
  },
  remarks: String,
  source: String,
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Compound index for efficient queries
CutoffSchema.index({ collegeId: 1, year: 1, round: 1, branch: 1, category: 1 }, { unique: true });

export default mongoose.models.Cutoff || mongoose.model('Cutoff', CutoffSchema);
