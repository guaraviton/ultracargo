//****************************************************
//Fun��o para selecionar XML a partir de dois XML
//informados e, um conjunto de campos  a serem
//comparados
//****************************************************
function Fu_RadioClick() {
  parent.main("chk", null, null);
}
//****************************************************
//Fun��o para direcionar evento click do Bot�o
//especial, para o asp/main
//****************************************************
function Fu_DireBotaoEspecial(pobj_Field) {
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Node = obj_XmlDom.createNode(1, pobj_Field.getAttribute("maincase"), "");
  obj_Node.setAttribute("line", pobj_Field.getAttribute("line"));
  obj_Node.setAttribute("page", pobj_Field.getAttribute("page"));
  obj_Root.appendChild(obj_Node);

  obj_Node = obj_XmlDom.createNode(1, "operation", "");
  obj_Node.setAttribute("value", "botaoespecial");
  obj_Root.appendChild(obj_Node);

  obj_Node = obj_XmlDom.createNode(1, "form", "");
  obj_Node.setAttribute("value", pobj_Field.getAttribute("form"));
  obj_Root.appendChild(obj_Node);
  main(null, null, obj_XmlDom.xml);
}







function DesCheckGrid(paLinha) {
  var obj_Div = document.getElementById("grid_Description");
  var obj_Chk = obj_Div.getElementsByTagName("INPUT");
  if (obj_Chk != null) {
    for (var vwi = 0; vwi <= obj_Chk.length - 1; vwi++) {
      var vwLinha = obj_Chk[vwi].getAttribute('line')
      if (parseInt(vwLinha) == parseInt(paLinha)) {
        obj_Chk[vwi].checked = false;
      }
    }
  }
}

function checkGrid(paFormOri, paXmlOri, paFormCom, paXmlCom, paCampos) {
  var obj_Div = document.getElementById("grid_Description");
  var obj_Chk = obj_Div.getElementsByTagName("INPUT");
  var vwObjXML_orig = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  var vwObjXML_comp = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  var vwCampos = paCampos.split('|');

  //***********************************
  // Valida os XML's
  //***********************************
  //Origem
  vwObjXML_orig.loadXML(paXmlOri);
  if (vwObjXML_orig.parseError != 0) {
    alert('N�o foi poss�vel carregar o XML de origem:' + vwObjXML_orig.parseError.reason);
    return false;
  }
  //Destino
  vwObjXML_comp.loadXML(paXmlCom);
  if (vwObjXML_comp.parseError != 0) {
    alert('N�o foi poss�vel carregar o XML de Compara��o(2):' + vwObjXML_comp.parseError.reason);
    return false;
  }
  //***********************************
  // Seleciona o n� de formul�rio
  // do XML de origem
  //***********************************
  var vwConcatenaValores = '';
  var vwObjRows = vwObjXML_orig.selectNodes("root/" + paFormOri + '/row')
  var vwArr_Campos = new Array(parseInt(vwObjRows.length - 1));
  for (var vwv = 0; vwv <= vwObjRows.length - 1; vwv++) {
    for (var vwl = 0; vwl <= vwCampos.length - 1; vwl++) {
      var vwValor = vwObjRows[vwv].selectSingleNode(vwCampos[vwl]);
      vwConcatenaValores += vwCampos[vwl] + ':' + vwValor.getAttribute('value') + '|'
    }
    var vwUltmCara = vwConcatenaValores.substr(vwConcatenaValores.length - 1, 1);
    if (vwUltmCara = '|') {
      vwConcatenaValores = vwConcatenaValores.substr(0, vwConcatenaValores.length - 1);
    }
    vwArr_Campos[vwv] = vwConcatenaValores;
    vwConcatenaValores = '';
  }

  //************************************
  //Le o XML de Compara��o
  //************************************
  var vwObjNodes_Comp = vwObjXML_comp.selectNodes("root/" + paFormCom + '/row');

  for (vwh = 0; vwh <= vwObjNodes_Comp.length - 1; vwh++) {
    var vwConcatenaValores = '';
    for (var vwl = 0; vwl <= vwCampos.length - 1; vwl++) {
      var vwValor = vwObjNodes_Comp[vwh].selectSingleNode(vwCampos[vwl]);
      vwConcatenaValores = vwConcatenaValores + vwCampos[vwl] + ':' + vwValor.getAttribute('value') + '|'
    }
    var vwUltmCara = vwConcatenaValores.substr(vwConcatenaValores.length - 1, 1)
    if (vwUltmCara = '|') {
      vwConcatenaValores = vwConcatenaValores.substr(0, vwConcatenaValores.length - 1);
    }
    //***********************************
    //Varre a O Array com os valores
    //***********************************
    var vwLinhaAtual = vwh
    if (obj_Chk.length > 0) {
      for (var vwa = 0; vwa <= vwArr_Campos.length - 1; vwa++) {
        if (vwConcatenaValores == vwArr_Campos[vwa]) {
          obj_Chk[vwLinhaAtual].checked = true;
        }
      }
    }
  }
}


function checkGrid_pagi(paFormOri, paXmlOri, paFormCom, paXmlCom, paCampos) {
  var obj_Div = document.getElementById("grid_Description");
  var obj_Chk = obj_Div.getElementsByTagName("INPUT");
  var vwObjXML_orig = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  var vwObjXML_comp = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  var vwCampos = paCampos.split('|');

  //***********************************
  // Valida os XML's
  //***********************************
  //Origem
  vwObjXML_orig.loadXML(paXmlOri);
  if (vwObjXML_orig.parseError != 0) {
    alert('N�o foi poss�vel carregar o XML de origem:' + vwObjXML_orig.parseError.reason);
    return false;
  }
  //Destino
  vwObjXML_comp.loadXML(paXmlCom);
  if (vwObjXML_comp.parseError != 0) {
    alert('N�o foi poss�vel carregar o XML de Compara��o(2):' + vwObjXML_comp.parseError.reason);
    return false;
  }
  //***********************************
  // Seleciona o n� de formul�rio
  // do XML de origem
  //***********************************
  var vwConcatenaValores = '';
  var vwObjRows = vwObjXML_orig.selectNodes("root/" + paFormOri + '/row');
  if (vwObjRows.length == 0) {
    return;
  }
  var vwArr_Campos = new Array(parseInt(vwObjRows.length - 1));

  for (var vwv = 0; vwv <= vwObjRows.length - 1; vwv++) {

    for (var vwl = 0; vwl <= vwCampos.length - 1; vwl++) {



      var vwValor = vwObjRows[vwv].selectSingleNode(vwCampos[vwl]);
      if (vwValor != null) {
        vwConcatenaValores += vwCampos[vwl] + ':' + vwValor.getAttribute('value') + '|'
      }

    }
    var vwUltmCara = vwConcatenaValores.substr(vwConcatenaValores.length - 1, 1);
    if (vwUltmCara = '|') {
      vwConcatenaValores = vwConcatenaValores.substr(0, vwConcatenaValores.length - 1);
    }
    vwArr_Campos[vwv] = vwConcatenaValores;
    vwConcatenaValores = '';
  }

  //************************************
  //Le o XML de Compara��o
  //************************************

  var vwObjNodes_Comp = vwObjXML_comp.selectNodes("root/" + paFormCom + '/row');


  for (vwh = 0; vwh <= vwObjNodes_Comp.length - 1; vwh++) {

    var vwConcatenaValores = '';
    for (var vwl = 0; vwl <= vwCampos.length - 1; vwl++) {
      var vwValor = vwObjNodes_Comp[vwh].selectSingleNode(vwCampos[vwl]);
      if (vwValor != null) {
        vwConcatenaValores += vwCampos[vwl] + ':' + vwValor.getAttribute('value') + '|'
      }
    }
    var vwUltmCara = vwConcatenaValores.substr(vwConcatenaValores.length - 1, 1)
    if (vwUltmCara = '|') {
      vwConcatenaValores = vwConcatenaValores.substr(0, vwConcatenaValores.length - 1);
    }
    //***********************************
    //Varre a O Array com os valores
    //***********************************
    var vwLinhaAtual = vwh
    if (obj_Chk.length > 0) {
      for (var vwa = 0; vwa <= vwArr_Campos.length - 1; vwa++) {
        if (vwConcatenaValores == vwArr_Campos[vwa]) {
          obj_Chk[vwLinhaAtual].checked = true;
          setCheck(obj_Chk[vwLinhaAtual])
        }
      }
    }
  }
}


