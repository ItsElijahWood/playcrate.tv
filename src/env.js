export const ws = {
  description: "Automate the process of changing protocol depending on ssl.",
  url: `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.hostname}${window.location.protocol === "https:" ? "" : ":3001"}/ws` // 443 = wss://domain.co.uk/ws/ 80 = ws://192.168.1.x:3001/ws/
}
