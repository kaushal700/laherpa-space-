import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RDPApplicationRequest {
  name: string;
  email: string;
  country: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, country, phone }: RDPApplicationRequest = await req.json();

    console.log("Processing RDP application notification for:", { name, email, country, phone });

    // Email 1: Send notification to Admin
    const adminEmailResponse = await resend.emails.send({
      from: "La Herpaile <onboarding@resend.dev>",
      to: ["admin@laherpa.space"],
      subject: `New RDP Application: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .info-box { background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; }
            .info-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #333; width: 120px; }
            .value { color: #555; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #888; font-size: 12px; }
            .badge { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🖥️ New RDP Application Received</h1>
            </div>
            <div class="content">
              <p style="color: #333; font-size: 16px;">A new application has been submitted for free RDP server access.</p>
              
              <div class="info-box">
                <div class="info-row">
                  <span class="label">👤 Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-row">
                  <span class="label">📧 Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="info-row">
                  <span class="label">🌍 Country:</span>
                  <span class="value">${country}</span>
                </div>
                <div class="info-row">
                  <span class="label">📱 Phone:</span>
                  <span class="value">${phone}</span>
                </div>
              </div>
              
              <p style="color: #666; font-size: 14px;">Please review this application and respond to the applicant at your earliest convenience.</p>
              
              <span class="badge">Pending Review</span>
            </div>
            <div class="footer">
              <p>This email was sent from La Herpaile Foundation website.</p>
              <p>© 2026 La Herpaile Foundation. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Email 2: Send confirmation to User
    const userEmailResponse = await resend.emails.send({
      from: "La Herpaile <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received - La Herpaile RDP Access",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
            .header p { color: rgba(255,255,255,0.9); margin-top: 10px; font-size: 16px; }
            .content { padding: 30px; }
            .success-icon { text-align: center; font-size: 60px; margin-bottom: 20px; }
            .message { background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 20px; }
            .message h2 { color: #2e7d32; margin: 0 0 10px 0; }
            .info-box { background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin: 20px 0; }
            .info-row { padding: 8px 0; border-bottom: 1px solid #eee; }
            .info-row:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #333; }
            .value { color: #555; }
            .next-steps { background-color: #fff3e0; border-radius: 10px; padding: 20px; margin: 20px 0; }
            .next-steps h3 { color: #e65100; margin-top: 0; }
            .step { display: flex; align-items: flex-start; margin: 10px 0; }
            .step-number { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #888; font-size: 12px; }
            .social-links { margin: 15px 0; }
            .social-links a { color: #667eea; text-decoration: none; margin: 0 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>La Herpaile Foundation</h1>
              <p>Empowering Communities Through Technology</p>
            </div>
            <div class="content">
              <div class="success-icon">✅</div>
              <div class="message">
                <h2>Application Submitted Successfully!</h2>
                <p style="color: #388e3c; margin: 0;">Thank you for applying for free RDP server access.</p>
              </div>
              
              <p style="color: #333; font-size: 16px;">Dear <strong>${name}</strong>,</p>
              <p style="color: #555; line-height: 1.6;">We have received your application for free RDP server access. Our team will review your application and get back to you within <strong>24-48 hours</strong>.</p>
              
              <div class="info-box">
                <h3 style="margin-top: 0; color: #333;">📋 Your Application Details</h3>
                <div class="info-row">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="info-row">
                  <span class="label">Country:</span>
                  <span class="value">${country}</span>
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
              </div>
              
              <div class="next-steps">
                <h3>📌 What Happens Next?</h3>
                <div class="step">
                  <span class="step-number">1</span>
                  <span>Our team will review your application</span>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <span>We'll verify your eligibility for free RDP access</span>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <span>You'll receive your RDP credentials via email</span>
                </div>
              </div>
              
              <p style="color: #555; font-size: 14px;">If you have any questions, feel free to reply to this email or contact us at <a href="mailto:admin@laherpa.space" style="color: #667eea;">admin@laherpa.space</a></p>
            </div>
            <div class="footer">
              <p><strong>La Herpaile Foundation</strong></p>
              <p>Bridging the Digital Divide</p>
              <div class="social-links">
                <a href="https://laherpaspace.lovable.app">Visit Our Website</a>
              </div>
              <p>© 2026 La Herpaile Foundation. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmail: adminEmailResponse, 
        userEmail: userEmailResponse 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-rdp-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
