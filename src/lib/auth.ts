import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'srikari-enterprise-jwt-secret-key-2024'

export interface AuthUser {
  email: string
  role: string
  iat: number
}

export function verifyToken(request: NextRequest): AuthUser | null {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser
    return decoded
  } catch (error) {
    console.error('Token verification error:', error)
    return null
  }
}

export function createToken(payload: { email: string; role: string }): string {
  return jwt.sign(
    { ...payload, iat: Math.floor(Date.now() / 1000) },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
}
