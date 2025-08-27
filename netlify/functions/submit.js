export async function handler(event, context) {
  // Parse form data
  const body = new URLSearchParams(event.body);

  const name = body.get("name");
  const email = body.get("email");
  const sip = body.get("sip"); // Ruckus AP IP

  // --- Optional: Log to Google Sheet ---
  // You can use Google Sheets API here if you want
  console.log(`Name: ${name}, Email: ${email}, SIP: ${sip}`);

  // Redirect to Ruckus AP (HTTP 302)
  return {
    statusCode: 302,
    headers: {
      Location: `http://${sip}:9997/login?username=guest&password=guest`
    },
    body: ""
  };
}
