var client = AgoraRTC.createRtcClient();
client.init(appId, function() {
client.join(appId, channel, undefined, successCallback, errorCallback);
}, errorCallback);
