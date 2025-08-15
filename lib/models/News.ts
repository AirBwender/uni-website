import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['JEE Main', 'JEE Advanced', 'JoSAA', 'CSAB', 'State Counseling', 'Private Colleges', 'General'],
    required: true,
  },
  tags: [String],
  featuredImage: String,
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  relatedExams: [{
    examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  }],
  relatedColleges: [{
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  }],
  views: {
    type: Number,
    default: 0,
  },
  isBreaking: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  metaTitle: String,
  metaDescription: String,
  seoKeywords: [String],
}, {
  timestamps: true,
});

// Text index for search functionality
NewsSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

export default mongoose.models.News || mongoose.model('News', NewsSchema);
