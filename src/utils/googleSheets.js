const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzRtihtNIP1GY-XYzBo7iVesfIQOIy-Jc2wgrrjDYwig_eEsbZvCG4Xw7oo1a6jx9vWwg/exec'

export async function saveRsvpToGoogleSheets(rsvpData) {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toLocaleString('en-GB'),
      name: rsvpData.name,
      email: rsvpData.email,
      phone: rsvpData.phone,
      attendance: rsvpData.attendance,
      guests: rsvpData.guests,
      message: rsvpData.message,
    }),
  })

  const text = await response.text()

  if (!response.ok) {
    throw new Error(text || 'Failed to save RSVP')
  }

  return text
}
