basic.showIcon(IconNames.Happy)
music.changeTempoBy(20)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 20)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 60, 5)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 55, 2)
        TPBot.headlightColor(0xff8000)
    }
})
