/* ============================================================================= */
/* ============================ SECONDARY FUNCTIONS ============================ */
/* ============================================================================= */

//Converts now.getDay() number into a string written in French
function int_to_day_fr(day_nb)
{
  switch(day_nb)
  {
    case 1:
    return "Lundi";
    break;

    case 2:
    return "Mardi";
    break;

    case 3:
    return "Mercredi";
    break;

    case 4:
    return "Jeudi";
    break;

    case 5:
    return "Vendredi";
    break;

    case 6:
    return "Samedi";
    break;

    default:
    return "Dimanche";
    break;
  }
}

//Converts now.getDay() number into a string written in NZ English
function int_to_day_nz(day_nb)
{
  switch(day_nb)
  {
    case 1:
    return "Monday";
    break;

    case 2:
    return "Tuesday";
    break;

    case 3:
    return "Wednesday";
    break;

    case 4:
    return "Thursday";
    break;

    case 5:
    return "Friday";
    break;

    case 6:
    return "Saturday";
    break;

    default:
    return "Sunday";
    break;
  }
}

//Converts now.getMonth() number into a string written in French
function int_to_month_fr(month_nb)
{
  switch(month_nb)
  {
    case 0:
    return "Janvier";
    break;

    case 1:
    return "Février";
    break;

    case 2:
    return "Mars";
    break;

    case 3:
    return "Avril";
    break;

    case 4:
    return "Mai";
    break;

    case 5:
    return "Juin";
    break;

    case 6:
    return "Juillet";
    break;

    case 7:
    return "Août";
    break;

    case 8:
    return "Septembre";
    break;

    case 9:
    return "Octobre";
    break;

    case 10:
    return "Novembre";
    break;

    default:
    return "Décembre";
    break;
  }
}

//Converts now.getMonth() number into a string written in NZ English
function int_to_month_nz(month_nb)
{
  switch(month_nb)
  {
    case 0:
    return "January";
    break;

    case 1:
    return "February";
    break;

    case 2:
    return "March";
    break;

    case 3:
    return "April";
    break;

    case 4:
    return "May";
    break;

    case 5:
    return "June";
    break;

    case 6:
    return "July";
    break;

    case 7:
    return "August";
    break;

    case 8:
    return "Septembre";
    break;

    case 9:
    return "Octobre";
    break;

    case 10:
    return "Novembre";
    break;

    default:
    return "Decembre";
    break;
  }
}

//Takes French hour and adds +10 to match NZ hour
function convert_timezone()
{
  let now = new Date();
  let nz_hour = now.getHours()+10;

  if (nz_hour >= 24)
  {
    nz_hour %= 24;
  }

  return nz_hour;
}

//Adds a zero in front of minutes and hour when < 10
function add_zero(i)
{
  if (i < 10)
  {
    i = "0" + i;
  }

  return i;
}


/* ============================================================================= */
/* =============================== MAIN FUNCTIONS ============================== */
/* ============================================================================= */

//Displays France date and time
function display_fr_hour()
{
  let now = new Date();

  let dateinput = document.getElementById("date");


  dateinput.value= "En France nous sommes le "
                   + int_to_day_fr(now.getDay()) + " "
                   + now.getDate() + " "
                   + int_to_month_fr(now.getMonth()) + " "
                   + "et il est "
                   + add_zero(now.getHours()) + "h"
                   + add_zero(now.getMinutes());

  dateinput.style.border="none";
  dateinput.style.color="black";
}

//Displays Nz date and time
function display_nz_hour()
{
  let now = new Date();

  let dateinput = document.getElementById("date");


  dateinput.value= "In New-Zealand we're on "
                   + int_to_day_nz(now.getDay()) + " "
                   + now.getDate() + " "
                   + int_to_month_nz(now.getMonth()) + " "
                   + "and it is "
                   + add_zero(convert_timezone()) + "h"
                   + add_zero(now.getMinutes());

  dateinput.style.border="none";
  dateinput.style.color="black";
}


//Changes timezone and flag
function change_timezone_flag()
{
  let visible_flag = document.getElementsByClassName("icon");
  let flags = document.getElementsByClassName("icon_hidden");

  let french_flag = flags[0].src;
  let french_caption = flags[0].title;
  let nz_flag = flags[1].src;
  let nz_caption = flags[1].title;

  let current_flag = visible_flag[0].src;

  if(current_flag == french_flag)
  {
    visible_flag[0].src = nz_flag;
    visible_flag[0].title = nz_caption;
    display_nz_hour();
  }

  else
  {
    visible_flag[0].src = french_flag;
    visible_flag[0].title = french_caption;
    display_fr_hour();
  }
}


let counter = 0;
let blink_on;

function blink_timezone_flag()
{
  if (counter == 1)
  {
    counter = 0;
    clearInterval(blink_on);
  }

  else
  {
    counter++;
    blink_on = setInterval(change_timezone_flag, 1000);
  }
}


/* ============================================================================= */
/* ====================== GETTING TO ACCESS MODE FUNCTIONS ===================== */
/* ============================================================================= */

function go_to_access()
{
  let stylesheet = document.getElementsByTagName("link");

  let main = stylesheet[0].href;
  let alternate = stylesheet[1].href;

  stylesheet[0].href = alternate;
  stylesheet[1].href = main;
}
