# Emulator verification

Local on-device computation using editable numeric inputs.

Compared the coral crop and cream paper margins. A 1920x1080 photograph fitted to 150x100 mm has a 7.8 mm border at top and bottom.

4 distinct frames were recorded on firmware 1.3.1. App io.ncoooooper.printmargin exited: finished; heap peak 81.1 of 128 KiB. Screenshots are in screenshots/ and the recording is in media/.

## Display capture

Firmware 1.3.1 rendered both README examples. Each square in a guide GIF is one front LED in a 16 × 16 cell. The production archive was built from the source in this repository.

## Screen transition capture

Firmware 1.3.1 rendered the display sequences in the README. The release archive also ran on a fresh emulator with rapid wheel reversals and Back during a transition. The guide uses a 14 × 14 lit area inside each 16 × 16 cell. Input sequences, frame counts and the release archive checksum are in [the capture record](media/screen-transitions.json).
