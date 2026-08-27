const GOOGLE_SHEETS_API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY
const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID

export async function saveRsvpToGoogleSheets(rsvpData) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`

  const values = [[
    new Date().toLocaleString('en-GB'),
    rsvpData.name,
    rsvpData.email,
    rsvpData.phone,
    rsvpData.attendance,
    rsvpData.guests,
    rsvpData.message,
  ]]

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GOOGLE_SHEETS_API_KEY}`,
    },
    body: JSON.stringify({ range: 'RSVP!A:G', values }),
  })

  if (!response.ok) {
    throw new Error('Failed to save RSVP')
  }
}
