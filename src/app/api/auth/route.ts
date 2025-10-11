import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'srikari-enterprise-jwt-secret-key-2024'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@srikari.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'RaviKiran@786'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create JWT token with 365 days expiry
    const token = jwt.sign(
      { 
        email: ADMIN_EMAIL,
        role: 'admin',
        iat: Math.floor(Date.now() / 1000)
      },
      JWT_SECRET,
      { expiresIn: '365d' }
    )

    // Return token to be stored in localStorage
    return NextResponse.json(
      { 
        message: 'Login successful',
        token: token,
        user: { email: ADMIN_EMAIL, role: 'admin' }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value
    
    if (!token) {
      return NextResponse.json({ error: 'No token found' }, { status: 401 })
    }
    
            const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string; iat: number }
    
    if (decoded.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
    
    return NextResponse.json({ 
      user: { 
        email: decoded.email, 
        role: decoded.role 
      } 
    })
        } catch (error) {
          console.error('Token verification error:', error)
          return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
        }
}

export async function DELETE() {
  try {
    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
