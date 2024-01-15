function execute({ player, gameName, biosUrl, gameUrl, core, pathtodata, startOnLoaded }) {
    const config = {};
    config.gameUrl = gameUrl;
    config.dataPath = pathtodata;
    config.system = core;
    config.biosUrl = biosUrl;
    config.gameName = gameName;
    config.color = undefined;
    config.adUrl = undefined;
    config.adMode = undefined;
    config.adTimer = undefined;
    config.adSize = undefined;
    config.alignStartButton = undefined;
    config.VirtualGamepadSettings = undefined;
    config.buttonOpts = undefined;
    config.volume = undefined;
    config.defaultControllers = undefined;
    config.startOnLoad = startOnLoaded;
    config.fullscreenOnLoad = undefined;
    config.filePaths = undefined;
    config.loadState = undefined;
    config.cacheLimit = undefined;
    config.cheats = undefined;
    config.defaultOptions = undefined;
    config.gamePatchUrl = undefined;
    config.gameParentUrl = undefined;
    config.netplayUrl = undefined;
    config.gameId = undefined;
    config.backgroundImg = undefined;
    config.backgroundBlur = undefined;
    config.backgroundColor = undefined;
    config.controlScheme = undefined;
    config.threads = undefined;
    config.disableCue = undefined;
    config.startBtnName = undefined;
    config.softLoad = undefined;
    config.screenRecording = undefined;

    new EmulatorJS(player, config);
}