function IniGrid() {
  var obj_Field = document.getElementById("grid_PK");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_Body");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_FixedBody");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_Description");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_Header");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_FixedHeader");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_New");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_Button");
  obj_Field.innerHTML = "";

  obj_Field = document.getElementById("grid_Dsb");
  obj_Field.innerHTML = "";

  delete obj_Field;
}



//****************************************************
function addGridHtml(plng_Field, pstr_Html) {
  //  try {
  cancelGrid();
  switch (plng_Field) {
    case 0:
      var obj_Field = document.getElementById("grid_PK");
      obj_Field.style.display = "none";
      break;
    case 1:
      var obj_Field = document.getElementById("grid_Body");
      obj_Field.style.display = "";
      break;
    case 2:
      var obj_Field = document.getElementById("grid_FixedBody");
      obj_Field.style.display = "";
      break;
    case 3:
      var obj_Field = document.getElementById("grid_Description");
      obj_Field.style.display = "";
      break;
    case 4:
      var obj_Field = document.getElementById("grid_Header");
      obj_Field.style.display = "";
      break;
    case 5:
      var obj_Field = document.getElementById("grid_FixedHeader");
      obj_Field.style.display = "";
      break;
    case 6:
      var obj_Field = document.getElementById("grid_New");
      obj_Field.style.display = "none";
      break;
    case 7:
      var obj_Field = document.getElementById("grid_Button");
      obj_Field.style.display = "none";
      break;
    case 8:
      var obj_Field = document.getElementById("grid_Dsb");
      obj_Field.style.display = "none";
      break;
  }


  obj_Field.innerHTML = pstr_Html;

  if (plng_Field == 6 || plng_Field == 7) {
    span();
  }
  if (!bln_HidePartition) {
    var obj_Field = document.getElementById("grid_Partition");
    obj_Field.style.display = "";
  }

  var obj_Field = document.getElementById("grid_Dsb");
  if (bln_Enable) {
    obj_Field.style.display = "none";
  } else {
    obj_Field.style.display = "";
  }

  delete obj_Field;
}

var str_Operation = "ins";
var int_Line = 0;
var int_Top = 0;

