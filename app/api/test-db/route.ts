import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { College, User, Exam, Cutoff, News } from '@/lib/models';

export async function GET() {
  try {
    await dbConnect();
    
    // Test database connection by counting documents
    const collegeCount = await College.countDocuments();
    const userCount = await User.countDocuments();
    const examCount = await Exam.countDocuments();
    const cutoffCount = await Cutoff.countDocuments();
    const newsCount = await News.countDocuments();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      counts: {
        colleges: collegeCount,
        users: userCount,
        exams: examCount,
        cutoffs: cutoffCount,
        news: newsCount,
      },
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
