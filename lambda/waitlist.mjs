import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.requestContext?.http?.method !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const { email } = JSON.parse(event.body || '{}');

  if (!email || typeof email !== 'string') {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Email is required' }) };
  }

  try {
    await resend.contacts.create({ email, audienceId: AUDIENCE_ID });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Waitlist signup error:', error.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to join waitlist' }) };
  }
};
