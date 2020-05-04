import { useCallback } from 'react'
import useVideoPartyContext from '../useVideoPartyContext'
import useIsTrackEnabled from '../useIsTrackEnabled'

export default function useLocalAudioToggle() {
  const { localTracks } = useVideoPartyContext()
  const audioTrack = localTracks.find((track) => track.kind === 'audio')
  const isEnabled = useIsTrackEnabled(audioTrack)

  const toggleAudioEnabled = useCallback(() => {
    if (audioTrack) {
      audioTrack.isEnabled ? audioTrack.disable() : audioTrack.enable()
    }
  }, [audioTrack])

  return [isEnabled, toggleAudioEnabled]
}
