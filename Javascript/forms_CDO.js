/* ============================================================================= */
/* ============================ SECONDARY FUNCTIONS ============================ */
/* ============================================================================= */

function isBetween(a, min, max)
{
    return (a >= min && a <= max);
}

function isLetter(a)
{
    return isBetween(a, "a", "z") || isBetween(a, "A", "Z");
}

function isDigit(a)
{
    return isBetween(a, '0', '9');
}

function isAlphaNum(a)
{
    return ( isBetween(a, "a", "z") || isBetween(a, "A", "Z") || isBetween(a, '0', '9') ) ;
}

function erase(obj)
{
  obj.value = "";
}

function get_form_inputs()
{
  /* ============ Region ============ */
  let region_name = document.getElementById("region_name").value;

  //Nature
  let weather = document.getElementById("weather").value;
  let geology = document.getElementById("geology").value;
  let wildlife = document.getElementById("wildlife").value;


  /* ============ Place ============ */
  let place_name = document.getElementById("place_name").value;

  //Economy
  let place_function = document.getElementById("place_function").value;

  let jobs_quantity = document.querySelector('input[name="jobs_quantity"]:checked').value;
  let jobs_diversity = document.querySelector('input[name="jobs_diversity"]:checked').value;

  let population = document.getElementById("population").value;

  let services_quantity = document.querySelector('input[name="services_quantity"]:checked').value;
  let services_diversity = document.querySelector('input[name="services_diversity"]:checked').value;

  let housing = document.getElementById("housing").value;

  //Social
  let history = document.getElementById("history").value;
  let politics = document.getElementById("politics").value;
  let atmosphere = document.getElementById("atmosphere").value;

  let form_inputs = [region_name, weather, geology, wildlife, place_name, place_function,
                     jobs_quantity, jobs_diversity, population, services_quantity,
                     services_diversity, housing, history, politics, atmosphere];

  return form_inputs;
}

function nodes_erase()
{
  let form_nodes = document.getElementById("content");

  while (form_nodes.firstChild)
  {
    form_nodes.removeChild(form_nodes.firstChild);
  }
}


function write_h1(obj)
{
  let div = document.createElement("h1");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_h2(obj)
{
  let div = document.createElement("h2");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_h3(obj)
{
  let div = document.createElement("h3");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_p(obj)
{
  let div = document.createElement("p");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_span(obj)
{
  let div = document.createElement("span");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_div(obj)
{
  let div = document.createElement("div");
  let content = document.createTextNode(obj);
  div.appendChild(content);

  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_newline()
{
  let div = document.createElement("br");
  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function write_hr()
{
  let div = document.createElement("hr");
  let current_div = document.getElementById("content");
  current_div.appendChild(div, current_div);
}

function forms_display_fr_hour()
{
  let now = new Date();

  let sent_time = int_to_day_fr(now.getDay()) + " "
                   + now.getDate() + " "
                   + int_to_month_fr(now.getMonth()) + " "
                   + "à "
                   + add_zero(now.getHours()) + "h"
                   + add_zero(now.getMinutes());

  return sent_time;
}

function write_sumup(obj)
{
  let form_inputs = obj
  let sent_time = forms_display_fr_hour();

  write_h1("Merci!!");
  write_span("Voici un résumé de ce que vous nous avez envoyé le ");
  write_span(sent_time + "...");
  write_newline();
  write_newline();
  write_newline();
  write_hr();

  write_newline();
  // ============ Region
  write_h2("La région:");

  write_p("Nom de la région: " + form_inputs[0]);
  write_p("Météo: " + form_inputs[1]);
  write_p("Géologie: " + form_inputs[2]);
  write_p("Nature et Fore: " + form_inputs[3]);


  write_newline();
  //============= Place
  write_h2("Le lieu:");
  write_p("Nom du lieu: " + form_inputs[4]);
  write_newline();

  write_h3("Son économie...");
  write_p("Fonction du lieu: " + form_inputs[5]);
  write_p("Quantité d'opportunités d'emploi: " + form_inputs[6]);
  write_p("Diversité des opportunités d'emploi: " + form_inputs[7]);
  write_p("Nombre d'habitants: " + form_inputs[8] + " habitants");
  write_p("Quantité des services disponibles: " + form_inputs[9]);
  write_p("Diversité des services disponibles: " + form_inputs[10]);
  write_p("Prix du logement: " + form_inputs[11]);

  write_newline();
  write_h3("Sa culture...");
  write_p("Histoire: " + form_inputs[12]);
  write_p("Politique: " + form_inputs[13]);
  write_p("Ambiance: " + form_inputs[14]);
}

/* ============================================================================= */
/* =============================== MAIN FUNCTIONS ============================== */
/* ============================================================================= */


function letters_only_check(obj)
{
  let user_input = obj.value;

  for (let i = 0; i < user_input.length; i++)
  {
    if ( !isLetter(user_input.charAt(i)) )
    {
      obj.value = "";
      return window.alert("Seulement les lettres sont acceptées ici!");
    }
  }
}

function digits_only_check(obj)
{
  let user_input = obj.value;

  for (let i = 0; i < user_input.length; i++)
  {
    if ( !isDigit(user_input.charAt(i)) )
    {
      obj.value = "";
      return window.alert("Seulement les chiffres sont acceptées ici!");
    }
  }
}

function no_special_char_check(obj)
{
  let user_input = obj.value;

  for (let i = 0; i < user_input.length; i++)
  {
    if ( !isAlphaNum(user_input.charAt(i)) )
    {
      obj.value = "";
      return window.alert("Aucun caractère spécial n'est accepté ici!");
    }
  }
}

function check_all()
{
  let form_inputs = get_form_inputs();

  window.alert("/!\\ *** Vous vous apprêtez à envoyer ces informations *** /!\\ " + "\n\n\n"
                + "Nom de la région: " + form_inputs[0] + "\n\n\n"
                + "Météo: " + form_inputs[1]  + "\n\n"
                + "Géologie: " + form_inputs[2]  + "\n\n"
                + "Faune et Flore: " + form_inputs[3]  + "\n\n\n\n"
                + "Nom du lieu: " + form_inputs[4]  + "\n\n\n"
                + "Fonction du lieu: " + form_inputs[5]  + "\n\n"
                + "Opportunités d'emploi: " + form_inputs[6]  + " || " + form_inputs[7]  + "\n\n"
                + "Population: " + form_inputs[8]  + " habitants" + "\n\n"
                + "Services: " + form_inputs[9]  + " || " + form_inputs[10]  + "\n\n"
                + "Prix du logement: " + form_inputs[11]  + "\n\n"
                + "Histoire: " + form_inputs[12] + "\n\n"
                + "Politique: " + form_inputs[13]  + "\n\n"
                + "Ambiance: " + form_inputs[14]  + "\n\n");
}


function send_sumup()
{
  let form_inputs = get_form_inputs();
  nodes_erase();
  write_sumup(form_inputs);

  let colorize_sent_time = document.getElementsByTagName("span");
  colorize_sent_time[1].style.color = "red";
  let content = document.getElementById("content");
  content.style.textAlign = "initial";
}

function go_to_access()
{
  let stylesheet = document.getElementsByTagName("link");

  let main = stylesheet[0].href;
  let alternate = stylesheet[1].href;

  stylesheet[0].href = alternate;
  stylesheet[1].href = main;
}
