while True:
    print("light level:" + str(input.light_level()))
    if input.light_level() >11:
        music.play_melody("E B C5 A B G A F ", 150)
        music.set_volume(1000)
    else:
        music.stop_all_sounds()

