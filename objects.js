var playList = {
  'Alan Walker': 'Faded',
  'Sajjad Ali': 'Har Zulm'
}

Function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

Function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}