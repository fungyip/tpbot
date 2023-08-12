basic.show_icon(IconNames.HAPPY)
music.change_tempo_by(20)
music._play_default_background(music.built_in_playable_melody(Melodies.BIRTHDAY),
    music.PlaybackMode.IN_BACKGROUND)
music._play_default_background(music.built_in_playable_melody(Melodies.WEDDING),
    music.PlaybackMode.IN_BACKGROUND)

def on_forever():
    if TPBot.sonar_judge(TPBot.Sonarjudge.LESS, 20):
        TPBot.set_travel_time(TPBot.DriveDirection.FORWARD, 60, 5)
        TPBot.set_travel_time(TPBot.DriveDirection.RIGHT, 55, 2)
        TPBot.headlight_color(0xff8000)
basic.forever(on_forever)
