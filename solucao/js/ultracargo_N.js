function UltraCargo() {
  this.bDebug = false;
  this.shwMsg = true;
  this.sysMsg = true;
  this.unique = false;
  this.doNotVerify = false;
  this.doVerifySession = true; // Se for false, n�o verifica se a sess�o expirou (usu�rio n�o logado)
  this.init();
}

XMLHttpRequest.prototype.loadXML = function(root) {
  var rootClean = root.replace(/[^a-zA-Zs]/g, "");
  this.document = document.implementation.createDocument(null, rootClean, null);
}

XMLHttpRequest.prototype.selectNodes = function(tagName) {  
  var nodes = [];
  var iterator = this.document.evaluate(tagName, this.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  try {
    var thisNode = iterator.iterateNext();
    while (thisNode) {
      nodes.push(thisNode);
      thisNode = iterator.iterateNext();
    }
    return nodes;
  } catch (e) {
    alert('Error: Document tree modified during iteration ' + e);
  }
}

XMLHttpRequest.prototype.selectSingleNode = function(tagName) {
  var nodes = this.selectNodes(tagName);
  return nodes.length > 0 ? nodes[0] : null;
}

XMLHttpRequest.prototype.createNode = function(tipo, tagName, namespace) {
  //NODE_ELEMENT (1)
  //NODE_ATTRIBUTE (2)
  //NODE_TEXT (3)
  //https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms766473(v=vs.85)
  switch (tipo) {
    case 1:
      return this.document.createElement(tagName);
      break;
    case 2:
      this.document.createElement(tagName);
      break;
    default:
      console.log('Tipo nao identificado');
  }
}

UltraCargo.prototype.init = function() {
  //	try {
  this.init.oPopUp = null;
  this.init.sPopUp = "";
  this.init.sPopUpGrid = "";
  this.init.asQuery = new Array();
  this.init.sLoginAtu = "1";
  this.init.sIdEntidade = "1";
  this.init.sIdFilial = "1";
  this.init.sPageOperation = "";
  this.init.sDsUsuario = "";
  this.init.sDsLogin = "";
  this.init.sInCategoria = "";
  this.init.sInPortaria = "";
  this.init.sInLeitoraCartao = "";
  this.init.sInPesagemIndependente = "";

  this.init.form = "";
  this.init.multiForm = "";
  this.init.key = "";
  this.init.message = "";
  this.init.code = "";
  this.init.operation = "";
  this.init.reset = true;
  this.init.groupData = true;
  this.init.toCheck = false;
  this.init.processPage = "";
  this.init.bFillAllItens = false;

  this.init.sXml = "<root></root>";

  window.document.onkeypress = new Function("callShortcut()");

  /*
  if (opener != null) {
  	this.init.host = self.opener.parent.top.location.toString();
  	this.init.host = this.init.host.substring(0,this.init.host.lastIndexOf("/"));
  }
  else {
  	this.init.host = parent.top.location.toString();
  	this.init.asHost = this.init.host.split("//");
  	this.init.host = (this.init.asHost[0] + "//");
  	this.init.asHost = this.init.asHost[1].split("/");

  	//alert(this.init.asHost[1].indexOf("."));

  	//Verifica se existe um diret�rio virtual.
  	if (this.init.asHost[1].indexOf(".") == -1)
  	{
  		for (var iH = 0; iH < 2; iH++) {
  			this.init.host += (this.init.asHost[iH] + "/");
  		}
  	}
  	else
  	{
  		for (var iH = 0; iH < 1; iH++) {
  			this.init.host += (this.init.asHost[iH] + "/");
  		}
  	}


  	//this.init.host = this.init.host.substring(0,(this.init.host.length - 1));
  	alert(this.init.host);
  }
  */

  this.init.host = getHost();
  if (this.init.oXD == undefined) {
    this.init.oXD = new XMLHttpRequest();
  }
  this.init.oXD.loadXML("<root/>");
  if (this.init.oXDt == undefined) {
    this.init.oXDt = new XMLHttpRequest();
  }
  this.init.oXDt.loadXML("<root/>");
  if (this.init.oXGr == undefined) {
    this.init.oXGr = new XMLHttpRequest();
  }
  this.init.oXGr.loadXML("<root/>");
  //****************************************************************
  //XML  para guardar itens selecionados de uma grid multipla
  //****************************************************************
  if (this.init.oXCheck == undefined) {
    this.init.oXCheck = new XMLHttpRequest();
  }
  this.init.oXCheck.loadXML("<root/>");
  //****************************************************************
  //XML  para guardar itens selecionados de uma grid, por�m,  que
  //n�o ser�o guardados em outra grid.
  //****************************************************************
  if (this.init.oXCheckXML == undefined) {
    this.init.oXCheckXML = new XMLHttpRequest();
  }
  this.init.oXCheckXML.loadXML("<root/>");
  //Atualiza com as vari�veis de sess�o

  /*
  comentado pois informacoes referentes as credenciais
  var loXHttp = new XMLHttpRequest();
  var loXML = new XMLHttpRequest();

  loXHttp.open("POST", this.init.host + "/prc/prc_ultracargoSession.asp", false);
  loXHttp.send();
  while (loXHttp.readyState != 4) {
    continue;
  }
  loXML.loadXML(loXHttp.responseText);


  this.init.sLoginAtu = loXML.selectSingleNode("//loginatu").getAttribute("value");
  this.init.sIdEntidade = loXML.selectSingleNode("//loginentidade").getAttribute("value");
  this.init.sIdFilial = loXML.selectSingleNode("//loginfilial").getAttribute("value");
  this.init.sDsUsuario = loXML.selectSingleNode("//dsusuario").getAttribute("value");
  this.init.sDsLogin = loXML.selectSingleNode("//dslogin").getAttribute("value");
  this.init.sInCategoria = loXML.selectSingleNode("//incategoria").getAttribute("value");
  this.init.sInPortaria = loXML.selectSingleNode("//inportaria").getAttribute("value");
  this.init.sInLeitoraCartao = loXML.selectSingleNode("//inleitoracartao").getAttribute("value");
  this.init.sInPesagemIndependente = loXML.selectSingleNode("//inpesagemindependente").getAttribute("value");
  */

  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[init]");
  //	}
  //	finally {
  this.init.asHost = null;
  loXHttp = null;
  loXML = null;
  //	}
}

UltraCargo.prototype.initialize = function() {
  this.generateXmlDocument();
}

UltraCargo.prototype.generateXmlDocument = function() {
  for (var iF = 0; iF < document.forms.length; iF++) {
    document.forms[iF].onsubmit = new Function("return false");
    this.oElmnts = document.forms[iF];


    if (this.oElmnts != null) {
      this.sFrmId = (this.oElmnts.getAttribute("id") != null) ? this.oElmnts.getAttribute("id") : "form" + iF;
      this.sLnk = (this.oElmnts.getAttribute("linked") != null) ? this.oElmnts.getAttribute("linked") : "";
      this.sOper = (this.oElmnts.getAttribute("operation") != null) ? this.oElmnts.getAttribute("operation") : "";


      this.createNode(1, this.sFrmId, "root", "",
        "tipo", "form",
        "linked", this.sLnk,
        "operation", this.sOper);

      for (var iI = 0; iI < this.oElmnts.length; iI++) {
        this.oElmnt = this.oElmnts[iI];


        if (this.oElmnt != null) {
          try {
            this.sItemId = this.oElmnt.getAttribute("id");
          } catch (oException) {
            throw "Favor informar o atributo 'id' para a TAG:\n" + this.oElmnt.outerHTML;
          }
          this.sTipo = (this.oElmnt.getAttribute("tipo") != null) ? this.oElmnt.getAttribute("tipo") : "";
          this.sOper = (this.oElmnt.getAttribute("operation") != null) ? this.oElmnt.getAttribute("operation") : "";
          this.sPK = (this.oElmnt.getAttribute("pk") != null) ? this.oElmnt.getAttribute("pk") : "";
          this.sLabel = (this.oElmnt.getAttribute("lbl") != null) ? this.oElmnt.getAttribute("lbl") : "";
          this.sClone = (this.oElmnt.getAttribute("clone") != null) ? ((this.oElmnt.getAttribute("clone") == "true") ? "true" : "false") : "false";
          this.sIgnore = (this.oElmnt.getAttribute("ignore") != null) ? ((this.oElmnt.getAttribute("ignore") == "true") ? "true" : "false") : "false";
          this.sUnique = (this.oElmnt.getAttribute("unique") != null) ? ((this.oElmnt.getAttribute("unique") == "true") ? "true" : "false") : "false";
          this.sFixed = (this.oElmnt.getAttribute("fixed") != null) ? ((this.oElmnt.getAttribute("fixed") == "true") ? "true" : "false") : "false";
          this.sRequired = (this.sLabel != "") ? "true" : "false";
          this.sAls = (this.oElmnt.getAttribute("alias") != null) ? this.oElmnt.getAttribute("alias") : "";
          this.sVrf = (this.oElmnt.getAttribute("verify") != null) ? this.oElmnt.getAttribute("verify") : "";
          this.sTgNm = this.oElmnt.tagName;
          switch (this.sTgNm) {
            case "INPUT":
              this.sTgNm += "-" + this.oElmnt.getAttribute("type");
              break;
            case "SELECT":
              this.sTgNm = this.oElmnt.getAttribute("type");
              break;
          }
          this.sTgNm = this.sTgNm.toLowerCase();
          switch (this.sTgNm) {
            case "input-file":
            case "input-hidden":
            case "input-text":
              this.sVl = this.oElmnt.getAttribute("value");
              this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1), this.sTipo.lastIndexOf(")")) : "";
              switch (this.sTipo.substring(0, 3)) {
                case "dec":
                  //Pega os Par�mentros necess�rios
                  var vwNrInteiros = this.sParameter.split(",")[0];
                  var vwNrDecimais = this.sParameter.split(",")[1];
                  var vwSepDec = this.sParameter.split(",")[2];
                  if (vwSepDec == 'p' || vwSepDec == 'P') {
                    vwSepDec = '.'
                  } else {
                    vwSepDec = ','
                  }
                  this.oElmnt.onkeypress = new Function("return maskDec_Type(event,this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  this.oElmnt.onblur = new Function("maskDec_TypeBlur(this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  this.oElmnt.onkeyup = new Function("maskDec_TypeKeyUp(this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  break;
                case "dat":


                  this.oElmnt.onkeypress = new Function("return Fu_DigData_keypress(this);");
                  this.oElmnt.onblur = new Function("Fu_ValidaData_blur(this);");
                  this.oElmnt.onkeyup = new Function("Fu_FormataData_keyup(this);");
                  this.oElmnt.maxLength = 10;

                  break;
                case "tim":
                  //this.oElmnt.onkeypress = new Function("onlyTime(this);");
                  //this.oElmnt.onblur = new Function("maskTime(this);" + ((this.sClone == "true") ? "clone(this);": "")); //aqui

                  this.oElmnt.onkeypress = new Function("return maskHour_Type(event,this);");
                  this.oElmnt.onblur = new Function("maskHour(this);" + ((this.sClone == "true") ? "clone(this);" : ""));
                  this.oElmnt.maxLength = 5;
                  break;
                case "int":
                case "ins":
                  var vwNrInteiros = this.sParameter.split(",")[0];
                  var vwNrDecimais = 0
                  var vwSepDec = ','
                  this.oElmnt.onkeypress = new Function("onlyNumeric(this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  this.oElmnt.maxLength = vwNrInteiros;
                  break;
                case "lng":
                  var vwNrInteiros = this.sParameter.split(",")[0];
                  var vwNrDecimais = this.sParameter.split(",")[1];
                  var vwSepDec = ','
                  this.oElmnt.onkeypress = new Function("return maskDec_Type_lng(event,this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  this.oElmnt.onblur = new Function("maskDec_TypeBlur_lng(this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  this.oElmnt.onkeyup = new Function("maskDec_TypeKeyUp_lng(this," + vwNrInteiros + "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
                  break;
                case "str":
                  this.oElmnt.maxLength = Math.floor(this.sParameter);
                  this.oElmnt.onkeypress = new Function("digitarUpper(this)");
                  if (this.sClone == "true") {
                    this.oElmnt.onblur = new Function("clone(this);");
                  }
                  break;
                case "let":
                  this.oElmnt.maxLength = Math.floor(this.sParameter);
                  this.oElmnt.onkeypress = new Function("digitarUpper(this,\"S\")");
                  if (this.sClone == "true") {
                    this.oElmnt.onblur = new Function("clone(this);");
                  }
                  break;
              }
              this.createNode(1, this.sItemId, "root/" + this.sFrmId, "",
                "tag", this.sTgNm,
                "value", "",
                "tipo", this.sTipo,
                "operation", this.sOper,
                "primary", this.sPK,
                "required", this.sRequired,
                "lbl", this.sLabel,
                "clone", this.sClone,
                "ignore", this.sIgnore,
                "unique", this.sUnique,
                "fixed", this.sFixed,
                "alias", this.sAls,
                "verify", this.sVrf,
                "status", "local");
              break;
            case "input-checkbox":
              this.sVl = this.oElmnt.getAttribute("value");
              this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1), this.sTipo.lastIndexOf(")")) : "";
              this.sChecked = "false";
              if (this.oElmnt.checked) {
                this.sChecked = "true";
              }
              if (this.sVl.indexOf("::") == -1) {
                this.sVl += "::";
              }
              this.createNode(1, this.sItemId, "root/" + this.sFrmId, "",
                "tag", this.sTgNm,
                "value", escape(this.sParameter),
                "operation", this.sOper,
                "primary", this.sPK,
                "required", this.sRequired,
                "lbl", this.sLabel,
                "ignore", this.sIgnore,
                "unique", this.sUnique,
                "fixed", this.sFixed,
                "alias", this.sAls,
                "verify", this.sVrf,
                "status", "local",
                "checked", this.sChecked);
              break;
            case "input-radio":
              this.sVl = this.oElmnt.getAttribute("value");
              this.sChecked = "false";
              if (this.oElmnt.checked) {
                this.sChecked = "true";
              }
              this.createNode(1, this.sItemId, "root/" + this.sFrmId, "",
                "tag", this.sTgNm,
                "value", escape(this.sVl),
                "operation", this.sOper,
                "primary", this.sPK,
                "required", this.sRequired,
                "lbl", this.sLabel,
                "ignore", this.sIgnore,
                "unique", this.sUnique,
                "fixed", this.sFixed,
                "alias", this.sAls,
                "verify", this.sVrf,
                "status", "local",
                "checked", this.sChecked);
              break;
            case "select-one":
            case "select-multiple":
              this.createNode(1, this.sItemId, "root/" + this.sFrmId, "",
                "tag", this.sTgNm,
                "operation", this.sOper,
                "primary", this.sPK,
                "required", this.sRequired,
                "lbl", this.sLabel,
                "ignore", this.sIgnore,
                "unique", this.sUnique,
                "fixed", this.sFixed,
                "alias", this.sAls,
                "verify", this.sVrf,
                "status", "local",
                "fields", "");
              for (var iL = 0; iL < this.oElmnt.length; iL++) {
                this.sText = this.oElmnt[iL].text;
                this.sVl = this.oElmnt[iL].getAttribute("value");
                this.sSelected = "false";
                if (this.oElmnt[iL].selected) {
                  this.sSelected = "true";
                }
                this.createNode(1, "option", "root/" + this.sFrmId + "/" + this.sItemId, escape(this.sText),
                  "value", escape(this.sVl),
                  "selected", this.sSelected);
              }
              break;
            case "textarea":
              this.sVl = this.oElmnt.getAttribute("value");
              this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1), this.sTipo.lastIndexOf(")")) : "";
              switch (this.sTipo.substring(0, 3)) {
                case "str":
                  this.oElmnt.onkeypress = new Function("maxLength(this," + ((this.sParameter != null) ? this.sParameter : 0) + ");digitarUpper(this)");
                  this.oElmnt.onblur = new Function("maxLength(this," + ((this.sParameter != null) ? this.sParameter : 0) + ");");
                  break;
              }
              this.createNode(1, this.sItemId, "root/" + this.sFrmId, this.sText,
                "tag", this.sTgNm,
                "value", escape(this.sVl),
                "tipo", this.sTipo,
                "operation", this.sOper,
                "primary", this.sPK,
                "required", this.sRequired,
                "lbl", this.sLabel,
                "ignore", this.sIgnore,
                "unique", this.sUnique,
                "fixed", this.sFixed,
                "alias", this.sAls,
                "verify", this.sVrf,
                "status", "local");
              break;
          }
        }
      }
      this.oTables = this.oElmnts.getElementsByTagName("IFRAME");
      for (var iT = 0; iT < this.oTables.length; iT++) {
        this.oTable = this.oTables[iT];
        try {
          this.sTblId = this.oTable.getAttribute("id");
        } catch (oException) {
          throw "Favor informar o atributo 'id' para a TAG:\n" + this.oTable.outerHTML;
        }
        this.sLnk = (this.oTable.getAttribute("linked") != null) ? this.oTable.getAttribute("linked") : "";
        this.sOper = (this.oTable.getAttribute("operation") != null) ? this.oTable.getAttribute("operation") : "";
        this.sLabel = (this.oTable.getAttribute("lbl") != null) ? this.oTable.getAttribute("lbl") : "";
        this.sRequired = (this.sLabel != "") ? "true" : "false";
        this.sExec = (this.oTable.getAttribute("execute") != null) ? this.oTable.getAttribute("execute") : "";
        this.sExec = (this.sExec == "server") ? "server" : "local";
        this.sVld = (this.oTable.getAttribute("validate") != null) ? (this.oTable.getAttribute("validate") == "true") ? "true" : "false" : "false";
        this.sEmpty = (this.oTable.getAttribute("empty") != null) ? (this.oTable.getAttribute("empty") == "true") ? "true" : "false" : "false";
        this.createNode(1, this.sTblId, "root", "",
          "tipo", "table",
          "linked", this.sLnk,
          "operation", this.sOper,
          "required", this.sRequired,
          "lbl", this.sLabel,
          "execute", this.sExec,
          "empty", this.sEmpty,
          "page", "1",
          "page_size", "0",
          "page_count", "0");
      }
    }
  }
  this.oElmnts = null;
  this.sFrmId = null;
  this.sLnk = null;
  this.sFixed = null;
  this.sOper = null;
  this.oElmnt = null;
  this.sItemId = null;
  this.sTipo = null;
  this.sOper = null;
  this.sPK = null;
  this.sLabel = null;
  this.sClone = null;
  this.sIgnore = null;
  this.sUnique = null;
  this.sFixed = null;
  this.sRequired = null;
  this.sAls = null;
  this.sVrf = null;
  this.sTgNm = null;
  this.sVl = null;
  this.sParameter = null;
  this.sChecked = null;
  this.sText = null;
  this.sSelected = null;
  this.oTables = null;
  this.oTable = null;
  this.sTblId = null;
  this.sExec = null;
  this.sVld = null;
  this.sEmpty = null;
  this.terminate();
  //	}
}

UltraCargo.prototype.createNode = function(plng_XmlDom, psNodeId, psXPath, psNodeText) {
  //*********************************************
  // Fun��o para criar n� XML.
  //*********************************************

  //	try {
  switch (plng_XmlDom) {
    case 1:
      this.createNode.oNode = this.init.oXD.selectSingleNode(psXPath);
      this.createNode.oElement = this.init.oXD.createNode(1, psNodeId, "");
      break;
    case 2:
      this.createNode.oNode = this.init.oXDt.selectSingleNode(psXPath);
      this.createNode.oElement = this.init.oXDt.createNode(1, psNodeId, "");
      break;
    case 3:
      this.createNode.oNode = this.init.oXGr.selectSingleNode(psXPath);
      this.createNode.oElement = this.init.oXGr.createNode(1, psNodeId, "");
      break;
    case 4:
      this.createNode.oNode = this.init.oXCheck.selectSingleNode(psXPath);
      this.createNode.oElement = this.init.oXCheck.createNode(1, psNodeId, "");
      break;
    case 5:
      this.createNode.oNode = this.init.oXCheckXML.selectSingleNode(psXPath);
      this.createNode.oElement = this.init.oXCheckXML.createNode(1, psNodeId, "");
      break;
  }

  for (var iA = 4; iA < arguments.length; iA += 2) {
    this.createNode.oElement.setAttribute(arguments[iA], arguments[(1 + iA)]);
  }
  if (psNodeText != "") {
    this.createNode.oElement.text = psNodeText;
  }
  this.createNode.oNode.appendChild(this.createNode.oElement);
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[createNode]");
  //	}
  //	finally {
  this.createNode.oNode = null;
  this.createNode.oElement = null;
  //	}
}

UltraCargo.prototype.terminate = function() {
  //	try {
  // Constructor
  this.shwMsg = true;
  this.sysMsg = true;
  this.unique = false;
  this.doNotVerify = false;
  // Class
  this.init.asQuery = new Array();
  this.init.form = "";
  this.init.multiForm = "";
  this.init.code = "";
  this.init.message = "";
  this.init.operation = "";
  this.init.reset = true;
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[terminate]");
  //	}
}

UltraCargo.prototype.addTable = function() {
  if (this.validateTable()) {
    this.cascadeTable(this.grid.id);

    this.addAttribute(1, "root/" + this.grid.id,
      "page_size", this.grid.size,
      "edit", this.grid.editButton.toString(),
      "delete", this.grid.deleteButton.toString(),
      "insert", this.grid.insertButton.toString(),
      "insert_multiple", this.grid.insertMultipleButton.toString(),
      "edit_on_detail", this.grid.editOnDetail.toString(),
      "enable_fk", this.grid.enableFK.toString(),
      "move_action", this.grid.move.toString(),
      "select", this.grid.selectButton.toString(),
      "pk", this.grid.keys,
      "lock", this.grid.lock,
      "fk", this.grid.fk,
      "hidden", this.grid.colsHiddenField,
      "validate", this.grid.colsToValidate,
      "consist", this.grid.colsToConsist,
      "pageoperation", this.grid.pageOperation,
      "tipogrid", this.grid.TipoGrid,
      "gridcheck", this.grid.GridCheck,
      "xmlcheck", this.grid.XMLCheck,
      "gridsele", this.grid.GridSele,
      "showbutedt", this.grid.ShowButEdt,
      "showbutupd", this.grid.ShowButUpd,
      "duplicar", this.grid.duplicar.toString(),
      "DelOnDesChk", this.grid.DelOnDesChk.toString(),
      "DelOnDesChk_pop", this.grid.DelOnDesChk_pop.toString(),
      "fixed", this.grid.fixedCols,
      "index", this.grid.colIndex,
      //Inserido por Anderson Ikuo Nakamoto
      "ToolTipNew", this.grid.ToolTipNew,
      "ToolTipPopNew", this.grid.ToolTipPopNew,
      "botaoespecial", this.grid.BotaoEspecial.toString(),
      "imgbotaoespecial", this.grid.ImgBotaoEspecial,
      "maincasebotaoespecial", this.grid.MainCaseBotaoEspecial,
      "tooltipobotaoespecial", this.grid.ToolTipoBotaoEspecial);

    this.addTableHeader();



    this.createTableInformartion(this.grid.id);

    this.createTableItem(this.grid.id);

    this.createTableHeader(this.grid.id);

    this.createTableFooter(this.grid.id);

    //***************************************************
    //*Programador:Marco Sotto
    //*Data: 14/04/2005
    //*Altera��o: Caso o tipo da grid seja igual a CHECK,
    //*cria, automaticamente, o xml que dever� guardar
    //*os registros selecionados
    //***************************************************
    if (this.grid.TipoGrid == 'CHECK') {
      this.CriaXMLtoCheck(1, this.grid.id, '');
    }
    //***************************************************
    //*Programador: Marco Sotto  - 02/05/2005
    //*Altera��o:
    //*O CHECK_XML deve ser utilizado para guardar
    //*itens selecionados de uma grid, por�m sem a neces-
    //*sidade de outra GRID.
    //***************************************************
    if (this.grid.TipoGrid == 'CHECK_XML') {
      this.createNode(5, this.grid.XMLCheck, "root", "", "tipo", "table", "operation", 'multi_xml_check');
    }
    //*****************************
    //Finaliza a grid
    //*****************************
    this.terminateTable();
  }
  this.oElmnts = null;
  this.sElement = null;
}

UltraCargo.prototype.cascadeTable = function(psTableId) {
  this.cTF.oNds = this.init.oXD.selectNodes("root/" + psTableId + "/*");
  for (var iN = 0; iN < this.cTF.oNds.length; iN++) {
    this.cTF.oNd = this.init.oXD.selectSingleNode("root/" + psTableId);
    if (this.cTF.oNd != null) {
      this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
    }
  }
  this.cascade(psTableId);
  this.cTF.oRoot = null;
  this.cTF.oNds = null;
}

UltraCargo.prototype.cascade = function(psTableId) {
  //	try {
  this.cTF.bAll = (arguments[1] != null) ? (arguments[1] == true) ? true : false : false;
  this.cTF.oNds = this.init.oXD.selectNodes("//*[@linked='" + psTableId + "']");
  for (var iCN = 0; iCN < this.cTF.oNds.length; iCN++) {
    if (this.cTF.bAll) {
      this.cTF.sXPath = "root/" + this.cTF.oNds[iCN].nodeName;
    } else {
      this.cTF.sXPath = "root/" + this.cTF.oNds[iCN].nodeName + "[@pk!='']";
    }
    this.cTF.oDts = this.init.oXGr.selectNodes(this.cTF.sXPath);
    for (var iPK = 0; iPK < this.cTF.oDts.length; iPK++) {

      this.init.oXGr.documentElement.removeChild(this.cTF.oDts[iPK]);

    }
    this.cTF.oDts = this.init.oXDt.selectNodes(this.cTF.sXPath);
    for (var iPK = 0; iPK < this.cTF.oDts.length; iPK++) {

      this.init.oXDt.documentElement.removeChild(this.cTF.oDts[iPK]);

    }
  }
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[cascade]");
  //	}
  //	finally {
  this.cTF.bAll = null;
  this.cTF.oNds = null;
  this.cTF.sXPath = null;
  this.cTF.oDts = null;
  //	}
}

UltraCargo.prototype.validateTable = function() {

  try {
    this.CompMensagem = ""; // Complemento da mensagem de atributos informados incorretamente.
    this.bValidate = true;
    this.grid.id = (this.grid.id != undefined) ? this.grid.id : "";
    this.grid.size = (this.grid.size != undefined) ? this.grid.size : 0;
    if (Math.floor(this.grid.size) > 32767) {
      this.grid.size = 32767;
    }
    this.grid.keys = (this.grid.keys != undefined) ? this.grid.keys : "";
    this.grid.lock = (this.grid.lock != undefined) ? this.grid.lock : "";
    this.grid.fk = (this.grid.fk != undefined) ? this.grid.fk : "";
    this.grid.colsTitle = (this.grid.colsTitle != undefined) ? this.grid.colsTitle : "";
    this.grid.colsField = (this.grid.colsField != undefined) ? this.grid.colsField : "";
    this.grid.colsHiddenField = (this.grid.colsHiddenField != undefined) ? this.grid.colsHiddenField : "";
    this.grid.colsToValidate = (this.grid.colsToValidate != undefined) ? this.grid.colsToValidate : "";

    this.grid.TipoGrid = (this.grid.TipoGrid != undefined) ? this.grid.TipoGrid : "";
    this.grid.GridCheck = (this.grid.GridCheck != undefined) ? this.grid.GridCheck : "";
    this.grid.XMLCheck = (this.grid.XMLCheck != undefined) ? this.grid.XMLCheck : "";
    this.grid.GridSele = (this.grid.GridSele != undefined) ? this.grid.GridSele : "";

    this.grid.ShowButEdt = (this.grid.ShowButEdt != undefined) ? this.grid.ShowButEdt : "";
    this.grid.ShowButUpd = (this.grid.ShowButUpd != undefined) ? this.grid.ShowButUpd : "";
    this.grid.colsToConsist = (this.grid.colsToConsist != undefined) ? this.grid.colsToConsist : "";


    this.grid.pageOperation = (this.grid.pageOperation != undefined) ? this.grid.pageOperation : "";


    this.grid.colsType = (this.grid.colsType != undefined) ? this.grid.colsType : "";
    this.grid.colsWidth = (this.grid.colsWidth != undefined) ? this.grid.colsWidth : "";
    this.grid.colsAlign = (this.grid.colsAlign != undefined) ? this.grid.colsAlign : "";
    this.grid.fixedCols = (this.grid.fixedCols != undefined) ? this.grid.fixedCols : 0;
    this.grid.colIndex = (this.grid.colIndex != undefined) ? (isNaN(parseInt(this.grid.colIndex))) ? -1 : parseInt(this.grid.colIndex) : -1;
    this.grid.editButton = (this.grid.editButton != undefined) ? ((this.grid.editButton == false) ? false : true) : true;
    this.grid.deleteButton = (this.grid.deleteButton != undefined) ? ((this.grid.deleteButton == false) ? false : true) : true;
    this.grid.insertButton = (this.grid.insertButton != undefined) ? ((this.grid.insertButton == false) ? false : true) : true;
    this.grid.insertMultipleButton = (this.grid.insertMultipleButton != undefined) ? ((this.grid.insertMultipleButton == true) ? true : false) : false;
    this.grid.editOnDetail = (this.grid.editOnDetail != undefined) ? ((this.grid.editOnDetail == true) ? true : false) : true;
    this.grid.duplicar = (this.grid.duplicar != undefined) ? ((this.grid.duplicar == true) ? true : false) : false;
    this.grid.DelOnDesChk = (this.grid.DelOnDesChk != undefined) ? ((this.grid.DelOnDesChk == true) ? true : false) : false;
    this.grid.DelOnDesChk_pop = (this.grid.DelOnDesChk_pop != undefined) ? ((this.grid.DelOnDesChk_pop == true) ? true : false) : false;
    this.grid.enableFK = (this.grid.enableFK != undefined) ? ((this.grid.enableFK == true) ? true : false) : true;
    this.grid.move = (this.grid.move != undefined) ? ((this.grid.move == true) ? true : false) : false;
    this.grid.selectButton = (this.grid.selectButton != undefined) ? (this.grid.selectButton == "single" || this.grid.selectButton == "multiple") ? this.grid.selectButton : "" : "";


    this.grid.BotaoEspecial = (this.grid.BotaoEspecial != undefined) ? ((this.grid.BotaoEspecial == false) ? false : true) : false;
    this.grid.ImgBotaoEspecial = (this.grid.ImgBotaoEspecial != undefined) ? this.grid.ImgBotaoEspecial : "";
    this.grid.MainCaseBotaoEspecial = (this.grid.MainCaseBotaoEspecial != undefined) ? this.grid.MainCaseBotaoEspecial : "";
    this.grid.ToolTipoBotaoEspecial = (this.grid.ToolTipoBotaoEspecial != undefined) ? this.grid.ToolTipoBotaoEspecial : "";


    // Controle de acesso. Inibe bot�es de edi��o do grid se usu�rio n�o possuir privil�gios para edi��o. By Jackson
    if ((parent.top.frm_seguranca != null) && (parent.top.frm_seguranca.inmanutencao == "N")) {
      this.grid.insertButton = false;
      if (this.grid.editOnDetail == false) {
        this.grid.editButton = false;
      }
      this.grid.deleteButton = false;
      this.grid.insertMultipleButton = false;
    }
    // Fim do Controle de acesso
    if (this.grid.BotaoEspecial == true) {
      if (this.grid.ImgBotaoEspecial == "") {
        this.CompMensagem += "Imagen n�o informada para o Bot�o Especial.\n"
        this.bValidate = false;
      }

      if (this.grid.MainCaseBotaoEspecial == "") {
        this.CompMensagem += "Case/Opera��o que dever� ser executado na fun��o Main n�o foi informado.\n"
        this.bValidate = false;
      }

    }

    if (this.grid.move) {
      this.grid.insertButton = false;
    }

    if (this.grid.id == "") {
      this.bValidate = false;
    } else if (Math.floor(this.grid.size) == 0) {
      this.bValidate = false;
    } else if (this.grid.keys == "") {
      this.bValidate = false;
    } else if (this.grid.colsTitle == "") {
      this.bValidate = false;
    } else if (this.grid.colsField == "") {
      this.bValidate = false;
    } else if (this.grid.colsType == "") {
      this.bValidate = false;
    } else if (this.grid.colsWidth == "") {
      this.bValidate = false;
    } else if (this.grid.colsAlign == "") {
      this.bValidate = false;
    }

    if (!this.bValidate) {
      throw "Verifique se todos os atributos foram informados.\n" + this.CompMensagem;
    }
    return true;
  } catch (oException) {
    this.exception(oException, "[validateTable]");
    return false;
  } finally {
    this.bValidate = null;
  }
}

UltraCargo.prototype.addAttribute = function(plng_XmlDom, psXPath) {
  //	try {
  switch (plng_XmlDom) {
    case 1:
      this.addAttribute.oElements = this.init.oXD.selectNodes(psXPath);
      break;
    case 2:
      this.addAttribute.oElements = this.init.oXDt.selectNodes(psXPath);
      break;
    case 2:
      this.addAttribute.oElements = this.init.oXGr.selectNodes(psXPath);
      break;
  }
  for (var iE = 0; iE < this.addAttribute.oElements.length; iE++) {
    this.addAttribute.oElement = this.addAttribute.oElements[iE];
    for (var iA = 2; iA < arguments.length; iA += 2) {
      this.addAttribute.oElement.setAttribute(arguments[iA], arguments[(1 + iA)]);
    }
  }
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[addAttribute]");
  //	}
  //	finally {
  this.addAttribute.oAttribute = null;
  //	}
}

UltraCargo.prototype.addTableHeader = function() {
  //	try {


  this.oElmnts = this.grid.colsTitle.split("|");
  this.iColPos = 0;
  this.iCount = 0;
  this.iCols = 0;
  for (var iE = 0; iE < this.oElmnts.length; iE++) {
    this.sSpan = "1,1";
    this.sHeader = this.oElmnts[iE];
    if (this.sHeader.indexOf("(") != -1 && this.sHeader.indexOf(")") != -1) {
      this.sSpan = this.sHeader.substring((this.sHeader.indexOf("(") + 1), (this.sHeader.indexOf(")")));
      this.sHeader = this.sHeader.substring(0, this.sHeader.indexOf("("));
    }
    this.iRowSpan = Math.floor(this.sSpan.split(",")[0]);
    this.iColSpan = Math.floor(this.sSpan.split(",")[1]);
    for (var iR = 0; iR < this.iRowSpan; iR++) {
      this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='" + iR + "']");
      if (this.oNd == null) {
        this.createNode(1, "row", "root/" + this.grid.id, "",
          "line", iR);
      }
      if (this.iRowSpan > 1) {
        this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row/" + this.grid.colsField.split("|")[this.iColPos]);
        if (this.oNd != null) {
          this.createNode(1, this.grid.colsField.split("|")[this.iColPos], "root/" + this.grid.id + "/row[@line='" + iR + "']", "");
          this.iColPos++;
        } else {
          this.createNode(1, this.grid.colsField.split("|")[this.iColPos], "root/" + this.grid.id + "/row[@line='" + iR + "']", "",
            "title", escape(this.sHeader),
            "rowspan", this.sSpan.split(",")[0],
            "colspan", "1",
            "tipo", this.grid.colsType.split("|")[this.iColPos],
            "width", this.grid.colsWidth.split("|")[this.iColPos],
            "align", this.grid.colsAlign.split("|")[this.iColPos],
            "index", this.iColPos);
        }
      } else {
        if (this.iColSpan > 1) {
          this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row/col[@title='" + escape(this.sHeader) + "']");
          if (this.oNd != null) {
            this.createNode(1, "col", "root/" + this.grid.id + "/row[@line='" + iR + "']", "");
          } else {
            this.createNode(1, "col", "root/" + this.grid.id + "/row[@line='" + iR + "']", "",
              "title", escape(this.sHeader),
              "rowspan", "1",
              "colspan", this.iColSpan);
          }
          this.iCols = this.iColSpan;
        } else {
          this.bExecute = true;
          this.oNdR1 = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='0']");
          this.oNdR2 = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='1']");
          if ((this.iCols > 0) || (this.oNdR1 != null && this.oNdR2 != null)) {
            if ((this.iCols > 0) || (this.oNdR1.childNodes.length > this.oNdR2.childNodes.length)) {
              this.iCols = (this.iCols > 0) ? (this.iCols - 1) : 0;
              this.bExecute = false;
            }
          }
          this.createNode(1, this.grid.colsField.split("|")[this.iColPos], "root/" + this.grid.id + "/row[@line='" + ((this.bExecute) ? 0 : 1) + "']", "",
            "title", escape(this.sHeader),
            "rowspan", "1",
            "colspan", this.iColSpan,
            "tipo", this.grid.colsType.split("|")[this.iColPos],
            "width", this.grid.colsWidth.split("|")[this.iColPos],
            "align", this.grid.colsAlign.split("|")[this.iColPos],
            "index", this.iColPos);
          this.iColPos++;
        }
      }
    }
  }
  this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id);


  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[addTableHeader]");
  //	}
  //	finally {
  this.oElmnts = null;
  this.iColPos = null;
  this.sSpan = null;
  this.sHeader = null;
  this.iRowSpan = null;
  this.iColSpan = null;
  this.oNd = null;
  this.bExecute = null;
  this.oNdR1 = null;
  this.oNdR2 = null;
  //	}
}

