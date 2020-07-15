
function _SoundManagerAdd-sl(name, filename) {
	Module.SoundManagerAdd(Pointer_stringify(name), Pointer_stringify(filename));
}

function _SoundManagerPlay-sk(name) {
	Module.SoundManagerPlay(Pointer_stringify(name));
}

function _SoundManagerPause-sk(name) {
	Module.SoundManagerPause(Pointer_stringify(name));
}

function _SoundManagerStop-sk(name) {
	Module.SoundManagerStop(Pointer_stringify(name));
}

function _SoundManagerLoop-sk(name) {
	Module.SoundManagerLoop(Pointer_stringify(name));
}

function _SoundManagerSetGain-sk(name, gain) {
	Module.SoundManagerSetGain(Pointer_stringify(name), gain);
}