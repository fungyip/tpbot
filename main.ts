basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 20)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 60, 5)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 55, 2)
        TPBot.headlightColor(0xff8000)
    }
})