UltraCargo.prototype.createTableInformartion = function(psTableId) {
  this.sTransImg = "/images_home/img_display/img_botoes/ultr_icon_transp.gif";
  this.createTableInformartion.sSpan = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo' style='filter:progid:dximagetransform.microsoft.alpha(style=0,opacity=50);background-color:#C7C7C7;'>" +
    "<tr><td><img src='" + this.init.host + this.sTransImg + "' border='0' width='100%' height='100%'></td></tr>" +
    "</table>"
  this.createTableInformartion.sPK = "<input type='hidden' id='FRAME' value='" + psTableId + "'>";
  if (this.createTableInformartion.sPK != "") {
    for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
      if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {
        self.frames[iF].addGridHtml(0, this.createTableInformartion.sPK);
        self.frames[iF].addGridHtml(8, this.createTableInformartion.sSpan);


        break;
      }
    }
  }
  this.sTransImg = null;
  this.createTableInformartion.sSpan = null;
  this.createTableInformartion.sPK = null;
}

UltraCargo.prototype.createTableItem = function(psTableId) {
  //	try {

  this.createTableItem.sButton = "";
  this.createTableItem.sItem = "";
  this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);
  if (this.oNd != null) {
    this.bEdtBt = this.oNd.getAttribute("edit");
    this.bDelBt = this.oNd.getAttribute("delete");
    this.bSelBt = this.oNd.getAttribute("select");
    this.sHidFlds = this.oNd.getAttribute("hidden");
    this.BotaoEspecial = this.oNd.getAttribute("botaoespecial");

    this.oRows = this.init.oXD.selectNodes("//" + psTableId + "/row/*[@index!='']");

    if (this.oRows[0] != null) {

      this.iCols = this.oRows.length;

      this.createTableItem.sButton = "<table border='0' cellspacing='0' cellpadding='0'><tr>" +
        "<td width='15' nowrap class='iftabazul'>&nbsp;</td>" +
        "<td class='iftabazul'>&nbsp;<label id='labelButton'></label>&nbsp;</td>" +
        "<td width='10' nowrap class='iftabazul'>&nbsp;</td>" +
        "<td><img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_canto_pasta_dir.gif'></td>" +
        "</tr></table>" +
        "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'><tr>" +
        "<td nowrap align='center' valign='middle' class='iftab3branco'>";

      this.createTableItem.sItem = "<table border='0' cellspacing='0' cellpadding='0'><tr>" +
        "<td width='15' nowrap class='iftabazul'>&nbsp;</td>" +
        "<td class='iftabazul'>&nbsp;<label id='labelItem'></label>&nbsp;</td>" +
        "<td width='10' nowrap class='iftabazul'>&nbsp;</td>" +
        "<td><img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_canto_pasta_dir.gif'></td>" +
        "</tr></table>" +
        "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'><tr>" +
        "<td nowrap align='center' valign='middle' class='iftab3branco'>";


      if (this.sHidFlds != "") {
        for (var iC = 0; iC < this.sHidFlds.split("|").length; iC++) {
          if (this.sHidFlds.split("|")[iC] != "") {
            this.createTableItem.sItem += "<input type='hidden' id='" + this.sHidFlds.split("|")[iC] + "'>";
          }
        }
      }

      this.createTableItem.sButton += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_chek_verd.gif'" +
        " border='0' style='cursor:hand'" +
        " onclick='saveGrid();' alt='Confirmar'>" +
        "</td>" +
        "<td nowrap align='center' valign='middle' class='iftab3branco'>" +
        "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_canc_verm.gif'" +
        " border='0' style='cursor:hand'" +
        " onclick='cancelGrid()\;main(\"" + psTableId + "_can\");' alt='Cancelar'>" //aqui
        +
        "</td>";

      this.createTableItem.sItem += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_chek_verd.gif'" +
        " border='0' style='cursor:hand'" +
        " onclick='saveGrid();' alt='Confirmar'>" +
        "</td>" +
        "<td nowrap align='center' valign='middle' class='iftab3branco'>" +
        "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_canc_verm.gif'" +
        " border='0' style='cursor:hand'" +
        " onclick='cancelGrid();main(\"" + psTableId + "_can\");' alt='Cancelar'>" +
        "</td>";

      for (var iC = 0; iC < this.iCols; iC++) {
        this.oCol = this.init.oXD.selectSingleNode("//" + psTableId + "/row/*[@index='" + iC + "']");
        if (this.oCol != null) {
          this.sTipo = (this.oCol.getAttribute("tipo") != null) ? this.oCol.getAttribute("tipo") : "";
          this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1), this.sTipo.lastIndexOf(")")) : "";
          this.sParameter = this.sParameter.replace(/'/g, "''");
          this.sWidth = (this.oCol.getAttribute("width") != null) ? this.oCol.getAttribute("width") : "";
          this.sAlign = (this.oCol.getAttribute("align") != null) ? this.oCol.getAttribute("align") : "";
          if (this.sTipo != "" && this.sWidth != "" && this.sAlign != "") {
            this.sHtmlColumn = "<td id='Col' " + ((this.sWidth != "") ? " width='" + this.sWidth + "' nowrap" : "") + " class='iftab3branco'>";
            this.sHtmlTable = "<table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
              "<tr align='center' valign='middle'>";

            switch (this.sTipo.substring(0, 3)) {
              case "dat":
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress='return Fu_DigData_keypress(this);' onblur='Fu_ValidaData_blur(this);' onkeyup='Fu_FormataData_keyup(this);' maxlength='10' class='cxtext'>" +
                  "</td>" +
                  "<td width='20' nowrap><img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_cale.gif'" +
                  " style='cursor:hand' onclick='javascript:calendarField(document.getElementById(\"grid_New\").all(\"" + this.oCol.nodeName + "\"));'>";


                break;
              case "tim":
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress='return maskHour_Type(event,this);' onblur='maskHour(this);' maxlength='5' class='cxtext'>";
                break;
              case "rad":
                for (var iR = 0; iR < this.sParameter.split(",").length; iR++) {
                  this.createTableItem.sItem += this.sHtmlColumn +
                    this.sHtmlTable +
                    "<td><input name='" + this.oCol.nodeName + "' id='" + this.oCol.nodeName + "'" +
                    " type='radio' value='" + this.sParameter.split(",")[iR] + "'>";
                }
                break;
              case "chk":
                if (this.sParameter.indexOf("::") == -1) {
                  this.sParameter += "::";
                }

                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='checkbox' value='" + this.sParameter + "'>";
                break;
              case "cbo": //
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><select id='" + this.oCol.nodeName + "'" +
                  " pk='" + this.sParameter + "' onchange='changeCombo(this);changeCombo_val(this);onChangeCombo(\"" + psTableId + "_" + iC + "\");'" +
                  " style='width:1' class='cmbbox'></select>";
                break;
              case "int":
              case "ins":
                var vwNrInteiros = this.sParameter.split(",")[0];
                var vwNrDecimais = 0;
                var vwSepDec = ',';
                var vwMontaEventoKeyPress = "onlyNumeric(this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress=" + String.fromCharCode(34) + vwMontaEventoKeyPress + String.fromCharCode(34) +
                  " maxlength='" + vwNrInteiros + "'" +
                  " class='cxtext'>";
                break;
              case "lng":
                //Pega os Par�mentros necess�rios
                var vwNrInteiros = this.sParameter.split(",")[0];
                var vwNrDecimais = this.sParameter.split(",")[1];
                var vwSepDec = ',';
                var vwMontaEventoKeyPress = "return maskDec_Type_lng(event,this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                var vwMontaEventoBlur = "maskDec_TypeBlur_lng(this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                var vwMontaEventoKeyUp = "maskDec_TypeKeyUp_lng(this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress=" + String.fromCharCode(34) + vwMontaEventoKeyPress + String.fromCharCode(34) +
                  " onblur=" + String.fromCharCode(34) + vwMontaEventoBlur + String.fromCharCode(34) +
                  " onkeyup=" + String.fromCharCode(34) + vwMontaEventoKeyUp + String.fromCharCode(34) +
                  " maxlength='" + (Math.floor(this.sParameter.split(",")[0]) + ((this.sParameter.split(",")[1] != null) ? (Math.floor(this.sParameter.split(",")[1]) + 1) : 0)) + "'" +
                  " class='cxtext'>";
                break;
              case "dec":
                //Pega os Par�mentros necess�rios
                var vwNrInteiros = this.sParameter.split(",")[0];
                var vwNrDecimais = this.sParameter.split(",")[1];
                var vwSepDec = this.sParameter.split(",")[2];

                if (vwSepDec == 'p' || vwSepDec == 'P') {
                  vwSepDec = '.'
                } else {
                  vwSepDec = ','
                }

                var vwMontaEventoKeyPress = "return maskDec_Type(event,this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                var vwMontaEventoBlur = "maskDec_TypeBlur(this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                var vwMontaEventoKeyUp = "maskDec_TypeKeyUp(this," + vwNrInteiros + "," + vwNrDecimais + "," + String.fromCharCode(39) + vwSepDec + String.fromCharCode(39) + ")"
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress=" + String.fromCharCode(34) + vwMontaEventoKeyPress + String.fromCharCode(34) +
                  " onblur=" + String.fromCharCode(34) + vwMontaEventoBlur + String.fromCharCode(34) +
                  " onkeyup=" + String.fromCharCode(34) + vwMontaEventoKeyUp + String.fromCharCode(34) +
                  " maxlength='" + (Math.floor(this.sParameter.split(",")[0]) + ((this.sParameter.split(",")[1] != null) ? (Math.floor(this.sParameter.split(",")[1]) + 1) : 0)) + "'" +
                  " class='cxtext'>";
                break;
              case "hid":
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " readOnly class='cxhidden'>";
                break;
              case "str":
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress ='digitarUpper(this);'" +
                  " maxlength='" + Math.floor(this.sParameter) + "' class='cxtext'>";
                break;
              case "let":
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " onkeypress ='digitarUpper(this,\"S\");'" +
                  " maxlength='" + Math.floor(this.sParameter) + "' class='cxtext'>";
                break;
              case "scr":
                var str_block = Math.floor(this.sParameter);
                var p_newParameter = "readonly"
                if (str_block != "") {
                  p_newParameter = "maxlength='" + Math.floor(this.sParameter) + "'";
                }
                this.createTableItem.sItem += this.sHtmlColumn +
                  this.sHtmlTable +
                  "<td><input id='" + this.oCol.nodeName + "'" +
                  " type='text'" + ((this.sAlign != "") ? " onkeypress ='digitarUpper(this);' style='width:1;text-align:" + this.sAlign + ";'" : "") +
                  " class='cxtext' " + p_newParameter + "></td>" +
                  "<td width='20' nowrap><img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_pasta.gif' id='" + psTableId + "_" + iC + "'" +
                  " style='cursor:hand' onclick='javascript:popUpGrid(\"" + psTableId + "_" + iC + "\",document.getElementById(\"grid_New\").all(\"" + this.oCol.nodeName + "\"));'>";
                break;
            }
            this.createTableItem.sItem += "</td></tr></table></td>";
          }
        }
      }
      this.createTableItem.sButton += "</tr></table>"
      this.createTableItem.sItem += "</tr></table>"
    }
  }
  if (this.createTableItem.sItem != "") {
    for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
      if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {

        self.frames[iF].addGridHtml(6, this.createTableItem.sItem);
        self.frames[iF].addGridHtml(7, this.createTableItem.sButton);
        eval("self.frames[" + iF + "].reposition(" + this.bEdtBt + "," + this.bDelBt + ",'" + this.bSelBt + "'," + this.BotaoEspecial + ")");
        break;
      }
    }
  }



  this.createTableItem.sButton = null;
  this.createTableItem.sItem = null;
  this.oNd = null;
  this.bEdtBt = null;
  this.bDelBt = null;
  this.bSelBt = null;
  this.sHidFlds = null;
  this.oRows = null;
  this.iCols = null;
  this.oCol = null;
  this.sTipo = null;
  this.sParameter = null;
  this.sWidth = null;
  this.sAlign = null;
  this.sHtmlColumn = null;
  this.sHtmlTable = null;
  //	}
}

