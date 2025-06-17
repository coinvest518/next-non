import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    
    // Replace 'yourpublication' with your actual Substack publication name
    const substackUrl = 'https://YOURSUBSTACKNAME.substack.com/api/v1/subscribers';
    
    // Forward to Substack API
    const response = await fetch(substackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName || '',
        utm_source: 'website',
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to subscribe to Substack');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
