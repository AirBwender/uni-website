import mongoose from 'mongoose';

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: String,
  },
  type: {
    type: String,
    enum: ['IIT', 'NIT', 'IIIT', 'GFTI', 'Private', 'State'],
    required: true,
  },
  branches: [{
    name: { type: String, required: true },
    code: { type: String, required: true },
    seats: { type: Number, default: 0 },
  }],
  cutoffs: [{
    year: { type: Number, required: true },
    round: { type: Number, required: true },
    branch: { type: String, required: true },
    category: { type: String, required: true },
    openingRank: { type: Number, required: true },
    closingRank: { type: Number, required: true },
  }],
  fees: {
    tuition: { type: Number, default: 0 },
    hostel: { type: Number, default: 0 },
    mess: { type: Number, default: 0 },
    other: { type: Number, default: 0 },
  },
  placements: {
    averagePackage: { type: Number, default: 0 },
    highestPackage: { type: Number, default: 0 },
    placementRate: { type: Number, default: 0 },
    topRecruiters: [String],
  },
  facilities: {
    hostels: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    library: { type: Boolean, default: false },
    sports: { type: Boolean, default: false },
    labs: { type: Boolean, default: false },
  },
  website: String,
  phone: String,
  email: String,
  established: Number,
  ranking: Number,
  description: String,
  images: [String],
}, {
  timestamps: true,
});

export default mongoose.models.College || mongoose.model('College', CollegeSchema);
