import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Use an empty string as a fallback to prevent the constructor from throwing
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, product, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to farm owner
    const farmEmail = 'tanka.mdl1@gmail.com';
    
    const emailContent = `
New Contact Form Submission from TankaSir Farm Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Product Interest: ${product || 'Not specified'}

Message:
${message}

---
This is an automated message from your TankaSir Farm website contact form.
    `.trim();

    const response = await resend.emails.send({
      from: 'TankaSir Farm <onboarding@resend.dev>',
      to: farmEmail,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Product Interest:</strong> ${product || 'Not specified'}</p>
          </div>

          <div style="background-color: #fafafa; padding: 20px; border-left: 4px solid #8b6f47; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2d5016;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #666; font-size: 12px;">This is an automated message from your TankaSir Farm website contact form.</p>
        </div>
      `,
    });

    // Also send confirmation email to customer
    await resend.emails.send({
      from: 'TankaSir Farm <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message - TankaSir Farm',
      text: `Dear ${name},\n\nThank you for contacting TankaSir Farm! We have received your message and will get back to you soon.\n\nBest regards,\nTankaSir Farm Team\nPhone: 9825308280\nEmail: tanka.mdl1@gmail.com\nLocation: Madhumala-8, Nepal`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">Thank You for Contacting Us!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">TankaSir Farm</h3>
            <p><strong>Phone:</strong> 9825308280</p>
            <p><strong>Email:</strong> tanka.mdl1@gmail.com</p>
            <p><strong>Location:</strong> Madhumala-8, Nepal</p>
          </div>

          <p>Best regards,<br>TankaSir Farm Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We will contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
