import mongoose from 'mongoose';

const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'COMEDK', 'Other'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  registrationStartDate: {
    type: Date,
    required: true,
  },
  registrationEndDate: {
    type: Date,
    required: true,
  },
  examDate: {
    type: Date,
    required: true,
  },
  resultDate: {
    type: Date,
  },
  eligibility: {
    ageLimit: {
      min: Number,
      max: Number,
    },
    education: {
      required: String,
      minimumPercentage: Number,
    },
    attempts: Number,
    nationality: [String],
  },
  syllabus: {
    subjects: [String],
    topics: [{
      subject: String,
      topics: [String],
    }],
    totalMarks: Number,
    duration: Number, // in minutes
  },
  fees: {
    general: Number,
    sc: Number,
    st: Number,
    obc: Number,
    ews: Number,
    female: Number,
    pwd: Number,
  },
  officialWebsite: String,
  applicationForm: String,
  brochure: String,
  importantDates: [{
    event: String,
    date: Date,
    description: String,
  }],
  participatingColleges: [{
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    seats: Number,
    branches: [String],
  }],
  status: {
    type: String,
    enum: ['upcoming', 'registration_open', 'registration_closed', 'exam_completed', 'result_declared'],
    default: 'upcoming',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Exam || mongoose.model('Exam', ExamSchema);
