import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'srikari-enterprise-jwt-secret-key-2024'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@srikari.com'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({ error: 'No token found' }, { status: 401 })
    }
    
            const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string; iat: number }
    
    if (decoded.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
    
    return NextResponse.json({ 
      success: true,
      user: { 
        email: decoded.email, 
        role: decoded.role 
      } 
    })
  } catch (error) {
    // If token is expired, return 401 to redirect to login
    if (error instanceof jwt.TokenExpiredError) {
      return NextResponse.json({ error: 'Token expired' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
