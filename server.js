require('express')().get('*', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(__dirname + req.path);
}).listen(5200, function () {
    console.log('启动成功');
});
