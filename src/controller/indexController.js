Controller.RegisterView({
  path: View("index"),
});

Controller.Bind("title", "VCX Starter Project");


// Counter
var count = 0;
Controller.Bind("count", count);

function addCount(){
  count ++;
  Controller.Bind("count", count);
}