function newGrid() {
  document.body.scrollLeft = 0
  scrolling_f()

  if (!bln_Enable) {
    return;
  }
  cancelGrid();
  var obj_Field = document.getElementById("labelButton");
  if (obj_Field != null) {
    obj_Field.innerText = "Novo";
  }
  var obj_Field = document.getElementById("labelItem");
  if (obj_Field != null) {
    obj_Field.innerText = "Novo";
  }
  str_Operation = "ins";
  var obj_Button = document.getElementById("grid_Button");
  var obj_Field = document.getElementById("grid_New");
  obj_Button.style.display = "";
  obj_Field.style.display = "";
  var obj_Tables = obj_Field.getElementsByTagName("TABLE");
  var obj_Inputs = obj_Field.getElementsByTagName("INPUT");
  var obj_Cbos = obj_Field.getElementsByTagName("SELECT");
  var int_Width = 0;
  int_Top = document.body.scrollTop;
  var int_Height = document.body.offsetHeight;
  var int_FieldHeight = 0;
  for (var int_T = 0; int_T < obj_Inputs.length; int_T++) {
    obj_Inputs[int_T].disabled = false;
  }
  for (var int_T = 0; int_T < obj_Cbos.length; int_T++) {
    obj_Cbos[int_T].disabled = false;
    obj_Cbos[int_T].value = "";
  }
  for (var int_T = 0; int_T < 2; int_T++) {
    if (int_T == 1) {
      int_Width = obj_Tables[int_T].offsetWidth;
    }
    int_FieldHeight += obj_Tables[int_T].offsetHeight;
  }
  var bln_Scroll = false;
  if (int_Width > document.body.offsetWidth) {
    bln_Scroll = true;
  }
  if (bln_Scroll) {
    obj_Field.style.top = (((int_Top + int_Height) - int_FieldHeight) - 16);
    obj_Button.style.top = (((int_Top + int_Height) - int_FieldHeight) - 16);
  } else {
    obj_Field.style.top = ((int_Top + int_Height) - int_FieldHeight);
    obj_Button.style.top = ((int_Top + int_Height) - int_FieldHeight);
  }
  if (obj_Inputs != null) {
    if (obj_Inputs[0] != null) {
      for (var int_T = 0; int_T < obj_Inputs.length; int_T++) {
        if (obj_Inputs[int_T].getAttribute("type") != "hidden") {
          if (obj_Inputs[int_T].getAttribute("readOnly") != true && obj_Inputs[int_T].getAttribute("disabled") != true) {
            obj_Inputs[int_T].focus();
            break;
          }
        }
      }
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[newGrid]");
  //  }
  //  finally {
  delete obj_Field;
  delete obj_Button;
  delete obj_Tables;
  delete obj_Inputs;
  delete obj_Cbos;
  delete int_Width;
  delete int_Height;
  delete int_FieldHeight;
  delete bln_Scroll;
  //  }
}

function editGrid(pobj_Field) {
  //zalert("S");
  //  try {
  if (!bln_Enable) {
    return;
  }
  cancelGrid();
  var obj_Field = document.getElementById("labelButton");
  if (obj_Field != null) {
    obj_Field.innerText = "Editar";
  }
  var obj_Field = document.getElementById("labelItem");
  if (obj_Field != null) {
    obj_Field.innerText = "Editar";
  }
  str_Operation = "upd";
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Div = null;
  var obj_Row = null;
  var str_Element = "pobj_Field";
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    while (obj_Div == null && obj_Div == null) {
      str_Element += ".parentElement";
      var obj_Element = eval(str_Element);
      switch (obj_Element.tagName) {
        case "DIV":
          if (obj_Div == null) {
            obj_Div = obj_Element;
          }
          break;
        case "TR":
          if (obj_Row == null) {
            obj_Row = obj_Element;
          }
          break;
      }
    }
    if (obj_Div != null && obj_Div != null) {
      var int_Top = obj_Div.offsetTop + obj_Row.offsetTop;
      var obj_Button = document.getElementById("grid_Button");
      var obj_Field = document.getElementById("grid_New");
      obj_Button.style.top = (int_Top - 18);
      obj_Field.style.top = (int_Top - 18);
      obj_Button.style.display = "";
      obj_Field.style.display = "";
      int_Line = (pobj_Field.getAttribute("line") != null) ? Math.floor(pobj_Field.getAttribute("line")) : 0;
      var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
      obj_Node.setAttribute("line", int_Line);
      obj_Root.appendChild(obj_Node);
      var obj_Node = obj_XmlDom.createNode(1, "operation", "");
      obj_Node.setAttribute("value", "edt");
      obj_Root.appendChild(obj_Node);
      //zalert("xml: " + obj_XmlDom.xml);
      main(null, null, obj_XmlDom.xml);
      //zalert("arr�!");
      var obj_Field = document.getElementById("grid_New");
      var obj_Cols = obj_Field.all("Col");
      var int_Cols = 1;
      if (obj_Cols.length != null) {
        var int_Cols = obj_Cols.length;
      }
      if (obj_Cols[0] != null) {
        for (var int_T = 0; int_T < int_Cols; int_T++) {
          var obj_Fields = obj_Cols[int_T].getElementsByTagName("INPUT");
          if (obj_Fields[0] == null) {
            var obj_Fields = obj_Cols[int_T].getElementsByTagName("SELECT");
          }
          if (obj_Fields[0] != null) {
            if (obj_Fields[0].getAttribute("readOnly") != true && obj_Fields[0].getAttribute("disabled") != true) {
              obj_Fields[0].focus();
              break;
            }
          }
        }
      }
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[editGrid]");
  //  }
  //  finally {
  delete obj_Field;
  delete str_Operation;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Div;
  delete obj_Row;
  delete str_Element;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Element;
  delete int_Top;
  delete obj_Node;
  delete obj_Cols;
  delete int_Cols;
  delete obj_Fields;
  //  }
}

function loadRow(pstr_XML) {

  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML(pstr_XML);
  if (obj_XmlDom.parseError == 0) {
    var obj_Node = obj_XmlDom.selectSingleNode("root/*");
    if (obj_Node != null) {
      var str_Frame = obj_Node.nodeName;
      var obj_Field = document.getElementById("grid_New");
      var obj_Elements = obj_Field.getElementsByTagName("INPUT");
      for (var int_E = 0; int_E < obj_Elements.length; int_E++) {
        var obj_Element = obj_Elements[int_E];
        var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
        //zalert("AAA: " + obj_XmlDom.xml);
        var obj_Nodes = obj_XmlDom.selectNodes("root/" + str_Frame + "/" + str_ElementId);
        if (obj_Nodes[0] != null) {
          switch (obj_Element.getAttribute("type")) {
            case "hidden":
            case "text":
              //[f
              for (var int_N = 0; int_N < obj_Nodes.length; int_N++) {
                var str_Value = (obj_Nodes[int_N].getAttribute("value") != null) ? obj_Nodes[int_N].getAttribute("value") : "";
                var str_PK = (obj_Nodes[int_N].getAttribute("pk") != null) ? obj_Nodes[int_N].getAttribute("pk") : "";
                var str_Lock = (obj_Nodes[int_N].getAttribute("lock") != null) ? obj_Nodes[int_N].getAttribute("lock") : "";
                obj_Element.value = unescape(str_Value);
                obj_Element.setAttribute("server_value", str_Value);
                if (str_PK == "true" || str_Lock == "true") {
                  obj_Element.disabled = true;
                }
              }
              break;
            case "checkbox":
              for (var int_N = 0; int_N < obj_Nodes.length; int_N++) {
                var str_Value = (obj_Nodes[int_N].getAttribute("value") != null) ? obj_Nodes[int_N].getAttribute("value") : "";
                var str_PK = (obj_Nodes[int_N].getAttribute("pk") != null) ? obj_Nodes[int_N].getAttribute("pk") : "";
                var str_Lock = (obj_Nodes[int_N].getAttribute("lock") != null) ? obj_Nodes[int_N].getAttribute("lock") : "";
                obj_Element.setAttribute("server_value", str_Value);
                if (str_PK == "true" || str_Lock == "true") {
                  obj_Element.disabled = true;
                }
                if (str_Value == obj_Element.value.split("::")[0]) {
                  obj_Element.checked = true;
                }
              }
              break;
            case "radio":
              for (var int_N = 0; int_N < obj_Nodes.length; int_N++) {
                var str_Value = (obj_Nodes[int_N].getAttribute("value") != null) ? obj_Nodes[int_N].getAttribute("value") : "";
                var str_PK = (obj_Nodes[int_N].getAttribute("pk") != null) ? obj_Nodes[int_N].getAttribute("pk") : "";
                var str_Lock = (obj_Nodes[int_N].getAttribute("lock") != null) ? obj_Nodes[int_N].getAttribute("lock") : "";
                obj_Element.value = str_Value;
                obj_Element.setAttribute("server_value", str_Value);
                if (str_PK == "true" || str_Lock == "true") {
                  obj_Element.disabled = true;
                }
                if (obj_Element.value == str_Value) {
                  obj_Element.checked = true;
                }
              }
              break;
          }
        }
      }
      var obj_Elements = obj_Field.getElementsByTagName("SELECT");
      for (var int_E = 0; int_E < obj_Elements.length; int_E++) {
        var obj_Element = obj_Elements[int_E];
        var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
        var str_ElementPk = (obj_Element.getAttribute("pk") != null) ? obj_Element.getAttribute("pk") : "";
        var obj_Nodes = obj_XmlDom.selectNodes("root/" + str_Frame + "/" + str_ElementId);
        if (obj_Nodes[0] != null) {
          switch (obj_Element.getAttribute("type")) {
            case "select-one":
              for (var int_N = 0; int_N < obj_Nodes.length; int_N++) {
                var str_PK = (obj_Nodes[int_N].getAttribute("pk") != null) ? obj_Nodes[int_N].getAttribute("pk") : "";
                var str_Lock = (obj_Nodes[int_N].getAttribute("lock") != null) ? obj_Nodes[int_N].getAttribute("lock") : "";
                if (str_PK == "true" || str_Lock == "true") {
                  obj_Element.disabled = true;
                  obj_Element.setAttribute("server_value", str_Value);
                }
              }
              break;
          }
        }
        var obj_Nodes = obj_XmlDom.selectNodes("root/" + str_Frame + "/" + ((str_ElementPk != "") ? str_ElementPk : str_ElementId));
        if (obj_Nodes[0] != null) {
          switch (obj_Element.getAttribute("type")) {
            case "select-one":
              for (var int_N = 0; int_N < obj_Nodes.length; int_N++) {
                var str_Value = (obj_Nodes[int_N].getAttribute("value") != null) ? obj_Nodes[int_N].getAttribute("value") : "";
                obj_Element.value = str_Value;
                obj_Element.setAttribute("server_value", str_Value);
              }
              break;
          }
        }
      }
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[loadRow]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Node;
  delete str_Frame;
  delete obj_Field;
  delete obj_Elements;
  delete obj_Element;
  delete str_ElementId;
  delete obj_Nodes;
  delete str_Value;
  delete str_PK;
  delete str_Lock;
  delete str_ElementPk;
  //  }
}

function check() {
  //  try {
  var obj_Description = document.getElementById("grid_Description");
  var obj_Chks = obj_Description.all("Chk");
  if (obj_Chks != null) {
    if (obj_Chks.length != null) {
      for (var int_I = 0; int_I < obj_Chks.length; int_I++) {
        var str_Mrk = (obj_Chks[int_I].getAttribute("mark") != null) ? obj_Chks[int_I].getAttribute("mark") : "";
        if (str_Mrk == "true") {
          obj_Chks[int_I].checked = true;
        } else {
          obj_Chks[int_I].checked = false;
        }
      }
    } else {
      var str_Mrk = (obj_Chks.getAttribute("mark") != null) ? obj_Chks.getAttribute("mark") : "";
      if (str_Mrk == "true") {
        obj_Chks.checked = true;
      } else {
        obj_Chks.checked = false;
      }
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[check]");
  //  }
  //  finally {
  delete obj_Description;
  delete obj_Chks;
  delete str_Mrk;
  //  }
}

function saveGrid() {
  //zalert("saveGrid");
  //  try {
  if (!bln_Enable) {
    return;
  }

  //procaqui

  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");

  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");


  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Field = document.getElementById("grid_New");
    var obj_Cols = obj_Field.all("Col");
    var int_Cols = 1;
    if (obj_Cols.length != null) {
      var int_Cols = obj_Cols.length;
    }
    var obj_Frame = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Frame.setAttribute("line", int_Line);
    if (obj_Cols.length == null) {
      obj_Cols = new Array(obj_Cols)
    }
    if (obj_Cols[0] != null) {
      var obj_Elements = obj_Field.getElementsByTagName("INPUT");
      if (obj_Elements[0] != null) {
        for (var int_E = 0; int_E < obj_Elements.length; int_E++) {
          var obj_Element = obj_Elements[int_E];
          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          switch (obj_Element.getAttribute("type")) {
            case "hidden":
              var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
              obj_Node.setAttribute("value", escape(obj_Element.value));
              obj_Frame.appendChild(obj_Node);
              break;
          }
        }
      }
      for (var int_E = 0; int_E < int_Cols; int_E++) {
        var obj_Elements = obj_Cols[int_E].getElementsByTagName("INPUT");

        if (obj_Elements[0] != null) {
          var obj_Element = obj_Elements[0];

          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
          switch (obj_Element.getAttribute("type")) {
            case "text":
              obj_Node.setAttribute("value", escape(obj_Element.value));
              obj_Node.setAttribute("server_value", escape(obj_Element.server_value));
              break;
            case "checkbox":
              if (obj_Element.value.split("::").length == 2) {
                if (obj_Element.checked) {
                  obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[0]));
                } else {
                  obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[1]));
                }
              }
              break;
            case "radio":
              if (obj_Element.checked) {
                obj_Node.setAttribute("value", escape(obj_Element.value));
                obj_Node.setAttribute("server_value", escape(obj_Element.server_value));
              } else {
                obj_Node.setAttribute("value", "");
              }
              break;
          }
          obj_Frame.appendChild(obj_Node);
        }
        var obj_Elements = obj_Cols[int_E].getElementsByTagName("SELECT");
        if (obj_Elements[0] != null) {
          var obj_Element = obj_Elements[0];
          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
          switch (obj_Element.getAttribute("type")) {
            case "select-one":
              var str_Text = "";
              if (obj_Element.selectedIndex != -1) {
                str_Text = obj_Element[obj_Element.selectedIndex].text;
              }
              obj_Node.setAttribute("value", str_Text);
              obj_Node.setAttribute("server_value", unescape(obj_Element.server_value));
              break;
          }
          obj_Frame.appendChild(obj_Node);
        }
      }
    }
    obj_Root.appendChild(obj_Frame);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", str_Operation);
    obj_Root.appendChild(obj_Node);
    //zalert(obj_XmlDom.xml);
    main(null, null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[saveGrid]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Field;
  delete obj_Cols;
  delete int_Cols;
  delete obj_Elements;
  delete obj_Element;
  delete str_ElementId;
  delete obj_Node;
  //  }
}

function deleteGridCheck(pobj_Field) {
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;

  var obj_Node = obj_XmlDom.createNode(1, pobj_Field.getAttribute("formsele"), "");
  obj_Node.setAttribute("line", pobj_Field.getAttribute("line"));
  obj_Node.setAttribute("chave", pobj_Field.getAttribute("chave"));
  obj_Root.appendChild(obj_Node);

  obj_Node = obj_XmlDom.createNode(1, "operation", "");
  obj_Node.setAttribute("value", "check_del");
  obj_Root.appendChild(obj_Node);

  main(null, null, obj_XmlDom.xml);
}


function deleteGrid(pobj_Field) {
  //  try {
  if (!bln_Enable) {
    return;
  }
  var str_Return = parent.msgBox("Confirma a exclus�o do registro?\n\n", null, "    OK    ", "Cancelar");
  if (str_Return == null || str_Return == 1) {
    return;
  }
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    int_Line = (pobj_Field.getAttribute("line") != null) ? Math.floor(pobj_Field.getAttribute("line")) : 0;
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Node.setAttribute("line", int_Line);
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "del");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[deleteGrid]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Node;
  //  }
}

function cancelGrid() {
  //  try {
  str_Operation = "ins";
  var obj_Field = document.getElementById("labelItem");
  if (obj_Field != null) {
    obj_Field.innerText = "";
  }
  var obj_Field = document.getElementById("grid_New");
  var obj_Inputs = obj_Field.getElementsByTagName("INPUT");
  for (var int_I = 0; int_I < obj_Inputs.length; int_I++) {
    switch (obj_Inputs[int_I].getAttribute("type")) {
      case "text":
        obj_Inputs[int_I].value = "";
        break;
      case "checkbox":
      case "radio":
        obj_Inputs[int_I].checked = false;
        break;
    }
  }
  obj_Field.style.display = "none";
  var obj_Field = document.getElementById("grid_Button");

  obj_Field.style.display = "none";
  int_Line = 0;
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[cancelGrid]");
  //  }
  //  finally {
  delete obj_Field;
  delete obj_Inputs;
  //  }
}


function cancelButton() {
  var obj_Field = document.getElementById("labelItem");
  obj_Field.innerText = "";

  var obj_Field = document.getElementById("grid_New");
  obj_Field.style.display = "none";


  var obj_Field = document.getElementById("grid_Button");
  obj_Field.style.display = "none";

  delete obj_Field;
}


function calendarField() {
  //  try {
  var obj_Field = (arguments[0] != null) ? arguments[0] : null;
  if (obj_Field != null) {
    if (obj_Field.getAttribute("disabled") == true) {
      return;
    }
  }
  calendar(obj_Field);
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[calendarField]");
  //  }
  //  finally {
  delete obj_Field;
  //  }
}

function popUpGrid() {
  //  try {
  var str_Operation = (arguments[0] != null) ? arguments[0] : "";
  var obj_FieldToFill = (arguments[1] != null) ? arguments[1] : null;
  if (obj_FieldToFill != null) {
    if (obj_FieldToFill.getAttribute("disabled") == true) {
      return;
    }
  }
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Field = document.getElementById("grid_New");
    var obj_Elements = obj_Field.getElementsByTagName("INPUT");
    var obj_Frame = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Frame.setAttribute("line", int_Line);
    for (var int_E = 0; int_E < obj_Elements.length; int_E++) {
      var obj_Element = obj_Elements[int_E];
      var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
      var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
      switch (obj_Element.getAttribute("type")) {
        case "hidden":
        case "text":
          obj_Node.setAttribute("value", escape(obj_Element.value));
          break;
        case "checkbox":
          if (obj_Element.checked) {
            obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[0]));
          } else {
            obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[1]));
          }
          break;
        case "radio":
          if (obj_Element.checked) {
            obj_Node.setAttribute("value", escape(obj_Element.value));
          } else {
            obj_Node.setAttribute("value", "");
          }
          break;
      }
      obj_Frame.appendChild(obj_Node);
    }
    obj_Root.appendChild(obj_Frame);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", str_Operation);
    obj_Root.appendChild(obj_Node);
    main(str_Operation, obj_FieldToFill, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[popUpGrid]");
  //  }
  //  finally {
  delete str_Operation;
  delete obj_FieldToFill;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Elements;
  delete obj_Node;
  delete obj_Attribute;
  delete obj_Element;
  delete str_ElementId;
  //  }
}

