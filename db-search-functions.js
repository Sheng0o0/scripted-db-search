/* global firebase */

function getVersion(handleVersion) {
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/version');
  databaseVersionReference.once('value').then(function(snapshot) {
    
    // You found me! Great job!
    // TODO: Uncomment the code below. It gets the current version value from
    // the database snapshot and passes it as an argument to the 'handleVersion'
    // callback.
    
    var version = snapshot.val();
    handleVersion(version);
  });
}

function getHelloWorldValue(handleType) {
  // TODO: Your code goes here. Hint: use 'getVersion' as a template.
  var database = firebase.database();
  var databaseTypeReference = database.ref('/db-search/hello-world');
  databaseTypeReference.once('value').then(function(snapshot) {
    var version = snapshot.val();
    handleType(version);
  });
}

function applyDiscount(handleNewPrice) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseNewPriceReference = database.ref('/db-search/discount');
  databaseNewPriceReference.once('value').then(function(snapshot) {
    var version = snapshot.val()*100;
    handleNewPrice(version);
  });
}

function getArrayLength(handleLength) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseHandleLengthReference = database.ref('/db-search/array');
  databaseHandleLengthReference.once('value').then(function(snapshot) {
    var version = snapshot.val().length;
    handleLength(version);
  });
}

function getLastArrayElement(handleElement) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseLastArrayReference = database.ref('/db-search/array');
  databaseLastArrayReference.once('value').then(function(snapshot) {
    var version = snapshot.val().lastIndexOf(char);
    handleElement(version);
  });
}

function getArrayJoin(handleJoin) {
  // TODO: Your code goes here.
}

function getNumberOrStringType(handleType) {
  // TODO: Your code goes here.
}

function getObjectValue(handleValue) {
  // TODO: Your code goes here.
}

function getObjectKeyCount(handleKeyCount) {
  // TODO: Your code goes here.
}