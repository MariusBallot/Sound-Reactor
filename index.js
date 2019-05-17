class SoundReactor {

    constructor() {
        this.ctx
        this.audio
        this.audioSource
        this.analyser
        this.fdata

        this.bind()
    }

    init() {
        this.ctx = new AudioContext();
        this.audio = document.querySelector('#sound-reactor-audio');
        this.audioSource = this.ctx.createMediaElementSource(this.audio);
        this.analyser = this.ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.8

        this.audioSource.connect(this.analyser);
        this.audioSource.connect(this.ctx.destination);
        this.fdata = new Uint8Array(this.analyser.frequencyBinCount);

        this.audio.play()
    }

    update() {
        this.analyser.getByteFrequencyData(this.fdata);

    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }

}

module.exports = SoundReactor;