var playList = {
  'Alan Walker': 'Faded',
  'Sajjad Ali': 'Har Zulm'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

Function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}