UltraCargo.prototype.createTableHeader = function(psTableId) {
  this.sTransImg = "/images_home/img_display/img_botoes/ultr_icon_transp.gif";
  this.createTableItem.sHeader = "";
  this.createTableHeader.sFixedHeader = "";
  this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);
  if (this.oNd != null) {
    this.bEdtBt = this.oNd.getAttribute("edit");
    this.bDelBt = this.oNd.getAttribute("delete");
    this.bSelBt = this.oNd.getAttribute("select");
    this.iFixed = Math.floor(this.oNd.getAttribute("fixed"));
    this.BotaoEspecial = this.oNd.getAttribute("botaoespecial");

    this.oRows = this.oNd.childNodes;
    if (this.oRows[0] != null) {
      this.createTableHeader.sHeader = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo'>";
      this.createTableHeader.sFixedHeader = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo'>";
      for (var iR = 0; iR < this.oRows.length; iR++) {
        this.oCols = this.oRows[iR].childNodes;
        this.createTableHeader.sHeader += "<tr>";
        this.createTableHeader.sFixedHeader += "<tr>";

        if (this.bSelBt == "single" || this.bSelBt == "multiple") {
          this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";

          this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";

        }

        if (this.bEdtBt == "true") {
          this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";

          this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";
        }

        if (this.bDelBt == "true") {
          this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>"

          if (this.bEdtBt == "false" && this.BotaoEspecial == "false") {
            this.createTableHeader.sHeader += "<img src='" + this.init.host + this.sTransImg + "' border='0'>"
          }
          this.createTableHeader.sHeader += "</td>";


          this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>"


          if (this.bEdtBt == "false" && this.BotaoEspecial == "false") {
            this.createTableHeader.sFixedHeader += "<img src='" + this.init.host + this.sTransImg + "' border='0'>"
          }
          this.createTableHeader.sFixedHeader += "</td>";
        }




        if (this.BotaoEspecial == "true") {
          this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";

          this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>" +
            "<img src='" + this.init.host + this.sTransImg + "' border='0'>" +
            "</td>";
        }



        for (var iC = 0; iC < this.oCols.length; iC++) {
          this.sNme = this.oCols[iC].nodeName;
          this.sTle = (this.oCols[iC].getAttribute("title") != null) ? this.oCols[iC].getAttribute("title") : "";
          this.sRwSpn = (this.oCols[iC].getAttribute("rowspan") != null) ? this.oCols[iC].getAttribute("rowspan") : "1";
          this.sClSpn = (this.oCols[iC].getAttribute("colspan") != null) ? this.oCols[iC].getAttribute("colspan") : "1";
          this.sIndex = (this.oCols[iC].getAttribute("index") != null) ? this.oCols[iC].getAttribute("index") : "";

          if (this.sNme != "" && this.sTle != "") {
            this.createTableHeader.sHeader += "<td" +
              " id='" + this.sNme + "'" +
              " rowspan='" + this.sRwSpn + "'" +
              " colspan='" + this.sClSpn + "'" +
              " index='" + this.sIndex + "'" +
              " align='center' class='iftabazul' nowrap>" + unescape(this.sTle) + "</td>";


            if (iC < this.iFixed) {
              this.createTableHeader.sFixedHeader += "<td" +
                " id='" + this.sNme + "'" +
                " rowspan='" + this.sRwSpn + "'" +
                " colspan='" + this.sClSpn + "'" +
                " index='" + this.sIndex + "'" +
                " align='center' class='iftabazul' nowrap>" + unescape(this.sTle) + "</td>";
            }
          }
        }
        this.createTableHeader.sHeader += "</tr>";
        this.createTableHeader.sFixedHeader += "</tr>";
      }
      this.createTableHeader.sHeader += "</table>";
      this.createTableHeader.sFixedHeader += "</table>";
    }
  }



  if (this.createTableHeader.sHeader != "") {
    for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
      if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {
        self.frames[iF].addGridHtml(4, this.createTableHeader.sHeader);
        if (this.bEdtBt == "true" || this.bDelBt == "true" || this.bSelBt != "" || this.BotaoEspecial == "true") {
          self.frames[iF].addGridHtml(5, this.createTableHeader.sFixedHeader);
        } else {
          self.frames[iF].hidePartition();
        }
        eval("self.frames[" + iF + "].reposition(" + this.bEdtBt + "," + this.bDelBt + ",'" + this.bSelBt + "'," + this.BotaoEspecial + ")");
        break;
      }
    }
  }

  this.sTransImg = null;
  this.createTableItem.sHeader = null;
  this.createTableHeader.sFixedHeader = null;
  this.oNd = null;
  this.bEdtBt = null;
  this.bDelBt = null;
  this.bSelBt = null;
  this.iFixed = null;
  this.oRows = null;
  this.oCols = null;
  this.sNme = null;
  this.sTle = null;
  this.sRwSpn = null;
  this.sClSpn = null;
  this.sIndex = null;
  //	}
}

