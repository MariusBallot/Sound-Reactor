# :airplane: Sound-Reactor :speaker:

A simple class to quickly access sound data via fft

## Installation

```
npm i mb-sound-reactor
```

### index.js
```
import SoundReactor from 'mb-sound-reactor';
let soundReactor = new SoundReactor(AUDIO_URL);

function update(){
    soundReactor.update()
}
```
