// alias
var kotlinjsgame = app.com.naosim.kotlinjsgame;

// implements AlertJsRepository
var alertJsRepositoryImpl = { show:(text) => alert(text) };
// create service
var service = new kotlinjsgame.ap.ShowPositionService(alertJsRepositoryImpl);
// run
service.invoke();