UltraCargo.prototype.cTF = function(psTableId) {}


UltraCargo.prototype.createTableFooter = function(psTableId) {
  //Inserido por Anderson
  var altNew = "";
  var altNewPop = "";

  this.bDsb = false;
  for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
    if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {
      this.bDsb = (self.frames[iF].bEnable != null) ? (self.frames[iF].bEnable == false) ? true : false : false;
      break;
    }
  }

  this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);

  if (this.oNd == null) {
    return;
  }
  this.cTF.iPage = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "1";
  this.cTF.iPageCount = (this.oNd.getAttribute("page_count") != null) ? this.oNd.getAttribute("page_count") : "1";
  this.cTF.bInsertButton = this.oNd.getAttribute("insert");
  this.cTF.bInsertMultipleButton = this.oNd.getAttribute("insert_multiple");
  if (this.bDsb) {
    this.cTF.iPage = "1";
    this.cTF.iPageCount = "1";
    this.cTF.bInsertButton = false;
    this.cTF.bInsertMultipleButton = false;
  }
  altNew = (this.oNd.getAttribute("ToolTipNew") != null) ? this.oNd.getAttribute("ToolTipNew") : "Novo";
  if (altNew == "") {
    altNew = "Novo"
  }
  altNewPop = (this.oNd.getAttribute("ToolTipPopNew") != null) ? this.oNd.getAttribute("ToolTipPopNew") : "Grupo";
  if (altNewPop == "") {
    altNewPop = "Grupo"
  }
  this.cTF.sFooter = "<table width='100%' border='0' cellspacing='1' cellpadding='2' class='framesfundo'>" +
    "<tr>";

  if (this.cTF.bInsertButton == "true") {
    this.cTF.sFooter += "<td width='40' nowrap align='center'>" +
      "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_mais.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".newGrid();main(\"" + psTableId + "_new\");' alt=\"" + altNew + "\">" +
      "</td>";
  }
  if (this.cTF.bInsertMultipleButton == "true") {
    this.cTF.sFooter += "<td width='40' nowrap align='center'>" +
      "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_mais_grupo.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".listGrid();' alt=\"" + altNewPop + "\">" +
      "</td>";
  }
  this.cTF.sFooter += "<td>&nbsp;</td>" +
    "<td width='30' height='25' nowrap align='right'>";

  if (Math.floor(this.cTF.iPage) > Math.floor(this.cTF.iPageCount)) {
    this.cTF.iPage = this.cTF.iPageCount;
  }

  if (Math.floor(this.cTF.iPage) > 1) {
    this.cTF.sFooter += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_volt.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".lastPageGrid(" + (Math.floor(this.cTF.iPage) - 1) + ");' alt='Voltar'>";
  }

  if (Math.floor(this.cTF.iPageCount) > 1) {
    var vwMaxLength = this.cTF.iPageCount.length

    var vwInputPagi = "<input type='text' class='cxtext' maxlength='" + vwMaxLength + "' size='5' id='txt_pagina_dire' onkeypress=' return " + psTableId + ".Fu_PaginaDire(event,this," + this.cTF.iPageCount + ")' value='" + this.cTF.iPage + "'>";
    this.cTF.sFooter += "</td>" +
      "<td width='30' nowrap align='right'><label>" + vwInputPagi + "</label></td>" +
      "<td width='10' nowrap align='center'>de</td>" +
      "<td width='30' nowrap align='left'><label>" + this.cTF.iPageCount + "</label></td>" +
      "<td width='20' nowrap align='left'>";
  }



  if (Math.floor(this.cTF.iPage) < Math.floor(this.cTF.iPageCount)) {
    this.cTF.sFooter += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_avan.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".nextPageGrid(" + (Math.floor(this.cTF.iPage) + 1) + ");' alt='Avan�ar'>";
  }
  this.cTF.sFooter += "</td><td width='10' nowrap>&nbsp;</td></tr></table>";

  if (this.cTF.sFooter != "") {
    for (var iD = 0; iD < document.getElementsByTagName("DIV").length; iD++) {
      if (document.getElementsByTagName("DIV")[iD] != null) {
        if (document.getElementsByTagName("DIV")[iD].getAttribute("id") == psTableId) {
          document.getElementsByTagName("DIV")[iD].innerHTML = this.cTF.sFooter;
          break;
        }
      }
    }
  }
  this.bDsb = null;
  this.oNd = null;
  this.cTF.iPage = null;
  this.cTF.iPageCount = null;
  this.cTF.bInsertButton = null;
  this.cTF.bInsertMultipleButton = null;
  this.cTF.sFooter = null;
}

