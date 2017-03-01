requirejs(["randomMass", "Bubble", "Selection"],function (randomMass, Bubble, Selection ) {

  var Re =  Bubble(randomMass());
  console.log("Відсортований булькою: " + Re);

  var Re2 = Selection(randomMass());
  console.log("Відсортований вибіркою: " + Re2);

});