function linkedGrid(pobj_Field) {
  //  try {
  //zalert("linkedGrid");
  if (pobj_Field.getAttribute("sublinha") != '0') {
    var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
    obj_XmlDom.loadXML("<root/>");
    var obj_Root = obj_XmlDom.documentElement;
    var int_LinkedLine = pobj_Field.getAttribute("line");
    var obj_Field = document.getElementById("grid_PK");
    var obj_Frame = obj_Field.all("FRAME");
    var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
    if (str_Frame != "") {
      var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
      obj_Node.setAttribute("line", int_LinkedLine);
      obj_Root.appendChild(obj_Node);
      var obj_Node = obj_XmlDom.createNode(1, "operation", "");
      obj_Node.setAttribute("value", "lnk");
      obj_Root.appendChild(obj_Node);
      main(null, null, obj_XmlDom.xml);
    }
    //  }
    //  catch(obj_Exception) {
    //    parent.exception(obj_Exception,"Grid[linkedGrid]");
    //  }
    //  finally {
    delete obj_XmlDom;
    delete obj_Root;
    delete int_LinkedLine;
    delete obj_Field;
    delete obj_Frame;
    delete str_Frame;
    delete obj_Node;
  }
  //  }
}

function listGrid() {
  //  try {
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Root.appendChild(obj_Node);
    main((str_Frame + "_lst"), null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[listGrid]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Node;
  //  }
}

function Fu_PaginaDire(paTecla, paObj, paNrPags) {
  if (paTecla.keyCode != 13) {
    if (paTecla.keyCode <= 47 || paTecla.keyCode >= 58) {
      return false;
    }
    return true;
  }

  if (parseInt(paObj.value) == 0 || paObj.value == '') {
    paObj.value = 1;
  }
  if (parseInt(paNrPags) <= 1) {
    paObj.value = 1;
    return false;
  }
  if (parseInt(paObj.value) > parseInt(paNrPags)) {
    paObj.value = parseInt(paNrPags)
  }
  var int_Page = paObj.value
  if (int_Page != 0) {
    var obj_Field = document.getElementById("grid_PK");
    var obj_Frame = obj_Field.all("FRAME");
    var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
    var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
    obj_XmlDom.loadXML("<root/>");
    var obj_Root = obj_XmlDom.documentElement;
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Node.setAttribute("tipo", "table");
    obj_Node.setAttribute("page", int_Page);
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "lst");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[lastPageGrid]");
  //  }
  //  finally {
  delete int_Page;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Node;


}

function lastPageGrid() {
  //  try {
  var int_Page = (arguments[0] != null) ? arguments[0] : 0;
  if (int_Page != 0) {
    var obj_Field = document.getElementById("grid_PK");
    var obj_Frame = obj_Field.all("FRAME");
    var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
    var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
    obj_XmlDom.loadXML("<root/>");
    var obj_Root = obj_XmlDom.documentElement;
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Node.setAttribute("tipo", "table");
    obj_Node.setAttribute("page", int_Page);
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "lst");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[lastPageGrid]");
  //  }
  //  finally {
  delete int_Page;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Node;
  //  }
}

function nextPageGrid() {

  var int_Page = (arguments[0] != null) ? arguments[0] : 0;
  if (int_Page != 0) {
    var obj_Field = document.getElementById("grid_PK");
    var obj_Frame = obj_Field.all("FRAME");
    var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
    var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
    obj_XmlDom.loadXML("<root/>");
    var obj_Root = obj_XmlDom.documentElement;
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Node.setAttribute("tipo", "table");
    obj_Node.setAttribute("page", int_Page);
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "nxt");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  delete int_Page;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Node;
  //  }
}

function clearGrid() {
  //  try {

  //*******************************
  var obj_Field = document.getElementById("grid_Body");
  obj_Field.innerHTML = "";

  var obj_Field = document.getElementById("grid_FixedBody");
  obj_Field.innerHTML = "";

  var obj_Field = document.getElementById("grid_Description");
  obj_Field.innerHTML = "";

  scrolling_f()

  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[clearGrid]");
  //  }
  //  finally {
  delete obj_Field;
  //  }
}

function changeCombo(pobj_Field) {
  //  try {
  var str_Value = pobj_Field.getAttribute("value");
  var str_ElementId = (pobj_Field.getAttribute("id") != null) ? pobj_Field.getAttribute("id") : "";
  var str_ElementPk = (pobj_Field.getAttribute("pk") != null) ? pobj_Field.getAttribute("pk") : "";
  if (str_ElementPk != "") {
    var obj_Field = document.getElementById("grid_New");
    var obj_Element = obj_Field.all(str_ElementPk);
    if (obj_Element != null) {
      obj_Element.value = str_Value;
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[changeCombo]");
  //  }
  //  finally {
  delete str_Value;
  delete str_ElementId;
  delete str_ElementPk;
  delete obj_Field;
  delete obj_Element;
  //  }
}

function changeCombo_val(paObjAtual) {
  var obj_Field = document.getElementById("grid_New");
  var obj_select = obj_Field.getElementsByTagName("SELECT");
  var obj_input = obj_Field.getElementsByTagName("INPUT");
  var obj_img = obj_Field.getElementsByTagName("IMG");
  var pstr_Operation = 'validar_combo_grid_new';
  parent.main(pstr_Operation, null, '', paObjAtual, obj_select, obj_input, obj_img);
}



function Fu_RetornaObjetos(paTipo, paObjEspecifico) {
  var obj_Field = document.getElementById("grid_New");

  var obj_select = obj_Field.getElementsByTagName("SELECT");
  var obj_input = obj_Field.getElementsByTagName("INPUT");
  var obj_img = obj_Field.getElementsByTagName("IMG");


  if (paObjEspecifico == null || paObjEspecifico == '') {
    if (paTipo == 'SELECT') {
      return obj_select
    }

    if (paTipo == 'INPUT') {
      return obj_input
    }


    if (paTipo == 'IMG') {
      return obj_img
    }
  } else // Retorna objeto especifico.
  {
    if (paTipo == 'SELECT') {
      for (var vwj = 0; vwj <= obj_select.length - 1; vwj++) {

        if (obj_select[vwj].id == paObjEspecifico) {
          return obj_select[vwj];
        }
      }
    }

    if (paTipo == 'INPUT') {
      for (var vwj = 0; vwj <= obj_input.length - 1; vwj++) {

        if (obj_input[vwj].id == paObjEspecifico) {
          return obj_input[vwj];
        }
      }
    }


    if (paTipo == 'IMG') {
      for (var vwj = 0; vwj <= obj_img.length - 1; vwj++) {

        if (obj_img[vwj].id == paObjEspecifico) {
          return obj_img[vwj];
        }
      }
    }


  }
}

function Fu_RetornaObjetos_CheckBox() {
  var obj_Div = document.getElementById("grid_Description");
  var obj_Chk = obj_Div.getElementsByTagName("INPUT");
  return obj_Chk;
}


function onChangeCombo() {
  //  try {
  var str_Operation = (arguments[0] != null) ? arguments[0] : "";
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Field = document.getElementById("grid_New");
    var obj_Cols = obj_Field.all("Col");
    var int_Cols = 1;
    if (obj_Cols.length != null) {
      var int_Cols = obj_Cols.length;
    }
    var obj_Frame = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Frame.setAttribute("line", int_Line);
    if (obj_Cols[0] != null) {
      var obj_Elements = obj_Field.getElementsByTagName("INPUT");
      if (obj_Elements[0] != null) {
        for (var int_E = 0; int_E < obj_Elements.length; int_E++) {
          var obj_Element = obj_Elements[int_E];
          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          switch (obj_Element.getAttribute("type")) {
            case "hidden":
              var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
              obj_Node.setAttribute("value", escape(obj_Element.value));
              obj_Frame.appendChild(obj_Node);
              break;
          }
        }
      }
      for (var int_E = 0; int_E < int_Cols; int_E++) {
        var obj_Elements = obj_Cols[int_E].getElementsByTagName("INPUT");
        if (obj_Elements[0] != null) {
          var obj_Element = obj_Elements[0];
          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
          switch (obj_Element.getAttribute("type")) {
            case "text":
              obj_Node.setAttribute("value", escape(obj_Element.value));
              break;
            case "checkbox":
              if (obj_Element.value.split("::").length == 2) {
                if (obj_Element.checked) {
                  obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[0]));
                } else {
                  obj_Node.setAttribute("value", escape(obj_Element.value.split("::")[1]));
                }
              }
              break;
            case "radio":
              if (obj_Element.checked) {
                obj_Node.setAttribute("value", escape(obj_Element.value));
              } else {
                obj_Node.setAttribute("value", "");
              }
              break;
          }
          obj_Frame.appendChild(obj_Node);
        }
        var obj_Elements = obj_Cols[int_E].getElementsByTagName("SELECT");
        if (obj_Elements[0] != null) {
          var obj_Element = obj_Elements[0];
          var str_ElementId = (obj_Element.getAttribute("id") != null) ? obj_Element.getAttribute("id") : "";
          var obj_Node = obj_XmlDom.createNode(1, str_ElementId, "");
          switch (obj_Element.getAttribute("type")) {
            case "select-one":
              var str_Text = "";
              if (obj_Element.selectedIndex != -1) {
                str_Text = obj_Element[obj_Element.selectedIndex].text;
              }
              obj_Node.setAttribute("value", str_Text);
              break;
          }
          obj_Frame.appendChild(obj_Node);
        }
      }
    }
    obj_Root.appendChild(obj_Frame);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", str_Operation);
    obj_Root.appendChild(obj_Node);
    main(str_Operation, null, obj_XmlDom.xml);
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[onChangeCombo]");
  //  }
  //  finally {
  delete str_Operation;
  //  }
}

function getSelectedItens() {
  //  try {
  var str_TableId = (arguments[0] != null) ? arguments[0] : "";
  if (str_TableId != "") {
    var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
    obj_XmlDom.loadXML("<root/>");
    var obj_Root = obj_XmlDom.documentElement;
    var obj_TableRoot = obj_XmlDom.createNode(1, str_TableId, "");
    obj_TableRoot.setAttribute("tipo", "table");
    var obj_Description = document.getElementById("grid_Description");
    var obj_Chks = obj_Description.all("Chk");
    if (obj_Chks != null) {
      if (obj_Chks.length != null) {
        for (var int_I = 0; int_I < obj_Chks.length; int_I++) {
          if (obj_Chks[int_I].checked) {
            var str_Line = (obj_Chks[int_I].getAttribute("line") != null) ? obj_Chks[int_I].getAttribute("line") : "";
            var obj_Node = obj_XmlDom.createNode(1, "row", "");
            obj_Node.setAttribute("line", str_Line);
            obj_TableRoot.appendChild(obj_Node);
          }
        }
      } else {
        if (obj_Chks.checked) {
          var str_Line = (obj_Chks.getAttribute("line") != null) ? obj_Chks.getAttribute("line") : "";
          var obj_Node = obj_XmlDom.createNode(1, "row", "");
          obj_Node.setAttribute("line", str_Line);
          obj_TableRoot.appendChild(obj_Node);
        }
      }
    }
    obj_Root.appendChild(obj_TableRoot);
    return obj_XmlDom.xml;
  } else {
    return "";
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[getSelectedItens]");
  //    return "";
  //  }
  //  finally {
  delete str_TableId;
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_TableRoot;
  delete obj_Description;
  delete obj_Chks;
  delete str_Line;
  delete obj_Node;
  //  }
}




function span() {
  //  try {
  var obj_Field = document.getElementById("grid_New");
  obj_Field.style.display = "";
  var int_Width = obj_Field.offsetWidth;
  obj_Field.style.display = "none";
  var obj_Field = document.getElementById("grid_Dsb");
  var obj_Img = obj_Field.getElementsByTagName("IMG");
  if (obj_Img[0] != null) {
    obj_Img[0].style.width = (document.body.offsetWidth - 40);
    if (int_Width < document.body.offsetWidth) {
      obj_Img[0].style.height = (document.body.offsetHeight - 20);
    } else {
      obj_Img[0].style.height = (document.body.offsetHeight - 37);
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[span]");
  //  }
  //  finally {
  delete obj_Field;
  delete obj_Img;
  //  }
}

var bln_Enable = true;

function enableGrid() {
  //  try {
  bln_Enable = true;
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "enb");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  var obj_Field = document.getElementById("grid_Dsb");
  obj_Field.style.display = "none";
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[enableGrid]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Node;
  //  }
}

function disableGrid() {
  //  try {
  bln_Enable = false;
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";
  if (str_Frame != "") {
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "dsb");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml);
  }
  var obj_Field = document.getElementById("grid_Dsb");
  obj_Field.style.display = "";
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[disableGrid]");
  //  }
  //  finally {
  delete obj_XmlDom;
  delete obj_Root;
  delete obj_Field;
  delete obj_Frame;
  delete str_Frame;
  delete obj_Node;
  //  }
}

function setCheck(pobj_Field) {
  //  try {
  var obj_XmlDom = new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
  obj_XmlDom.loadXML("<root/>");
  var obj_Root = obj_XmlDom.documentElement;
  var int_LinkedLine = pobj_Field.getAttribute("line");
  var int_LinkedPage = pobj_Field.getAttribute("page");

  var obj_Field = document.getElementById("grid_PK");
  var obj_Frame = obj_Field.all("FRAME");
  var str_Frame = (obj_Frame != null) ? obj_Frame.value : "";

  if (str_Frame != "") {
    var obj_Node = obj_XmlDom.createNode(1, str_Frame, "");
    obj_Node.setAttribute("line", int_LinkedLine);
    obj_Node.setAttribute("page", int_LinkedPage);
    obj_Node.setAttribute("checked", pobj_Field.checked.toString());
    obj_Node.setAttribute("mark", pobj_Field.getAttribute("mark"));
    obj_Root.appendChild(obj_Node);
    var obj_Node = obj_XmlDom.createNode(1, "operation", "");
    obj_Node.setAttribute("value", "chk");
    obj_Root.appendChild(obj_Node);
    main(null, null, obj_XmlDom.xml); // Aqui
  }
}

function checkItem(pint_Line) {
  //  try {
  var obj_Description = document.getElementById("grid_Description");
  var obj_Chks = obj_Description.all("Chk");
  if (obj_Chks != null) {
    for (var int_I = 0; int_I < obj_Chks.length; int_I++) {
      var int_Line = (obj_Chks[int_I].getAttribute("line") != null) ? obj_Chks[int_I].getAttribute("line") : "";
      if (Math.floor(int_Line) == Math.floor(pint_Line)) {
        obj_Chks[int_I].checked = true;
        break;
      }
    }
  }
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[checkItem]");
  //  }
  //  finally {
  delete obj_Description;
  delete obj_Chks;
  delete int_Line;
  //  }
}


function main() {
  var str_Operation = (arguments[0] != null) ? arguments[0] : null;
  var obj_Field = (arguments[1] != null) ? arguments[1] : null;
  var str_XML = (arguments[2] != null) ? arguments[2] : "";

  if (str_Operation != null) {
    parent.main(str_Operation, obj_Field, str_XML);
  } else {

    parent.main("grid", obj_Field, str_XML);
  }
  delete str_Operation;
  delete obj_Field;
  delete str_XML;
}

var bln_HidePartition = false;

function hidePartition() {
  //  try {
  var obj_GridPartition = document.getElementById("grid_Partition");
  var obj_FixedHeader = document.getElementById("grid_FixedHeader");

  obj_GridPartition.style.display = "none";
  obj_FixedHeader.style.display = "none";

  bln_HidePartition = true;
  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[hidePartition]");
  //  }
  //  finally {
  delete obj_Field;
  //  }
}




function scrolling_f() {
  var obj_FixedBody = document.getElementById("grid_FixedBody");
  var obj_Description = document.getElementById("grid_Description");
  var obj_Header = document.getElementById("grid_Header");
  var obj_FixedHeader = document.getElementById("grid_FixedHeader");
  var obj_Partition = document.getElementById("grid_Partition");
  var obj_Disable = document.getElementById("grid_Dsb");
  var obj_Button = document.getElementById("grid_Button");
  obj_Header.style.top = 0;
  obj_FixedHeader.style.top = 0;
  obj_Partition.style.top = 0;

  obj_FixedBody.style.left = document.body.scrollLeft;
  obj_Description.style.left = document.body.scrollLeft;
  obj_Header.style.top = document.body.scrollTop;
  obj_FixedHeader.style.top = document.body.scrollTop;
  obj_FixedHeader.style.left = document.body.scrollLeft;
  obj_Partition.style.top = document.body.scrollTop;
  obj_Partition.style.left = document.body.scrollLeft;
  obj_Disable.style.top = (document.body.scrollTop + 10);

  obj_Disable.style.left = (document.body.scrollLeft + 10);
  obj_Button.style.left = document.body.scrollLeft;




  delete obj_FixedBody;
  delete obj_Description;
  delete obj_Header;
  delete obj_FixedHeader;
  delete obj_Partition;
  delete obj_Disable;
  delete obj_Button;
  //  }
}



function scrolling() {
  var obj_FixedBody = document.getElementById("grid_FixedBody");
  var obj_Description = document.getElementById("grid_Description");
  var obj_Header = document.getElementById("grid_Header"); //aqui
  var obj_FixedHeader = document.getElementById("grid_FixedHeader");
  var obj_Partition = document.getElementById("grid_Partition");
  var obj_Disable = document.getElementById("grid_Dsb");
  var obj_Button = document.getElementById("grid_Button");
  obj_Header.style.top = 0;
  obj_FixedHeader.style.top = 0;
  obj_Partition.style.top = 0;




  obj_FixedBody.style.left = document.body.scrollLeft;
  obj_Description.style.left = document.body.scrollLeft;
  obj_Header.style.top = document.body.scrollTop;
  obj_FixedHeader.style.top = document.body.scrollTop;
  obj_FixedHeader.style.left = document.body.scrollLeft;
  obj_Partition.style.top = document.body.scrollTop;
  obj_Partition.style.left = document.body.scrollLeft;


  obj_Disable.style.top = (document.body.scrollTop + 10);
  obj_Disable.style.left = (document.body.scrollLeft + 10);




  obj_Button.style.left = document.body.scrollLeft;

  if (parent.ITotal != "undefined" && parent.ITotal != null) {
    parent.ITotal.document.body.scrollLeft = document.body.scrollLeft;
  }


  delete obj_FixedBody;
  delete obj_Description;
  delete obj_Header;
  delete obj_FixedHeader;
  delete obj_Partition;
  delete obj_Disable;
  delete obj_Button;
}




function scrollingT() {
  parent.frm_carga_granel.document.body.scrollLeft = document.body.scrollLeft;

}






var bln_Reposition = true;
var astr_Reposition = new Array();

function reposition() {
  var bln_EditButton = (arguments[0] != null) ? arguments[0] : false;
  var bln_DeleteButton = (arguments[1] != null) ? arguments[1] : false;
  var bln_SelectButton = (arguments[2] != null) ? arguments[2] : false;
  var bln_BotaoEspecial = (arguments[3] != null) ? arguments[3] : false;

  var int_Start = 0;

  int_Start += (bln_EditButton == true) ? 1 : 0;
  int_Start += (bln_DeleteButton == true) ? 1 : 0;
  int_Start += (bln_SelectButton != "") ? 1 : 0;
  int_Start += (bln_BotaoEspecial == true) ? 1 : 0;


  var obj_New = document.getElementById("grid_New");
  //ALTERACAO FABIO
  //var obj_Cols = obj_New.all("Col");
  var obj_Cols = obj_New.querySelectorAll("[id^='Col']")
  var int_Cols = 1;
  if (obj_Cols.length != null) {
    var int_Cols = obj_Cols.length;
  }
  var int_OffSetHeight = 0;
  var int_OffSetLeft = 0;
  var obj_Tables = obj_New.getElementsByTagName("TABLE");

  if (obj_Cols != null) {
    obj_New.style.display = "";

    if (obj_Tables[0] != null) {
      var int_OffSetHeight = obj_Tables[0].offsetHeight;
    }
    if (int_Cols != 1) {
      var int_OffSetLeft = obj_Cols[0].offsetLeft;
      for (var int_C = 0; int_C < obj_Cols.length; int_C++) {
        var int_Width = Math.floor(obj_Cols[int_C].getAttribute("width"));
        var obj_Inputs = obj_Cols[int_C].getElementsByTagName("INPUT");
        if (obj_Inputs[0] != null) {
          obj_Inputs[0].style.width = (int_Width - 4) + "px";
        }
        var obj_Cbos = obj_Cols[int_C].getElementsByTagName("SELECT");
        if (obj_Cbos[0] != null) {
          obj_Cbos[0].style.width = (int_Width - 4) + "px";
        }
        astr_Reposition[int_C] = obj_Cols[int_C].offsetWidth;
        obj_Cols[int_C].style.width = astr_Reposition[int_C];
      }
    } else {
      var int_OffSetLeft = obj_Cols.offsetLeft;
      var int_Width = obj_Cols.getAttribute("width");
      var obj_Inputs = obj_Cols.getElementsByTagName("INPUT");
      if (obj_Inputs[0] != null) {
        obj_Inputs[0].style.width = (int_Width - 4) + "px";
      }
      var obj_Cbos = obj_Cols.getElementsByTagName("SELECT");
      if (obj_Cbos[0] != null) {
        obj_Cbos[0].style.width = (int_Width - 4) + "px";
      }
      astr_Reposition[0] = obj_Cols.offsetWidth;
      obj_Cols.style.width = astr_Reposition[0];
    }
    obj_New.style.display = "none";
  }

  var obj_Header = document.getElementById("grid_Header");
  var obj_Rows = obj_Header.getElementsByTagName("TR");
  if (obj_Rows[0] != null) {
    for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
      var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
      if (obj_Cols[0] != null) {
        for (var int_C = int_Start; int_C < obj_Cols.length; int_C++) {
          var int_Index = (obj_Cols[int_C].getAttribute("index") != null) ? obj_Cols[int_C].getAttribute("index") : "";
          if (int_Index != "") {
            obj_Cols[int_C].style.width = astr_Reposition[int_Index];
          }
        }
      }
    }
  }

  var int_CellSpacing = 0;
  var int_CellPadding = 0;
  var obj_Partition = document.getElementById("grid_Partition");
  var obj_Tables = obj_Partition.getElementsByTagName("TABLE");
  if (obj_Tables[0] != null) {
    var int_CellSpacing = obj_Tables[0].getAttribute("cellspacing");
    var int_CellPadding = obj_Tables[0].getAttribute("cellpadding");
  }
  var obj_Header = document.getElementById("grid_Header");
  var obj_Tables = obj_Header.getElementsByTagName("TABLE");
  if (obj_Tables[0] != null) {
    var obj_Rows = obj_Tables[0].getElementsByTagName("TR");
    if (obj_Rows[0] != null) {
      var astr_Rows = new Array();
      var astr_Cols = new Array();
      for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
        var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
        if (obj_Cols[0] != null) {
          for (var int_C = 0; int_C < int_Start; int_C++) {
            astr_Cols[int_C] = obj_Cols[int_C].offsetWidth;
          }
        }
        astr_Rows[int_R] = obj_Rows[int_R].offsetHeight;
      }
      var obj_FixedHeader = document.getElementById("grid_FixedHeader");
      var obj_Rows = obj_FixedHeader.getElementsByTagName("TR");
      for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
        var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
        if (obj_Cols[0] != null) {
          obj_Cols[0].style.height = astr_Rows[int_R];
        }
      }
      var obj_Cols = obj_Partition.getElementsByTagName("TD");
      if (obj_Cols[0] != null) {
        int_OffSetHeight = (((astr_Cols[0] != null) ? astr_Cols[0] : 0) + ((astr_Cols[1] != null) ? astr_Cols[1] : 0) + ((astr_Cols[2] != null) ? astr_Cols[2] : 0) - (int_Start - 1) - (int_Start * int_CellPadding));
        int_OffSetLeft = (((astr_Rows.length * int_CellPadding) - 1) + ((astr_Rows[0] != null) ? Math.floor(astr_Rows[0]) : 0) + ((astr_Rows[1] != null) ? Math.floor(astr_Rows[1]) : 0));
        obj_Cols[0].style.height = int_OffSetLeft;
        obj_Cols[0].style.width = (int_OffSetHeight + 2);

        if (bln_EditButton == true && bln_DeleteButton == false && bln_BotaoEspecial == false) {
          if (bln_SelectButton == "") {
            obj_Cols[0].style.width = ((int_OffSetHeight * 2) + 2);
            var obj_Cols = obj_Header.getElementsByTagName("TD");
            if (obj_Cols[0] != null) {
              obj_Cols[0].style.width = (((int_OffSetHeight * 2) + Math.floor(int_CellSpacing)) + 2);
            }
            var obj_Cols = obj_FixedHeader.getElementsByTagName("TD");
            if (obj_Cols[0] != null)

            {
              obj_Cols[0].style.width = (((int_OffSetHeight * 2) + Math.floor(int_CellSpacing)) + 2);
            }
          }
        }

        if (bln_BotaoEspecial == true && bln_EditButton == false && bln_DeleteButton == false) {
          if (bln_SelectButton == "") {
            obj_Cols[0].style.width = ((int_OffSetHeight * 2) + 2);
            var obj_Cols = obj_Header.getElementsByTagName("TD");
            if (obj_Cols[0] != null) {
              obj_Cols[0].style.width = (((int_OffSetHeight * 2) + Math.floor(int_CellSpacing)) + 2);
            }
            var obj_Cols = obj_FixedHeader.getElementsByTagName("TD");
            if (obj_Cols[0] != null) {
              obj_Cols[0].style.width = (((int_OffSetHeight * 2) + Math.floor(int_CellSpacing)) + 2);
            }
          }
        }

      }
    }
  }

  var int_OffSetHeight = 0;
  var obj_Tables = obj_Header.getElementsByTagName("TABLE");

  if (obj_Tables[0] != null) {
    int_OffSetHeight = obj_Tables[0].offsetHeight;
  }
  var obj_Body = document.getElementById("grid_Body");
  obj_Body.style.top = int_OffSetHeight;
  var obj_FixedBody = document.getElementById("grid_FixedBody");
  obj_FixedBody.style.top = int_OffSetHeight;
  var obj_Description = document.getElementById("grid_Description");
  obj_Description.style.top = int_OffSetHeight;

  //  }
  //  catch(obj_Exception) {
  //    parent.exception(obj_Exception,"Grid[reposition]");
  //  }
  //  finally {
  delete bln_EditButton;
  delete bln_DeleteButton;
  delete bln_SelectButton;
  delete int_Start;
  delete obj_New;
  delete obj_Cols;
  delete int_Cols;
  delete int_OffSetHeight;
  delete int_OffSetLeft;
  delete obj_Tables;
  delete int_Width;
  delete obj_Inputs;
  delete obj_Cbos
  delete obj_Header;
  delete obj_Rows;
  delete obj_Cols;
  delete int_CellSpacing;
  delete int_CellPadding;
  delete obj_Partition;
  delete obj_Tables;
  delete astr_Rows;
  delete obj_FixedHeader;
  delete obj_Body;
  delete obj_FixedBody;
  delete obj_Description;
  //  }
}