UltraCargo.prototype.terminateTable = function() {
  //	try {
  this.grid.id = "";
  this.grid.size = 0;
  this.grid.keys = "";
  this.grid.lock = "";
  this.grid.fk = "";
  this.grid.colsTitle = "";
  this.grid.colsField = "";
  this.grid.colsHiddenField = "";
  this.grid.colsToValidate = "";
  this.grid.colsToConsist = ""
  this.grid.pageOperation = ""
  this.grid.TipoGrid = ""
  this.grid.GridCheck = ""
  this.grid.ShowButEdt = "";
  this.grid.ShowButUpd = "";
  this.grid.XMLCheck = ""
  this.grid.GridSele = ""
  this.grid.colsType = "";
  this.grid.colsWidth = "";
  this.grid.colsAlign = "";
  this.grid.fixedCols = 0;
  this.grid.colIndex = -1;
  this.grid.selectButton = "";
  this.grid.editButton = true;
  this.grid.deleteButton = true;
  this.grid.insertButton = true;
  this.grid.insertMultipleButton = false;
  this.grid.editOnDetail = true;
  this.grid.enableFK = false;
  this.grid.move = false;
  this.grid.duplicar = false;
  this.grid.DelOnDesChk = false;
  this.grid.DelOnDesChk_pop = false;

  this.grid.BotaoEspecial = false;
  this.grid.ImgBotaoEspecial = "";
  this.grid.MainCaseBotaoEspecial = "";
  this.grid.ToolTipoBotaoEspecial = "";


  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[terminateTable]");
  //	}
}

