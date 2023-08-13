basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 20)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 81, 5)
        TPBot.headlightColor(0xff8000)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 55, 2)
        TPBot.headlightColor(0x00ff00)
        if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 100)
        }
    }
})
