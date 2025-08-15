import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { College, Exam, News } from '@/lib/models';

export async function POST() {
  try {
    await dbConnect();
    
    // Sample College Data
    const sampleColleges = [
      {
        name: 'IIT Bombay',
        location: {
          state: 'Maharashtra',
          city: 'Mumbai',
          address: 'Powai, Mumbai, Maharashtra 400076'
        },
        type: 'IIT',
        branches: [
          { name: 'Computer Science and Engineering', code: 'CS', seats: 120 },
          { name: 'Electrical Engineering', code: 'EE', seats: 100 },
          { name: 'Mechanical Engineering', code: 'ME', seats: 110 }
        ],
        cutoffs: [
          {
            year: 2024,
            round: 1,
            branch: 'Computer Science and Engineering',
            category: 'General',
            openingRank: 1,
            closingRank: 150
          },
          {
            year: 2024,
            round: 1,
            branch: 'Electrical Engineering',
            category: 'General',
            openingRank: 151,
            closingRank: 300
          }
        ],
        fees: {
          tuition: 250000,
          hostel: 50000,
          mess: 30000,
          other: 10000
        },
        placements: {
          averagePackage: 1800000,
          highestPackage: 4500000,
          placementRate: 95,
          topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Apple']
        },
        facilities: {
          hostels: true,
          wifi: true,
          library: true,
          sports: true,
          labs: true
        },
        website: 'https://www.iitb.ac.in',
        phone: '+91-22-2572-2545',
        email: 'info@iitb.ac.in',
        established: 1958,
        ranking: 1,
        description: 'Indian Institute of Technology Bombay is one of the premier engineering institutions in India.'
      },
      {
        name: 'IIT Delhi',
        location: {
          state: 'Delhi',
          city: 'New Delhi',
          address: 'Hauz Khas, New Delhi, Delhi 110016'
        },
        type: 'IIT',
        branches: [
          { name: 'Computer Science and Engineering', code: 'CS', seats: 110 },
          { name: 'Information Technology', code: 'IT', seats: 90 },
          { name: 'Electronics and Communication', code: 'ECE', seats: 100 }
        ],
        cutoffs: [
          {
            year: 2024,
            round: 1,
            branch: 'Computer Science and Engineering',
            category: 'General',
            openingRank: 1,
            closingRank: 140
          }
        ],
        fees: {
          tuition: 250000,
          hostel: 50000,
          mess: 30000,
          other: 10000
        },
        placements: {
          averagePackage: 1750000,
          highestPackage: 4200000,
          placementRate: 94,
          topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Meta']
        },
        facilities: {
          hostels: true,
          wifi: true,
          library: true,
          sports: true,
          labs: true
        },
        website: 'https://www.iitd.ac.in',
        phone: '+91-11-2659-7135',
        email: 'info@iitd.ac.in',
        established: 1961,
        ranking: 2,
        description: 'Indian Institute of Technology Delhi is a premier engineering institution.'
      }
    ];

    // Sample Exam Data
    const sampleExams = [
      {
        name: 'JEE Main 2025',
        type: 'JEE Main',
        year: 2025,
        registrationStartDate: new Date('2024-12-01'),
        registrationEndDate: new Date('2025-01-31'),
        examDate: new Date('2025-04-15'),
        resultDate: new Date('2025-05-15'),
        eligibility: {
          ageLimit: { min: 17, max: 25 },
          education: { required: '12th Standard', minimumPercentage: 75 },
          attempts: 3,
          nationality: ['Indian', 'OCI', 'PIO']
        },
        syllabus: {
          subjects: ['Physics', 'Chemistry', 'Mathematics'],
          topics: [
            { subject: 'Physics', topics: ['Mechanics', 'Electromagnetism', 'Optics', 'Modern Physics'] },
            { subject: 'Chemistry', topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'] },
            { subject: 'Mathematics', topics: ['Algebra', 'Calculus', 'Geometry', 'Trigonometry'] }
          ],
          totalMarks: 300,
          duration: 180
        },
        fees: {
          general: 1000,
          sc: 500,
          st: 500,
          obc: 500,
          ews: 500,
          female: 1000,
          pwd: 500
        },
        officialWebsite: 'https://jeemain.nta.ac.in',
        status: 'upcoming'
      }
    ];

    // Sample News Data
    const sampleNews = [
      {
        title: 'JEE Main 2025 Registration to Begin Soon',
        slug: 'jee-main-2025-registration-begin-soon',
        content: 'The National Testing Agency (NTA) has announced that JEE Main 2025 registration will begin from December 1, 2024. Students can apply online through the official website.',
        excerpt: 'JEE Main 2025 registration dates announced by NTA. Apply online from December 1, 2024.',
        author: 'Admin',
        category: 'JEE Main',
        tags: ['JEE Main 2025', 'Registration', 'NTA'],
        status: 'published',
        isBreaking: true,
        isFeatured: true
      },
      {
        title: 'IIT Bombay Tops NIRF Rankings 2024',
        slug: 'iit-bombay-tops-nirf-rankings-2024',
        content: 'IIT Bombay has secured the top position in the NIRF Engineering Rankings 2024, followed by IIT Delhi and IIT Madras.',
        excerpt: 'IIT Bombay leads the NIRF Engineering Rankings 2024 with outstanding performance.',
        author: 'Admin',
        category: 'General',
        tags: ['NIRF Rankings', 'IIT Bombay', 'Engineering'],
        status: 'published',
        isBreaking: false,
        isFeatured: true
      }
    ];

    // Insert sample data
    const colleges = await College.insertMany(sampleColleges);
    const exams = await Exam.insertMany(sampleExams);
    const news = await News.insertMany(sampleNews);

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      data: {
        collegesCreated: colleges.length,
        examsCreated: exams.length,
        newsCreated: news.length
      }
    });

  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to seed database',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