UltraCargo.prototype.form = function() {
  //	try {
  if (arguments[0] != null) {
    this.init.form = arguments[0];
  } else {
    return this.init.form;
  }
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[form]");
  //	}
}

UltraCargo.prototype.operation = function() {
  //	try {


  if (arguments[0] != null) {
    this.init.operation = arguments[0];
  } else {
    return this.init.operation;
  }
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[operation]");
  //	}
}

UltraCargo.prototype.createTableFooter_ini = function(psTableId) {
  //	try {

  //Inserido por Anderson
  var altNew = "";
  var altNewPop = "";

  this.bDsb = false;
  for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
    if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {
      this.bDsb = (self.frames[iF].bEnable != null) ? (self.frames[iF].bEnable == false) ? true : false : false;
      break;
    }
  }
  this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);
  if (this.oNd == null) {
    return;
  }
  //****************************************************
  //Altera os atributos da pagina��o.
  //****************************************************
  this.oNd.setAttribute("page_count", "0")
  this.oNd.setAttribute("page", "1");
  //****************************************************
  this.cTF.iPage = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "1";
  this.cTF.iPageCount = (this.oNd.getAttribute("page_count") != null) ? this.oNd.getAttribute("page_count") : "1";
  this.cTF.bInsertButton = this.oNd.getAttribute("insert");
  this.cTF.bInsertMultipleButton = this.oNd.getAttribute("insert_multiple");
  if (this.bDsb) {
    this.cTF.iPage = "1";
    this.cTF.iPageCount = "1";
    this.cTF.bInsertButton = false;
    this.cTF.bInsertMultipleButton = false;
  }

  //		Inserido por Anderson Ikuo Nakamoto
  altNew = (this.oNd.getAttribute("ToolTipNew") != null) ? this.oNd.getAttribute("ToolTipNew") : "Novo";
  if (altNew == "") {
    altNew = "Novo"
  }
  altNewPop = (this.oNd.getAttribute("ToolTipPopNew") != null) ? this.oNd.getAttribute("ToolTipPopNew") : "Grupo";
  if (altNewPop == "") {
    altNewPop = "Grupo"
  }
  //

  this.cTF.sFooter = "<table width='100%' border='0' cellspacing='1' cellpadding='2' class='framesfundo'>" +
    "<tr>";

  if (this.cTF.bInsertButton == "true") {
    this.cTF.sFooter += "<td width='40' nowrap align='center'>" +
      "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_mais.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".newGrid();main(\"" + psTableId + "_new\");' alt=\"" + altNew + "\">" +
      "</td>";
  }
  if (this.cTF.bInsertMultipleButton == "true") {
    this.cTF.sFooter += "<td width='40' nowrap align='center'>" +
      "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_mais_grupo.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".listGrid();' alt=\"" + altNewPop + "\">" +
      "</td>";
  }
  this.cTF.sFooter += "<td>&nbsp;</td>" +
    "<td width='30' height='25' nowrap align='right'>";
  if (Math.floor(this.cTF.iPage) > Math.floor(this.cTF.iPageCount)) {
    this.cTF.iPage = this.cTF.iPageCount;
  }
  if (Math.floor(this.cTF.iPage) > 1) {
    this.cTF.sFooter += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_volt.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".lastPageGrid(" + (Math.floor(this.cTF.iPage) - 1) + ");' alt='Voltar'>";
  }
  if (Math.floor(this.cTF.iPageCount) > 1) {
    this.cTF.sFooter += "</td>" +
      "<td width='30' nowrap align='right'><label>" + this.cTF.iPage + "</label></td>" +
      "<td width='10' nowrap align='center'>de</td>" +
      "<td width='30' nowrap align='left'><label>" + this.cTF.iPageCount + "</label></td>" +
      "<td width='20' nowrap align='left'>";
  }
  if (Math.floor(this.cTF.iPage) < Math.floor(this.cTF.iPageCount)) {
    this.cTF.sFooter += "<img src='" + this.init.host + "/images_home/img_display/img_botoes/ultr_icon_avan.gif' border='0' style='cursor:hand' onclick='" + psTableId + ".nextPageGrid(" + (Math.floor(this.cTF.iPage) + 1) + ");' alt='Avan�ar'>";
  }
  this.cTF.sFooter += "</td><td width='10' nowrap>&nbsp;</td></tr></table>";


  if (this.cTF.sFooter != "") {
    for (var iD = 0; iD < document.getElementsByTagName("DIV").length; iD++) {
      if (document.getElementsByTagName("DIV")[iD] != null) {
        if (document.getElementsByTagName("DIV")[iD].getAttribute("id") == psTableId) {
          document.getElementsByTagName("DIV")[iD].innerHTML = this.cTF.sFooter;
          break;
        }
      }
    }
  }
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[createTableFooter]");
  //	}
  //	finally {
  this.bDsb = null;
  this.oNd = null;
  this.cTF.iPage = null;
  this.cTF.iPageCount = null;
  this.cTF.bInsertButton = null;
  this.cTF.bInsertMultipleButton = null;
  this.cTF.sFooter = null;
  //	}
}

