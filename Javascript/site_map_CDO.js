/* ========================================================== */
/* ====================== Main Submenus ===================== */
/* ========================================================== */

function unfold_content()
{
  let content_list = document.getElementById("Content");

  if (content_list.style.display == "list-item")
  {
    content_list.style.display = "none";
  }

  else
  {
    content_list.style.display = "list-item";
  }
}

function unfold_img()
{
  let images_list = document.getElementById("Images");

  if (images_list.style.display == "list-item")
  {
    images_list.style.display = "none";
  }

  else
  {
    images_list.style.display = "list-item";
  }

}

function unfold_js()
{
  let js_list = document.getElementById("Javascript");

  if (js_list.style.display == "list-item")
  {
    js_list.style.display = "none";
  }

  else
  {
    js_list.style.display = "list-item";
  }

}

function unfold_css()
{
  let css_list = document.getElementById("Styles");

  if (css_list.style.display == "list-item")
  {
    css_list.style.display = "none";
  }

  else
  {
    css_list.style.display = "list-item";
  }
}

function unfold_xml()
{
  let xml_list = document.getElementById("XML");

  if (xml_list.style.display == "list-item")
  {
    xml_list.style.display = "none";
  }

  else
  {
    xml_list.style.display = "list-item";
  }
}


/* ========================================================== */
/* ==================== Content Submenus ==================== */
/* ========================================================== */

function unfold_collection()
{
  let coll_list = document.getElementById("Collection");

  if (coll_list.style.display == "list-item")
  {
    coll_list.style.display = "none";
  }

  else
  {
    coll_list.style.display = "list-item";
    coll_list.style.listStyleType = "none";
  }
}


function unfold_forms()
{
  let forms_list = document.getElementById("Forms");

  if (forms_list.style.display == "list-item")
  {
    forms_list.style.display = "none";
  }

  else
  {
    forms_list.style.display = "list-item";
    forms_list.style.listStyleType = "none";
  }
}

function unfold_misc()
{
  let misc_list = document.getElementById("Miscellaneous");

  if (misc_list.style.display == "list-item")
  {
    misc_list.style.display = "none";
  }

  else
  {
    misc_list.style.display = "list-item";
    misc_list.style.listStyleType = "none";
  }
}



/* ========================================================== */
/* ================= Access Mode Functions ================== */
/* ========================================================== */

function go_to_access()
{
  let stylesheet = document.getElementsByTagName("link");

  let main = stylesheet[0].href;
  let alternate = stylesheet[1].href;

  stylesheet[0].href = alternate;
  stylesheet[1].href = main;
}
