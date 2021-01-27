while (true) {
    console.log("light level:" + ("" + input.lightLevel()))
    if (input.lightLevel() > 11) {
        music.playMelody("E B C5 A B G A F ", 150)
        music.setVolume(1000)
    } else {
        music.stopAllSounds()
    }
    
}