UltraCargo.prototype.send = function() {
  //***********************************
  //Verifica se a sess�o expirou
  //***********************************
  this.shwSessionMsg = false;
  //ALTERACAO FABIO
  //if (this.verifyExpiredSession()) {
  //    return;
  //  }

  // Muda o foco para janela para funcionar a associa��o dos eventos nos campos str
  //window.focus();
  this.bSendMethod = false;
  this.sResp = (arguments[0] != null) ? arguments[0] : "";
  this.sXml = "";
  this.bIsForm = false;
  this.bIsTable = false;
  this.bIsValidateMessage = true;


  if (this.sResp == "") {
    if (!this.validateToSend()) {
      return;
    }
    this.updateData();


    if (this.init.reset) {
      if (this.init.form != "") {
        this.oNd = this.init.oXD.selectSingleNode("root/" + this.init.form);
        if (this.oNd != null) {
          this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
          if (this.sTipo == "table") {
            this.oNd.setAttribute("page", "1");
            this.oNd.setAttribute("page_count", "0");
          }
        }
      }
    }

    this.sResp = this.extractXmlData(this.init.operation, this.init.groupData);



    if (!this.doNotVerify) {
      if (!this.verifyFields(this.sResp, this.init.operation)) // aquivol
      {
        return;
      }
    }



    this.oXD = new ActiveXObject("MSXML2.FreeThreadedDOMDocument")
    this.oXD.loadXML(this.sResp);
    this.oRoot = this.oXD.documentElement;
    this.oNd = this.oXD.selectSingleNode("root/*");


    if (this.init.form != "" && this.init.form != this.oNd.nodeName) {

      this.sTipo = "";
      this.oDt = this.init.oXD.selectSingleNode("root/" + this.init.form);
      if (this.oDt != null) {
        this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
      }
      this.oDt = this.oXD.createNode(1, this.init.form, "");
      this.oDt.setAttribute("tipo", this.sTipo);
      for (var iE = 0; iE < this.oNd.childNodes.length; iE++) {
        this.oDt.appendChild(this.oNd.childNodes[iE].cloneNode(true));
      }
      this.oRoot.replaceChild(this.oDt, this.oNd);
      if (this.init.operation != "") {
        this.oNd = this.oXD.selectSingleNode("root/operation");
        if (this.oNd != null) {
          this.oNd.setAttribute("value", this.init.operation);
        } else {
          this.oNd = this.oXD.createNode(1, "operation", "");
          this.oNd.setAttribute("value", this.init.operation);
          this.oXD.documentElement.appendChild(this.oNd);
        }
      }
    }
    this.saveXmlQuery(this.oXD.xml);
  } else {
    this.oXD = new ActiveXObject("MSXML2.FreeThreadedDOMDocument")
    this.oXD.loadXML(this.sResp);
    this.oRoot = this.oXD.documentElement;
    this.oNd = this.oXD.selectSingleNode("root/*");
    if (this.init.form != "" && this.init.form != this.oNd.nodeName) {
      this.sTipo = "";
      this.oDt = this.init.oXD.selectSingleNode("root/" + this.init.form);
      if (this.oDt != null) {
        this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
      }
      this.oDt = this.oXD.createNode(1, this.init.form, "");
      this.oDt.setAttribute("tipo", this.sTipo);
      for (var iE = 0; iE < this.oNd.childNodes.length; iE++) {
        this.oDt.appendChild(this.oNd.childNodes[iE].cloneNode(true));
      }
      this.oRoot.replaceChild(this.oDt, this.oNd);
      if (this.init.operation != "") {
        this.oNd = this.oXD.selectSingleNode("root/operation");
        if (this.oNd != null) {

          this.oNd.setAttribute("value", this.init.operation);
        } else {
          this.oNd = this.oXD.createNode(1, "operation", "");
          this.oNd.setAttribute("value", this.init.operation);
          this.oXD.documentElement.appendChild(this.oNd);
        }
      }

      this.saveXmlQuery(this.oXD.xml);
    } else {
      if (this.oNd != null) {
        this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
        if (this.sTipo == "") {
          this.oDt = this.init.oXD.selectSingleNode("root/" + this.oNd.nodeName);
          if (this.oDt != null) {
            this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
          }
          this.oNd.setAttribute("tipo", this.sTipo);
        }
      }
    }

    if (this.init.multiForm != "") {
      this.oXAux = new ActiveXObject("MSXML2.FreeThreadedDOMDocument")
      this.oXAux.loadXML("<root/>");
      this.oRootAux = this.oXAux.documentElement;
      this.asForm = this.init.multiForm.split("|");
      this.oNds = this.oNd.childNodes;
      for (var iM = 0; iM < this.asForm.length; iM++) {
        this.sTipo = "";
        this.sPgSiz = "";
        this.sPgNum = "";
        this.oDt = this.init.oXD.selectSingleNode("root/" + this.asForm[iM]);
        if (this.oDt != null) {
          this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
          this.sPgSiz = (this.oDt.getAttribute("page_size") != null) ? this.oDt.getAttribute("page_size") : 10;
          this.sPgNum = (this.oDt.getAttribute("page") != null) ? this.oDt.getAttribute("page") : 1;
        }
        this.oDt = this.oXD.selectSingleNode("root/" + this.asForm[iM]);
        if (this.oDt == null) {
          if (this.asForm[iM] != this.oNd.nodeName) {
            this.oDt = this.oXAux.createNode(1, this.asForm[iM], "");
            this.oDt.setAttribute("tipo", this.sTipo);
            for (var iN = 0; iN < this.oNds.length; iN++) {
              this.oDt.appendChild(this.oNds[iN].cloneNode(true));
            }
            this.oRootAux.appendChild(this.oDt);
          }
        } else {
          this.oDt.setAttribute("tipo", this.sTipo);
        }
        if (this.sTipo == "table") {
          this.oNd = this.oXAux.selectSingleNode("root/" + this.asForm[iM] + "/page_size");
          if (this.oNd == null) {
            this.oNd = this.oXD.createNode(1, "page_size", "");
            this.oNd.text = this.sPgSiz;
            this.oDt.appendChild(this.oNd);
            this.oNd = this.oXD.createNode(1, "page_number", "");
            this.oNd.text = this.sPgNum;
            this.oDt.appendChild(this.oNd);
          }
        }
      }
      this.oNd = this.oXD.selectSingleNode("root/operation");
      if (this.oNd != null) {
        this.oRootAux.appendChild(this.oNd.cloneNode(true));
      }
      this.oXD.loadXML(this.oRootAux.xml);
      this.oNds = this.oXD.selectNodes("root/*");
      for (var iM = 0; iM < this.oNds.length; iM++) {
        this.oNd = this.init.oXD.selectSingleNode("root/" + this.oNds[iM].nodeName);
        if (this.oNd != null) {
          this.oXAux.loadXML("<root/>");
          this.oRootAux = this.oXAux.documentElement;
          this.oRootAux.appendChild(this.oNds[iM].cloneNode(true));
          this.oNd = this.oXD.selectSingleNode("root/operation");
          if (this.oNd != null) {
            this.oRootAux.appendChild(this.oNd.cloneNode(true));
          }
          this.saveXmlQuery(this.oXAux.xml);
        }
      }

    }
    this.oNd = this.oXD.selectSingleNode("root/operation");

    if (this.oNd != null) {
      this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
      if (this.init.operation != this.sOper) {
        this.oNd.setAttribute("value", this.init.operation);
      }
    } else {
      this.oNd = this.oXD.createNode(1, "operation", "");
      this.oNd.setAttribute("value", this.init.operation);
      this.oXD.documentElement.appendChild(this.oNd);
    }
    this.sResp = this.oXD.xml;
  }

  this.sXml = this.checkLongTypeNodes(this.sResp);

  while (this.sXml == "") {
    continue;
  }

  while (this.bIsValidateMessage == true) {



    this.bIsValidateMessage = this.postXML(this.sXml);
  }

  this.terminateToSend();


  return this.bSendMethod;
  //	}
  //	catch(oException) {
  //		this.exception(oException,"UltraCargo[send]");
  //		return false;
  //	}
  //	finally {
  this.bSendMethod = null;
  this.sResp = null;
  this.sXml = null;
  this.bIsForm = null;
  this.bIsTable = null;
  this.oNd = null;
  this.sTipo = null;
  this.oXD = null;
  this.oRoot = null;
  this.oDt = null;
  this.oXAux = null;
  this.oRootAux = null;
  this.asForm = null;
  this.oNds = null;
  this.sPgSiz = null;
  this.sPgNum = null;
  this.sOper = null;
  this.oXHttp = null;
  this.asXml = null;
  //	}
}