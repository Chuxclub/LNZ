function go_to_access()
{
  let stylesheet = document.getElementsByTagName("link");

  let main = stylesheet[0].href;
  let alternate = stylesheet[1].href;

  stylesheet[0].href = alternate;
  stylesheet[1].href = main;
}