function repositionBody() {
  //  try {
  var bln_EditButton = (arguments[0] != null) ? arguments[0] : false;
  var bln_DeleteButton = (arguments[1] != null) ? arguments[1] : false;
  var bln_SelectButton = (arguments[2] != null) ? arguments[2] : false;
  var bln_BotaoEspecial = (arguments[3] != null) ? arguments[3] : false;
  var int_Start = 0;
  int_Start += (bln_EditButton == true) ? 1 : 0;
  int_Start += (bln_DeleteButton == true) ? 1 : 0;
  int_Start += (bln_SelectButton != "") ? 1 : 0;
  int_Start += (bln_BotaoEspecial != "") ? 1 : 0;

  var astr_Rows = new Array();
  var obj_Description = document.getElementById("grid_Description");
  var obj_Tables = obj_Description.getElementsByTagName("TABLE");
  if (obj_Tables[0] != null) {
    var obj_Rows = obj_Tables[0].getElementsByTagName("TR");
    if (obj_Rows[0] != null) {
      for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
        astr_Rows[int_R] = obj_Rows[int_R].offsetHeight;
        if (bln_SelectButton != "") {
          var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
          if (obj_Cols[0] != null) {
            obj_Cols[0].style.width = "27px";
          }
        }
      }
    }
  }
  var obj_Body = document.getElementById("grid_Body");
  var obj_Tables = obj_Body.getElementsByTagName("TABLE");
  if (obj_Tables[0] != null) {
    var obj_Rows = obj_Tables[0].getElementsByTagName("TR");
    if (obj_Rows[0] != null) {
      for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
        if (astr_Rows[int_R] < obj_Rows[int_R].offsetHeight) {
          astr_Rows[int_R] = obj_Rows[int_R].offsetHeight;
        }
      }
    }
  }

  for (var int_F = 0; int_F < 2; int_F++) {
    switch (int_F) {
      case 0:
        var obj_Div = document.getElementById("grid_Body");
        break;
      case 1:
        var obj_Div = document.getElementById("grid_FixedBody");
        break;
    }
    var obj_Tables = obj_Div.getElementsByTagName("TABLE");
    if (obj_Tables[0] != null) {
      var obj_Rows = obj_Tables[0].getElementsByTagName("TR");
      if (obj_Rows[0] != null) {
        for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
          var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
          if (obj_Cols[0] != null) {
            var int_Index = 0;
            for (var int_C = 0; int_C < obj_Cols.length; int_C++) {
              if (int_Start <= int_C) {
                obj_Cols[int_C].style.width = astr_Reposition[int_Index];
                int_Index++;
              }
            }
          }
        }
      }
    }
  }
  for (var int_F = 0; int_F < 3; int_F++) {
    switch (int_F) {
      case 0:
        var obj_Div = document.getElementById("grid_Body");
        break;
      case 1:
        var obj_Div = document.getElementById("grid_FixedBody");
        break;
      case 2:
        var obj_Div = document.getElementById("grid_Description");
        break;
    }
    var obj_Tables = obj_Div.getElementsByTagName("TABLE");
    if (obj_Tables[0] != null) {
      var obj_Rows = obj_Tables[0].getElementsByTagName("TR");
      if (obj_Rows[0] != null) {
        for (var int_R = 0; int_R < obj_Rows.length; int_R++) {
          var obj_Cols = obj_Rows[int_R].getElementsByTagName("TD");
          if (obj_Cols[0] != null) {
            var int_Index = 0;
            if (Math.floor(astr_Rows[int_R]) < obj_Cols[0].offsetHeight) {
              astr_Rows[int_R] = obj_Cols[0].offsetHeight;
            }
            if (astr_Rows[int_R] != null) {
              obj_Cols[0].style.height = astr_Rows[int_R];
            }
          }
        }
      }
    }
  }
  scrolling();
  delete bln_EditButton;
  delete bln_DeleteButton;
  delete bln_SelectButton;
  delete int_Start;
  delete astr_Rows;
  delete obj_Description;
  delete obj_Tables;
  delete obj_Rows;
  delete obj_Body;
  delete obj_Div;
  delete obj_Cols;
  delete int_Index;
  delete bln_BotaoEspecial;
}