#!/bin/bash
# Startet die Brah-Kinderessen-App lokal im Browser.
# Doppelklick auf diese Datei genügt.

# In den Ordner wechseln, in dem dieses Skript liegt
cd "$(dirname "$0")" || exit 1

PORT=8765
URL="http://localhost:$PORT"

# Passenden Python-Befehl finden (macOS bringt meist python3 mit)
if command -v python3 >/dev/null 2>&1; then
  PY="python3"
elif command -v python >/dev/null 2>&1; then
  PY="python"
else
  echo ""
  echo "Es wurde kein Python auf diesem Mac gefunden."
  echo "Bitte oeffne stattdessen die Datei index.html direkt per Doppelklick."
  echo ""
  echo "Zum Schliessen dieses Fensters eine Taste druecken ..."
  read -n 1 -s
  exit 1
fi

echo ""
echo "Brah-Kinderessen-App startet ..."
echo "Der Browser oeffnet sich gleich unter: $URL"
echo ""
echo "Zum Beenden dieses Fenster schliessen oder hier Ctrl + C druecken."
echo ""

# Browser nach kurzer Wartezeit oeffnen (parallel zum Server)
( sleep 1; open "$URL" ) &

# Lokalen Server starten
exec "$PY" -m http.server "$PORT"
