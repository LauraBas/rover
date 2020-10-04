export function Got() {
  return 'Got';
}

export default function() {
  return 'Hello World';
}

export async function fetchJson(url) {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return JSON.parse(text);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
