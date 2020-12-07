//https://run.mocky.io/v3/508ab46b-baef-45ff-960a-d4ea4c390418
var vwGeneNoSeleGr_jsu = false;
var vwXML_NOTIN;
var vwChave_NOTIN;
var vwDebug  = false;
var bln_pop = true;

function dalert(paExibir)
{
	if(vwDebug==true)
	{
		alert(paExibir)
	} 	
}

function UltraCargo()
{
	this.bDebug = false;
	this.shwMsg = true;
	this.sysMsg = true;
	this.unique = false;	
	this.doNotVerify = false;
    	this.doVerifySession = true;
	this.init();
}

XMLHttpRequest.prototype.xml = function() {
	return new XMLSerializer().serializeToString(this.document.documentElement);
}

XMLHttpRequest.prototype.loadXML = function(xmlStr) {
    const parser = new DOMParser();
    this.document = parser.parseFromString(xmlStr, "text/xml");
}

XMLHttpRequest.prototype.selectNodes = function(tagName) {  
  var nodes = [];
  var iterator = this.document.evaluate(tagName, this.document, null, XPathResult.ANY_TYPE, null);
  try {
    var thisNode = iterator.iterateNext();
    while (thisNode) {
      nodes.push(thisNode);
      thisNode = iterator.iterateNext();
    }
    return nodes;
  } catch (e) {
    alert('Error: Documento modificado durante iteracao ' + e);
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


UltraCargo.prototype.SessionText = function()
{
		this.sFunction = (arguments[0] != null) ? arguments[0] : "";
		this.SPage = (arguments[1] != null) ? arguments[1] : "";
		this.SSession = (arguments[2] != null) ? arguments[2] : "";

		this.oXHttp = new XMLHttpRequest();
		this.oXHttp.open("POST",this.SPage + "?pFunction=" + this.sFunction + "&pSession=" + this.SSession, false);		

		if(this.sFunction == "SET"){
			this.oXHttp.send(this.sXml);
	
		}
		else{
			this.oXHttp.send();

		}
		while(this.oXHttp.readyState != 4)
		{
			continue;
		}
		
		this.sResp = this.oXHttp.responseText;
		return this.sResp;

	obj_Form = null;
    	obj_Field = null;
    	obj_NXML = null;
	
}

UltraCargo.prototype.init = function() 
{
		this.init.oPopUp = null;
		this.init.sPopUp = "";
		this.init.sPopUpGrid = "";
		this.init.asQuery = new Array();
		this.init.sLoginAtu = "1";
		this.init.sIdEntidade = "1";
		this.init.sIdFilial = "1";
		this.init.sPageOperation  ="";
		this.init.sDsUsuario = "";
		this.init.sDsLogin = "";
		this.init.sInCategoria = "";
		this.init.sInVerTanque_Usu = "";
		this.init.sInPortaria = "";
		this.init.sInLeitoraCartao = "";
		this.init.sInPesagemIndependente = "";
		this.init.sInPortaNycon = "";
		this.init.sInPossuiBalanca = "";
		
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
		
		this.init.host = getHost();
		if (this.init.oXD == undefined) 
		{
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
		
		if (this.init.oXCheck == undefined) 
		{
			 this.init.oXCheck = new XMLHttpRequest();
		}
		this.init.oXCheck.loadXML("<root/>");
		
		if (this.init.oXCheckXML == undefined)
		{
			 this.init.oXCheckXML = new XMLHttpRequest();
		}
		this.init.oXCheckXML.loadXML("<root/>");
	        
			/*COMENTADO PARA SIMULACAO FABIO
	      	var loXHttp = new XMLHttpRequest();
	        var loXML   = new XMLHttpRequest();
	
			loXHttp.open("POST",this.init.host + "/prc/prc_ultracargoSession.asp", false);
			loXHttp.send();
			while(loXHttp.readyState != 4)
			{
				continue;
			}
	        loXML.loadXML(loXHttp.responseText);
	        
		this.init.sLoginAtu = loXML.selectSingleNode("//loginatu").getAttribute("value");
		this.init.sIdEntidade = loXML.selectSingleNode("//loginentidade").getAttribute("value");
		this.init.sIdFilial = loXML.selectSingleNode("//loginfilial").getAttribute("value");		
		this.init.sDsUsuario = loXML.selectSingleNode("//dsusuario").getAttribute("value");
		this.init.sDsLogin = loXML.selectSingleNode("//dslogin").getAttribute("value");
		this.init.sInCategoria = loXML.selectSingleNode("//incategoria").getAttribute("value");
		this.init.sInVerTanque_Usu = loXML.selectSingleNode("//invertanqueusu").getAttribute("value");
		this.init.sInPortaria = loXML.selectSingleNode("//inportaria").getAttribute("value");
		this.init.sInLeitoraCartao = loXML.selectSingleNode("//inleitoracartao").getAttribute("value");
		this.init.sInPesagemIndependente = loXML.selectSingleNode("//inpesagemindependente").getAttribute("value");
		this.init.sInPortaNycon = loXML.selectSingleNode("//inportanycon").getAttribute("value");
		this.init.sInPossuiBalanca = loXML.selectSingleNode("//inpossuibalanca").getAttribute("value");
		 */

		this.init.asHost = null;
	    	loXHttp = null;
        	loXML = null;

}
UltraCargo.prototype.SeeXmls = function()
{
		alert('oXD:' + this.init.oXD.xml());
		alert('oXDt:' + this.init.oXDt.xml()); 
		alert('oXGr:' + this.init.oXGr.xml());
}

UltraCargo.prototype.setopenPopUp = function()
{
	this.setopenPopUp.sForm = "";
	this.setopenPopUp.oDsField;
	this.setopenPopUp.sOperation = "";
	this.setopenPopUp.sFormField = "";
	this.setopenPopUp.sXmlField = "";
	this.setopenPopUp.sPath = "";
	this.setopenPopUp.sXml = "";
	this.setopenPopUp.xml = "";
}

UltraCargo.prototype.openPopUp = function()
{
		if(bln_pop == false){
			return false;
		}
		
		var str_XML;
		var vwAtivaPopUp = false;
		
		var obj_Form  = document.getElementById(this.setopenPopUp.sForm);
		var obj_Field = this.setopenPopUp.oDsField;
		var str_PopUp_Operation = this.setopenPopUp.sOperation;		  
		var arr_XmlField = this.setopenPopUp.sXmlField.split("|");	  
		var arr_FormField = this.setopenPopUp.sFormField.split("|");
		var str_Host = getHost();
		var str_Key = obj_Form.all(arr_FormField[1]).value;
		
		if (obj_Field != null){
			if(obj_Field.value == ''){
				Fu_ClearLnkHid(this.setopenPopUp.sForm, obj_Field);
				return;
			}
			this.form(this.setopenPopUp.sForm);
			this.operation(str_PopUp_Operation);
			this.shwMsg = false;
			this.unique =  true;
			
			obj_Form.all(arr_FormField[1]).value = "";
			
			if (this.send()){
				for(var int_cont=0;int_cont < arr_XmlField.length;int_cont++){
					Fu_AutoCompletar(obj_Form.all(arr_FormField[int_cont]), this.Xml(), arr_XmlField[int_cont]);
				}
			}else{
				vwAtivaPopUp  = true;
			}
			str_XML = this.xml()();
		}
		else{
			obj_Field = obj_Form.all(arr_FormField[0]);
			if (obj_Field != null && obj_Field.disabled == false){
				if(obj_Field.value == ''){
					Fu_ClearLnkHid(this.setopenPopUp.sForm, obj_Field);
				}
				vwAtivaPopUp  = true;
			}
		}
		if(vwAtivaPopUp == true){
			var obj_XML = new XMLHttpRequest();
			var str_PopWidth, str_PopHeight;
			obj_XML.async = false;
			obj_XML.load(str_Host + "/pop-up/Pop_Size.xml()");
			
			if (obj_XML.parseError == 0){
				var str_PopName = new String(this.setopenPopUp.sPath);
				str_PopName = str_PopName.split("/")[str_PopName.split("/").length-1];
				str_PopName = str_PopName.split(".")[0];
				
				var obj_NXML = obj_XML.selectSingleNode("//" + str_PopName);
				if (obj_NXML == null){
					str_PopWidth = null;
					str_PopHeight = null;
				}else{
					str_PopWidth = (obj_NXML.getAttribute("width") == "null") ? null : obj_NXML.getAttribute("width");
					str_PopHeight = (obj_NXML.getAttribute("height") == "null") ? null : obj_NXML.getAttribute("height");
				}
			}
			
			str_XML = this.getXml(this.setopenPopUp.sForm,str_PopUp_Operation);
			
			this.popUpGrid(this.setopenPopUp.sForm);
			this.popUp(this.setopenPopUp.sPath,str_XML,str_PopWidth,str_PopHeight,false);
			str_XML = this.popUp.sXml;
		}
		if (obj_Form.all(arr_FormField[1]).value == ""){
			for(var int_cont=0;int_cont < arr_XmlField.length;int_cont++){
				obj_Form.all(arr_FormField[int_cont]).value = "";
			}
		}
		this.setopenPopUp.sXml = str_XML;

	obj_Form = null;
    	obj_Field = null;
    	obj_NXML = null;
	
}

UltraCargo.prototype.Fu_OrdenaXML = function(paPathPai,paPathLine,paOrdenarCampo)
{
	var vwObjXMLOrder = new XMLHttpRequest();
	var vwNodesOrder  = null; 
	var vwStringCampos = null; 
	var vwSNodeCampo   = null; 
	vwObjXMLOrder.loadXML(this.init.oXGr.xml());
	vwNodesOrder  =  vwObjXMLOrder.selectNodes(paPathLine);  
	if(vwNodesOrder!= null)
	{
		vwStringCampos = '';
		for(var vwi=0;vwi<=vwNodesOrder.length-1;vwi++)
		{
			vwSNodeCampo   = vwNodesOrder[vwi].selectSingleNode(paOrdenarCampo);
			if(vwSNodeCampo != null)
			{
				vwStringCampos +=  vwSNodeCampo.getAttribute('value')  + '|';
			}
		}
		vwStringCampos   =  vwStringCampos.substr(0,vwStringCampos.length-1);  
	}
	var vwArrOrdenar  = new Array() 
	vwArrOrdenar = vwStringCampos.split('|')
	vwArrOrdenar.sort();

	var vwNodePai	   	= this.init.oXGr.selectNodes(paPathPai)
	var vwNodesFilhos	= null;
	if(vwNodePai != null)
	{
		vwNodesFilhos    =  this.init.oXGr.selectNodes(paPathLine)
		if(vwNodesFilhos!= null)
		{
			for(var vwi=0;vwi<=vwNodesFilhos.length-1;vwi++)
			{
				vwNodePai[0].removeChild(vwNodesFilhos[vwi]);
			}
		}
	}
	
	vwNodePai     = this.init.oXGr.selectNodes(paPathPai)
	vwNodesOrder  =  vwObjXMLOrder.selectNodes(paPathLine);
	for(var vwi=0;vwi<=vwArrOrdenar.length -1;vwi++)
	{
		if(vwNodesOrder != null )
		{
			for(var vwj=0;vwj<= vwNodesOrder.length-1;vwj++)
			{
				vwSNodeCampo   = vwNodesOrder[vwj].selectSingleNode(paOrdenarCampo);
				if(vwSNodeCampo != null)
				{
					vwStringCampos =  vwSNodeCampo.getAttribute('value');
				}
				if(vwStringCampos == vwArrOrdenar[vwi])
				{
					vwNodePai[0].appendChild(vwNodesOrder[vwj])
				} 
			}
		}
	}
}

UltraCargo.prototype.LimpaEstruXML = function(psTableId) 
{
	this.init.oXD.loadXML('<root/>');
}

UltraCargo.prototype.AutoPesqBlur = function(paPopCase,paForm)
{
	var vwXMLAutoPesq  =  null;
	vwXMLAutoPesq =  this.getXml(paForm,paPopCase);
	return '';
}

UltraCargo.prototype.Fu_RetXML = function(paNome)
{
	if(paNome ==  'CHECK')
	{
		return this.init.oXCheck.xml();
	}
	
	if(paNome ==  'CHECK_XML')
	{
		return this.init.oXCheckXML.xml();
	}
	
	if(paNome ==  'DT')  
	{
		return this.init.oXDt.xml();
	}
	
	if(paNome ==  'GR')  
	{
		return this.init.oXGr.xml();
	}
	
	if(paNome ==  'D')
	{
		return this.init.oXD.xml();
	}
	return ''	
}

UltraCargo.prototype.getPage = function(paFormName)
{
	var vwNode		= null;
	var vwPagina	= null 
	vwNode  =  this.init.oXD.selectSingleNode('root/' + paFormName);
	if(vwNode  != null)
	{
		vwPagina  = vwNode.getAttribute('page');
		if(vwPagina != null && vwPagina != undefined)
		{
			return vwPagina;
		} 
		else
		{
			return 1;
		}
			 
	}
	return 1;
}

UltraCargo.prototype.keepPage = function(paFormName,paPageForce)
{
	var vwObjXMLKP	= new XMLHttpRequest();
	var vwNodePai	= null; 
	var vwNode		= null;
	var vwPagina	= null; 
	 
	vwNode  =  this.init.oXD.selectSingleNode('root/' + paFormName);
	if(vwNode  != null)
	{
		if(paPageForce != null && paPageForce != '')
		{
			vwPagina  = paPageForce
		}
		else
		{
			vwPagina  = vwNode.getAttribute('page');
		}	
			
		if(vwPagina != null && vwPagina != undefined)
		{
			vwObjXMLKP.loadXML('<root/>');
			
			vwNodePai = vwObjXMLKP.documentElement; 
			
			vwNode = null;
			
			vwNode = vwObjXMLKP.createNode(1,paFormName,"");
			vwNode.setAttribute("tipo","table");
			vwNode.setAttribute("page",vwPagina);
			
			vwNodePai.appendChild(vwNode);
			
			vwNode = vwObjXMLKP.createNode(1,"operation","");
			vwNode.setAttribute("value","keeppage");
			vwNodePai.appendChild(vwNode);
			
			this.dataGrid(vwObjXMLKP.xml())
		}
	}
	
	vwObjXMLKP	= null; 
	vwNodePai	= null; 
	vwNode		= null;
	vwPagina	= null;
	return;
}

UltraCargo.prototype.Fu_RetXML_GridNotIn = function(paTabela)
{
	var vwXMLNo	=   new XMLHttpRequest();
	var vwNode;
	
	vwXMLNo.loadXML(this.init.oXGr.xml());
	vwNode   = vwXMLNo.selectNodes('root/' + paTabela);
	
	
	if(vwNode != null  )
	{
		if(vwNode.length > 0)
		{
			return '<root>' +  vwNode[0].xml  + '</root>';
		}
		else
		{
			return '';
		}
	}
	else
	{
		return '';
	}
	
}

UltraCargo.prototype.Fu_RetLinhaAtualSele = function(psTableId,paXML)
{
	var vwLinhaSele=0;
	var vwCheck = '' 
	var vwXML	=   new XMLHttpRequest();
	vwXML.loadXML(paXML);
	
	if(vwXML.parseError!=0) 
	{
		return false;
	}
	var vwNodeXML   = vwXML.selectNodes('root/' + psTableId)
	for(var vwi= 0;vwi<=vwNodeXML.length-1;vwi++)
	{
		vwLinhaSele  =  vwNodeXML[vwi].getAttribute('line');
		vwCheck		 =  vwNodeXML[vwi].getAttribute('checked');
	}
	vwXML.loadXML(this.init.oXGr.xml());
	vwNodeXML   = vwXML.selectNodes('root/' + psTableId + '/row')
	for(var vwi= 0;vwi<=vwNodeXML.length-1;vwi++)
	{
		if(vwNodeXML[vwi].getAttribute('line') == vwLinhaSele)
		{
			vwNodeXML[vwi].setAttribute("status",vwCheck);
			return '<root>' +  vwNodeXML[vwi].xml + '</root>';
		}
	}
}

//***********************************************************************
// Funcionalidade: Retorna as linhas do xml de um grid informado
// Data          : 27/11/2012
//***********************************************************************
UltraCargo.prototype.Fu_RetLinhasSele = function(psTableId,paXML)
{
    var vwLinhaSele=0;
	var vwCheck = '' 
	var vwXML	=   new XMLHttpRequest();
	var xmlReturn = '';
	vwXML.loadXML(paXML);
	
	if(vwXML.parseError!=0) 
	{
		return false;
	}
	var vwNodeXML   = vwXML.selectNodes('root/' + psTableId)
	for(var vwi= 0;vwi<=vwNodeXML.length-1;vwi++)
	{
		vwLinhaSele  =  vwNodeXML[vwi].getAttribute('line');
		vwCheck		 =  vwNodeXML[vwi].getAttribute('checked');
	}
	vwXML.loadXML(this.init.oXGr.xml());
	vwNodeXML   = vwXML.selectNodes('root/' + psTableId + '/row')
	for(var vwi= 0;vwi<=vwNodeXML.length-1;vwi++)
	{
		if(vwNodeXML[vwi].getAttribute('line') == vwLinhaSele)
		{
		    this.init.oXGr.selectSingleNode("root/" + psTableId + "/row[@line='" + vwLinhaSele + "']").setAttribute("status",vwCheck);
			vwNodeXML[vwi].setAttribute("status",vwCheck);
			break;
		}
	}
	
	var str_status = "";
	for(var vwi= 0;vwi<=vwNodeXML.length-1;vwi++)
	{
	    str_status = vwNodeXML[vwi].getAttribute("status");
	    if (str_status == "true")
	    {
		    xmlReturn+= vwNodeXML[vwi].xml
		}
	}
	return '<root>' +  xmlReturn + '</root>';
}

UltraCargo.prototype.AtualizaColsToValidade = function(psTableId,paNewColToValidade)
{
	this.cTF.oNds = this.init.oXD.selectNodes("root/" + psTableId);
	for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
	{
		var vwValidate  = this.cTF.oNds[iN].getAttribute('validate');
		this.cTF.oNds[iN].setAttribute("validate",paNewColToValidade);
	}
	this.cTF.oNds  = null
}

UltraCargo.prototype.PopulaXMLtoCheck = function()
{
	
	this.saveXmlGrid(this.init.oXCheck.xml);
}


UltraCargo.prototype.CriaCheckXML = function(paNomeForm,paLinhaXML,paNomeFormEstru)
{
	var vwXMLCheckTemp =   new XMLHttpRequest();
	var vwObjNodes;
	vwXMLCheckTemp.loadXML(paLinhaXML);
	vwObjNodes   =   vwXMLCheckTemp.selectNodes('root/*/*') 
	this.oRoot = this.init.oXCheckXML.selectSingleNode('root/' + paNomeForm);
	
	var vwXMLStru	=   new XMLHttpRequest();
	var vwNodeStru;
	vwXMLStru.loadXML(this.init.oXD.xml())  
	vwNodeStru  =  vwXMLStru.selectSingleNode('root/' + paNomeFormEstru)
	var vwChave = vwNodeStru.getAttribute('pk'); 
	var vwCamposChave =  vwChave.split('|');
	var vwConc_1 = ''
	var vwConc_2 = ''
	for(var vwi=0;vwi<=vwObjNodes.length-1;vwi++ )
	{
		var vwPos  = 0;
		var vwValor  =  vwObjNodes[vwi].xml; 
		vwPos  = vwValor.indexOf('page',0)
		if( vwPos != -1) 
		{
			vwConc_1 = ''
			vwConc_2 = ''
			for(var vwk= 0;vwk<= vwCamposChave.length-1;vwk++)
			{
				var vwNodeLinha   =   vwObjNodes[vwi].selectSingleNode(vwCamposChave[vwk])
				if(vwNodeLinha!=null)
				{
					vwConc_1 +=  vwNodeLinha.getAttribute('value');
				}
			}
			var vwNodePk   =  this.oRoot.selectNodes('row')
			if(vwNodePk != null)
			{
				for(var vwj = 0;vwj<=vwNodePk.length-1;vwj++)
				{
					vwConc_2  = ''; 
					for(var vwl= 0;vwl<= vwCamposChave.length-1;vwl++)
					{
						var vwNodeLinha   =   vwNodePk[vwj].selectSingleNode(vwCamposChave[vwl]);
						if(vwNodeLinha!=null)
						{
							vwConc_2 +=  vwNodeLinha.getAttribute('value');
						}
					}
					if(vwConc_1  == vwConc_2)
					{
						return; 
					}
				}	
			}
			this.oRoot.appendChild(vwObjNodes[vwi]);
		}
	}
}

UltraCargo.prototype.AddLinhaDT = function(paNomeForm,paXML,paStatusLinha)
{
	var vwXMLAddLinha =   new XMLHttpRequest();
	var vwObjNodes;
	vwXMLAddLinha.loadXML(paXML);
	vwObjNodes   =   vwXMLAddLinha.selectNodes('root/*/*')
	this.oRoot = this.init.oXDt.selectSingleNode('root/' + paNomeForm);
	
	if(this.oRoot == null)
	{
		this.createNode(2,paNomeForm,"root","","tipo","table","operation",'');
		this.oRoot = this.init.oXDt.selectSingleNode('root/' + paNomeForm);
	}
	for(var vwi=0;vwi<=vwObjNodes.length-1;vwi++ )
	{
		if(paStatusLinha != '' && paStatusLinha != null )
		{
			vwObjNodes[vwi].setAttribute('status',paStatusLinha);
		}
		this.oRoot.appendChild(vwObjNodes[vwi]);
	}
	vwXMLAddLinha	= null;
	vwObjNodes		= null;
}

UltraCargo.prototype.ExcluiLinhaDesCheck = function(paCamposChav,paChave)
{
	var vwChave = ''; 
	var vwCamposChave =  paCamposChav.split('|');
	this.cTF.oNds = this.init.oXCheck.selectNodes("root/*/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		this.cTF.oNd = this.init.oXCheck.selectSingleNode("root/*");
		if (this.cTF.oNd != null)
		{
			vwChave = '';
			for(var vwj=0;vwj<=vwCamposChave.length-1;vwj++)
			{
				var vwNodeLinha   =   this.cTF.oNds[iN].selectSingleNode(vwCamposChave[vwj]);
				if(vwNodeLinha!=null)
				{
					vwChave +=  vwNodeLinha.getAttribute('value');
				}
			}
			if(vwChave == paChave)
			{
				
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
			}
		}
	}
	
	this.cTF.oNds = this.init.oXCheck.selectNodes("root/*/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		var vwLinhaXML = this.cTF.oNds[iN].setAttribute('line',iN)
	}
}
UltraCargo.prototype.ExcluiLinhaDesCheckXML = function(paCamposChav,paChave)
{
	var vwChave = ''; 
	var vwCamposChave =  paCamposChav.split('|');
	this.cTF.oNds = this.init.oXCheckXML.selectNodes("root/*/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		this.cTF.oNd = this.init.oXCheckXML.selectSingleNode("root/*");
		if (this.cTF.oNd != null)
		{
			vwChave = '';
			for(var vwj=0;vwj<=vwCamposChave.length-1;vwj++)
			{
				var vwNodeLinha   =   this.cTF.oNds[iN].selectSingleNode(vwCamposChave[vwj]);
				if(vwNodeLinha!=null)
				{
					vwChave +=  vwNodeLinha.getAttribute('value');
				}
			}
			if(vwChave == paChave)
			{
				
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
			}
		}
	}
	
	this.cTF.oNds = this.init.oXCheckXML.selectNodes("root/*/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		var vwLinhaXML = this.cTF.oNds[iN].setAttribute('line',iN)
	}
}


UltraCargo.prototype.ExcluiLinhaCheck = function(paGridSelecionar,paChave)
{
	var vwXMLStru	=   new XMLHttpRequest();
	var vwNodeStru;
	vwXMLStru.loadXML(this.init.oXD.xml())  
	vwNodeStru  =  vwXMLStru.selectSingleNode('root/' + paGridSelecionar)
	
	var vwChave = vwNodeStru.getAttribute('pk');
	var vwCamposChave =  vwChave.split('|');
	var vwConc_1 = '';
	var vwLinhaXMLGrid1;
	var vwGridCheck  = vwNodeStru.getAttribute('gridcheck');
	
	this.cTF.oNds = this.init.oXCheck.selectNodes("root/" + vwGridCheck + "/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		this.cTF.oNd = this.init.oXCheck.selectSingleNode("root/" + vwGridCheck);
		vwConc_1  = '';
		if (this.cTF.oNd != null)
		{
			for(var vwj=0;vwj<=vwCamposChave.length-1;vwj++)
			{
				var vwNodeLinha   =   this.cTF.oNds[iN].selectSingleNode(vwCamposChave[vwj])
				if(vwNodeLinha!=null)
				{
					vwConc_1 +=  vwNodeLinha.getAttribute('value');
				}
			}
			if(vwConc_1 == paChave) 
			{
				
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
				vwLinhaXMLGrid1 = this.ExcluiLinhaCheckGrid_1(vwChave,vwConc_1,paGridSelecionar);
			}
		}
	}
	
	this.cTF.oNds = this.init.oXCheck.selectNodes("root/" + vwGridCheck + "/row");
	for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
	{
		var vwLinhaXML = this.cTF.oNds[iN].setAttribute('line',iN);
	}
	this.cTF.oNds = null;
	this.saveXmlGrid(this.init.oXCheck.xml);
	
	var vwObjIFRAME  =  document.getElementsByTagName("IFRAME")
									
	for(var vwi = 0;vwi<=vwObjIFRAME.length-1;vwi++)
	{
		if(vwObjIFRAME[vwi].id == paGridSelecionar)
		{
			self.frames(vwi).DesCheckGrid(vwLinhaXMLGrid1);
		}
	}
	return true;
}

UltraCargo.prototype.ExcluiLinhaCheckGrid_1 = function(paCamposChav,paChaveConc,psTableID_1)
{
	var vwLinhaRetorno;
	var vwXMLGrid_1	=   new XMLHttpRequest();
	var vwNodes
	vwXMLGrid_1.loadXML(this.init.oXDt.xml());
	
	vwNodes  = vwXMLGrid_1.selectNodes('root/' + psTableID_1 + '/row')
	
	var vwCamposChav = paCamposChav.split('|');
	var vwConc_1='';
	
	this.cTF.oNd = this.init.oXDt.selectSingleNode("root/" + psTableID_1);
	
	if(vwNodes != null && this.cTF.oNd != null )
	{
		for (var vwi = 0; vwi <= vwNodes.length-1; vwi++) 
		{
			vwLinhaRetorno = vwNodes[vwi].getAttribute('line');
			vwConc_1=''; 
			for(var vwj=0;vwj<=vwCamposChav.length-1;vwj++)
			{
				var vwNodeLinha   =   vwNodes[vwi].selectSingleNode(vwCamposChav[vwj])
				if(vwNodeLinha!=null)
				{
						vwConc_1 +=  vwNodeLinha.getAttribute('value');
				}
			}
			if(vwConc_1 == paChaveConc)
			{
				var vwNo  =  this.cTF.oNd.children[vwi]
				
				this.cTF.oNd.removeChild(vwNo);
				
				this.oElmnt = this.init.oXD.selectSingleNode("root/" + psTableID_1);
				this.oFld = document.getElementById(psTableID_1);
				this.sPKElement = "";
				
				this.sXPath = "root/" + psTableID_1;
				if (this.oFld != null) 
				{
					this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				}
				if (this.oElmnt != null)
				{
					this.sPg = (this.oElmnt.getAttribute("page") != null) ? this.oElmnt.getAttribute("page") : "";
				}
				this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
				
				var vwCloneNode   =   vwNo.cloneNode(true);
				vwCloneNode.setAttribute("status","server");
				var vwRota = this.init.oXGr.selectSingleNode(this.sXPath);
				if(vwRota != null)
				{
					vwRota.appendChild(vwCloneNode);
				}
				return vwLinhaRetorno; 
			}
		}
	}
}

UltraCargo.prototype.CriaXMLtoCheck = function(paTipo,paNomeForm,paLinhaXML)
{
	
	if(paTipo == 1 || paTipo ==null)
	{
		this.createNode(4,paNomeForm,"root","","tipo","table","operation",'multi_check');
		return;  
	}
	
	var vwXMLCheckTemp =   new XMLHttpRequest();
	var vwObjNodes;
	
	vwXMLCheckTemp.loadXML(paLinhaXML);
	
	vwObjNodes   =   vwXMLCheckTemp.selectNodes('root/*/*');
	
	this.oRoot = this.init.oXCheck.selectSingleNode('root/' + paNomeForm);
	
	var vwXMLStru	=   new XMLHttpRequest();
	var vwNodeStru;
	vwXMLStru.loadXML(this.init.oXD.xml())  
	vwNodeStru  =  vwXMLStru.selectSingleNode('root/' + paNomeForm)
	var vwChave = vwNodeStru.getAttribute('pk'); 
	var vwCamposChave =  vwChave.split('|');
	var vwConc_1 = '';
	var vwConc_2 = '';
	
	for(var vwi=0;vwi<=vwObjNodes.length-1;vwi++ )
	{
		var vwPos  = 0;
		var vwValor  =  vwObjNodes[vwi].xml; 
		vwPos  = vwValor.indexOf('page',0)
		if( vwPos != -1) 
		{
			vwConc_1 = ''
			vwConc_2 = ''
			for(var vwk= 0;vwk<= vwCamposChave.length-1;vwk++)
			{
				var vwNodeLinha   =   vwObjNodes[vwi].selectSingleNode(vwCamposChave[vwk])
				if(vwNodeLinha!=null)
				{
					vwConc_1 +=  vwNodeLinha.getAttribute('value');
				}
			}
			
			var vwNodePk   =  this.oRoot.selectNodes('row')
			if(vwNodePk != null)
			{
				for(var vwj = 0;vwj<=vwNodePk.length-1;vwj++)
				{
					vwConc_2  = ''; 
					for(var vwl= 0;vwl<= vwCamposChave.length-1;vwl++)
					{
						var vwNodeLinha   =   vwNodePk[vwj].selectSingleNode(vwCamposChave[vwl]);
						if(vwNodeLinha!=null)
						{
							vwConc_2 +=  vwNodeLinha.getAttribute('value');
						}
					}
					
					if(vwConc_1  == vwConc_2)
					{
						return; 
					}
				}	
			}
			this.oRoot.appendChild(vwObjNodes[vwi]);
		}
	}
	
}

UltraCargo.prototype.ClearCheckXML = function(psTableId)
{
	if(psTableId == null || psTableId == '')
	{
		this.cTF.oNds = this.init.oXCheckXML.selectNodes("root/*");
		for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
		{
			this.cTF.oNds_row = this.init.oXCheckXML.selectNodes("root/" + this.cTF.oNds[iN].nodeName + "/*");
			if(this.cTF.oNds_row != null) 
			{
				
				for(var vwi = 0;vwi<=this.cTF.oNds_row.length-1;vwi++)
				{
					this.cTF.oNds[iN].removeChild(this.cTF.oNds_row[vwi])
					
				}  
			} 
		}
	}
	else
	{
		this.cTF.oNds = this.init.oXCheckXML.selectNodes("root/" + psTableId + "/*");
		for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
		{
			this.cTF.oNd = this.init.oXCheckXML.selectSingleNode("root/" + psTableId);
			if (this.cTF.oNd != null)
			{
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
				
			}
		}
		this.cTF.oNds = null;
	}
}

UltraCargo.prototype.ClearXmlData_Dados = function(psTableId)
{
	this.cTF.oNds = this.init.oXDt.selectNodes("root/" + psTableId);
	
	for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
	{
		this.cTF.oNd = this.init.oXDt.selectSingleNode("root");
		if (this.cTF.oNd != null)
		{
			this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
		}
	}
	this.cTF.oNds = null;
}

UltraCargo.prototype.ClearXmlChild_Data = function(psPath)
{
	this.arrChild = psPath.split("/");
	this.cTF.oNds = this.init.oXDt.selectNodes(psPath);
	psPath = psPath.replace("/" + this.arrChild[this.arrChild.length - 1],"");
	
	for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
	{
		this.cTF.oNd = this.init.oXDt.selectSingleNode(psPath);
		if (this.cTF.oNd != null)
		{
			this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
		}
	}
	this.cTF.oNds = null;
}

UltraCargo.prototype.ClearXmlData_Local = function(psTableId)
{
	this.cTF.oNds = this.init.oXDt.selectNodes("root/" + psTableId + "/*");
	for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
	{
		this.cTF.oNd = this.init.oXDt.selectSingleNode("root/" + psTableId);
		if (this.cTF.oNd != null)
		{
			this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
		}
	}
	this.cTF.oNds = null;
}

UltraCargo.prototype.ClearXmlData_Check = function(psTableId)
{
	this.cTF.oNds = this.init.oXDt.selectNodes("root/*");
	for (var iN = 0; iN <= this.cTF.oNds.length-1; iN++) 
	{
		this.cTF.oNd = this.init.oXDt.selectSingleNode("root");
		if (this.cTF.oNd != null && this.cTF.oNds[iN].nodeName == psTableId)
		{
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
				
		}
	}
	this.cTF.oNds = null;
}

UltraCargo.prototype.ClearXmlData_Filtro = function(psTableId)
{
	objRoot	= this.init.oXGr.document.documentElement;

	for (var iN = 0; iN <= objRoot.children.length-1; iN ++) 
	{
		if(objRoot.children.item(iN) != null )
		{
			if(objRoot.children[iN].nodeName == psTableId)
			{
				Ond		= objRoot.removeChild(objRoot.children[iN]);
			} 	 
		}
	}
	objRoot  = null; 
}
	
UltraCargo.prototype.terminate = function() 
{
		this.shwMsg = true;
		this.sysMsg = true;
		this.unique = false;
		this.doNotVerify = false;

		this.init.asQuery = new Array();
		this.init.form = "";
		this.init.multiForm = "";
		this.init.code = "";
		this.init.message = "";
		this.init.operation = "";
		this.init.reset = true;

}

UltraCargo.prototype.Xml = function() 
{
		return this.init.sXml;
}


UltraCargo.prototype.getXmlData = function() {
		return this.init.oXDt.xml;
}

UltraCargo.prototype.getXmlStruct = function() {
		return this.init.oXD.xml;
}

UltraCargo.prototype.form = function() {
		if (arguments[0] != null) {
			this.init.form = arguments[0];
		}
		else {
			return this.init.form;
		}

}

UltraCargo.prototype.multiForm = function() {
		if (arguments[0] != null) {
			this.init.form = "";
			this.init.multiForm = arguments[0];
		}
		else {
			return this.init.multiForm;
		}

}

UltraCargo.prototype.keyValues = function() {
		if (arguments[0] != null) {
			this.init.key = arguments[0];
		}
		else {
			return this.init.key;
		}

}

UltraCargo.prototype.mensagem = function() {
		if (arguments[0] != null) {
			this.init.message = arguments[0];
		}
		else {
			return this.init.message;
		}

}

UltraCargo.prototype.code = function() {
		if (arguments[0] != null) {
			this.init.code = arguments[0];
		}
		else {
			return this.init.code;
		}

}

UltraCargo.prototype.groupData = function() {
		if (arguments[0] != null) {
			this.init.groupData = (arguments[0] == false) ? false : true;
		}
		else {
			return this.init.groupData;
		}

}

UltraCargo.prototype.processPage = function() {
		if (arguments[0] != null) {
			this.init.processPage = arguments[0];
		}
		else {
			return this.init.processPage;
		}

}

UltraCargo.prototype.showItensComboIsEmpty = function() {
		if (arguments[0] != null) {
			this.init.bFillAllItens = arguments[0];
		}
		else {
			return this.init.bFillAllItens;
		}

}

UltraCargo.prototype.operation = function() 
{
	
		if (arguments[0] != null) {
			this.init.operation = arguments[0];
		}
		else {
			return this.init.operation;
		}

}

UltraCargo.prototype.reset = function() {
		if (arguments[0] != null) {
			this.init.reset = arguments[0];
		}
		else {
			return this.init.reset;
		}

}

UltraCargo.prototype.check = function() {
		if (arguments[0] != null) {
			this.init.toCheck = arguments[0];
		}
		else {
			return this.init.toCheck;
		}

}

UltraCargo.prototype.popUpField = function() {
		if (arguments[0] != null) {
			this.init.sPopUp = "";
			this.init.sPopUpGrid = "";
			this.init.oPopUp = arguments[0];
		}
		else {
			return this.init.oPopUp;
		}

}

UltraCargo.prototype.popUpGrid = function() {
		if (arguments[0] != null) {
			this.init.oPopUp = null;
			this.init.sPopUpGrid = "";
			this.init.sPopUp = arguments[0];
		}
		else {
			return this.init.sPopUp;
		}

}

UltraCargo.prototype.popUpFill = function() {
		if (arguments[0] != null) {
			this.init.oPopUp = null;
			this.init.sPopUp = "";
			this.init.sPopUpGrid = arguments[0];
		}
		else {
			return this.init.sPopUpGrid;
		}

}

UltraCargo.prototype.setSession = function() 
{
	this.iSession = (arguments[0] != null || arguments[0] != undefined) ? arguments[0] : "";
	this.sSession = (arguments[1] != null || arguments[1] != undefined) ? escape(arguments[1]) : "";
	
	var loXHttp = new XMLHttpRequest();
	var loXML   = new XMLHttpRequest();
	
	loXHttp.open("POST",this.init.host + "/prc/prc_Session.asp" + "?pFunction=SET&pSession=" + this.iSession, false);
	loXHttp.send("<root>" + this.sSession + "</root>");
	while(loXHttp.readyState != 4)
	{
		continue;
	}
	
	loXML.loadXML(loXHttp.responseText);
	if (loXML.selectSingleNode("root").getAttribute("value") != "OK"){
		alert("UltraCargo[getXmlData]:" + loXHttp.statusText)
	}
	
	this.iSession = null;
	this.sSession = null;
	loXHttp = null;
	loXML = null;
}

UltraCargo.prototype.getSession = function() 
{	
	
	this.iSession = (arguments[0] != null) ? arguments[0] : -1;
	this.iSession = (isNaN(this.iSession)) ? this.iSession : parseInt(this.iSession);
	this.sSession = (arguments[1] != null || arguments[1] != undefined) ? arguments[1] : "";
	
	if (isNaN(this.iSession)){
		var loXHttp = new XMLHttpRequest();
        	var loXML   = new XMLHttpRequest();
		
		loXHttp.open("POST",this.init.host + "/prc/prc_Session.asp" + "?pFunction=GET&pSession=" + this.iSession, false);
		loXHttp.send();
		while(loXHttp.readyState != 4)
		{
			continue;
		}
        	return loXHttp.responseText.replace("<root>","").replace("</root>","");
	}


	if (this.sSession != ""){
		if (this.sSession.indexOf(".") != -1) {
			this.oFrmSession = document.getElementById(this.sSession.split(".")[0]);
			if (this.oFrmSession != null) 
			{				
				this.oFldSession = this.oFrmSession.elements[this.sSession.split(".")[1]];
				if (this.oFldSession != null)
				{
					switch(this.iSession)
					{
						case 0:
							this.oFldSession.setAttribute("value",this.init.sLoginAtu);
							break;
						case 1:
							this.oFldSession.setAttribute("value",this.init.sIdEntidade);
							break;
						case 2:
							this.oFldSession.setAttribute("value",this.init.sIdFilial);
							break;
						case 3:
							this.oFldSession.setAttribute("value",this.init.sDsUsuario);
							break;
						case 4:
							this.oFldSession.setAttribute("value",this.init.sDsLogin);
							break;
						case 5:
							this.oFldSession.setAttribute("value",this.init.sInCategoria);
							break;
						case 6:
							this.oFldSession.setAttribute("value",this.init.sInPortaria);
							break;
						case 7:
							this.oFldSession.setAttribute("value",this.init.sInLeitoraCartao);
							break;
						case 8:
							this.oFldSession.setAttribute("value",this.init.sInPesagemIndependente);
							break;
						case 9:
							this.oFldSession.setAttribute("value",this.init.sInPortaNycon);
							break;	
						case 10:
							this.oFldSession.setAttribute("value",this.init.sInPossuiBalanca);
							break;
                        case 11:
							this.oFldSession.setAttribute("value",this.init.sInVerTanque_Usu);
							break;								
					}
				}
			}
			return ;
		}
	}else{
		switch(this.iSession)
		{
			case 0:
				return this.init.sLoginAtu;
				break;
			case 1:
				return this.init.sIdEntidade;
				break;
			case 2:
				return  this.init.sIdFilial;
				break;
			case 3:
				return this.init.sDsUsuario;
				break;
			case 4:
				return this.init.sDsLogin;
				break;
			case 5:
				return this.init.sInCategoria;
				break;
			case 6:
				return this.init.sInPortaria;
				break;
			case 7:
				return this.init.sInLeitoraCartao;
				break;
			case 8:
				return this.init.sInPesagemIndependente;
				break;
			case 9:
				return this.init.sInPortaNycon;
				break;	
			case 10:
				return this.init.sInPossuiBalanca;
				break;
			case 11:
				return this.init.sInVerTanque_Usu;
				break;	
		}
	}
	this.iSession		= null;
	this.sSession		= null;
	this.oFrmSession	= null;
	this.oFldSession	= null;
}

UltraCargo.prototype.generateXmlDocument = function()
{
		for (var iF = 0; iF < document.forms.length; iF++) 
		{
			document.forms[iF].onsubmit = new Function("return false");
			this.oElmnts = document.forms[iF];
			
			if (this.oElmnts != null)
			{
				this.sFrmId = (this.oElmnts.getAttribute("id") != null) ? this.oElmnts.getAttribute("id") : "form"+iF;
				this.sLnk = (this.oElmnts.getAttribute("linked") != null) ? this.oElmnts.getAttribute("linked") : "";
				this.sOper = (this.oElmnts.getAttribute("operation") != null) ? this.oElmnts.getAttribute("operation") : "";
				
				
				this.createNode(1,this.sFrmId,"root","",
					"tipo","form",
					"linked",this.sLnk,
					"operation",this.sOper);
					
				for (var iI = 0; iI < this.oElmnts.length; iI++) 
				{
					this.oElmnt = this.oElmnts[iI];
					

					if (this.oElmnt != null) 
					{
						try 
						{
							this.sItemId = this.oElmnt.getAttribute("id");
						}
						catch(oException) 
						{
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
						
						if(this.oElmnt.autopesq != null)
						{
							
						}
						
						switch(this.sTgNm) 
						{
							case "INPUT":
								this.sTgNm += "-" + this.oElmnt.type;
								break;
							case "SELECT":
								this.sTgNm = this.oElmnt.type;
								break;
						}
						this.sTgNm = this.sTgNm.toLowerCase();
						switch(this.sTgNm) 
						{
							case "input-file":
							case "input-hidden":
							case "input-text":
								this.sVl = this.oElmnt.getAttribute("value");
								this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1),this.sTipo.lastIndexOf(")")) : "";
								switch(this.sTipo.substring(0,3)) 
								{
									case "dec":
										var vwNrInteiros	= this.sParameter.split(",")[0]; 
										var vwNrDecimais	= this.sParameter.split(",")[1]; 
										var vwSepDec		= this.sParameter.split(",")[2];
										if(vwSepDec == 'p' || vwSepDec == 'P')
										{
											vwSepDec = '.';
										}
										else
										{
											vwSepDec = ',';
										}
										
										this.oElmnt.onkeypress = new Function("return maskDec_Type(event,this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										this.oElmnt.onblur = new Function("maskDec_TypeBlur(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										this.oElmnt.onkeyup = new Function("maskDec_TypeKeyUp(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										
										break; 
									case "mpa":
										this.oElmnt.onkeypress = new Function("return Fu_DigPA_keypress(this);");
										break;
									case "dat":
										this.oElmnt.onkeypress = new Function("return Fu_DigData_keypress(this);");
										this.oElmnt.onblur = new Function("Fu_ValidaData_blur(this);");
										this.oElmnt.maxLength = 10;
										break;
									case "tim":
										this.oElmnt.onkeypress = new Function("return maskHour_Type(event,this);");
										this.oElmnt.onblur = new Function("maskHour(this);" + ((this.sClone == "true") ? "clone(this);": ""));
										this.oElmnt.maxLength = 5;
										break;
									case "int":
									case "ins":
										var vwNrInteiros	= this.sParameter.split(",")[0];
										var vwNrEscala		= this.sParameter.split(",")[1];
										var vwNrDecimais	= 0
										var vwSepDec   =  ','
										if (vwNrEscala == "NP"){
											this.oElmnt.onkeypress = new Function("onlyNumeric(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "','" + vwNrEscala + "')");
											this.oElmnt.onkeyup = new Function("validarSinalNeg_TypeKeyUp(this)")
										}else{
											this.oElmnt.onkeypress = new Function("onlyNumeric(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										}
										this.oElmnt.maxLength = vwNrInteiros; 
										break;
									case "lng":
										var vwNrInteiros	= this.sParameter.split(",")[0];
										var vwNrDecimais	= this.sParameter.split(",")[1];
										var vwSepDec   =  ','
										this.oElmnt.onkeypress = new Function("return maskDec_Type_lng(event,this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										this.oElmnt.onblur = new Function("maskDec_TypeBlur_lng(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										this.oElmnt.onkeyup = new Function("maskDec_TypeKeyUp_lng(this,"  + vwNrInteiros +  "," + vwNrDecimais + ",'" + vwSepDec + "'" + ")");
										break;
									case "str":
										this.oElmnt.maxLength = Math.floor(this.sParameter);
										this.oElmnt.onkeypress = new Function("digitarUpper(this);");
									
										if (this.sClone == "true")
										{
											this.oElmnt.onblur = new Function("clone(this);");
										}
										break;
									case "let":
										this.oElmnt.maxLength = Math.floor(this.sParameter);
										this.oElmnt.onkeypress = new Function("digitarUpper(this,'S')");
										if (this.sClone == "true")
										{
											this.oElmnt.onblur = new Function("clone(this,\"S\");");
										}
										break;
								}
								
								this.createNode(1,this.sItemId,"root/" + this.sFrmId,"",
									"tag",this.sTgNm,
									"value","",
									"tipo",this.sTipo,
									"operation",this.sOper,
									"primary",this.sPK,
									"required",this.sRequired,
									"lbl",this.sLabel,
									"clone",this.sClone,
									"ignore",this.sIgnore,
									"unique",this.sUnique,
									"fixed",this.sFixed,
									"alias",this.sAls,
									"verify",this.sVrf,
									"status","local");
								break;
							case "input-checkbox":
								this.sVl = this.oElmnt.getAttribute("value");
								this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1),this.sTipo.lastIndexOf(")")) : "";
								this.sChecked = "false";
								if (this.oElmnt.checked) {
									this.sChecked = "true";
								}
								if (this.sVl.indexOf("::") == -1) {
									this.sVl += "::";
								}
								this.createNode(1,this.sItemId,"root/" + this.sFrmId,"",
									"tag",this.sTgNm,
									"value",escape(this.sParameter),
									"operation",this.sOper,
									"primary",this.sPK,
									"required",this.sRequired,
									"lbl",this.sLabel,
									"ignore",this.sIgnore,
									"unique",this.sUnique,
									"fixed",this.sFixed,
									"alias",this.sAls,
									"verify",this.sVrf,
									"status","local",
									"checked",this.sChecked);
								break;
							case "input-radio":
								this.sVl = this.oElmnt.getAttribute("value");
								this.sChecked = "false";
								if (this.oElmnt.checked) {
									this.sChecked = "true";
								}
								this.createNode(1,this.sItemId,"root/" + this.sFrmId,"",
									"tag",this.sTgNm,
									"value",escape(this.sVl),
									"operation",this.sOper,
									"primary",this.sPK,
									"required",this.sRequired,
									"lbl",this.sLabel,
									"ignore",this.sIgnore,
									"unique",this.sUnique,
									"fixed",this.sFixed,
									"alias",this.sAls,
									"verify",this.sVrf,
									"status","local",
									"checked",this.sChecked);
								break;
							case "select-one":
							case "select-multiple":
								this.createNode(1,this.sItemId,"root/" + this.sFrmId,"",
									"tag",this.sTgNm,
									"operation",this.sOper,
									"primary",this.sPK,
									"required",this.sRequired,
									"lbl",this.sLabel,
									"ignore",this.sIgnore,
									"unique",this.sUnique,
									"fixed",this.sFixed,
									"alias",this.sAls,
									"verify",this.sVrf,
									"status","local",
									"fields","");
								for (var iL = 0; iL < this.oElmnt.length; iL++) {
									this.sText = this.oElmnt[iL].text;
									this.sVl = this.oElmnt[iL].getAttribute("value");
									this.sSelected = "false";
									if (this.oElmnt[iL].selected) {
										this.sSelected = "true";
									}
									this.createNode(1,"option","root/" + this.sFrmId + "/" + this.sItemId,escape(this.sText),
										"value",escape(this.sVl),
										"selected",this.sSelected);
								}
								break;
							case "textarea":
								this.sVl = this.oElmnt.getAttribute("value");
								this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1),this.sTipo.lastIndexOf(")")) : "";
								switch(this.sTipo.substring(0,3)) 
								{
									case "str":
										this.oElmnt.onkeypress = new Function("maxLength(this,"+((this.sParameter != null) ? this.sParameter : 0)+");digitarUpper(this)");
										this.oElmnt.onblur = new Function("maxLength(this,"+((this.sParameter != null) ? this.sParameter : 0)+");");
										break;
								}
								this.createNode(1,this.sItemId,"root/" + this.sFrmId,this.sText,
									"tag",this.sTgNm,
									"value",escape(this.sVl),
									"tipo",this.sTipo,
									"operation",this.sOper,
									"primary",this.sPK,
									"required",this.sRequired,
									"lbl",this.sLabel,
									"ignore",this.sIgnore,
									"unique",this.sUnique,
									"fixed",this.sFixed,
									"alias",this.sAls,
									"verify",this.sVrf,
									"status","local");
								break;
						}
					}
				}
				this.oTables = this.oElmnts.getElementsByTagName("IFRAME");
				for (var iT = 0; iT < this.oTables.length; iT++) 
				{
					this.oTable = this.oTables[iT];
					try {
						this.sTblId = this.oTable.getAttribute("id");
					}
					catch(oException) {
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
					this.createNode(1,this.sTblId,"root","",
						"tipo","table",
						"linked",this.sLnk,
						"operation",this.sOper,
						"required",this.sRequired,
						"lbl",this.sLabel,
						"execute",this.sExec,
						"empty",this.sEmpty,
						"page","1",
						"page_size","0",
						"page_count","0");
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
}

UltraCargo.prototype.grid = function() 
{
		this.grid.id = "";
		this.grid.size = 0;
		this.grid.keys = "";
		this.grid.lock = "";
		this.grid.fk = "";
		this.grid.colsTitle = "";
		this.grid.colsField = "";
		this.grid.colsHiddenField = "";
		this.grid.colsToValidate = "";
		this.grid.TipoGrid		= "";
		this.grid.GridCheck		= "";
		this.grid.XMLCheck		= "";
		this.grid.GridSele		= "";
		this.grid.ShowButEdt    = ""; 
		this.grid.ShowButUpd	= "";
		this.grid.colsToConsist  = "";
		this.grid.pageOperation  = "";  
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
		this.grid.duplicar  = false;
		this.grid.DelOnDesChk  = false;
		this.grid.DelOnDesChk_pop  = false;
		this.grid.ToolTipNew = "";
		this.grid.ToolTipPopNew = "";
		
		this.grid.BotaoEspecial			= false;
		this.grid.ImgBotaoEspecial		= "";
		this.grid.MainCaseBotaoEspecial		= "";
		this.grid.ToolTipoBotaoEspecial		= "";  
		
}

UltraCargo.prototype.addTable = function() 
{
		if (this.validateTable()) 
		{
			this.cascadeTable(this.grid.id);
			
			this.addAttribute(1,"root/" + this.grid.id,
				"page_size",this.grid.size,
				"edit",this.grid.editButton.toString(),
				"delete",this.grid.deleteButton.toString(),
				"insert",this.grid.insertButton.toString(),
				"insert_multiple",this.grid.insertMultipleButton.toString(),
				"edit_on_detail",this.grid.editOnDetail.toString(),
				"enable_fk",this.grid.enableFK.toString(),
				"move_action",this.grid.move.toString(),
				"select",this.grid.selectButton.toString(),
				"pk",this.grid.keys,
				"lock",this.grid.lock,
				"fk",this.grid.fk,
				"hidden",this.grid.colsHiddenField,
				"validate",this.grid.colsToValidate,
				"consist",this.grid.colsToConsist,
				"pageoperation",this.grid.pageOperation,
				"tipogrid",this.grid.TipoGrid,
				"gridcheck",this.grid.GridCheck,
				"xmlcheck",this.grid.XMLCheck,
				"gridsele",this.grid.GridSele,
				"showbutedt",this.grid.ShowButEdt,
				"showbutupd",this.grid.ShowButUpd,  
				"duplicar",this.grid.duplicar.toString(),
				"DelOnDesChk",this.grid.DelOnDesChk.toString(),
				"DelOnDesChk_pop",this.grid.DelOnDesChk_pop.toString(),
				"fixed",this.grid.fixedCols,
				"index",this.grid.colIndex,
				
				"ToolTipNew",this.grid.ToolTipNew,
				"ToolTipPopNew",this.grid.ToolTipPopNew,
				"botaoespecial",this.grid.BotaoEspecial.toString(),
				"imgbotaoespecial",this.grid.ImgBotaoEspecial,
				"maincasebotaoespecial",this.grid.MainCaseBotaoEspecial,
				"tooltipobotaoespecial",this.grid.ToolTipoBotaoEspecial);
				
			this.addTableHeader();
			
			this.createTableInformartion(this.grid.id); 
			
			this.createTableItem(this.grid.id);
			
			this.createTableHeader(this.grid.id); 
			
			this.createTableFooter(this.grid.id);
			
			if(this.grid.TipoGrid == 'CHECK')
			{
				this.CriaXMLtoCheck(1,this.grid.id,'');
			}
			
			if(this.grid.TipoGrid == 'CHECK_XML')
			{
				this.createNode(5,this.grid.XMLCheck,"root","","tipo","table","operation",'multi_xml_check');
			}
			
			this.terminateTable();
		}
		this.oElmnts = null;
		this.sElement = null;
}
UltraCargo.prototype.validateTable = function() 
{

	try {
		this.CompMensagem = "";
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
		
		
		this.grid.BotaoEspecial			= (this.grid.BotaoEspecial != undefined) ? ((this.grid.BotaoEspecial == false) ? false : true) : false;
		this.grid.ImgBotaoEspecial		= (this.grid.ImgBotaoEspecial != undefined) ? this.grid.ImgBotaoEspecial : "";
		this.grid.MainCaseBotaoEspecial = (this.grid.MainCaseBotaoEspecial != undefined) ? this.grid.MainCaseBotaoEspecial : "";
		this.grid.ToolTipoBotaoEspecial = (this.grid.ToolTipoBotaoEspecial != undefined) ? this.grid.ToolTipoBotaoEspecial : "";
	
        if ((parent.top.frm_seguranca!=null) && (parent.top.frm_seguranca.inmanutencao=="N")) 
        {
            this.grid.insertButton=false;
            if (this.grid.editOnDetail==false) 
            {
                this.grid.editButton=false;
            }
            this.grid.deleteButton=false;        
			this.grid.insertMultipleButton=false;
        }
        if(this.grid.BotaoEspecial ==true)
        {
			if(this.grid.ImgBotaoEspecial=="")
			{
				this.CompMensagem  += "Imagem n�o informada para o Bot�o Especial.\n" 
				this.bValidate = false;
			}
			
			if(this.grid.MainCaseBotaoEspecial=="")
			{
				this.CompMensagem  += "Case/Opera��o que dever� ser executado na fun��o Main n�o foi informado.\n" 
				this.bValidate = false;
			}
			
        }
				
		if (this.grid.move) 
		{
			this.grid.insertButton = false;
		}
		
		if (this.grid.id == "") 
		{
			this.bValidate = false;
		}
		else if (Math.floor(this.grid.size) == 0) 
		{
			this.bValidate = false;
		}
		else if (this.grid.keys == "") 
		{
			this.bValidate = false;
		}
		else if (this.grid.colsTitle == "") 
		{
			this.bValidate = false;
		}
		else if (this.grid.colsField == "") 
		{
			this.bValidate = false;
		}
		else if (this.grid.colsType == "") 
		{
			this.bValidate = false;
		}
		else if (this.grid.colsWidth == "") 
		{
			this.bValidate = false;
		}
		else if (this.grid.colsAlign == "") 
		{
			this.bValidate = false;
		}
		
		if (!this.bValidate) 
		{
			throw "Verifique se todos os atributos foram informados.\n" + this.CompMensagem;
		}
		return true;
	}
	catch(oException) {
		this.exception(oException,"UltraCargo[validateTable]");
		return false;
	}
	finally {
		this.bValidate = null;
	}
}

UltraCargo.prototype.moveItem = function(psOper,psTableFrom,psTableTo) 
{
		this.iFrom = -1;
		this.iTo = -1;
		for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) 
		{
			if (this.iFrom == -1) 
			{
				if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableFrom) 
				{
					this.iFrom = iF;
				}
			}
			
			if (this.iTo == -1) 
			{
				if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableTo) 
				{
					this.iTo = iF;
				}
			}
		}
		if (this.iFrom != -1 && this.iTo != -1) 
		{
			this.oTblFrom = document.getElementById(psTableFrom);
			this.oTblTo = document.getElementById(psTableTo);
			if (this.oTblFrom != null && this.oTblTo != null) 
			{
				this.sPKFrom = (this.oTblFrom.getAttribute("pk") != null) ? this.oTblFrom.getAttribute("pk") : "";
				this.sPKTo = (this.oTblTo.getAttribute("pk") != null) ? this.oTblTo.getAttribute("pk") : "";
				this.oRoot = this.init.oXGr.document.documentElement;
				this.oTable = this.init.oXGr.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
				if (this.oTable == null) 
				{
					this.oNd = this.init.oXGr.createNode(1,psTableTo,"");
					this.oNd.setAttribute("tipo","table");
					this.oNd.setAttribute("pk",this.sPKTo);
					this.oNd.setAttribute("page",1);
					this.oRoot.appendChild(this.oNd);
					this.oTable = this.init.oXGr.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
				}
				this.oRoot = this.init.oXDt.document.documentElement;
				this.oTable = this.init.oXDt.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
				if (this.oTable == null) 
				{
					this.oNd = this.init.oXDt.createNode(1,psTableTo,"");
					this.oNd.setAttribute("tipo","table");
					this.oNd.setAttribute("pk",this.sPKTo);
					this.oNd.setAttribute("page",1);
					this.oRoot.appendChild(this.oNd);
					this.oTable = this.init.oXDt.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
				}
				if (this.oTable != null) 
				{
					this.oXD = new XMLHttpRequest();
					this.oXD.loadXML(self.frames[this.iFrom].getSelectedItens(psTableFrom));
					
					if (this.oXD.parseError == 0) 
					{
						this.sPg = "";
						this.oNd = this.init.oXD.selectSingleNode("root/" + psTableTo);
						if (this.oNd != null) 
						{
							this.sPg = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "";
						}
						this.oRws = this.oXD.selectNodes("root/" + psTableFrom + "/row");
						
						for (var iR = 0; iR < this.oRws.length; iR++) 
						{
							this.sLine = (this.oRws[iR].getAttribute("line") != null) ? this.oRws[iR].getAttribute("line") : "";
							if (this.sLine != "") 
							{
								this.oNd = this.init.oXDt.selectSingleNode("root/" + psTableFrom + "/row[@line='" + this.sLine + "']");
								if (this.oNd  == null) 
								{
									this.oNd = this.init.oXGr.selectSingleNode("root/" + psTableFrom + "/row[@line='" + this.sLine + "']");
								}
								if (this.oNd != null) 
								{
									this.sStts = (this.oNd.getAttribute("status") != null) ? this.oNd.getAttribute("status") : "";
									this.oRoot = this.oNd.parentNode;
									this.oNewNd = this.oNd.cloneNode(true);
									switch(psOper) 
									{
										case "add":
											this.sStts = (this.sStts != "") ? (this.sStts != "server") ? this.sStts : "sel_ins" : "sel_ins";
											if (this.sStts == "sel_ins") 
											{
												this.oNewNd.setAttribute("status",this.sStts);
												this.oNewNd.setAttribute("page",this.sPg);
												this.oNewNd.setAttribute("line",this.getSequence(psTableTo));
												this.oTable.appendChild(this.oNewNd);
											}
											else 
											{
												this.oNewNd.setAttribute("status","server");
												this.oNewNd.setAttribute("page",this.sPg);
												this.oNewNd.setAttribute("line",this.getSequence(psTableTo));
												this.oTable = this.init.oXGr.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
												if (this.oTable != null) 
												{
													this.oTable.appendChild(this.oNewNd);
												}
											}
											break;
										case "remove":
											this.sStts = (this.sStts != "") ? (this.sStts != "server") ? this.sStts : "sel_del" : "sel_del";
											if (this.sStts == "sel_ins") 
											{
												this.oNewNd.setAttribute("status","server");
												this.oNewNd.setAttribute("page",this.sPg);
												this.oNewNd.setAttribute("line",this.getSequence(psTableTo));
												this.oTable = this.init.oXGr.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
												if (this.oTable != null) 
												{
													this.oTable.appendChild(this.oNewNd);
												}
											}
											else 
											{
												this.oNewNd.setAttribute("status",this.sStts);
												this.oNewNd.setAttribute("page",this.sPg);
												this.oNewNd.setAttribute("line",this.getSequence(psTableTo));
												this.oTable.appendChild(this.oNewNd);
												this.oNewNd = this.oNd.cloneNode(true);
												this.oNewNd.setAttribute("status","server");
												this.oNewNd.setAttribute("page",this.sPg);
												this.oNewNd.setAttribute("line",this.getSequence(psTableTo));
												this.oTable = this.init.oXGr.selectSingleNode("root/" + psTableTo + "[@pk=\"" + this.sPKTo + "\"]");
												if (this.oTable != null) 
												{
													this.oTable.appendChild(this.oNewNd);
												}
											}
											break;
									}
									this.oRoot.removeChild(this.oNd);
								}
							}
						}
						this.generateTableContent(psTableFrom);
						this.generateTableContent(psTableTo);
					}
				}
			}
		}
		this.iFrom = null;
		this.iTo = null;
		this.oTblFrom = null;
		this.oTblTo = null;
		this.sPKFrom = null;
		this.sPKTo = null;
		this.oRoot = null;
		this.oTable = null;
		this.oNd = null;
		this.oRoot = null;
		this.oXD = null;
		this.sPg = null;
		this.oRws = null;
		this.sLine = null;
		this.sStts = null;
		this.oNewNd = null;
}

UltraCargo.prototype.cTF = function(psTableId) {
}
UltraCargo.prototype.cascade = function(psTableId) {
		this.cTF.bAll = (arguments[1] != null) ? (arguments[1] == true) ? true : false : false;
		this.cTF.oNds = this.init.oXD.selectNodes("//*[@linked='" + psTableId + "']");
		for (var iCN = 0; iCN < this.cTF.oNds.length; iCN++) {
			if (this.cTF.bAll) {
				this.cTF.sXPath = "root/" + this.cTF.oNds[iCN].nodeName;
			}
			else {
				this.cTF.sXPath = "root/" + this.cTF.oNds[iCN].nodeName + "[@pk!='']";
			}
			this.cTF.oDts = this.init.oXGr.selectNodes(this.cTF.sXPath);
			for (var iPK = 0; iPK < this.cTF.oDts.length; iPK++) 
			{
				
				this.init.oXGr.document.documentElement.removeChild(this.cTF.oDts[iPK]);
				
			}
			this.cTF.oDts = this.init.oXDt.selectNodes(this.cTF.sXPath);
			for (var iPK = 0; iPK < this.cTF.oDts.length; iPK++) 
			{
				
				this.init.oXDt.document.documentElement.removeChild(this.cTF.oDts[iPK]);
				
			}
		}

		this.cTF.bAll = null;
		this.cTF.oNds = null;
		this.cTF.sXPath = null;
		this.cTF.oDts = null;
}

UltraCargo.prototype.cascadeTable = function(psTableId) 
{
		this.cTF.oNds = this.init.oXD.selectNodes("root/" + psTableId + "/*");
		for (var iN = 0; iN < this.cTF.oNds.length; iN++) 
		{
			this.cTF.oNd = this.init.oXD.selectSingleNode("root/" + psTableId);
			if (this.cTF.oNd != null) 
			{
				this.cTF.oNd.removeChild(this.cTF.oNds[iN]);
			}
		}
		this.cascade(psTableId);
		this.cTF.oRoot = null;
		this.cTF.oNds = null;
}

UltraCargo.prototype.checkForChange = function(psTableId) {

		this.updateData();
		this.cTF.bClear = false;
		this.cTF.oNds = this.init.oXD.selectNodes("//*[@tipo='form' and @linked='" + psTableId + "']");
		for (var iN = 0; iN < this.cTF.oNds.length; iN++) {
			this.cTF.oNd = this.cTF.oNds[iN];
			this.cTF.sTipo = (this.cTF.oNd.getAttribute("tipo") != null) ? this.cTF.oNd.getAttribute("tipo") : "";
			this.cTF.oFld = document.getElementById(this.cTF.oNd.nodeName);
			if (this.cTF.oFld != null) {
				this.cTF.sPK = (this.cTF.oFld.getAttribute("pk") != null) ? this.cTF.oFld.getAttribute("pk") : "";
				switch(this.cTF.sTipo) {
					case "form":
						this.cTF.oDts = this.init.oXDt.selectNodes("root/" + this.cTF.oNd.nodeName + "[@pk=\"" + this.cTF.sPK + "\"]/*");
						for (var iD = 0; iD < this.cTF.oDts.length; iD++) {
							this.cTF.oDt = this.init.oXD.selectSingleNode("root/" + this.cTF.oNd.nodeName + "/" + this.cTF.oDts[iD].nodeName);
							this.cTF.sTag = (this.cTF.oDt.getAttribute("tag") != null) ? this.cTF.oDt.getAttribute("tag") : "";
							switch(this.cTF.sTag) {
								case "input-radio":
								case "select-one":
								case "select-multiple":
									break;
								default:
									this.cTF.sVl = (this.cTF.oDts[iD].getAttribute("value") != null) ? unescape(this.cTF.oDts[iD].getAttribute("value")) : "";
									this.cTF.sSrvVl = (this.cTF.oDts[iD].getAttribute("server_value") != null) ? unescape(this.cTF.oDts[iD].getAttribute("server_value")) : "";
									if (this.cTF.sVl.toUpperCase() != this.cTF.sSrvVl.toUpperCase()) {
										this.cTF.bClear = true;
										break;
									}
									break;
							}
						}
						break;
					case "table":
						this.cTF.oDts = this.init.oXDt.selectNodes("root/" + this.cTF.oNd.nodeName + "[@pk=\"" + this.cTF.sPK + "\"]/row[@status='ins' or @status='chk_ins' or @status='sel_ins' or @status='upd' or @status='srv_upd' or @status='del' or @status='chk_del' or @status='sel_del' or @status='srv_del']");
						if (this.cTF.oDts.length != 0) {
							this.cTF.bClear = true;
							break;
						}
						break;
				}
			}
		}
		return this.cTF.bClear;

		this.cTF.bClear = null;
		this.cTF.oNds = null;
		this.cTF.oNd = null;
		this.cTF.sTipo = null;
		this.cTF.oFld = null;
		this.cTF.sPK = null;
		this.cTF.oDts = null;
		this.cTF.oDt = null;
		this.cTF.sTag = null;
		this.cTF.sVl = null;
		this.cTF.sSrvVl = null;

}

UltraCargo.prototype.clearMemory = function(psTableId) {
		this.cTF.oNds = this.init.oXD.selectNodes("//*[@tipo='form' and @linked='" + psTableId + "']");
		for (var iN = 0; iN < this.cTF.oNds.length; iN++) {
			this.cTF.oNd = this.cTF.oNds[iN];
			this.cTF.sTipo = (this.cTF.oNd.getAttribute("tipo") != null) ? this.cTF.oNd.getAttribute("tipo") : "";
			this.cTF.oFld = document.getElementById(this.cTF.oNd.nodeName);
			if (this.cTF.oFld != null) {
				this.cTF.sPK = (this.cTF.oFld.getAttribute("pk") != null) ? this.cTF.oFld.getAttribute("pk") : "";
				switch(this.cTF.sTipo) {
					case "form":
						this.cTF.oDts = this.init.oXDt.selectNodes("root/" + this.cTF.oNd.nodeName + "[@pk=\"" + this.cTF.sPK + "\"]");
						for (var iD = 0; iD < this.cTF.oDts.length; iD++) 
						{
							this.cTF.oRoot = this.cTF.oDts[iD].parentNode;
							
							this.cTF.oRoot.removeChild(this.cTF.oDts[iD]);
							
						}
						break;
					case "table":
						this.cTF.oDts = this.init.oXDt.selectNodes("root/" + this.cTF.oNd.nodeName + "[@pk=\"" + this.cTF.sPK + "\"]");
						for (var iD = 0; iD < this.cTF.oDts.length; iD++) 
						{
							this.cTF.oRoot = this.cTF.oDts[iD].parentNode;
							
							this.cTF.oRoot.removeChild(this.cTF.oDts[iD]);
							
						}
						break;
				}
			}
		}

		this.cTF.oNds = null;
		this.cTF.oNd = null;
		this.cTF.sTipo = null;
		this.cTF.oFld = null;
		this.cTF.sPK = null;
		this.cTF.oDts = null;
}

UltraCargo.prototype.addTableHeader = function() 
{

		this.oElmnts = this.grid.colsTitle.split("|");
		this.iColPos = 0;
		this.iCount = 0;
		this.iCols = 0;
		for (var iE = 0; iE < this.oElmnts.length; iE++) 
		{
			this.sSpan = "1,1";
			this.sHeader = this.oElmnts[iE];
			if (this.sHeader.indexOf("(") != -1 && this.sHeader.indexOf(")") != -1) 
			{
				this.sSpan = this.sHeader.substring((this.sHeader.indexOf("(") + 1),(this.sHeader.indexOf(")")));
				this.sHeader = this.sHeader.substring(0,this.sHeader.indexOf("("));
			}
			this.iRowSpan = Math.floor(this.sSpan.split(",")[0]);
			this.iColSpan = Math.floor(this.sSpan.split(",")[1]);
			for (var iR = 0; iR < this.iRowSpan; iR++) 
			{
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='" + iR + "']");
				if (this.oNd == null) 
				{
					this.createNode(1,"row","root/" + this.grid.id,"",
						"line",iR);
				}
				if (this.iRowSpan > 1) 
				{
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row/" + this.grid.colsField.split("|")[this.iColPos]);
					if (this.oNd != null) 
					{
						this.createNode(1,this.grid.colsField.split("|")[this.iColPos],"root/" + this.grid.id + "/row[@line='" + iR + "']","");
						this.iColPos++;
					}
					else 
					{
						this.createNode(1,this.grid.colsField.split("|")[this.iColPos],"root/" + this.grid.id + "/row[@line='" + iR + "']","",
							"title",escape(this.sHeader),
							"rowspan",this.sSpan.split(",")[0],
							"colspan","1",
							"tipo",this.grid.colsType.split("|")[this.iColPos],
							"width",this.grid.colsWidth.split("|")[this.iColPos],
							"align",this.grid.colsAlign.split("|")[this.iColPos],
							"index",this.iColPos);
					}
				}
				else 
				{
					if (this.iColSpan > 1) 
					{
						this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row/col[@title='" + escape(this.sHeader) + "']");
						if (this.oNd != null) 
						{
							this.createNode(1,"col","root/" + this.grid.id + "/row[@line='" + iR + "']","");
						}
						else 
						{
							this.createNode(1,"col","root/" + this.grid.id + "/row[@line='" + iR + "']","",
								"title",escape(this.sHeader),
								"rowspan","1",
								"colspan",this.iColSpan);
						}
						this.iCols = this.iColSpan;
					}
					else 
					{
						this.bExecute = true;
						this.oNdR1 = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='0']");
						this.oNdR2 = this.init.oXD.selectSingleNode("root/" + this.grid.id + "/row[@line='1']");
						if ((this.iCols > 0) || (this.oNdR1 != null && this.oNdR2 != null)) 
						{
							if ((this.iCols > 0) || (this.oNdR1.children.length > this.oNdR2.children.length)) {
								this.iCols = (this.iCols > 0) ? (this.iCols - 1) : 0;
								this.bExecute = false;
							}
						}
						this.createNode(1,this.grid.colsField.split("|")[this.iColPos],"root/" + this.grid.id + "/row[@line='" + ((this.bExecute) ? 0 : 1) + "']","",
							"title",escape(this.sHeader),
							"rowspan","1",
							"colspan",this.iColSpan,
							"tipo",this.grid.colsType.split("|")[this.iColPos],
							"width",this.grid.colsWidth.split("|")[this.iColPos],
							"align",this.grid.colsAlign.split("|")[this.iColPos],
							"index",this.iColPos);
						this.iColPos++;
					}
				}
			}
		}
		this.oNd = this.init.oXD.selectSingleNode("root/" + this.grid.id);

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

}

UltraCargo.prototype.createTableInformartion = function(psTableId) 
{
		this.sTransImg = "images_home/img_display/img_botoes/ultr_icon_transp.gif";
		this.createTableInformartion.sSpan = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo' style='filter:progid:dximagetransform.microsoft.alpha(style=0,opacity=50);background-color:#C7C7C7;'>"
			+ "<tr><td><img src='" + this.sTransImg + "' border='0' width='100%' height='100%'></td></tr>"
			+ "</table>"
		this.createTableInformartion.sPK = "<input type='hidden' id='FRAME' value='" + psTableId + "'>";
		if (this.createTableInformartion.sPK != "") 
		{
			for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) 
			{
				if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) 
				{
					self.frames[iF].addGridHtml(0,this.createTableInformartion.sPK);
					self.frames[iF].addGridHtml(8,this.createTableInformartion.sSpan);
					
					
					break;
				}
			}
		}
		this.sTransImg = null;
		this.createTableInformartion.sSpan = null;
		this.createTableInformartion.sPK = null;
}

UltraCargo.prototype.createTableItem = function(psTableId)
{
		this.createTableItem.sButton = "";
		this.createTableItem.sItem = "";
		this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);
		if (this.oNd != null) 
		{
			this.bEdtBt = this.oNd.getAttribute("edit");
			this.bDelBt = this.oNd.getAttribute("delete");
			this.bSelBt = this.oNd.getAttribute("select");
			this.sHidFlds = this.oNd.getAttribute("hidden");
			this.BotaoEspecial = this.oNd.getAttribute("botaoespecial");
			
			this.oRows = this.init.oXD.selectNodes("//" + psTableId + "/row/*[@index!='']");
			
			if (this.oRows[0] != null) 
			{
				
				this.iCols = this.oRows.length;
				
				this.createTableItem.sButton = "<table border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "<td width='15' nowrap class='iftabazul'>&nbsp;</td>"
					+ "<td class='iftabazul'>&nbsp;<label id='labelButton'></label>&nbsp;</td>"
					+ "<td width='10' nowrap class='iftabazul'>&nbsp;</td>"
					+ "<td><img src='" + "images_home/img_display/img_botoes/ultr_canto_pasta_dir.gif'></td>"
					+ "</tr></table>"
					+ "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'><tr>"
					+ "<td nowrap align='center' valign='middle' class='iftab3branco'>";
					
				this.createTableItem.sItem = "<table border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "<td width='15' nowrap class='iftabazul'>&nbsp;</td>"
					+ "<td class='iftabazul'>&nbsp;<label id='labelItem'></label>&nbsp;</td>"
					+ "<td width='10' nowrap class='iftabazul'>&nbsp;</td>"
					+ "<td><img src='" + "images_home/img_display/img_botoes/ultr_canto_pasta_dir.gif'></td>"
					+ "</tr></table>"
					+ "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'><tr>"
					+ "<td nowrap align='center' valign='middle' class='iftab3branco'>";
					
					
				if (this.sHidFlds != "") 
				{
					for (var iC = 0; iC < this.sHidFlds.split("|").length; iC++) 
					{
						if (this.sHidFlds.split("|")[iC] != "") 
						{
							this.createTableItem.sItem += "<input type='hidden' id='" + this.sHidFlds.split("|")[iC] + "'>";
						}
					}
				}
				
				this.createTableItem.sButton += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_chek_verd.gif'"
					+ " border='0' style='cursor:hand'"
					+ " onclick='saveGrid();' alt='Confirmar'>" 
					+ "</td>"
					+ "<td nowrap align='center' valign='middle' class='iftab3branco'>"
					+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_canc_verm.gif'"
					+ " border='0' style='cursor:hand'"
					+ " onclick='cancelGrid()\;main(\""+psTableId+"_can\");' alt='Cancelar'>"
					+ "</td>";
					
				this.createTableItem.sItem += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_chek_verd.gif'"
					+ " border='0' style='cursor:hand'"
					+ " onclick='saveGrid();' alt='Confirmar'>"
					+ "</td>"
					+ "<td nowrap align='center' valign='middle' class='iftab3branco'>"
					+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_canc_verm.gif'"
					+ " border='0' style='cursor:hand'"
					+ " onclick='cancelGrid();main(\""+psTableId+"_can\");' alt='Cancelar'>"
					+ "</td>";
					
				for (var iC = 0; iC < this.iCols; iC++) 
				{
					this.oCol = this.init.oXD.selectSingleNode("//" + psTableId + "/row/*[@index='" + iC + "']");
					if (this.oCol != null) {
						this.sTipo = (this.oCol.getAttribute("tipo") != null) ? this.oCol.getAttribute("tipo") : "";
						this.sParameter = (this.sTipo.indexOf("(") != -1 && this.sTipo.lastIndexOf(")") != -1) ? this.sTipo.substring((this.sTipo.indexOf("(") + 1),this.sTipo.lastIndexOf(")")) : "";
						this.sParameter = this.sParameter.replace(/'/g,"''");
						this.sWidth = (this.oCol.getAttribute("width") != null) ? this.oCol.getAttribute("width") : "";
						this.sAlign = (this.oCol.getAttribute("align") != null) ? this.oCol.getAttribute("align") : "";
						if (this.sTipo != "" && this.sWidth != "" && this.sAlign != "") {
							this.sHtmlColumn = "<td id='Col' " + ((this.sWidth != "") ? " width='" + this.sWidth + "' nowrap" : "") + " class='iftab3branco'>";
							this.sHtmlTable = "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"
								+ "<tr align='center' valign='middle'>";
								
							switch(this.sTipo.substring(0,3)) 
							{
								case "mpa":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress='return Fu_DigPA_keypress(this);' class='cxtext'>"
										+ "</td>";
										
									break;
								case "mdi":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeyup='Fu_DigDI_keyup(this);'"
										+ " onkeypress='onlyNum();' class='cxtext'>"
										+ "</td>";
										
									break;
								case "dat":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress='return Fu_DigData_keypress(this);' onblur='Fu_ValidaData_blur(this);' maxlength='10' class='cxtext'>"
										+ "</td>"
										+ "<td width='20' nowrap><img src='" + "images_home/img_display/img_botoes/ultr_icon_cale.gif'"
										+ " style='cursor:hand' onclick='javascript:calendarField(document.getElementById(\"grid_New\").all(\"" + this.oCol.nodeName + "\"));'>";
								
										
									break;
								case "tim":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress='return maskHour_Type(event,this);' onblur='maskHour(this);' maxlength='5' class='cxtext'>";
									break;
								case "rad":
									for (var iR = 0; iR < this.sParameter.split(",").length; iR++) 
									{
										this.createTableItem.sItem += this.sHtmlColumn
											+ this.sHtmlTable
											+ "<td><input name='" + this.oCol.nodeName + "' id='" + this.oCol.nodeName + "'"
											+ " type='radio' value='" + this.sParameter.split(",")[iR] + "'>";
									}
									break;
								case "chk":
									if (this.sParameter.indexOf("::") == -1) 
									{
										this.sParameter += "::";
									}
									
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='checkbox' value='" + this.sParameter + "'>";
									break;
								case "cbo":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><select id='" + this.oCol.nodeName + "'"
										+ " pk='" + this.sParameter +  "' onchange='changeCombo(this);changeCombo_val(this);onChangeCombo(\"" + psTableId + "_" + iC + "\");'"
										+ " style='width:1' class='cmbbox'></select>";
									break;
								case "int":
								case "ins":
										var vwNrInteiros	= this.sParameter.split(",")[0]; 
										var vwNrDecimais	= 0;
										var vwSepDec		= ',';
										var vwMontaEventoKeyPress	= "onlyNumeric(this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress=" + String.fromCharCode(34)  + vwMontaEventoKeyPress +  String.fromCharCode(34)
										+ " maxlength='" + vwNrInteiros +  "'"
										+ " class='cxtext'>";
									break; 
								case "lng":
										var vwNrInteiros	= this.sParameter.split(",")[0]; 
										var vwNrDecimais	= this.sParameter.split(",")[1]; 
										var vwSepDec		= ',';
										var vwMontaEventoKeyPress	= "return maskDec_Type_lng(event,this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										var vwMontaEventoBlur		= "maskDec_TypeBlur_lng(this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										var vwMontaEventoKeyUp		= "maskDec_TypeKeyUp_lng(this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress=" + String.fromCharCode(34)  + vwMontaEventoKeyPress +  String.fromCharCode(34)
										+ " onblur=" + String.fromCharCode(34)  + vwMontaEventoBlur +  String.fromCharCode(34)
										+ " onkeyup=" + String.fromCharCode(34)  + vwMontaEventoKeyUp +  String.fromCharCode(34)
										+ " maxlength='" + (Math.floor(this.sParameter.split(",")[0]) + ((this.sParameter.split(",")[1] != null) ? (Math.floor(this.sParameter.split(",")[1]) + 1) : 0))+ "'"
										+ " class='cxtext'>";
									break;
								case "dec":
										var vwNrInteiros	= this.sParameter.split(",")[0]; 
										var vwNrDecimais	= this.sParameter.split(",")[1]; 
										var vwSepDec		= this.sParameter.split(",")[2];
										
										if(vwSepDec == 'p' || vwSepDec == 'P')
										{
											vwSepDec = '.'
										}
										else
										{
											vwSepDec = ','
										}
						
										var vwMontaEventoKeyPress	= "return maskDec_Type(event,this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										var vwMontaEventoBlur		= "maskDec_TypeBlur(this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										var vwMontaEventoKeyUp		= "maskDec_TypeKeyUp(this,"  + vwNrInteiros +  "," + vwNrDecimais + "," + String.fromCharCode(39) +  vwSepDec + String.fromCharCode(39) + ")"
										this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress=" + String.fromCharCode(34)  + vwMontaEventoKeyPress +  String.fromCharCode(34)
										+ " onblur=" + String.fromCharCode(34)  + vwMontaEventoBlur +  String.fromCharCode(34)
										+ " onkeyup=" + String.fromCharCode(34)  + vwMontaEventoKeyUp +  String.fromCharCode(34)
										+ " maxlength='" + (Math.floor(this.sParameter.split(",")[0]) + ((this.sParameter.split(",")[1] != null) ? (Math.floor(this.sParameter.split(",")[1]) + 1) : 0))+ "'"
										+ " class='cxtext'>";
									break;
								case "hid":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " readOnly class='cxhidden'>";
									break;
								case "str":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress ='digitarUpper(this);'"
										+ " maxlength='" + Math.floor(this.sParameter) + "' class='cxtext'>";
									break;
								case "let":
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " onkeypress ='digitarUpper(this,\"S\");'"
										+ " maxlength='" + Math.floor(this.sParameter) + "' class='cxtext'>";
									break;
								case "scr":														
									var str_block	   = Math.floor(this.sParameter); 
									var p_newParameter = "readonly"
									if(str_block != ""){p_newParameter = "maxlength='" + Math.floor(this.sParameter) + "'";}
									this.createTableItem.sItem += this.sHtmlColumn
										+ this.sHtmlTable
										+ "<td><input id='" + this.oCol.nodeName + "'"
										+ " type='text'" + ((this.sAlign != "") ? " onkeypress ='digitarUpper(this);' style='width:1;text-align:" + this.sAlign + ";'" : "")
										+ " class='cxtext' " + p_newParameter + "></td>"
										+ "<td width='20' nowrap><img src='" + "images_home/img_display/img_botoes/ultr_icon_pasta.gif' id='" +  psTableId + "_" + iC + "'"
										+ " style='cursor:hand' onclick='javascript:popUpGrid(\"" + psTableId + "_" + iC + "\",document.getElementById(\"grid_New\").all(\"" + this.oCol.nodeName + "\"));'>";
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
		if (this.createTableItem.sItem != "") 
		{
			for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) 
			{
				if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) 
				{
					
					self.frames[iF].addGridHtml(6,this.createTableItem.sItem);
					self.frames[iF].addGridHtml(7,this.createTableItem.sButton);
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
}

UltraCargo.prototype.createTableHeader = function(psTableId) 
{
		this.sTransImg = "images_home/img_display/img_botoes/ultr_icon_transp.gif";
		this.createTableItem.sHeader = "";
		this.createTableHeader.sFixedHeader = "";
		this.oNd = this.init.oXD.selectSingleNode("//" + psTableId);
		if (this.oNd != null) 
		{
			this.bEdtBt				= this.oNd.getAttribute("edit");
			this.bDelBt				= this.oNd.getAttribute("delete");
			this.bSelBt				= this.oNd.getAttribute("select");
			this.iFixed				= Math.floor(this.oNd.getAttribute("fixed"));
			this.BotaoEspecial			= this.oNd.getAttribute("botaoespecial");
			
			this.oRows = this.oNd.children;
			if (this.oRows[0] != null)
			{
				this.createTableHeader.sHeader = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo'>";
				this.createTableHeader.sFixedHeader = "<table border='0' cellspacing='1' cellpadding='1' class='framesfundo'>";
				for (var iR = 0; iR < this.oRows.length; iR++) 
				{
					this.oCols = this.oRows[iR].children;
					this.createTableHeader.sHeader += "<tr>";
					this.createTableHeader.sFixedHeader += "<tr>";
					
					if (this.bSelBt == "single" || this.bSelBt == "multiple") 
					{
						this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>"
							+ "</td>";
							
						this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>"
							+ "</td>";
			
					}
					
					if (this.bEdtBt == "true") 
					{
						this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>"
							+ "</td>";
							
						this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>"
							+ "</td>";
					}
					
					if (this.bDelBt == "true") 
					{
						this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>"
						+ "<img src='" + this.sTransImg + "' border='0'>"
					
						if(this.bEdtBt == "false" && this.BotaoEspecial == "false")
						{
							this.createTableHeader.sHeader += "<img src='" + this.sTransImg + "' border='0'>"
						}  
						this.createTableHeader.sHeader  +=  "</td>";
						
							
						this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>"
						+ "<img src='" + this.sTransImg + "' border='0'>"
						
							
						if(this.bEdtBt == "false" && this.BotaoEspecial == "false")
						{
							this.createTableHeader.sFixedHeader +=  "<img src='" + this.sTransImg + "' border='0'>"
						}  
						this.createTableHeader.sFixedHeader  += "</td>";
					}
					
					
					
				
					if (this.BotaoEspecial == "true")
					{
						this.createTableHeader.sHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>" 
							+ "</td>";
							
						this.createTableHeader.sFixedHeader += "<td nowrap class='iftabazul'>"
							+ "<img src='" + this.sTransImg + "' border='0'>"
							+ "</td>";
					}
					
					
					
					for (var iC = 0; iC < this.oCols.length; iC++) 
					{
						this.sNme = this.oCols[iC].nodeName;
						this.sTle = (this.oCols[iC].getAttribute("title") != null) ? this.oCols[iC].getAttribute("title") : "";
						this.sRwSpn = (this.oCols[iC].getAttribute("rowspan") != null) ? this.oCols[iC].getAttribute("rowspan") : "1";
						this.sClSpn = (this.oCols[iC].getAttribute("colspan") != null) ? this.oCols[iC].getAttribute("colspan") : "1";
						this.sIndex = (this.oCols[iC].getAttribute("index") != null) ? this.oCols[iC].getAttribute("index") : "";
						
						if (this.sNme != "" && this.sTle != "") 
						{
							this.createTableHeader.sHeader += "<td"
								+ " id='" + this.sNme + "'"
								+ " rowspan='" + this.sRwSpn + "'"
								+ " colspan='" + this.sClSpn + "'"
								+ " index='" + this.sIndex + "'"
								+ " align='center' class='iftabazul' nowrap>" + unescape(this.sTle) + "</td>";
							
							
							if (iC < this.iFixed) 
							{
								this.createTableHeader.sFixedHeader += "<td"
									+ " id='" + this.sNme + "'"
									+ " rowspan='" + this.sRwSpn + "'"
									+ " colspan='" + this.sClSpn + "'"
									+ " index='" + this.sIndex + "'"
									+ " align='center' class='iftabazul' nowrap>" + unescape(this.sTle) + "</td>";
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
		
		
		
		if (this.createTableHeader.sHeader != "")
		{
			for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) 
			{
				if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) 
				{
					self.frames[iF].addGridHtml(4,this.createTableHeader.sHeader);
					if (this.bEdtBt == "true" || this.bDelBt == "true" || this.bSelBt != "" || this.BotaoEspecial == "true")
					{
						self.frames[iF].addGridHtml(5,this.createTableHeader.sFixedHeader);
					}
					else 
					{
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
}

UltraCargo.prototype.cTF = function(psTableId) 
{
}

UltraCargo.prototype.createTableFooter = function(psTableId)
{
		var altNew = "";
		var altNewPop = "";

		this.bDsb = false;
		for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++)
		{
			if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId)
			{
				this.bDsb = (self.frames[iF].bEnable != null) ? (self.frames[iF].bEnable == false) ? true : false : false;
				break;
			}
		}

		this.oNd = this.init.oXD.selectSingleNode("//"+psTableId);

		if (this.oNd == null) 
		{
			return;
		} 
		this.cTF.iPage = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "1";
		this.cTF.iPageCount = (this.oNd.getAttribute("page_count") != null) ? this.oNd.getAttribute("page_count") : "1";
		this.cTF.bInsertButton = this.oNd.getAttribute("insert");
		this.cTF.bInsertMultipleButton = this.oNd.getAttribute("insert_multiple");
		if (this.bDsb) 
		{
			this.cTF.iPage = "1";
			this.cTF.iPageCount = "1";
			this.cTF.bInsertButton = false;
			this.cTF.bInsertMultipleButton = false;
		}
		altNew = (this.oNd.getAttribute("ToolTipNew") != null) ? this.oNd.getAttribute("ToolTipNew") : "Novo";
		if (altNew == "")
		{
		    altNew = "Novo"
		}
		altNewPop = (this.oNd.getAttribute("ToolTipPopNew") != null) ? this.oNd.getAttribute("ToolTipPopNew") : "Grupo";
		if (altNewPop == "")
		{
		    altNewPop = "Grupo"
		}
		this.cTF.sFooter = "<table width='100%' border='0' cellspacing='1' cellpadding='2' class='framesfundo'>"
			+ "<tr>";
			
		if (this.cTF.bInsertButton == "true") 
		{
			this.cTF.sFooter += "<td width='40' nowrap align='center'>"
				+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_mais.gif' border='0' style='cursor:hand' onclick='"+psTableId+".newGrid();main(\""+psTableId+"_new\");' alt=\"" + altNew + "\">"
				+ "</td>";
		}
		if (this.cTF.bInsertMultipleButton == "true") {
			this.cTF.sFooter += "<td width='40' nowrap align='center'>"
				+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_mais_grupo.gif' border='0' style='cursor:hand' onclick='"+psTableId+".listGrid();' alt=\"" + altNewPop + "\">"
				+ "</td>";
		}
		this.cTF.sFooter += "<td>&nbsp;</td>"
			+ "<td width='30' height='25' nowrap align='right'>";
			
		if (Math.floor(this.cTF.iPage) > Math.floor(this.cTF.iPageCount)) 
		{
			this.cTF.iPage = this.cTF.iPageCount;
		}
		
		if (Math.floor(this.cTF.iPage) > 1) 
		{
			this.cTF.sFooter += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_volt.gif' border='0' style='cursor:hand' onclick='"+psTableId+".lastPageGrid(" + (Math.floor(this.cTF.iPage) - 1) + ");' alt='Voltar'>";
		}
		
		if (Math.floor(this.cTF.iPageCount) > 1) 
		{
			var vwMaxLength  =   this.cTF.iPageCount.length
			
			var vwInputPagi = "<input type='text' class='cxtext' maxlength='" + vwMaxLength + "' size='5' id='txt_pagina_dire' onkeypress=' return " + psTableId  + ".Fu_PaginaDire(event,this," +  this.cTF.iPageCount +  ")' value='" + this.cTF.iPage + "'>";
			this.cTF.sFooter += "</td>"
			+ "<td width='30' nowrap align='right'><label>" + vwInputPagi + "</label></td>"
			+ "<td width='10' nowrap align='center'>de</td>"
			+ "<td width='30' nowrap align='left'><label>" + this.cTF.iPageCount + "</label></td>"
			+ "<td width='20' nowrap align='left'>";
		}
		
		if (Math.floor(this.cTF.iPage) < Math.floor(this.cTF.iPageCount)) 
		{
			this.cTF.sFooter += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_avan.gif' border='0' style='cursor:hand' onclick='"+psTableId+".nextPageGrid(" + (Math.floor(this.cTF.iPage) + 1) + ");' alt='Avan�ar'>";
		}
		this.cTF.sFooter += "</td><td width='10' nowrap>&nbsp;</td></tr></table>";
		
		if (this.cTF.sFooter != "") 
		{
			for (var iD = 0; iD < document.getElementsByTagName("DIV").length; iD++) 
			{
				if (document.getElementsByTagName("DIV")[iD] != null) 
				{
					if (document.getElementsByTagName("DIV")[iD].getAttribute("id") == psTableId) 
					{
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

UltraCargo.prototype.createTableFooter_ini = function(psTableId)
{

		var altNew = "";
		var altNewPop = "";

		this.bDsb = false;
		for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
			if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) {
				this.bDsb = (self.frames[iF].bEnable != null) ? (self.frames[iF].bEnable == false) ? true : false : false;
				break;
			}
		}
		this.oNd = this.init.oXD.selectSingleNode("//"+psTableId);
		if (this.oNd == null) 
		{
			return;
		}
		
		this.oNd.setAttribute("page_count","0")
		this.oNd.setAttribute("page","1");
		this.cTF.iPage = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "1";
		this.cTF.iPageCount = (this.oNd.getAttribute("page_count") != null) ? this.oNd.getAttribute("page_count") : "1";
		this.cTF.bInsertButton = this.oNd.getAttribute("insert");
		this.cTF.bInsertMultipleButton = this.oNd.getAttribute("insert_multiple");
		if (this.bDsb) 
		{
			this.cTF.iPage = "1";
			this.cTF.iPageCount = "1";
			this.cTF.bInsertButton = false;
			this.cTF.bInsertMultipleButton = false;
		}

		altNew = (this.oNd.getAttribute("ToolTipNew") != null) ? this.oNd.getAttribute("ToolTipNew") : "Novo";
		if (altNew == "")
		{
		    altNew = "Novo"
		}
		altNewPop = (this.oNd.getAttribute("ToolTipPopNew") != null) ? this.oNd.getAttribute("ToolTipPopNew") : "Grupo";
		if (altNewPop == "")
		{
		    altNewPop = "Grupo"
		}
		
		this.cTF.sFooter = "<table width='100%' border='0' cellspacing='1' cellpadding='2' class='framesfundo'>"
			+ "<tr>";
			
		if (this.cTF.bInsertButton == "true") {
			this.cTF.sFooter += "<td width='40' nowrap align='center'>"
				+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_mais.gif' border='0' style='cursor:hand' onclick='"+psTableId+".newGrid();main(\""+psTableId+"_new\");' alt=\"" + altNew + "\">"
				+ "</td>";
		}
		if (this.cTF.bInsertMultipleButton == "true") {
			this.cTF.sFooter += "<td width='40' nowrap align='center'>"
				+ "<img src='" + "images_home/img_display/img_botoes/ultr_icon_mais_grupo.gif' border='0' style='cursor:hand' onclick='"+psTableId+".listGrid();' alt=\"" + altNewPop + "\">"
				+ "</td>";
		}
		this.cTF.sFooter += "<td>&nbsp;</td>"
			+ "<td width='30' height='25' nowrap align='right'>";
		if (Math.floor(this.cTF.iPage) > Math.floor(this.cTF.iPageCount)) {
			this.cTF.iPage = this.cTF.iPageCount;
		}
		if (Math.floor(this.cTF.iPage) > 1) {
			this.cTF.sFooter += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_volt.gif' border='0' style='cursor:hand' onclick='"+psTableId+".lastPageGrid(" + (Math.floor(this.cTF.iPage) - 1) + ");' alt='Voltar'>";
		}
		if (Math.floor(this.cTF.iPageCount) > 1) {
			this.cTF.sFooter += "</td>"
				+ "<td width='30' nowrap align='right'><label>" + this.cTF.iPage + "</label></td>"
				+ "<td width='10' nowrap align='center'>de</td>"
				+ "<td width='30' nowrap align='left'><label>" + this.cTF.iPageCount + "</label></td>"
				+ "<td width='20' nowrap align='left'>";
		}
		if (Math.floor(this.cTF.iPage) < Math.floor(this.cTF.iPageCount)) 
		{
			this.cTF.sFooter += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_avan.gif' border='0' style='cursor:hand' onclick='"+psTableId+".nextPageGrid(" + (Math.floor(this.cTF.iPage) + 1) + ");' alt='Avan�ar'>";
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

UltraCargo.prototype.initialize = function() 
{
		this.shwSessionMsg = false;
		this.generateXmlDocument();
}

UltraCargo.prototype.cancelGrids = function() 
{
	var vwObjetos  =  document.getElementsByTagName("IFRAME")

	for (var iF = 0; iF <= vwObjetos.length-1; iF++)
	{
		self.frames[iF].cancelButton();
	}
	
}

UltraCargo.prototype.dataGrid = function(psXML) 
{

		var vwOper		=null;
		var vwFormBotaoEspecial	=null;
		this.spageOperation	=null;
		this.sOper		= "";
		this.bCancelOperation	= true;
		this.oXD		= new XMLHttpRequest();
		
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXD.selectSingleNode("root/operation");
			if (this.oNd != null) 
			{
				this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
				vwOper  =  this.sOper
				if(this.sOper =='botaoespecial')
				{
					this.oNdBotEspecial = this.oXD.selectSingleNode("root/form");
					vwFormBotaoEspecial = (this.oNdBotEspecial.getAttribute("value") != null) ? this.oNdBotEspecial.getAttribute("value") : "";
				} 
				
				if (this.sOper != "") 
				{
					this.oNd = this.oXD.selectSingleNode("root/*");
					if (this.oNd != null) 
					{
						this.sFrmId = this.oNd.nodeName;
						this.sFrmLn = (this.oNd.getAttribute("line") != null) ? this.oNd.getAttribute("line") : "";
						this.sChave = (this.oNd.getAttribute("chave") != null) ? this.oNd.getAttribute("chave") : "";
						this.sFrmPagina = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "";
						
						this.bExecuteOnClientServer = false;
						this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId)
						if (this.oNd != null) 
						{
							if (this.oNd.getAttribute("execute") != null) 
							{
								if (this.oNd.getAttribute("execute") == "server") 
								{
									this.bExecuteOnClientServer = true;
								}
							}
							this.spageOperation = this.oNd.getAttribute('pageoperation');
						}
						this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId);
						this.oElmnt = this.oXD.selectSingleNode("root/" + this.sFrmId + "/loginatu");
						
						if (this.oElmnt == null) 
						{
							this.oElmnt = this.oXD.createNode(1,"loginatu","");
							this.oElmnt.setAttribute("value",this.init.sLoginAtu);
							this.oNd.appendChild(this.oElmnt);
							this.oElmnt = this.oXD.createNode(1,"loginentidade","");
							this.oElmnt.setAttribute("value",this.init.sIdEntidade);
							this.oNd.appendChild(this.oElmnt);
							this.oElmnt = this.oXD.createNode(1,"loginfilial","");
							this.oElmnt.setAttribute("value",this.init.sIdFilial);
							this.oNd.appendChild(this.oElmnt);
						}
						this.bGenerateTable = false;
						switch(this.sOper) 
						{
							case "botaoespecial":
								var vwXmlRetorno   = this.RetornaLinhaXML(vwFormBotaoEspecial,this.sFrmLn,this.sFrmPagina)
								main(this.sFrmId,null,vwXmlRetorno);
								break; 		
							case "check_del":
								this.ExcluiLinhaCheck(this.sFrmId,this.sChave);
								this.bExecuteOnClientServer = false;
								break;
							case "ins":
								if (this.verifyGrid() && this.verifyGridCons())
								{
									
									this.insertRow();
									this.bCancelOperation = false;
									this.bGenerateTable = true;
								}
								else 
								{
									this.bExecuteOnClientServer = false;
								}
								break;
							case "edt":
								this.Ond_But = new XMLHttpRequest();
								this.Ond_But.loadXML(this.init.oXD.xml());
								this.Ond_ButNode   = this.Ond_But.selectSingleNode("root/" + this.sFrmId);
								this.sShowButEdt   = this.Ond_ButNode.getAttribute('showbutedt');
								if(this.sShowButEdt != ''  && this.sShowButEdt != null)
								{
									parent.top.frm_rodape.setButton(this.sShowButEdt);
								}
								this.editRow();
								break;
							case "upd":
								if (this.verifyGrid() && this.verifyGridCons()) 
								{
									this.updateRow();
									this.bCancelOperation = false;
									this.bGenerateTable = true;
									
									this.Ond_But = new XMLHttpRequest();
									this.Ond_But.loadXML(this.init.oXD.xml());
									this.Ond_ButNode   = this.Ond_But.selectSingleNode("root/" + this.sFrmId);
									this.sShowButUpd   = this.Ond_ButNode.getAttribute('showbutupd');
									if(this.sShowButUpd != ''  && this.sShowButUpd != null)
									{
										parent.top.frm_rodape.setButton(this.sShowButUpd);
									}
								}
								else 
								{
									this.bExecuteOnClientServer = false;
								}
								break;
							case "del":
								this.deleteRow();
								this.bGenerateTable = true;
								break;
							case "lnk":
								this.linkRow();
								this.bExecuteOnClientServer = true;
								break;
								
							case "lst":
							case "nxt":
								if(this.spageOperation != '' && this.spageOperation !=null)
								{
									this.init.sPageOperation  = this.spageOperation;
								} 
								
								this.FormID_old  =  this.sFrmId;
								this.oNd_Pag = this.init.oXD.selectSingleNode("root/"  + this.FormID_old);
								this.TipoGrid	= '';
								this.GridCheck	= '';
								this.PKCheck	= ''; 
								this.XMLCheck	= '' 
								
								if(this.oNd_Pag != null)
								{
									this.TipoGrid		=    this.oNd_Pag.getAttribute('tipogrid');
									this.GridCheck		=    this.oNd_Pag.getAttribute('gridcheck');
									this.XMLCheck		=    this.oNd_Pag.getAttribute('xmlcheck'); 
									this.PKCheck		=    this.oNd_Pag.getAttribute('pk'); 
								}
								
								if(this.TipoGrid == 'CHECK_SELE' || this.TipoGrid == 'CHECK_XML')
								{
									this.ClearXmlData_Check(this.FormID_old);
									this.ClearXmlData_Filtro(this.FormID_old);
								}
								
								
								this.changePage();
								
								if(this.TipoGrid == 'CHECK_SELE' || this.TipoGrid == 'CHECK_XML')
								{	
									var vwObjIFRAME  =  document.getElementsByTagName("IFRAME")
									for(var vwi = 0;vwi<=vwObjIFRAME.length-1;vwi++)
									{
										
										if(vwObjIFRAME[vwi].id ==  this.FormID_old)
										{
											this.sXMLSele		 = '' 
											this.sXMLSelecionar  = ''
											this.sXMLSelecionar =  obj_Ultra.Fu_RetXML('GR');
											if(this.TipoGrid == 'CHECK_XML')
											{
												this.sXMLSele		=  obj_Ultra.Fu_RetXML('CHECK_XML');
												
												self.frames[vwi].checkGrid_pagi(this.XMLCheck,this.sXMLSele ,this.FormID_old,this.sXMLSelecionar,this.PKCheck);
												
											}	
											else
											{
												this.sXMLSele		=  obj_Ultra.Fu_RetXML('CHECK');
												self.frames[vwi].checkGrid_pagi(this.GridCheck,this.sXMLSele ,this.FormID_old,this.sXMLSelecionar,this.PKCheck);
											}
											vwi  = vwObjIFRAME.length + 1;
										}
									}
								}
								
								this.bExecuteOnClientServer = false;
								break;
							case "enb":
							case "dsb":
								this.createTableFooter(this.sFrmId);
								this.bCancelOperation = false;
								this.bExecuteOnClientServer = false;
								this.bGenerateTable = false;
								break;
							case "chk":
								this.selectRow();
								break;
							case "keeppage":
								this.changePage(); 
								this.bExecuteOnClientServer = false;
								break;
						}
						
						if (!this.bCancelOperation) 
						{
							for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
								if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == this.sFrmId) 
								{
									
									self.frames[iF].cancelGrid();
									break;
								}
							}
						}
						
						if (this.bExecuteOnClientServer)
						{
							this.sOper_old   = this.sOper;		
							this.sOper = this.sFrmId + "_" + this.sOper;
							this.oElmnt = this.oXD.selectSingleNode("root/operation");
							if (this.oElmnt != null)
							{
								this.oElmnt.setAttribute("value",this.sOper);
								main(this.sOper,null,this.oXD.xml());
								
								if(this.sOper_old == 'chk')
								{
									this.oNd_Chk = this.init.oXD.selectSingleNode("root/" +  this.sFrmId);
									if(this.oNd_Chk != null)
									{
										this.TipoGrid		=    this.oNd_Chk.getAttribute('tipogrid');
										this.GridCheck		= 	 this.oNd_Chk.getAttribute('gridcheck');
										this.XMLCheck		=	 this.oNd_Chk.getAttribute('xmlcheck');
									}
									
									if(this.TipoGrid == 'CHECK_SELE')
									{
										if(this.GridCheck != '' && this.GridCheck != null)
										{
											this.sXML = obj_Ultra.getSelectedItens(this.sFrmId,true);
											
											this.CriaXMLtoCheck(2,this.GridCheck,this.sXML);
											this.PopulaXMLtoCheck();
										}
									}
									
									if(this.TipoGrid == 'CHECK_XML')
									{
										if(this.XMLCheck != '' && this.XMLCheck != null)
										{
											this.sXML = obj_Ultra.getSelectedItens(this.sFrmId,true);
											this.CriaCheckXML(this.XMLCheck,this.sXML,this.sFrmId); 
										}
									}
								}
							}
						}
						else
						{
							
							if(vwOper == 'chk')
							{
								this.oElmnt = this.oXD.selectSingleNode("root/operation");
							} 
							else
							{
								this.oElmnt = null ;
							}	
							if (this.oElmnt != null  )
							{
								if(vwOper  == 'chk')
								{
									this.oNd_Chk = this.init.oXD.selectSingleNode("root/" +  this.sFrmId);
									if(this.oNd_Chk != null)
									{
										this.TipoGrid		=    this.oNd_Chk.getAttribute('tipogrid');
										this.GridCheck		= 	 this.oNd_Chk.getAttribute('gridcheck');
										this.XMLCheck		=	 this.oNd_Chk.getAttribute('xmlcheck');
									}
									
									if(this.TipoGrid == 'CHECK_SELE')
									{
										if(this.GridCheck != '' && this.GridCheck != null)
										{
											this.sXML = obj_Ultra.getSelectedItens(this.sFrmId,true);
											this.CriaXMLtoCheck(2,this.GridCheck,this.sXML);
											this.PopulaXMLtoCheck();
										}
									}
									
									if(this.TipoGrid == 'CHECK_XML')
									{
										if(this.XMLCheck != '' && this.XMLCheck != null)
										{
											this.sXML = obj_Ultra.getSelectedItens(this.sFrmId,true);
											
											var vwValidaXMLCheck = new XMLHttpRequest();
											var vwNodeXMLCheck   = null;
											var vwStringXMLCria  = null;  
											var vwLinhaXML		 = null;
											vwValidaXMLCheck.loadXML(this.sXML);
											if(vwValidaXMLCheck.parseError  == 0 )
											{
												vwNodeXMLCheck   = vwValidaXMLCheck.selectNodes('root/' + this.sFrmId + '/row')  
												if(vwNodeXMLCheck != null)
												{
													for(var vwi  = 0 ; vwi<= vwNodeXMLCheck.length-1;vwi++)
													{
														vwLinhaXML = vwNodeXMLCheck[vwi].getAttribute('line')
														vwStringXMLCria    =  '<root><' + this.sFrmId + '>' +  vwNodeXMLCheck[vwi].xml +  '</' + this.sFrmId + '></root>' 
														if(parseInt(vwLinhaXML) ==  parseInt(this.sFrmLn)) 
														{
															vwi  = vwNodeXMLCheck.length  + 1;
															this.CriaCheckXML(this.XMLCheck,vwStringXMLCria,this.sFrmId); 
														}
													}	
												}
											}
										}
									}
								}
							}
						}
						
						if(this.sOper =='frm_edit_upd')
						{
									
									return; 
						}
						if (this.bGenerateTable) 
						{
							this.generateTableContent(this.sFrmId);
						}
					}
				}
			}
		}

		this.sOper = null;
		this.bCancelOperation = null;
		this.oXD = null;
		this.oNd = null;
		this.sFrmId = null;
		this.sFrmLn = null;
		this.bExecuteOnClientServer = null;
		this.bGenerateTable = null;
		this.FormID_old  =  null;
		this.oNd_Pag = null;
		this.TipoGrid	= null;
		this.GridCheck	= null;
		this.XMLCheck   = null;
		this.PKCheck	= null; 
		this.Ond_But	 = null; 
		this.Ond_ButNode = null; 
		this.sShowButEdt = null; 
		this.sShowButUpd = null; 
}

UltraCargo.prototype.verifyGrid = function() 
{
		this.sMsgHder = "________________________________________________     \n\n"
			+ " UltraCargo: Aviso de Sistema \n"
			+ "________________________________________________     \n\n"
			+ " - Os seguintes campos obrigat�rios est�o vazios:\n";
		this.sMsgBdy = "";
		this.bValidate = true;
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) 
		{
			this.sFrmId = this.oDt.nodeName;
			this.sXPath = "root/" + this.sFrmId;
			this.oNd = this.init.oXD.selectSingleNode(this.sXPath);

			if (this.oNd != null) 
			{
				this.sPK		= this.oNd.getAttribute("pk");
				this.sFK		= this.oNd.getAttribute("fk");
				this.bIB		= this.oNd.getAttribute("insert");
				this.duplicar	= this.oNd.getAttribute("duplicar");
				
				if (this.sFK.indexOf(".") != -1) 
				{
					this.sFKFormId = this.sFK.split(".")[0];
					this.sFKElementId = this.sFK.split(".")[1];
					this.oElmnt = this.init.oXD.selectSingleNode("root/" + this.sFKFormId + "/" + this.sFKElementId);
					if (this.oElmnt != null) {
						this.sTgNm = this.oElmnt.getAttribute("tag");
						this.sLabel = (this.oElmnt.getAttribute("lbl") != null) ? this.oElmnt.getAttribute("lbl") : "";
						switch(this.sTgNm) {
							case "input-file":
							case "input-hidden":
							case "input-text":
							case "textarea":
							case "select-one":
								this.oFKForm = document.getElementById(this.sFKFormId);
								if (this.oFKForm != null) {
									this.oFKElement = this.oFKForm.item(this.sFKElementId);
									if (this.oFKElement != null) 
									{
										if (this.oFKElement.getAttribute("value") == "") 
										{
											if (this.sLabel != "") {
												this.sMsgBdy += "   " + this.sLabel + "\n";
												this.bValidate = false;
											}
										}
									}
								}
								break;
						}
					}
				}
				this.sValidate = (this.oNd.getAttribute("validate") != null) ? this.oNd.getAttribute("validate") : "";
				
				if (this.sValidate != "") {
					this.oNds = this.init.oXD.selectNodes(this.sXPath + "/row/*[@index!='']");
					if (this.oNds[0] != null) {
						for (var iV = 0; iV < this.oNds.length; iV++) 
						{
							if (("|" + this.sValidate + "|").indexOf("|" + (1 + Math.floor(iV)) + "|") != -1) 
							{
								this.oNd = this.init.oXD.selectSingleNode(this.sXPath + "/row/*[@index='" + iV + "']");
								if (this.oNd != null) 
								{
									this.sLabel = (this.oNd.getAttribute("title") != null) ? unescape(this.oNd.getAttribute("title")) : "";
									this.oNd = this.oXD.selectSingleNode("//" + this.oNd.nodeName + "[@value!='']");
									if (this.oNd == null) {
										if (this.sLabel != "") { 
											this.sMsgBdy += "   " + this.sLabel + "\n";
											this.bValidate = false;
										}
									}
								}
							}
						}
					}
				}
				if (this.bValidate && this.sPK != "") {
					this.sPKElement = "";
					this.oFld = document.getElementById(this.sFrmId);
					if (this.oFld != null) {
						this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
					}
					this.sXPath = "";
					for (var iC = 0; iC < this.sPK.split("|").length; iC++) {
						this.oCl = this.oXD.selectSingleNode("//" + this.sPK.split("|")[iC]);
						this.sVl = (this.oCl != null) ? (this.oCl.getAttribute("value") != null) ? this.oCl.getAttribute("value") : "" : "";
						this.sXPath += (this.sXPath != "") ? (" and ./" + this.sPK.split("|")[iC] + "[@value='" + this.sVl + "']") : ("./" + this.sPK.split("|")[iC] + "[@value='" + this.sVl + "']");
					}
					this.oRw = this.init.oXGr.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sPKElement + "\"]/row[" + ((this.sFrmLn != "") ? "@line!='" + this.sFrmLn + "' and " : "") + this.sXPath + "]");
					if (this.oRw == null) {
						this.oRw = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sPKElement + "\"]/row[" + ((this.sFrmLn != "") ? "@line!='" + this.sFrmLn + "' and " : "") + ((this.bIB != "true") ? "@status!='ins' and " : "") + this.sXPath + "]");
					}
					
					
					if (this.oRw != null && this.duplicar == 'false') 
					{
						msgBox(" - Registro duplicado !\n");
						this.sMsgBdy = "";
						this.bValidate = false;
					}
				}
			}
		}
		if (this.sMsgBdy != "") 
		{
			msgBox(" - Os seguintes campos obrigat�rios est�o vazios:\n" + this.sMsgBdy);
		}
		return this.bValidate;

		this.sMsgHder = null;
		this.sMsgBdy = null;
		this.bValidate = null;
		this.oDt = null;
		this.sFrmId = null;
		this.sXPath = null;
		this.oNd = null;
		this.sPK = null;
		this.sFK = null;
		this.bIB = null;
		this.sFKFormId = null;
		this.sFKElementId = null;
		this.oElmnt = null;
		this.sTgNm = null;
		this.sLabel = null;
		this.oFKForm = null;
		this.oFKElement = null;
		this.sValidate = null;
		this.oNds = null;
		this.sPKElement = null;
		this.oFld = null;
		this.sXPath = null;
		this.oCl = null;
		this.sVl = null;
		this.oRw = null;

}

UltraCargo.prototype.verifyGridCons = function() 
{
	var vwConjunto		=	"";
	var vwConjunto_Str =	"";
	var vwSubConj		=	"";
	var vwColuna1		=	""; 
	var vwColuna2		=	"";
	var vwOperador		=	"";
	var vwConsitir		=   ""
		
	this.oDt = this.oXD.selectSingleNode("root/*");
	
	if (this.oDt != null) 
	{
		this.sFrmId = this.oDt.nodeName;
		this.sXPath = "root/" + this.sFrmId;
		this.oNd = this.init.oXD.selectSingleNode(this.sXPath);
		
		this.sConsist = (this.oNd.getAttribute("consist") != null) ? this.oNd.getAttribute("consist") : "";
		
		if (this.sConsist != "")
		{
			this.oNds = this.init.oXD.selectNodes(this.sXPath + "/row/*[@index!='']");
			if (this.oNds[0] != null) 
			{
				vwConjunto  = this.sConsist.split("&&");
				for(var vwi = 0;vwi<=vwConjunto.length-1;vwi++)
				{
					vwConjunto_Str =  vwConjunto[vwi].substr(1,vwConjunto[vwi].length -2); 
					vwSubConj		= vwConjunto_Str.split("|");
					
					vwColuna1		= vwSubConj[0]; 
					vwColuna2		= vwSubConj[1];
					vwOperador		= vwSubConj[2];
						
					this.oNd		= this.init.oXD.selectSingleNode(this.sXPath + "/row/*[@index='" + vwColuna1 + "']");
					this.oNd_col2	= this.init.oXD.selectSingleNode(this.sXPath + "/row/*[@index='" + vwColuna2 + "']");
					
					if (this.oNd != null && this.oNd_col2 != null ) 
					{
						
						this.sLabel			= (this.oNd.getAttribute("title") != null) ? unescape(this.oNd.getAttribute("title")) : "";
						this.sLabel_Col2	= (this.oNd_col2.getAttribute("title") != null) ? unescape(this.oNd_col2.getAttribute("title")) : "";
							
						this.sTipo				= (this.oNd.getAttribute("tipo") != null) ? unescape(this.oNd.getAttribute("tipo")) : "";
						this.sTipo_col2			= (this.oNd_col2.getAttribute("tipo") != null) ? unescape(this.oNd_col2.getAttribute("tipo")) : "";

						if(this.sTipo != this.sTipo_col2)
						{
							msgBox("As colunas informadas para consit�ncia n�o s�o do mespo tipo:\n" + "Coluna " + vwColuna1 + " " + this.sTipo + "\nColuna " + vwColuna2 + " " + this.sTipo_col2);
							return false;
						}
						
						this.oNd = this.oXD.selectSingleNode("//" + this.oNd.nodeName + "[@value!='']");
						this.oNd_col2 = this.oXD.selectSingleNode("//" + this.oNd_col2.nodeName + "[@value!='']");
						
						if (this.oNd != null && this.oNd_col2) 
						{
							this.sValor			= (this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : "";
							this.sValor_col2	= (this.oNd_col2.getAttribute("value") != null) ? unescape(this.oNd_col2.getAttribute("value")) : "";
								
							vwConsistir = this.Fu_RetornaConsistencia(this.sTipo,vwOperador,this.sValor,this.sLabel,this.sValor_col2,this.sLabel_Col2)
							if(vwConsistir != "")
							{
								msgBox(vwConsistir);
								return false;
							}
						}
						
					}
					
				} 	
				
			}
			
		}
		
	}
	
	return true

	this.oDt = null;
	this.sFrmId = null;
	this.sXPath = null;
	this.oNd = null;
	this.oNds = null;
	this.sXPath = null;
}


UltraCargo.prototype.Fu_RetornaConsistencia = function(paTipo,paOperador,paValor1,paLabel1,paValor2,paLabel2) 
{
	var vwTipo  = paTipo.substr(0,3);
	var vwRetorno = "";
	var valor1 = paValor1;
	var valor2 = paValor2;
	if(vwTipo == "lng"){
	valor1 = parseFloat(paValor1.replace(",","."));
	valor2 = parseFloat(paValor2.replace(",","."));
	}
	else if(vwTipo == "int"){
	valor1 = parseInt(paValor1);
	valor2 = parseInt(paValor2);
	}
	else if(paTipo == 'dat' )
	{
		var vwSplit;
		var inicio;
		var fim;
		vwSplit		= paValor1.split("/");
		paValor1	= vwSplit[2]+vwSplit[1]+vwSplit[0];		
		vwSplit		= paValor2.split("/");
		paValor2	= parseInt(vwSplit[2]+vwSplit[1]+vwSplit[0]);
		valor1 = paValor1;
		valor2 = paValor2;
	}
	switch(paOperador) 
	{
		case "=":
			if(valor1 == valor2)
			{
					vwRetorno =  "";
			}
			else
			{
				vwRetorno = "O campo " + paLabel1 + " n�o pode ser diferente do campo " + paLabel2;
			}
			break;
		case ">":
			if(valor1 > valor2)
			{
					vwRetorno =  ""; 
			}
			else
			{
					vwRetorno = "O campo " + paLabel1 + " n�o pode ser menor que o campo " +  paLabel2;
			}
			
			break;
		case "<":
			if(valor1 < valor2)
			{
					vwRetorno =  "";
			}
			else
			{
					vwRetorno = "O campo " + paLabel1 + " n�o pode ser maior que o campo " + paLabel2;
			}
			break;
		case "!=":
			if(valor1 != valor2)
			{
					vwRetorno =  "";
			}
			else
			{
					vwRetorno = "O campo " + paLabel1 + " n�o pode  ser igual ao campo " + paLabel2;
			}
			break;
		case ">=":
			if(valor1 >= valor2)
			{
					vwRetorno =  "";
			} 
			else
			{
					vwRetorno = "O campo " + paLabel1 + " n�o pode ser menor igual ao campo " + paLabel2;
			}
			break;
		case "<=":
			if(valor1 <= valor2)
			{
					vwRetorno =  "";
			} 
			else
			{
					vwRetorno = "O campo " + paLabel1 + " n�o pode ser maior igual ao campo " + paLabel2;
			}
			break;
	}
	return vwRetorno;
}

UltraCargo.prototype.insertRow = function() {
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) {
			this.sLnk = "";
			this.sExec = "";
			this.sPg = "";
			this.sPK = "";
			this.sFKElementId = "";
			this.sXPath = "root/" + this.sFrmId;
			this.iLn = this.getSequence(this.sFrmId);
			this.oNd = this.init.oXD.selectSingleNode(this.sXPath);
			if (this.oNd != null) {
				this.sLnk = this.oNd.getAttribute("linked");
				this.sExec = this.oNd.getAttribute("execute");
				this.sPg = this.oNd.getAttribute("page");
				this.sPK = this.oNd.getAttribute("pk");
				this.sFK = this.oNd.getAttribute("fk");
				this.bFK = this.oNd.getAttribute("enable_fk");
				if (this.sFK.indexOf(".") != -1) {
					this.asFK = this.sFK.split("|");
					for (var iF = 0; iF < this.asFK.length; iF++) {
						if (this.asFK[iF].indexOf(".") != -1) {
							this.oFld = document.getElementById(this.asFK[iF].split(".")[0]);
							if (this.oFld != null) {
								this.oElmnt = this.oFld.item(this.asFK[iF].split(".")[1]);
								if (this.oElmnt != null) {
									this.sVl = (this.oElmnt.getAttribute("value") != null) ? this.oElmnt.getAttribute("value") : "";
									this.oNd = this.init.oXD.selectSingleNode("//" + this.asFK[iF].split(".")[0] + "/" + this.asFK[iF].split(".")[1] + "[@tag='input-checkbox']");
									if (this.oNd != null) {
										this.sVl = unescape(this.oNd.getAttribute("value"));
										this.sVl = escape((this.oElmnt.checked) ? this.sVl.split("::")[0] : this.sVl.split("::")[1]);
									}
									this.oNd = this.oXD.selectSingleNode("//" + this.asFK[iF].split(".")[1]);
									if (this.oNd == null) {
										this.oNd = this.oXD.createNode(1,this.asFK[iF].split(".")[1],"");
										this.oNd.setAttribute("value","");
										this.oNd.setAttribute("server_value","");
										this.oNd.setAttribute("pk","true");
										this.oDt = this.oXD.selectSingleNode("root/" + this.sFrmId);
										if (this.oDt != null) {
											this.oDt.appendChild(this.oNd);
										}
									}
									else {
										this.oNd.setAttribute("pk","true");
									}
									this.oNd = this.oXD.selectSingleNode("//" + this.asFK[iF].split(".")[1] + "[@value='']");
									if (this.oNd != null) {
										this.oNd.setAttribute("value",this.sVl);
									}
								}
							}
						}
					}
				}
			}
			if (this.sExec == "local") {
				this.oDt = this.oXD.selectSingleNode("root/*");
				if (this.oDt != null) {
					this.oDt.setAttribute("line",this.iLn);
					this.sPKElement = "";
					this.oFld = document.getElementById(this.sFrmId);
					if (this.oFld != null) {
						this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
					}
					this.sXPath = this.sXPath + "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
					this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
					if (this.oNd == null) {
						this.createNode(2,this.sFrmId,"root","",
							"linked",this.sLnk,
							"pk",this.sPKElement,
							"page",this.sPg);
					}
					this.createNode(2,"row",this.sXPath,"",
						"line",this.iLn,
						"status","ins");
					if (this.sFKElementId != "") {
						this.createNode(2,this.sFKElementId,this.sXPath + "/row[@line='" + this.iLn + "']","",
							"value",this.sVl);
					}
					for (var iK = 0; iK < this.sPK.split("|").length; iK++) {
						this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']/" + this.sPK.split("|")[iK]);
						if (this.oNd == null) {
							this.createNode(2,this.sPK.split("|")[iK],this.sXPath + "/row[@line='" + this.iLn + "']","",
								"pk","true");
						}
						else {
							this.addAttribute(2,this.sXPath + "/row[@line='" + this.iLn + "']/" + this.sPK.split("|")[iK],
								"pk","true");
						}
					}
					this.oNds = this.oDt.children;
					if (this.oNds != null) {
						for (var iD = 0; iD < this.oNds.length; iD++) {
							this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']/" + this.oNds[iD].nodeName);
							if (this.oNd != null) {
								this.oNd.setAttribute("value",this.oNds[iD].getAttribute("value"));
							}
							else {
								this.sPK = "false";
								this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId + "/row/" + this.oNds[iD].nodeName);
								if (this.oNd == null) {
									this.sPK = "";
								}
								this.createNode(2,this.oNds[iD].nodeName,this.sXPath + "/row[@line='" + this.iLn + "']","",
									"server_value","",
									"value",this.oNds[iD].getAttribute("value"),
									"pk",this.sPK);
							}
						}
					}
				}
			}
		}

		this.oDt = null;
		this.sLnk = null;
		this.sExec = null;
		this.sPg = null;
		this.sPK = null;
		this.sFKElementId = null;
		this.sXPath = null;
		this.iLn = null;
		this.oNd = null;
		this.sFK = null;
		this.bFK = null;
		this.sFKFormId = null;
		this.sFKElementId = null;
		this.oElmnt = null;
		this.sTgNm = null;
		this.oFKForm = null;
		this.oFKElement = null;
		this.sVl = null;
		this.sPKElement = null;
		this.oFld = null;
		this.oNds = null;
}

UltraCargo.prototype.editRow = function() {
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) {
			this.iLn = (this.oDt.getAttribute("line") != null) ? this.oDt.getAttribute("line") : "";
			this.oFld = document.getElementById(this.sFrmId);
			this.sPKElement = "";
			this.sXPath = "root/" + this.sFrmId;
			if (this.oFld != null) {
				this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
			}
			this.oNd = this.init.oXD.selectSingleNode(this.sXPath);
			this.sPg = "";
			this.sLck = "";
			if (this.oNd != null) {
				this.sPg = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "";
				this.sLck = (this.oNd.getAttribute("lock") != null) ? this.oNd.getAttribute("lock") : "";
				this.sFK = (this.oNd.getAttribute("fk") != null) ? this.oNd.getAttribute("fk") : "";
			}
			this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
			if (this.iLn != "") {
				this.oNds = this.init.oXGr.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				if (this.oNds[0] == null) {
					this.oNds = this.init.oXDt.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				}
				if (this.oNds[0] != null) {
					this.oXD.loadXML("<root/>");
					this.oRoot = this.oXD.documentElement;
					this.oNd = this.oXD.createNode(1,this.sFrmId,"");
					for (var iC = 0; iC < this.oNds.length; iC++) {
						this.sPK = (this.oNds[iC].getAttribute("pk") != null) ? this.oNds[iC].getAttribute("pk") : "";
						this.bLck = "false";
						if (this.sLck != "") {
							if (("|" + this.sLck + "|").indexOf("|" + this.oNds[iC].nodeName + "|") != -1) {
								this.bLck = "true";
							}
						}
						if (this.bFK == "true") {
							if (("|" + this.sFK + "|").indexOf("." + this.oNds[iC].nodeName + "|") != -1) {
								this.sPK = "false";
								this.bLck = "false";
							}
							else {
								this.bLck = "true";
							}
						}
						this.sVl = (this.oNds[iC].getAttribute("value") != null) ? this.oNds[iC].getAttribute("value") : "";
						this.oElmnt = this.oXD.createNode(1,this.oNds[iC].nodeName,"");
						this.oElmnt.setAttribute("pk",this.sPK);
						this.oElmnt.setAttribute("lock",this.bLck);
						this.oElmnt.setAttribute("value",unescape(this.sVl));
						this.oNd.appendChild(this.oElmnt);
					}
					this.oRoot.appendChild(this.oNd);
					for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) {
						if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == this.sFrmId) 
						{
							self.frames[iF].loadRow(this.oXD.xml);
							break;
						}
					}
				}
			}
		}

		this.oDt = null;
		this.iLn = null;
		this.oFld = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.oNd = null;
		this.sPg = null;
		this.sLck = null;
		this.sFK = null;
		this.bFK = null;
		this.oNds = null;
		this.oRoot = null;
		this.bLck = null;
		this.sPK = null;
		this.sVl = null;
		this.oElmnt = null;

}

UltraCargo.prototype.updateRow = function() {
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) {
			this.iLn = (this.oDt.getAttribute("line") != null) ? this.oDt.getAttribute("line") : "";
			if (this.iLn != "") {
				this.oFld = document.getElementById(this.sFrmId);
				this.sPKElement = "";
				this.sXPath = "root/" + this.sFrmId;
				if (this.oFld != null) {
					this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				}
				this.oNds = this.oXD.selectNodes("root/" + this.sFrmId + "/*");
				this.oElmnt = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
				this.sExec = "local";
				this.sPg = "";
				if (this.oElmnt != null) {
					this.sExec = (this.oElmnt.getAttribute("execute") != null) ? this.oElmnt.getAttribute("execute") : "";
					this.sPg = (this.oElmnt.getAttribute("page") != null) ? this.oElmnt.getAttribute("page") : "";
				}
				this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
				this.oElmnt = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
				if (this.oElmnt == null) {
					this.oElmnt = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
				}
				if (this.oElmnt != null) {
					if (this.sExec == "local") {
						this.sStts = (this.oElmnt.getAttribute("status") != null) ? this.oElmnt.getAttribute("status") : "";
						if (this.sStts == "server") {
							this.oElmnt.setAttribute("status","upd");
							this.sStts = "upd";
						}
						if (this.oNds[0] != null) {
							for (var iC = 0; iC < this.oNds.length; iC++) {
								this.sVl = (this.oNds[iC].getAttribute("value") != null) ? this.oNds[iC].getAttribute("value") : "";
								this.oNd = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']/" + this.oNds[iC].nodeName);
								if (this.oNd == null) {
									this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']/" + this.oNds[iC].nodeName);
								}
								if (this.oNd != null) {
									this.oNd.setAttribute("value",this.sVl);
								}
							}
						}
						this.oRoot = this.init.oXDt.document.documentElement;
						this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
						if (this.oNd == null) {
							this.oNd = this.init.oXDt.createNode(1,this.sFrmId,"");
							this.oNd.setAttribute("tipo","table");
							this.oNd.setAttribute("pk",this.sPKElement);
							this.oNd.setAttribute("page",this.sPg);
							this.oRoot.appendChild(this.oNd);
						}
						this.oRoot = this.init.oXDt.selectSingleNode(this.sXPath);
						this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
						this.oElmnt = this.oElmnt.cloneNode(true);
						if (this.sStts.indexOf("ins") == -1) {
							this.oElmnt.setAttribute("status","srv_upd");
						}
						if (this.oNd != null) {
							this.oRoot.replaceChild(this.oElmnt.cloneNode(true),this.oNd);
						}
						else {
							this.oRoot.appendChild(this.oElmnt.cloneNode(true));
						}
					}
				}
				this.oNds = this.init.oXGr.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				if (this.oNds[0] == null) {
					this.oNds = this.init.oXDt.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				}
				if (this.oNds[0] != null) {
					for (var iC = 0; iC < this.oNds.length; iC++) {
						this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/" + this.oNds[iC].nodeName);
						if (this.oNd == null) {
							this.oDt.appendChild(this.oNds[iC].cloneNode(true));
						}
					}
				}
			}
		}

		this.oDt = null;
		this.iLn = null;
		this.oFld = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.oNds = null;
		this.oElmnt = null;
		this.sExec = null;
		this.sPg = null;
		this.sStts = null;
		this.sVl = null;
		this.oNd = null;
		this.oRoot = null;

}

UltraCargo.prototype.deleteRow = function() {
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) 
		{
			this.iLn = (this.oDt.getAttribute("line") != null) ? this.oDt.getAttribute("line") : "";
			
			if (this.iLn != "") 
			{
			
				this.oNds = this.oXD.selectNodes("root/" + this.sFrmId + "/*");
				this.oElmnt = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
				this.sExec = "local";
				this.sPg = "";
				this.oFld = document.getElementById(this.sFrmId);
				this.sPKElement = "";
				this.sXPath = "root/" + this.sFrmId;
				if (this.oFld != null) 
				{
					this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				}
				if (this.oElmnt != null) 
				{
					this.sExec = (this.oElmnt.getAttribute("execute") != null) ? this.oElmnt.getAttribute("execute") : "";
					this.sPg = (this.oElmnt.getAttribute("page") != null) ? this.oElmnt.getAttribute("page") : "";
				}
				
				this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
				this.oElmnt = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
				if (this.oElmnt == null) 
				{
					this.oElmnt = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
				}
				if (this.oElmnt != null) 
				{
					if (this.sExec == "local") 
					{
						this.sStts = (this.oElmnt.getAttribute("status") != null) ? this.oElmnt.getAttribute("status") : "";
						if (this.sStts == "server" || this.sStts == "sel_ins"  || this.sStts == "upd") 
						{
							this.oElmnt.setAttribute("status","del");
						}
						this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
						if (this.oNd == null) 
						{
							this.oRoot = this.init.oXDt.document.documentElement;
							this.oNd = this.init.oXDt.createNode(1,this.sFrmId,"");
							this.oNd.setAttribute("tipo","table");
							this.oNd.setAttribute("pk",this.sPKElement);
							this.oNd.setAttribute("page",this.sPg);
							this.oRoot.appendChild(this.oNd);
						}
						this.oRoot = this.init.oXDt.selectSingleNode(this.sXPath);
						this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
						if (this.sStts == "ins") 
						{
							
							this.oRoot.removeChild(this.oElmnt);
							
						}
						else 
						{
							this.oElmnt = this.oElmnt.cloneNode(true);
							this.oElmnt.setAttribute("status","srv_del");
							if (this.oNd != null) 
							{
								this.oRoot.replaceChild(this.oElmnt,this.oNd);
							}
							else 
							{
								this.oRoot.appendChild(this.oElmnt);
							}
						}
					}
				}
				this.oNds = this.init.oXGr.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				if (this.oNds[0] == null) 
				{
					this.oNds = this.init.oXDt.selectNodes(this.sXPath + "/row[@line='" + this.iLn + "']/*");
				}
				if (this.oNds[0] != null) 
				{
					for (var iC = 0; iC < this.oNds.length; iC++) {
						this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sPKElement + "\"]/" + this.oNds[iC].nodeName);
						if (this.oNd == null) {
							this.oDt.appendChild(this.oNds[iC].cloneNode(true));
						}
					}
				}
			}
		}

		this.oDt = null;
		this.iLn = null;
		this.oFld = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.oNds = null;
		this.oElmnt = null;
		this.sExec = null;
		this.sPg = null;
		this.oFld = null;
		this.sStts = null;
		this.oNd = null;
		this.oRoot = null;
}

UltraCargo.prototype.selectRow = function()
{
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) 
		{
			this.iLn = this.oDt.getAttribute("line");
			this.oElmnt = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
			this.oFld = document.getElementById(this.sFrmId);
			this.sPKElement = "";
			this.sXPath = "root/" + this.sFrmId;
			if (this.oFld != null) 
			{
				this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
			}
			
			
			if (this.oElmnt != null) 
			{
				this.sPg = (this.oElmnt.getAttribute("page") != null) ? this.oElmnt.getAttribute("page") : "";
			}
			
			this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
			this.sChk = this.oDt.getAttribute("checked");
			this.sMrk = this.oDt.getAttribute("mark");
			this.sPK = "";
			this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
			
			if (this.oNd != null) 
			{
				if (this.oNd.getAttribute("move_action") != "true") 
				{
					this.oFld = document.getElementById(this.sFrmId);
					if (this.oFld != null) 
					{
						this.sPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
					}
					this.oRoot = this.init.oXDt.selectSingleNode(this.sXPath);
					
					if (this.oRoot == null) 
					{
						this.oRoot = this.init.oXDt.document.documentElement;
						this.oNd = this.init.oXDt.createNode(1,this.sFrmId,"");
						this.oNd.setAttribute("tipo","table");
						this.oNd.setAttribute("pk",this.sPK);
						this.oNd.setAttribute("page",this.sPg);
						this.oRoot.appendChild(this.oNd);
						this.oRoot = this.init.oXDt.selectSingleNode(this.sXPath);
					}
					

					if (this.sMrk == "true") 
					{
						if (this.sChk == "true") 
						{
							this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
							if (this.oNd != null) 
							{
								this.oRoot.removeChild(this.oNd);
							}
						}
						else 
						{
							this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
							if (this.oNd == null) 
							{
								this.oNd = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
								if (this.oNd != null) 
								{
									this.oNd = this.oNd.cloneNode(true);
									this.oNd.setAttribute("status","chk_del");
									this.oRoot.appendChild(this.oNd);
								}
							}
						}
					}
					else 
					{
						if (this.sChk == "true") 
						{
							this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
							
							
							if (this.oNd != null)
							{
								this.oNd.setAttribute("status","chk_ins");
							}
							else
							{
								this.oNd = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
								if (this.oNd != null) 
								{
									this.oNd = this.oNd.cloneNode(true);
									this.oNd.setAttribute("status","chk_ins");
									this.oRoot.appendChild(this.oNd);
								}
							}
						}
						else 
						{
							this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
							if (this.oNd != null) 
							{
								var vwPath =  "root/" + this.sFrmId;
								var vwDelOnDesChk_pop  =  "false";
								var vwNode  = this.init.oXD.selectNodes(vwPath);
								var vwCamposChav = ''; 
								var vwCamposChavSsplit = ''; 
								var vwChave		= '';
								this.sTipoGrid  = '';
								
								if(vwNode != null)
								{
									vwDelOnDesChk_pop   =  vwNode[0].getAttribute("DelOnDesChk_pop");
									this.sTipoGrid		=  vwNode[0].getAttribute("tipogrid");
									vwCamposChav  =  vwNode[0].getAttribute('pk');
									if(vwDelOnDesChk_pop =='')
									{
										vwDelOnDesChk_pop  = "false";
									}
								}
								
								
								if(vwDelOnDesChk_pop == "true")
								{
									vwCamposChavSsplit = vwCamposChav
									vwCamposChav  = vwCamposChav.split('|');
									vwChave  = '' ;
									for(var vwj = 0;vwj<=vwCamposChav.length-1;vwj++)
									{
										var vwNodeLinha   =   this.oNd.selectSingleNode(vwCamposChav[vwj]);
										if(vwNodeLinha!=null)
										{
											vwChave +=  vwNodeLinha.getAttribute('value');
										}
									}
									
									var vwCloneNode   =   this.oNd.cloneNode(true);
									vwCloneNode.setAttribute("status","server");
									var vwRota = this.init.oXGr.selectSingleNode(this.sXPath);
									if(vwRota != null)
									{
										vwRota.appendChild(vwCloneNode);
									}
									
									if(this.sTipoGrid == 'CHECK_XML')
									{
										this.ExcluiLinhaDesCheckXML(vwCamposChavSsplit,vwChave);
									}
									else
									{
										this.ExcluiLinhaDesCheck(vwCamposChavSsplit,vwChave);
									}	
								}
								this.oRoot.removeChild(this.oNd);
							}
							else
							{
								var vwPath =  "root/" + this.sFrmId;
								var vwDelOnDesChk  =  "false";
								var vwNode  = this.init.oXD.selectNodes(vwPath);
								if(vwNode != null)
								{
									vwDelOnDesChk   =  vwNode[0].getAttribute("DelOnDesChk");
									if(vwDelOnDesChk =='')
									{
										vwDelOnDesChk  = "false"; 
									} 
								}
								
								if(vwDelOnDesChk = "true")
								{
									this.oNd = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
									if (this.oNd != null) 
									{
										this.oNd = this.oNd.cloneNode(true);
										this.oNd.setAttribute("status","chk_del");
										this.oRoot.appendChild(this.oNd);
									}
								}
							}
						}
					}
				}
			}
		}

		this.oDt = null;
		this.iLn = null;
		this.oElmnt = null;
		this.oFld = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.sPg = null;
		this.sChk = null;
		this.sMrk = null;
		this.sPK = null;
		this.oNd = null;
		this.oRoot = null;
		this.sStts = null;
}

UltraCargo.prototype.linkRow = function() {
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) {
			this.iLn = this.oDt.getAttribute("line");
			this.oFld = document.getElementById(this.sFrmId);
			this.sPKElement = "";
			this.sXPath = "root/" + this.sFrmId;
			if (this.oFld != null) {
				this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
			}
			this.sLnk = "";
			this.sExec = "";
			this.oNd = this.init.oXD.selectSingleNode(this.sXPath);
			if (this.oNd != null) {
				this.sLnk = this.oNd.getAttribute("linked");
				this.sExec = this.oNd.getAttribute("execute");
				this.sPg = this.oNd.getAttribute("page");
			}
			this.sXPath += "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
			this.oNd = this.init.oXGr.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
			if (this.oNd == null) {
				this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/row[@line='" + this.iLn + "']");
			}
			if (this.oNd != null) {
				this.oNds = this.oNd.children;
				if (this.oNds[0] != null) {
					this.oRoot = this.oXD.selectSingleNode("root/" + this.sFrmId);
					for (var iC = 0; iC < this.oNds.length; iC++) {
						this.oRoot.appendChild(this.oNds[iC].cloneNode(true));
					}
				}
			}
		}

		this.oDt = null;
		this.iLn = null;
		this.oFld = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.sLnk = null;
		this.sExec = null;
		this.oNd = null;
		this.oRoot = null;
}

UltraCargo.prototype.changePage = function() 
{
		this.oDt = this.oXD.selectSingleNode("root/*");
		if (this.oDt != null) 
		{
			this.iPage = this.oDt.getAttribute("page");
			this.iPos = -1;
			for (var iA = 0; iA < this.init.asQuery.length; iA++) 
			{
				if (this.init.asQuery[iA][0] == this.sFrmId) {
					this.iPos = iA;
				}
			}
			if (this.iPos != -1) 
			{
				this.sXML = this.init.asQuery[this.iPos][1];
				this.oXD = new XMLHttpRequest()
				this.oXD.loadXML(this.sXML);
				//TODO: FABIO - CHECK XML VIA PARSER
				if (true) 
				{
					this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/page_number");
					if (this.oNd != null) 
					{
						this.oNd.textContent = this.iPage;
					}
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
					if (this.oNd != null) 
					{
						this.oNd.setAttribute("page",this.iPage);
					}
					this.init.asQuery[this.iPos][1] = this.oXD.xml;

					this.oNd = this.oXD.selectSingleNode("root/operation");
					if (this.oNd != null) 
					{
						this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
						if (this.sOper != "")
						{
							this.form(this.sFrmId);
							this.operation(this.sOper);
							
							 
							
							this.oNd.setAttribute('value','frm_pesquisa_detal_lnk');
							
							
							 
							this.send(this.oXD.xml);
						}
					}
				}
			}
		}

		this.oDt = null;
		this.iPage = null;
		this.iPos = null;
		this.sXML = null;
		this.oXD = null;
		this.oNd = null;
		this.sOper = null;

}

UltraCargo.prototype.updateGrid = function(psXML) {
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNds = this.oXD.selectNodes("root/*");
			if (this.oNds[0] != null) {
				for (var iF = 0; iF < this.oNds.length; iF++) {
					this.oNd = this.oNds[iF];
					this.sNdId = this.oNd.nodeName;
					this.sPK = "";
					this.oFld = document.getElementById(this.sNdId);
					if (this.oFld != null) {
						this.sPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
					}
					this.oDt = this.init.oXD.selectSingleNode("root/" + this.sNdId);
					if (this.oDt != null) {
						this.sDtTp = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
						this.sDtExec = (this.oDt.getAttribute("execute") != null) ? this.oDt.getAttribute("execute") : "";
						this.sDtPg = (this.oDt.getAttribute("page") != null) ? this.oDt.getAttribute("page") : "";
						if (this.sPK != "" && this.sDtTp == "table" && this.sDtExec == "local") {
							this.oDt = this.init.oXDt.selectSingleNode("root/" + this.sNdId + "[@pk=\"" + this.sPK + "\"]");
							if (this.oDt != null) {
								this.oDts = this.oDt.children;
								if (this.oDts[0] != null) {
									for (var iD = 0; iD < this.oDts.length; iD++) {
										this.sDtTp = (this.oDts[iD].getAttribute("status") != null) ? this.oDts[iD].getAttribute("status") : "";
										switch(this.sDtTp) {
											case "srv_upd":
											case "srv_del":
												
												this.oDt.removeChild(this.oDts[iD]);
												
												break;
											case "ins":
												this.oDts[iD].setAttribute("status","server");
												this.oRoot = this.init.oXGr.selectSingleNode("root/" + this.sNdId + "[@pk=\"" + this.sPK + "\"]");
												if (this.oRoot == null) {
													this.init.oXGr.document.documentElement.appendChild(this.oDts[iD].parentNode.cloneNode(false));
													this.oRoot = this.init.oXGr.selectSingleNode("root/" + this.sNdId + "[@pk=\"" + this.sPK + "\"]");
												}
												this.oRoot.appendChild(this.oDts[iD].cloneNode(true));
												this.oDt.removeChild(this.oDts[iD]);
												
												break;
										}
									}
								}
							}
							this.oDt = this.init.oXGr.selectSingleNode("root/" + this.sNdId + "[@pk=\"" + this.sPK + "\"]");
							if (this.oDt != null) {
								this.oDts = this.oDt.children;
								if (this.oDts[0] != null) {
									for (var iD = 0; iD < this.oDts.length; iD++) {
										this.sDtTp = (this.oDts[iD].getAttribute("status") != null) ? this.oDts[iD].getAttribute("status") : "";
										switch(this.sDtTp) {
											case "upd":
												this.oDts[iD].setAttribute("status","server");
												break;
											case "del":
												this.oDt.removeChild(this.oDts[iD]);
												
												break;
										}
									}
								}
							}
						}
					}
				}
			}
		}

		this.oXD = null;
		this.oNds = null;
		this.oNd = null;
		this.sNdId = null;
		this.sPK = null;
		this.oFld = null;
		this.oDt = null;
		this.sDtTp = null;
		this.sDtExec = null;
		this.sDtPg = null;
		this.oDts = null;
		this.sDtTp = null;
		this.oRoot = null;
}

UltraCargo.prototype.updateFormData = function(psXML) {
		this.asForm = new Array();
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXD.selectSingleNode("root/*");
			if (this.oNd != null) {
				this.sLnk = this.oNd.nodeName;
				this.sLine = (this.oNd.getAttribute("line") != null) ? this.oNd.getAttribute("line") : "";
				if (this.sLine != null) {
					this.oNds = this.init.oXD.selectNodes("root/*[@linked='" + this.sLnk + "']");
					if (this.oNds[0] != null) {
						for (var iF = 0; iF < this.oNds.length; iF++) {
							this.oFrm = this.oNds[iF];
							this.sFrmId = this.oFrm.nodeName;
							this.sXPath = "root/" + this.sFrmId + "[@pk=\"root/" + this.sLnk + "/row[@line='" + this.sLine + "']\"]";
							this.oElmnts = this.oFrm.children;
							for (var iE = 0; iE < this.oElmnts.length; iE++) {
								this.oElmnt = this.oElmnts[iE];
								this.sElmntId = this.oElmnt.nodeName;
								this.oDt = this.oXD.selectSingleNode("root/" + this.sLnk + "/" + this.sElmntId);
								if (this.oDt != null) {
									this.sVl = (this.oDt.getAttribute("value") != null) ? this.oDt.getAttribute("value") : "";
									this.sTgNm = (this.oElmnt.getAttribute("tag") != null) ? this.oElmnt.getAttribute("tag") : "";
									switch(this.sTgNm) {
										case "input-file":
										case "input-hidden":
										case "input-text":
										case "textarea":
											this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId);
											if (this.oDt != null) {
												this.oDt.setAttribute("value",this.sVl);
											}
											break;
										case "input-checkbox":
										case "input-radio":
											this.oDts = this.init.oXDt.selectNodes(this.sXPath + "/" + this.sElmntId);
											if (this.oDts[0] != null) {
												for (var iD = 0; iD < this.oDts.length; iD++) {
													this.oDts[iD].setAttribute("checked","false");
												}
											}
											this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@value='" + this.sVl + "']");
											if (this.oDt != null) {
												this.oDt.setAttribute("checked","true");
											}
											break;
										case "select-one":
										case "select-multiple":
											this.oDts = this.init.oXDt.selectNodes(this.sXPath + "/" + this.sElmntId);
											if (this.oDts[0] != null) {
												for (var iD = 0; iD < this.oDts.length; iD++) {
													this.oDts[iD].setAttribute("selected","false");
												}
											}
											this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@value='" + this.sVl + "']");
											if (this.oDt != null) {
												this.oDt.setAttribute("selected","true");
											}
											break;
									}
								}
							}
							this.asForm[this.asForm.length] = this.sFrmId;
						}
					}
				}
			}
			for (var iF = 0; iF < this.asForm.length; iF++) {
				this.loadData(this.asForm[iF]);
			}
		}

		this.asForm = null;
		this.oXD = null;
		this.oNd = null;
		this.sLnk = null;
		this.sLine = null;
		this.oNds = null;
		this.oFrm = null;
		this.sFrmId = null;
		this.sXPath = null;
		this.oElmnts = null;
		this.oElmnt = null;
		this.sElmntId = null;
		this.oDt = null;
		this.sVl = null;
		this.sTgNm = null;

}

UltraCargo.prototype.setDataLink = function(psXML) {
		this.oXD = new XMLHttpRequest()
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXD.selectSingleNode("root/*");
			if (this.oNd != null) {
				this.sPrntFrmId = this.oNd.nodeName;
				this.oElmnt = document.getElementById(this.sPrntFrmId);
				this.sPK = "";
				this.iPrntLn = (this.oNd.getAttribute("line") != null) ? (isNaN(parseInt(this.oNd.getAttribute("line"))) ? -1 : parseInt(this.oNd.getAttribute("line"))) : -1;
				if (this.oElmnt != null) {
					this.sPK = (this.oElmnt.getAttribute("pk") != null) ? this.oElmnt.getAttribute("pk") : "";
					this.oElmnt.setAttribute("active_line",this.iPrntLn);
				}
				if (this.iPrntLn != -1) {
					if (this.sPK != "") {
						this.sXPath = this.sPK + "/" + this.sPrntFrmId + "/row[@line='" + this.iPrntLn + "']";
					}
					else {
						this.sXPath = "root/" + this.sPrntFrmId + "/row[@line='" + this.iPrntLn + "']";
					}
					for (var iF = 0; iF < document.forms.length; iF++) {
						this.oElmnts = document.forms[iF];
						if (this.oElmnts != null) {this.sFrmId = (this.oElmnts.getAttribute("id")
							 != null) ? this.oElmnts.getAttribute("id") : "form"+iF;
							this.sLnk = (this.oElmnts.getAttribute("linked") != null) ? this.oElmnts.getAttribute("linked") : "";
							if (this.sPrntFrmId == this.sLnk) {
								this.oElmnts.setAttribute("pk",this.sXPath);
							}
						}
					}
					this.oFras = document.getElementsByTagName("IFRAME");
					for (var iF = 0; iF < this.oFras.length; iF++) {
						this.oGr = this.oFras[iF];
						this.sFrmId = this.oGr.getAttribute("id");
						this.sLnk = (this.oGr.getAttribute("linked") != null) ? this.oGr.getAttribute("linked") : "";
						this.sExec = (this.oGr.getAttribute("execute") != null) ? this.oGr.getAttribute("execute") : "";
						this.sExec = (this.sExec == "server") ? "server" : "local";
						if (this.sPrntFrmId == this.sLnk) {
							this.oGr.setAttribute("pk",this.sXPath);
						}
					}
				}
			}
		}

		this.oXD = null;
		this.oNd = null;
		this.sPrntFrmId = null;
		this.oElmnt = null;
		this.sPK = null;
		this.iPrntLn = null;
		this.sXPath = null;
		this.oElmnts = null;
		this.sFrmId = null;
		this.sLnk = null;
		this.oFras = null;
		this.oGr = null;
		this.sExec = null;
}

UltraCargo.prototype.generateTableContent = function(psTableId) 
{
		this.sTransImg = "images_home/img_display/img_botoes/ultr_icon_transp.gif";
		this.asBGC = new Array(1);
		this.asBGC[0] = "iftab3branco";
		this.asBGC[1] = "iftab2cinza";
		this.asBGC[2] = "iftabcancelado";
		this.sHDscr = "";
		this.sHFBdy = "";
		this.sHCnt = "";
		this.oNd = this.init.oXD.selectSingleNode("root/" + psTableId);
		var vwChave  = ''
		var vwobjXML_NOTIN   = new XMLHttpRequest();
		
		if (this.oNd != null) 
		{
			this.sPg = this.oNd.getAttribute("page");
			this.bEdtBt = this.oNd.getAttribute("edit");
			this.bDelBt = this.oNd.getAttribute("delete");
			this.bInsBt = this.oNd.getAttribute("insert");
			this.bSelBt = this.oNd.getAttribute("select");
			this.bEdtDet = this.oNd.getAttribute("edit_on_detail");
			this.sHidFlds = this.oNd.getAttribute("hidden");
			this.sPK = this.oNd.getAttribute("pk");
			
			this.BotaoEspecial			= this.oNd.getAttribute("botaoespecial");
			this.ImgBotaoEspecial		= this.oNd.getAttribute("imgbotaoespecial");
			this.MainCaseBotaoEspecial	= this.oNd.getAttribute("maincasebotaoespecial");
			this.ToolTipoBotaoEspecial	= this.oNd.getAttribute("tooltipobotaoespecial");
			
			if(this.sPK != null && this.sPK != '' )
			{
				vwChave		=   this.sPK.split('|'); 
			} 	
			this.iIndex = this.oNd.getAttribute("index");
			this.iFixed = Math.floor(this.oNd.getAttribute("fixed"));
			this.sFlds = "";
			this.tipogrid = this.oNd.getAttribute("tipogrid");
			this.gridsele = this.oNd.getAttribute("gridsele");
			
			this.oNds = this.init.oXD.selectNodes("root/" + psTableId + "/row/*[@tipo!='' and @index!='']");
			if (this.oNds[0] != null) 
			{
				for (var iC = 0; iC < this.oNds.length; iC++) 
				{
					this.oNd = this.init.oXD.selectSingleNode("root/" + psTableId + "/row/*[@tipo!='' and @index='" + iC + "']");
					if (this.oNd != null) 
					{
						this.sTipo = this.oNd.getAttribute("tipo");
						this.sTipo = this.sTipo.substring(0,3);
						this.sFlds += this.sTipo + "|";
					}
				}
				if (this.sFlds != "") 
				{
					this.sFlds = this.sFlds.substring(0,(this.sFlds.length - 1));
				}
			}
			this.sPKRelation = "";
			this.sPKElement = "";
			this.sFixed = "";
			this.oFld = document.getElementById(psTableId);
			if (this.oFld != null) 
			{
				this.sPKRelation = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				this.sPKElement = this.sPKRelation;
				this.sFixed = (this.oFld.getAttribute("fixed") != null) ? this.oFld.getAttribute("fixed") : "";
				if (this.sFixed == "true") 
				{
					this.sPKElement = "";
				}
			}
			if (this.oNds[0] != null) 
			{
				this.sHDscr = "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'>";
				this.sHFBdy = "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'>";
				this.sHCnt = "<table border='0' cellspacing='1' cellpadding='1' class='iftabfundocinza'>";
				this.iBGColor = -1;
				for (var iX = 0; iX < 2; iX++) 
				{
					this.oNds = null;
					switch(iX)
					{
						case 0:
							
							if(vwGeneNoSeleGr_jsu == false)
							{
								this.oNds = this.init.oXGr.selectNodes("root/" + psTableId + "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']/row");
							}
							else
							{
								this.oNds = this.init.oXGr.selectNodes("root/" + psTableId + "/row");
							}
							vwGeneNoSeleGr_jsu = false;	
							break;
						case 1:
							this.oNds = this.init.oXDt.selectNodes("root/" + psTableId + "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']/row[@status!='srv_upd' and @status!='srv_del' and @status!='sel_del']");
							break;
					}
					if (this.oNds[0] != null)
					{
						for (var iR = 0; iR < this.oNds.length; iR++) 
						{
							this.sStts = (this.oNds[iR].getAttribute("status") != null) ? this.oNds[iR].getAttribute("status") : "";
							this.iLn = (this.oNds[iR].getAttribute("line") != null) ? this.oNds[iR].getAttribute("line") : "";
							this.sKeys = "";
							this.iBGColor++;
							this.sHDscr += "<tr>";
							this.sHFBdy += "<tr>";
							this.sHCnt += "<tr>";
							
							if (this.bSelBt == "single") 
							{
								this.sHDscr += "<td nowrap align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>"
									+ "<input name='Chk' id='Chk' type='radio' onclick='Fu_RadioClick();' line='" + this.iLn + "' style='cursor:hand'" + ((this.sStts == "del") ? " disabled" : "") + " mark='false'>"
									+ "</td>";
								this.sHFBdy += "<td nowrap>"
									+ "<img src='" + this.sTransImg + "' border='0'>"
									+ "</td>";
								this.sHCnt += "<td nowrap>"
									+ "<img  src='" + this.sTransImg + "' border='0'>"
									+ "</td>";
							}
							if (this.bSelBt == "multiple") 
							{
								switch(this.tipogrid) 
								{
									case "CHECK_SELE":
										if(vwXML_NOTIN != '' && vwXML_NOTIN != null)
										{
											var vwChaveConc_Sele = '';
											var vwChaveConc_SeleN = '';
											var vwChave_Sele  = vwChave_NOTIN.split('|');
										
											for(var vwc=0;vwc<=vwChave_Sele.length-1;vwc++)
											{
												vwChaveConc_Sele += this.oNds[iR].selectSingleNode(vwChave_Sele[vwc]).getAttribute("value");
											}
									
											var vwEnc_NOTINT  = false;
										
											vwobjXML_NOTIN.loadXML(vwXML_NOTIN);
											
											if(vwobjXML_NOTIN.parseError == 0)
											{
												var vwNodes = vwobjXML_NOTIN.selectNodes('root/*/row')
												if(vwNodes!=null)
												{
													for(var vwI=0;vwI<=vwNodes.length-1;vwI++)
													{
														vwChaveConc_SeleN  = '';
														for(var vwc=0;vwc<=vwChave_Sele.length-1;vwc++)
														{
															vwChaveConc_SeleN += vwNodes[vwI].selectSingleNode(vwChave_Sele[vwc]).getAttribute("value");
														}
														
														
														if(vwChaveConc_SeleN == vwChaveConc_Sele )
														{
															vwEnc_NOTINT = true
															vwI  = vwNodes.length +1 
														}
														else
														{
															vwEnc_NOTINT = false
														}
													} 	
												} 	
											}
											if(vwEnc_NOTINT == false)
											{
												this.sHDscr += "<td nowrap  align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>"
												+ "<input id='Chk' type='checkbox' line='" + this.iLn + "'"  + " page='" + this.sPg + "' style='cursor:hand'" + ((this.sStts == "del") ? " disabled" : "") + " onclick='setCheck(this);' onkeypress='setCheck(this);' mark='false'>"
												+ "</td>";
											}
											else
											{
												this.sHDscr += "<td nowrap  align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>"
												+ "<input id='Chk' disabled='true' type='checkbox' line='" + this.iLn + "'"  + " page='" + this.sPg + "' style='cursor:hand'" + ((this.sStts == "del") ? " disabled" : "") + " onclick='setCheck(this);' onkeypress='setCheck(this);' mark='false'>"
												+ "</td>";
											}
										}
										else
										{
											this.sHDscr += "<td nowrap  align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>"
												+ "<input id='Chk' type='checkbox' line='" + this.iLn + "'"  + " page='" + this.sPg + "' style='cursor:hand'" + ((this.sStts == "del") ? " disabled" : "") + " onclick='setCheck(this);' onkeypress='setCheck(this);' mark='false'>"
												+ "</td>";
										} 	
										break;
									default:
										this.sHDscr += "<td nowrap  align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>"
										+ "<input id='Chk' type='checkbox' line='" + this.iLn + "'"  + " page='" + this.sPg + "' style='cursor:hand'" + ((this.sStts == "del") ? " disabled" : "") + " onclick='setCheck(this);' onkeypress='setCheck(this);' mark='false'>"
										+ "</td>";
										break;
								}			

								this.sHFBdy += "<td nowrap>"
									+ "<img src='" + this.sTransImg + "' border='0'>"
									+ "</td>";
								this.sHCnt += "<td nowrap>"
									+ "<img  src='" + this.sTransImg + "' border='0'>"
									+ "</td>";
							}
							
							
							if (this.bEdtBt == "true" && this.bEdtDet == "false") 
							{
								
								this.sHDscr += "<td nowrap align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>";
								if (this.sStts == "del") 
								{
									this.sHDscr += "<img src='" + this.sTransImg + "' width='24' border='0'>";
								}
								else
								{
									if (this.bEdtBt == "true" && this.bDelBt == "false") 
									{
										if (this.bSelBt != "multiple") 
										{
											this.sHDscr += "<img src='" + this.sTransImg + "' width='14' border='0'>";
											}
									}
									this.sHDscr += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_edit.gif'"
										+ " border='0' style='cursor:hand'"
										+ " onclick='editGrid(this);' line='" + this.iLn + "' alt='Editar'>";
									if (this.bEdtBt == "true" && this.bDelBt == "false") 
									{
										if (this.bSelBt != "multiple") 
										{
											this.sHDscr += "<img src='" + this.sTransImg + "' width='14' border='0'>";
										}
									}
								}
								this.sHDscr += "</td>";
								
								this.sHFBdy += "<td nowrap>";
								this.sHCnt  += "<td nowrap>";
								
								if (this.bEdtBt == "true" && this.bDelBt == "false")
								{
									if (this.bSelBt != "multiple") {
										this.sHFBdy += "<img src='" + this.sTransImg + "' width='14' border='0'>";
										this.sHCnt += "<img src='" + this.sTransImg + "' width='14' border='0'>";
										}
								}
								
								this.sHFBdy += "<img src='" + this.sTransImg + "' border='0'>";
								this.sHCnt += "<img src='" + this.sTransImg + "' border='0'>";
								
								if (this.bEdtBt == "true" && this.bDelBt == "false") 
								{
									if (this.bSelBt != "multiple") {
										this.sHFBdy += "<img src='" + this.sTransImg + "' width='15' border='0'>";
										this.sHCnt += "<img src='" + this.sTransImg + "' width='15' border='0'>";
										}
								}
								
								this.sHFBdy += "</td>";
								this.sHCnt += "</td>";
							}
							
							if (this.bEdtBt == "true" && this.bEdtDet == "true")
							{
								
								this.sHDscr += "<td nowrap align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>";
								if (this.sStts == "del") 
								{
									this.sHDscr += "<img src='" + this.sTransImg + "' width='24' border='0'>";
								}
								else
								{
									if (this.bEdtBt == "true" && this.bDelBt == "false" && this.BotaoEspecial =='false')
									{
										this.sHDscr += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									}

									this.sHDscr += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_edit.gif'"
										+ " border='0' style='cursor:hand'"
										+ " onclick='linkedGrid(this);' line='" + this.iLn + "' alt='Editar'>";
										
									if (this.bEdtBt == "true" && this.bDelBt == "false" && this.BotaoEspecial == 'false')
									{
										this.sHDscr += "<img  src='" + this.sTransImg + "' width='15' border='0'>";
									}
								}
								this.sHDscr += "</td>";
								
								this.sHFBdy += "<td nowrap>";
								this.sHCnt += "<td nowrap>";
								
								if (this.bEdtBt == "true" && this.bDelBt == "false" && this.BotaoEspecial == 'false') 
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								this.sHFBdy += "<img  src='" + this.sTransImg + "' border='0'>";
								this.sHCnt += "<img    src='" + this.sTransImg + "' border='0'>";
								
								if (this.bEdtBt == "true" && this.bDelBt == "false" && this.BotaoEspecial == 'false') 
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='15' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='15' border='0'>";
								}
								
								this.sHFBdy += "</td>";
								this.sHCnt += "</td>";
							}
							
							if (this.bDelBt == "true")
							{
								
								this.sHDscr += "<td nowrap align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>";
								if (this.sStts == "del") 
								{
									if (this.bEdtBt == "false" && this.bInsBt == "true") 
									{
										this.sHDscr += "<img src='" + this.sTransImg + "' width='14' border='0'>";
									}
									this.sHDscr += "<img src='" + this.sTransImg + "' width='24' border='0'>";
									if (this.bEdtBt == "false" && this.bInsBt == "true") 
									{
										this.sHDscr += "<img src='" + this.sTransImg + "' width='15' border='0'>";
									}
								}
								else 
								{
									if (this.bEdtBt == "false" && this.bInsBt == "true") 
									{
										this.sHDscr += "<img src='" + this.sTransImg + "' width='14' border='0'>";
									}
									
									switch(this.tipogrid) 
									{
										case "CHECK":
											var vwChaveConc = ''; 
											
											for(var vwc=0;vwc<=vwChave.length-1;vwc++)
											{
												
												vwChaveConc += this.oNds[iR].selectSingleNode(vwChave[vwc]).getAttribute("value");
											}
											this.sHDscr += "<img src='" + this.sTransImg + "' width='14' border='0'>";
											this.sHDscr += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_excl.gif'"
											+ " border='0' style='cursor:hand'"
											+ " onclick='deleteGridCheck(this);'" 
											+ "line='" 	+ this.iLn + "' chave='" +  vwChaveConc   +  "' formsele='" + this.gridsele +   "' alt='Excluir da sele��o'>";
											break;
										default:
											if (this.bDelBt == "true" && this.bEdtBt == "false" && this.BotaoEspecial =='false')
											{
												this.sHDscr += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
											}
											
											this.sHDscr += "<img src='" + "images_home/img_display/img_botoes/ultr_icon_excl.gif'"
											+ " border='0' style='cursor:hand'"
											+ " onclick='cancelGrid();deleteGrid(this);main(\""+psTableId+"_local_del\");' line='" + this.iLn + "' alt='Excluir'>";

											if (this.bDelBt == "true" && this.bEdtBt == "false" && this.BotaoEspecial =='false')
											{
												this.sHDscr += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
											}

											break;
									}
									if (this.bEdtBt == "false" && this.bInsBt == "true") 
									{
										this.sHDscr += "<img src='" + this.sTransImg + "' width='15' border='0'>";
									}
								}
								this.sHDscr += "</td>";
								this.sHFBdy += "<td nowrap>";
								this.sHCnt += "<td nowrap>";
								
								if (this.bEdtBt == "false" && this.bInsBt == "true") 
								{
									this.sHFBdy += "<img src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								if (this.bDelBt == "true" && this.bEdtBt == "false" && this.BotaoEspecial == 'false') 
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								this.sHFBdy += "<img src='" + this.sTransImg + "' border='0'>";
								this.sHCnt += "<img  src='" + this.sTransImg + "' border='0'>";
								
								if (this.bDelBt == "true" && this.bEdtBt == "false" && this.BotaoEspecial == 'false') 
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								if (this.bEdtBt == "false" && this.bInsBt == "true") {
									this.sHFBdy += "<img src='" + this.sTransImg + "' width='15' border='0'>";
									this.sHCnt += "<img  src='" + this.sTransImg + "' width='15' border='0'>";
								}
								this.sHFBdy += "</td>";
								this.sHCnt += "</td>";
							}
							
							if (this.BotaoEspecial == "true")
							{	
								this.sHDscr += "<td nowrap align='center' valign='middle' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'>";

								if (this.bDelBt == "false" && this.bEdtBt == "false")
								{
									this.sHDscr += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								this.sHDscr += "<img src='" + "images_home/img_display/img_botoes/" +  this.ImgBotaoEspecial + "'"
								+ " border='0' style='cursor:hand'"
								+ " onclick='Fu_DireBotaoEspecial(this);' maincase='"  +  this.MainCaseBotaoEspecial   +  "' form='" + psTableId  +  "' page='"  + this.sPg  +  "' line='" + this.iLn + "' alt='" +  this.ToolTipoBotaoEspecial + "'>";
								
								if (this.bDelBt == "false" && this.bEdtBt == "false")
								{
									this.sHDscr += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								this.sHDscr += "</td>";
								
								this.sHFBdy += "<td nowrap>";
								this.sHCnt += "<td nowrap>";
								
								if (this.bEdtBt == "false" && this.bInsBt == "true") 
								{
									this.sHFBdy += "<img src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								if (this.bDelBt == "false" && this.bEdtBt == "false")
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								this.sHFBdy += "<img src='" + this.sTransImg + "' border='0'>";
								this.sHCnt += "<img  src='" + this.sTransImg + "' border='0'>";
								
								if (this.bDelBt == "false" && this.bEdtBt == "false")
								{
									this.sHFBdy += "<img  src='" + this.sTransImg + "' width='14' border='0'>";
									this.sHCnt += "<img   src='" + this.sTransImg + "' width='14' border='0'>";
								}
								
								if (this.bEdtBt == "false" && this.bInsBt == "true") {
									this.sHFBdy += "<img src='" + this.sTransImg + "' width='15' border='0'>";
									this.sHCnt += "<img  src='" + this.sTransImg + "' width='15' border='0'>";
								}
								this.sHFBdy += "</td>";
								this.sHCnt += "</td>";
								
							}
							this.oElmnts = this.init.oXD.selectNodes("root/" + psTableId + "/row/*[@index!='']");
							if (this.oElmnts[0] != null) 
							{
								this.iPos = 0;
								for (var iC = 0; iC < this.oElmnts.length; iC++) {
									this.oNd = this.init.oXD.selectSingleNode("root/" + psTableId + "/row/*[@index='" + iC + "']");
									if (this.oNd != null) 
									{
										this.oElmnt = this.oNds[iR].getElementsByTagName(this.oNd.nodeName)[0];
										if (this.oElmnt != null) {
											this.sTipo = "";
											this.sPK = (this.oElmnt.getAttribute("pk") != null) ? this.oElmnt.getAttribute("pk") : "";
											if (this.sHidFlds != "") 
											{
												if (("|" + this.sHidFlds + "|").indexOf("|" + this.oElmnt.nodeName + "|") != -1) {
													this.sPK = "";
												}
											}
											if (this.sPK == "true") 
											{
												this.sKeys += (this.sKeys != "") ? ("|" + this.oElmnt.nodeName) : this.oElmnt.nodeName;
												this.oExist = this.init.oXD.selectSingleNode("root/" + psTableId + "/row/" + this.oElmnt.nodeName);
												if (this.oExist != null) 
												{
													this.sPK = "false";
												}
											}
											this.sVl = (this.oElmnt.getAttribute("value") != null) ? unescape(this.oElmnt.getAttribute("value")) : "";
											if (("|" + this.sKeys + "|").indexOf("|" + this.oElmnt.nodeName + "|") != -1) {
												this.sKeys += "(" + this.sVl + ")";
											}
											if (this.sPK == "false") 
											{
												this.sAlign = "left";
												this.oAlign = this.init.oXD.selectSingleNode("root/" + psTableId + "/row/" + this.oElmnt.nodeName + "[@align!='']");
												if (this.oAlign != null) 
												{
													this.sAlign = (this.oAlign.getAttribute("align") != null) ? this.oAlign.getAttribute("align") : "left";
												}
												if (this.sFlds.split("|")[iC] != null) {
													this.sTipo = this.sFlds.split("|")[iC];
													this.iPos++;
												}
												switch(this.sTipo) 
												{
													case "chk":
														this.sChecked = "";
														this.oChecked = this.init.oXD.selectSingleNode("root/" + psTableId + "/row/" + this.oElmnt.nodeName);
														if (this.oChecked != null) {
															this.sTipo = (this.oChecked.getAttribute("tipo") != null) ? this.oChecked.getAttribute("tipo") : "";
															this.sParameter = this.sTipo.substring((this.sTipo.indexOf("(") + 1),this.sTipo.lastIndexOf(")"));
															if (this.sVl == this.sParameter.split("::")[0]) 
															{
																this.sChecked = " checked";
															}
														}
														this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "' align='" + this.sAlign + "' nowrap>&nbsp;"
															+ "<input type='checkbox'" + this.sChecked + " disabled>"
															+ "&nbsp;</td>";
														if (this.iPos < (this.iFixed + 1)) 
														{
															this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "' align='" + this.sAlign + "' nowrap>&nbsp;"
																+ "<input type='checkbox'" + this.sChecked + " disabled>"
																+ "&nbsp;</td>";
														}
														break;
													case "rad":
														this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "' align='" + this.sAlign + "' nowrap>&nbsp;"
															+ "<input type='radio'" + ((this.sVl != "") ? " checked" : "") + " disabled>"
															+ "&nbsp;</td>";
														if (this.iPos < (this.iFixed + 1)) {
															this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "' align='" + this.sAlign + "' nowrap>&nbsp;"
																+ "<input type='radio'" + ((this.sVl != "") ? " checked" : "") + " disabled>"
																+ "&nbsp;</td>";
														}
														break;
													default:
														
														if(this.sTipo == 'ins')
														{
															var vwNewValue  =  new String();
															var vwPosDec    =  0;
															vwNewValue  = this.sVl;  
															vwPosDec	= vwNewValue.indexOf(",",0);
															vwNewValue  = vwNewValue.substr(0,vwPosDec);
															this.sVl    = vwNewValue;
														}
														
														
														    if (this.iPos == (this.iIndex + 1) && this.bEdtDet == "false") 
														    {
														        if (this.oElmnt.nodeName == "dsidentificador" && psTableId == "frm_pesquisaDnit" )
														        {
														            this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " align='" + this.sAlign + "' nowrap><img src='" + "images_dnit/" + this.sVl + ".png' width='180' border='0'></td>"
														        }
														        else
														        {
															        this.sHCnt += "<td id='coluna_" + this.iLn + "' class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)] + "' onclick='linkedGrid(this)' style='cursor:hand;text-decoration:underline") + "' line='" + this.iLn + "' align='" + this.sAlign + "' sublinha='' nowrap >&nbsp;" + this.sVl + "&nbsp;</td>";
															    }
															    if (this.iPos < (this.iFixed + 1)) 
															    {
																    this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)] + "' onclick='linkedGrid(this)' style='cursor:hand;text-decoration:underline") + "' line='" + this.iLn + "' align='" + this.sAlign + "' nowrap>&nbsp;" + this.sVl + "&nbsp;</td>";
															    }
														    }
														    else 
														    {
														        if (this.oElmnt.nodeName == "dsidentificador" && psTableId == "frm_pesquisaDnit" )
														        {
														            this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " align='" + this.sAlign + "' nowrap><img src='" + "images_dnit/" + this.sVl + ".png' width='180' border='0'></td>"
														        }
														        else
														        {
															        this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " align='" + this.sAlign + "' nowrap>&nbsp;" + this.sVl + "&nbsp;</td>";
															    }    
														    if (this.iPos < (this.iFixed + 1)) 
															    {
																    this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " align='" + this.sAlign + "' nowrap>&nbsp;" + this.sVl + "&nbsp;</td>";
															    }
														    }
														
														break;
												}
											}
										}
										else
										{
											this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " nowrap>&nbsp;</td>";
											if (this.iPos < (this.iFixed + 1)) 
											{
												this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " nowrap>&nbsp;</td>";
											}
										}
									}
									else
									{
										this.sHCnt += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " nowrap>&nbsp;</td>";
										if (this.iPos < (this.iFixed + 1)) 
										{
											this.sHFBdy += "<td class='" + ((this.sStts == "del") ? this.asBGC[2] : this.asBGC[(this.iBGColor%2)]) + "'" + " nowrap>&nbsp;</td>";
										}
									}
								}
							}
							if (this.bSelBt == "single" || this.bSelBt == "multiple") 
							{
								if (this.sPKRelation != "" && this.sFixed == "true" && this.sKeys != "") {
									this.bKeys = false;
									this.asKeys = this.sKeys.split("|");
									this.oRws = this.init.oXGr.selectNodes("root/" + psTableId + "[@pk=\"" + this.sPKRelation + "\"]/row");
									for (var iG = 0; iG < this.oRws.length; iG++) {
										this.bFnd = true;
										this.iLn = (this.oRws[iG].getAttribute("line") != null) ? this.oRws[iG].getAttribute("line") : "";
										for (var iK = 0; iK < this.asKeys.length; iK++) {
											this.sFld = this.asKeys[iK].substring(0,this.asKeys[iK].lastIndexOf("("));
											this.sVl = unescape(this.asKeys[iK].substring(this.asKeys[iK].lastIndexOf("(") + 1,this.asKeys[iK].lastIndexOf(")")));
											this.oCl = this.init.oXGr.selectSingleNode("root/" + psTableId + "[@pk=\"" + this.sPKRelation + "\"]/row[@line='" + this.iLn + "']/" + this.sFld + "[@value='" + escape(this.sVl) + "']");
											if (this.oCl == null) 
											{
												this.bFnd = false;
												break;
											}
										}
										if (this.bFnd) {
											this.bKeys = true;
											break;
										}										
									}
									if (this.bKeys) 
									{
										this.sHDscr = this.sHDscr.substring(0,this.sHDscr.lastIndexOf("mark") + 6) + 'true' + this.sHDscr.substring(this.sHDscr.lastIndexOf("mark") + 11,this.sHDscr.length)
									}
								}
							}
							this.sHDscr += "</tr>";
							this.sHFBdy += "</tr>";
							this.sHCnt += "</tr>";
						}
					}
				}
				this.sHDscr += "</table>";
				this.sHFBdy += "</table>";
				this.sHCnt += "</table>";
			}
			
			if (this.sHCnt != "") 
			{
				for (var iF = 0; iF < document.getElementsByTagName("IFRAME").length; iF++) 
				{
					if (document.getElementsByTagName("IFRAME")[iF].getAttribute("id") == psTableId) 
					{
						self.frames[iF].addGridHtml(1,this.sHCnt);
						self.frames[iF].addGridHtml(2,this.sHFBdy);
						
						if (this.bEdtBt == "true" || this.bDelBt == "true" || this.bSelBt != "" || this.BotaoEspecial =="true") 
						{
							self.frames[iF].addGridHtml(3,this.sHDscr);
							self.frames[iF].check();
						}
						eval("self.frames[" + iF + "].repositionBody(" + this.bEdtBt + "," + this.bDelBt + ",'" + this.bSelBt + "'," + this.BotaoEspecial + ")");
						break;
					}
				}
			}
			this.createTableFooter(psTableId);
		}
		this.sTransImg = null;
		this.asBGC = null;
		this.sHDscr = null;
		this.sHFBdy = null;
		this.sHCnt = null;
		this.oNd = null;
		this.sPg = null;
		this.bEdtBt = null;
		this.bDelBt = null;
		this.bInsBt = null;
		this.bSelBt = null;
		this.bEdtDet = null;
		this.sHidFlds = null;
		this.sPK = null;
		this.iIndex = null;
		this.iFixed = null;
		this.sFlds = null;
		this.oNds = null;
		this.sTipo = null;
		this.sPKElement = null;
		this.sFixed = null;
		this.oFld = null;
		this.sHDscr = null;
		this.sHFBdy = null;
		this.sHCnt = null;
		this.iBGColor = null;
		this.sStts = null;
		this.iLn = null;
		this.sKeys = null;
		this.oElmnts = null;
		this.iPos = null;
		this.oElmnt = null;
		this.sAlign = null;
		this.oAlign = null;
		this.sVl = null;
		this.sChecked = null;
		this.oChecked = null;
		this.sParameter = null;
		this.bKeys = null;
		this.asKeys = null;
		this.oRws = null;
		this.sFld = null;
		this.oCl = null;
}
UltraCargo.prototype.getSequence = function(psTableId) {
		this.iSequence = 999999;
		this.oSequences = this.init.oXGr.selectNodes("root/" + psTableId + "/row");
		if (this.oSequences != null) {
			for (var iS = 0; iS < this.oSequences.length; iS++) {
				this.oSequence = this.oSequences[iS];
				this.iLn = this.oSequence.getAttribute("line");
				if (this.iSequence <= Math.floor(this.iLn)) {
					this.iSequence = Math.floor(this.iLn);
				}
			}
		}
		this.oSequences = this.init.oXDt.selectNodes("root/" + psTableId + "/row");
		if (this.oSequences != null) {
			for (var iS = 0; iS < this.oSequences.length; iS++) {
				this.oSequence = this.oSequences[iS];
				this.iLn = this.oSequence.getAttribute("line");
				if (this.iSequence <= Math.floor(this.iLn)) {
					this.iSequence = Math.floor(this.iLn);
				}
			}
		}
		return (this.iSequence + 1);

		this.iSequence = null;
		this.oSequences = null;
		this.oSequence = null;
		this.iLn = null;

}

UltraCargo.prototype.terminateTable = function() {
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
		
		this.grid.BotaoEspecial			= false;
		this.grid.ImgBotaoEspecial		= "";
		this.grid.MainCaseBotaoEspecial = "";
		this.grid.ToolTipoBotaoEspecial = "";

}

UltraCargo.prototype.combo = function() 
{
		this.combo.from = "";
		this.combo.to = "";
		this.combo.grid = false;
		this.combo.operation = "";
		this.combo.valueFields = "";
		this.combo.descriptionFields = "";
		this.combo.fieldSeparator = " ";
		this.combo.autosele = false; 
		this.combo.forceXmlToSend = "";

}

UltraCargo.prototype.validateCombo = function() 
{
	var vwTipoErro;
	try {
		this.bValidate = true;
		this.combo.from = (this.combo.from != undefined) ? this.combo.from : "";
		this.combo.to = (this.combo.to != undefined) ? this.combo.to : "";
		this.combo.grid = (this.combo.grid != undefined) ? (this.combo.grid == true) ? true : false : false;
		this.combo.operation = (this.combo.operation != undefined) ? this.combo.operation : "";
		this.combo.valueFields = (this.combo.valueFields != undefined) ? this.combo.valueFields : "";
		this.combo.descriptionFields = (this.combo.descriptionFields != undefined) ? this.combo.descriptionFields : "";
		this.combo.fieldSeparator = (this.combo.fieldSeparator != undefined) ? this.combo.fieldSeparator : " ";
		this.combo.autosele = (this.combo.autosele != undefined) ? (this.combo.autosele == true) ? true : false : false;
		this.combo.forceXmlToSend = (this.combo.autosele != undefined) ? this.combo.forceXmlToSend : "";
		
		if (this.combo.from == "") {
			this.bValidate = false;
		}
		else if (this.combo.from.indexOf(".") == -1) {
			this.bValidate = false;
		}
		else if (this.combo.operation == "") {
			this.bValidate = false;
		}
		else if (this.combo.valueFields == "") {
			this.bValidate = false;
		}
		else if (this.combo.descriptionFields == "") {
			this.bValidate = false;
		}
		else if (this.combo.grid  == true && this.combo.autosele == true) 
		{
			vwTipoErro = 'GA'
			this.bValidate = false;
		}
		if (!this.bValidate)
		{
			if(vwTipoErro == 'GA')
			{
				throw "Desenvolvedor, o recurdo de auto selecionar s� est� dispon�vel para combo que n�o pertencem a Grid=" + this.combo.from;
			}
			else
			{
				throw "Verifique se todos os atributos foram informados.";
			} 	
		}
		return true;
	}
	catch(oException) {
		this.exception(oException,"UltraCargo[validateCombo]");
		return false;
	}
	finally {
		this.bValidate = null;
	}
}

UltraCargo.prototype.verifyExpiredSession = function() 
{
	this.init.sLoginAtu = this.getSession("idUsuario");
	
	if (this.shwSessionMsg){
		return true;
	}
	
	if ((this.doVerifySession) && (this.init.sLoginAtu  == '' || this.init.sLoginAtu == null)) 
	{
		msgBox("Sua sess�o expirou, por favor realize o Login novamente.")
		this.shwSessionMsg = true;
		return true;
	}
	return false;
}

UltraCargo.prototype.fillCombo = function() 
{
		/* COMENTADO PARA SIMULACAO FABIO
		if (this.verifyExpiredSession()){
			return;
		}*/
		
		this.sResp = (arguments[0] != null) ? arguments[0] : "";
		var vwNodeComplemento  =  (arguments[1] != null) ? arguments[1] : "";
		 
		
		if (this.validateCombo()) 
		{
			this.oFrmFrom = document.getElementById(this.combo.from.split(".")[0]);
			if (this.combo.grid) 
			{
				this.oFras = document.getElementsByTagName("IFRAME");
				this.oCboFrom = null;
				for (var iF = 0; iF < this.oFras.length; iF++) 
				{
					this.oFra = this.oFras[iF];
					this.sFraId = (this.oFra.getAttribute("id") != null) ? this.oFra.getAttribute("id") : "";
					if (this.sFraId == this.combo.from.split(".")[0]) 
					{
						this.oFrmFrom = self.frames[iF].document.forms[0];
					}
				}
			}
			if (this.oFrmFrom != null) 
			{
				this.oCboFrom = this.oFrmFrom.elements[this.combo.from.split(".")[1]];
				this.oFld = this.oFrmFrom.elements[this.combo.from.split(".")[1]];
				this.oCboTo = null;
				if (!this.combo.grid) 
				{
					if (this.combo.to.indexOf(".") != -1) 
					{
						this.oFrmTo = document.getElementById(this.combo.to.split(".")[0]);
						if (this.oFrmTo != null) 
						{
							this.oCboTo = this.oFrmTo.item(this.combo.to.split(".")[1]);
							if (this.oCboTo.tagName == "SELECT") 
							{
								this.oFld = this.oFrmTo.item(this.combo.to.split(".")[1]);
							}
						}
					}
				}
				if (this.oCboFrom != null) 
				{
					if (this.oCboFrom.tagName == "SELECT") 
					{
						this.oXD = new XMLHttpRequest()
						if (this.sResp != "") 
						{
							this.oXD.loadXML(this.sResp);
						}
						//TODO: FABIO - CHECK XML VIA PARSER
						//if (this.sResp == "" || this.oXD.parseError != 0) 
						if (this.sResp == "") 
						{
							this.oXD.loadXML("<root/>");
							this.oRoot = this.oXD.document.documentElement;
							this.oNd = this.oXD.createNode(1,this.combo.from.split(".")[0],"");
							this.oNd.setAttribute("tipo","table");
							if (this.oCboFrom.type == "select-one") {
								this.oElmnt = this.oXD.createNode(1,this.combo.from.split(".")[1],"");
								this.oElmnt.setAttribute("value",this.oCboFrom.getAttribute("value"));
								this.oNd.appendChild(this.oElmnt);
							}
							else {
								this.bSelected = false;
								for (var iC = 0; iC < this.oCboFrom.length; iC++) {
									if (this.oCboFrom[iC].selected) {
										this.oElmnt = this.oXD.createNode(1,this.combo.from.split(".")[1],"");
										this.oElmnt.setAttribute("value",this.oCboFrom.value);
										this.oNd.appendChild(this.oElmnt);
										this.bSelected = true;
									}
								}
								if (!this.bSelected) 
								{
									this.oElmnt = this.oXD.createNode(1,this.combo.from.split(".")[1],"");
									this.oElmnt.setAttribute("value","");
									this.oNd.appendChild(this.oElmnt);
								}
							}
							this.oElmnt = this.oXD.selectSingleNode("//loginatu");
							if (this.oElmnt == null) 
							{
								this.oElmnt = this.oXD.createNode(1,"loginatu","");
								this.oElmnt.setAttribute("value",this.init.sLoginAtu);
								this.oNd.appendChild(this.oElmnt);
								this.oElmnt = this.oXD.createNode(1,"loginentidade","");
								this.oElmnt.setAttribute("value",this.init.sIdEntidade);
								this.oNd.appendChild(this.oElmnt);
								this.oElmnt = this.oXD.createNode(1,"loginfilial","");
								this.oElmnt.setAttribute("value",this.init.sIdFilial);
								this.oNd.appendChild(this.oElmnt);
							}
							
							if(vwNodeComplemento != '')
							{
								var vwNode			=   vwNodeComplemento.split('|')[0]  
								var vwValorNode		=   vwNodeComplemento.split('|')[1]  
								this.oElmnt = this.oXD.createNode(1,vwNode,"");
								this.oElmnt.setAttribute("value",vwValorNode);
								this.oNd.appendChild(this.oElmnt);
							} 
							
							this.oNds = this.init.oXD.selectNodes("root/" + this.combo.from.split(".")[0] + "/*[@operation!='']");
							if (this.oNds[0] != null) 
							{
								for (var iC = 0; iC < this.oNds.length; iC++) 
								{
									this.sOper = (this.oNds[iC].getAttribute("operation") != null) ? this.oNds[iC].getAttribute("operation") : "";
									if (this.sOper.indexOf(this.combo.operation) != -1) 
									{
										this.oElmnt = document.getElementById(this.combo.from.split(".")[0]);
										this.sVl = "";
										if (this.oElmnt != null) 
										{
											if (this.oElmnt.elements[this.oNds[iC].nodeName] != null) 
											{
												this.sVl = (this.oElmnt.elements[(this.oNds[iC].nodeName)].value != null) ? this.oElmnt.elements[this.oNds[iC].nodeName].value : "";
											}
										}
										this.oElmnt = this.oXD.createNode(1,this.oNds[iC].nodeName,"");
										this.oElmnt.setAttribute("value",this.sVl);
										this.oNd.appendChild(this.oElmnt);
									}
								}
							}
							this.oRoot.appendChild(this.oNd);
							
							this.oNd = this.oXD.createNode(1,"operation","");
							this.oNd.setAttribute("value",this.combo.operation);
							this.oRoot.appendChild(this.oNd);
							
							this.sResp = this.oXD.xml();
							this.oXHttp = new XMLHttpRequest();
							this.oXHttp.open("POST",this.processPage(),false);
							
							if(this.combo.forceXmlToSend == "" || this.combo.forceXmlToSend == undefined){this.sResp = this.oXD.xml();}
							else{this.sResp = this.combo.forceXmlToSend;}
							this.oXHttp.send(this.sResp.replace(/%20/g," "));
							while(this.oXHttp.readyState != 4) {
								continue;

							}

							this.sResp = this.oXHttp.responseText;
							this.oXD.loadXML(this.checkStringValue(this.sResp));
						}
						//TODO: FABIO - CHECK XML VIA PARSER
						if (true) 
						{
							this.init.sXml = this.sResp;
							this.addAttribute(1,"root/" + this.combo.from.split(".")[0] + "/" + this.combo.from.split(".")[1],
								"fields",this.combo.valueFields);
							this.oNd = this.init.oXD.selectSingleNode("root/" + this.combo.from.split(".")[0] + "/" + this.combo.from.split(".")[1]);
							this.oNds = this.init.oXD.selectNodes("root/" + this.combo.from.split(".")[0] + "/" + this.combo.from.split(".")[1] + "/*");
							for (var iR = 0; iR < this.oNds.length; iR++) 
							{
								this.oNd.removeChild(this.oNds[iR]);
								
							}
							this.oFld.options.length = 0;
							if (this.oCboFrom.getAttribute("type") == "select-one") {
								this.oFld[(this.oFld.length)] = new Option("","");
							}
							this.oNd = this.oXD.selectSingleNode("root/*");
							this.sNodeName = this.combo.from.split(".")[0];
							if (this.oNd != null) {
								this.combo.from = this.oNd.nodeName + "." + this.combo.from.split(".")[1];
							}
							this.oNds = this.oXD.selectNodes("root/" + this.combo.from.split(".")[0] + "/row");
							for (var iR = 0; iR < this.oNds.length; iR++) 
							{
								this.sCboVl = "";
								this.sCboDescr = "";
								for (var iC = 0; iC < this.combo.valueFields.split("|").length; iC++) {
									this.sField = this.combo.valueFields.split("|")[iC];
									if (this.sField != "") 
									{
										this.oNd = this.oXD.selectNodes("root/" + this.combo.from.split(".")[0] + "/row/" + this.sField);
										if (this.oNd[iR] != null) {
											this.sVl = (this.oNd[iR].getAttribute("value") != null) ? this.oNd[iR].getAttribute("value") : "";
											this.sCboVl += ((this.sCboVl != "") ? "|" : "") + unescape(this.sVl);
										}
									}
								}
								for (var iC = 0; iC < this.combo.descriptionFields.split("|").length; iC++) {
									this.sField = this.combo.descriptionFields.split("|")[iC];
									if (this.sField != "") {
										this.oNd = this.oXD.selectNodes("root/" + this.combo.from.split(".")[0] + "/row/" + this.sField);
										if (this.oNd[iR] != null) {
											this.sVl = (this.oNd[iR].getAttribute("value") != null) ? this.oNd[iR].getAttribute("value") : "";
											this.sCboDescr += ((this.sCboDescr != "") ? this.combo.fieldSeparator : "") + unescape(this.sVl);
										}
									}
								}
								this.oFld[(this.oFld.length)] = new Option(this.sCboDescr,this.sCboVl);
								if (!this.combo.grid)
								{
									this.createNode(1,"option","root/" + this.sNodeName + "/" + this.combo.from.split(".")[1],this.sCboDescr,
										"value",escape(unescape(this.sCboVl)),
										"selected","false");
								}
							}
						}
						else 
						{
							this.init.sXml = "<root></root>";
						}
					}
				}
			}
			if (!this.combo.grid && this.combo.autosele == true)
			{
				if(this.oCboFrom.length == 2)
				{
					this.oCboFrom.selectedIndex  = 1; 
				}
			}
		}
		this.terminateCombo();
		if (this.oXD != null) 
		{
			return this.oXD.xml();
		}

		this.sResp = null;
		this.oFrmFrom = null;
		this.oFras = null;
		this.oCboFrom = null;
		this.oFra = null;
		this.sFraId = null;
		this.oFld = null;
		this.oCboTo = null;
		this.oFrmTo = null;
		this.oXD = null;
		this.oRoot = null;
		this.oNd = null;
		this.oElmnt = null;
		this.bSelected = null;
		this.sOper = null;
		this.sVl = null;
		this.oXHttp = null;
		this.oNds = null;
		this.sNodeName = null;
		this.sCboVl = null;
		this.sCboDescr = null;
		this.sField = null;
}

UltraCargo.prototype.linkCombo = function() {
		this.sLinkComboFrom = (arguments[0] != null) ? arguments[0] : "";
		this.sLinkComboTo = (arguments[1] != null) ? arguments[1] : "";
		this.init.bFillAllItens = (this.init.bFillAllItens != undefined) ? (this.init.bFillAllItens == true) ? true : false : false;
		if (this.sLinkComboFrom.indexOf(".") != -1 && this.sLinkComboTo.indexOf(".") != -1) {
			this.oFrmFrom = document.getElementById(this.sLinkComboFrom.split(".")[0]);
			this.oCboFrom = null;
			if (this.oFrmFrom != null) {
				this.oCboFrom = this.oFrmFrom.item(this.sLinkComboFrom.split(".")[1]);
			}
			this.oFrmTo = document.getElementById(this.sLinkComboTo.split(".")[0]);
			this.oCboTo = null;
			if (this.oFrmTo != null) {
				this.oCboTo = this.oFrmTo.item(this.sLinkComboTo.split(".")[1]);
			}
			if (this.oCboFrom != null && this.oCboTo != null) {
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.sLinkComboFrom.split(".")[0] + "/" + this.sLinkComboFrom.split(".")[1]);
				this.sFldsFrom = "";
				if (this.oNd != null) {
					this.sFldsFrom = (this.oNd.getAttribute("fields") != null) ? this.oNd.getAttribute("fields") : "";
				}
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.sLinkComboTo.split(".")[0] + "/" + this.sLinkComboTo.split(".")[1]);
				this.sFldsTo = "";
				if (this.oNd != null) {
					this.sFldsTo = (this.oNd.getAttribute("fields") != null) ? this.oNd.getAttribute("fields") : "";
				}
				if (this.sFldsFrom != "" && this.sFldsTo != "") {
					this.sSelectedItens = "";
					for (var iF = 0; iF < this.oCboFrom.length; iF++) {
						if (this.oCboFrom[iF].selected) {
							this.sSelectedItens += unescape(this.oCboFrom[iF].getAttribute("value")) + "|";
						}
					}
					if (this.sSelectedItens != "") {
						this.sSelectedItens = this.sSelectedItens.substring(0,(this.sSelectedItens.length - 1));
					}
					this.oCboTo.options.length = 0;
					this.oCboTo[(this.oCboTo.length)] = new Option("","");
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.sLinkComboTo.split(".")[0] + "/" + this.sLinkComboTo.split(".")[1]);
					if (this.oNd != null) {
						this.oNds = this.oNd.children;
						for (var iT = 0; iT < this.oNds.length; iT++) {
							this.sText = unescape(this.oNds[iT].text);
							this.sVl = (this.oNds[iT].getAttribute("value") != null) ? unescape(this.oNds[iT].getAttribute("value")) : "";
							if ((this.sSelectedItens == "" && this.init.bFillAllItens) || ("|" + this.sSelectedItens + "|").indexOf(this.sVl.split("|")[0]) != -1) {
								this.oCboTo[(this.oCboTo.length)] = new Option(this.sText,this.sVl);
							}
						}
					}
				}
			}
		}

		this.init.bFillAllItens = false;
		this.sLinkComboFrom = null;
		this.sLinkComboTo = null;
		this.oFrmFrom = null;
		this.oCboFrom = null;
		this.oFrmTo = null;
		this.oCboTo = null;
		this.oNd = null;
		this.sFldsFrom = null;
		this.sFldsTo = null;
		this.sSelectedItens = null;
		this.oNds = null;
		this.sText = null;
		this.sVl = null;
}

UltraCargo.prototype.terminateCombo = function() {
		this.combo.from = "";
		this.combo.to = "";
		this.combo.grid = false;
		this.combo.autosele = false; 
		this.combo.valueFields = "";
		this.combo.descriptionFields = "";
		this.combo.fieldSeparator = " ";
		this.combo.forceXmlToSend = "";

}

UltraCargo.prototype.formData = function(psXML) {
		this.oXD = new XMLHttpRequest()
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXD.selectSingleNode("root/operation");
			if (this.oNd != null) {
				this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
				this.oNd = this.oXD.selectSingleNode("root/*");
				if (this.oNd != null) {
					this.sFrmId = this.oNd.nodeName;
					this.oFrm = document.getElementById(this.sFrmId);
					if (this.oFrm != null) {
						this.sPK = (this.oNd.getAttribute("pk") != null) ? this.oNd.getAttribute("pk") : "";
						switch(this.sOper) {
							case "load":
								this.loadData(this.sFrmId);
								break;
							case "save":
								this.updateData(this.sFrmId);
								break;
						}
					}
				}
			}
		}

		this.oXD = null;
		this.oNd = null;
		this.sOper = null;
		this.sFrmId = null;
		this.oFrm = null;
		this.sPK = null;
}

UltraCargo.prototype.loadData = function() {
		this.asFra = new Array();
		this.sSpecificFormId = (arguments[0] != null) ? arguments[0] : "";
		for (var iF = 0; iF < document.forms.length; iF++) 
		{
			this.oFrm = document.forms[iF];
			this.sFrmId = (this.oFrm.getAttribute("id") != null) ? this.oFrm.getAttribute("id") : "";
			if ((this.sFrmId != "" && this.sSpecificFormId == "") || (this.sFrmId == this.sSpecificFormId)) 
			{
				this.sPK = (this.oFrm.getAttribute("pk") != null) ? this.oFrm.getAttribute("pk") : "";
				this.sXPath = "root/" + this.sFrmId + "[@pk=\"" + this.sPK + "\"]";
				this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
				
				if (this.oNd != null) {
					this.oElmnts = document.forms[iF].elements;
					for (var iE = 0; iE < this.oElmnts.length; iE++) {
						this.oElmnt = this.oElmnts[iE];
						this.sElmntId = (this.oElmnt.getAttribute("id") != null) ? this.oElmnt.getAttribute("id") : "";
						this.sIgnore = (this.oElmnt.getAttribute("ignore") != null) ? ((this.oElmnt.getAttribute("ignore") == "true") ? true : false) : false;
						this.sUnique = (this.oElmnt.getAttribute("unique") != null) ? ((this.oElmnt.getAttribute("unique") == "true") ? true : false) : false;
						this.sFixed = (this.oElmnt.getAttribute("fixed") != null) ? ((this.oElmnt.getAttribute("fixed") == "true") ? true : false) : false;
						this.sTgNm = this.oElmnt.tagName;
						if (!this.sFixed) {
							if (this.sElmntId != "" && (this.sIgnore == false || (this.sIgnore == true && this.sUnique == true))) {
								switch(this.sTgNm) {
									case "INPUT":
										this.sTgNm += "-" + this.oElmnt.type;
										break;
									case "SELECT":
										this.sTgNm = this.oElmnt.type;
										break;
								}
								this.sTgNm = this.sTgNm.toLowerCase();
								switch(this.sTgNm) {
									case "input-file":
									case "input-hidden":
									case "input-text":
									case "textarea":
										this.sVl = "";
										this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId);
										if (this.oNd != null) {
											this.sVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
										}
										this.oElmnt.setAttribute("value",unescape(this.sVl));
										break;
									case "input-checkbox":
									case "input-radio":
										this.sVl = "";
										this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@checked='true']");
										if (this.oNd != null) {
											this.sVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
										}
										if (this.oElmnt.getAttribute("value") == unescape(this.sVl)) {
											this.oElmnt.checked = true;
										}
										break;
									case "select-one":
									case "select-multiple":
										this.sFlds = "";
										for (var iL = 0; iL < this.oElmnt.length; iL++) {
											this.sVl = this.oElmnt[iL].getAttribute("value");
											if (this.sVl != "") {
												this.oNd = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@selected='true' and @value='" + escape(this.sVl) + "']");
												if (this.oNd != null) {
													this.oElmnt[iL].selected = true;
												}
											}
										}
										break;
								}
							}
						}
					}
				}
				this.oFras = document.forms[iF].getElementsByTagName("IFRAME");
				if (this.oFras[0] != null) {
					for (var iI = 0; iI < this.oFras.length; iI++) {
						this.oFrm = this.oFras[iI];
						this.sFrmId = (this.oFrm.getAttribute("id") != null) ? this.oFrm.getAttribute("id") : "";
						this.asFra[this.asFra.length] = this.sFrmId;
					}
				}
			}
		}
		for (var iF = 0; iF < this.asFra.length; iF++) {
			this.generateTableContent(this.asFra[iF]);
		}

		this.sSpecificFormId = null;
		this.oFrm = null;
		this.sFrmId = null;
		this.sPK = null;
		this.sXPath = null;
		this.oNd = null;
		this.oElmnts = null;
		this.oElmnt = null;
		this.sElmntId = null;
		this.sIgnore = null;
		this.sTgNm = null;
		this.sVl = null;
		this.oDt = null;
		this.sFlds = null;
		this.oFras = null;
}

UltraCargo.prototype.updateData = function() {
		this.sSpecificFormId = (arguments[0] != null) ? arguments[0] : "";
		for (var iF = 0; iF < document.forms.length; iF++) {
			this.oFrm = document.forms[iF];
			this.sFrmId = (this.oFrm.getAttribute("id") != null) ? this.oFrm.getAttribute("id") : "";
			if ((this.sFrmId != "" && this.sSpecificFormId == "") || (this.sFrmId == this.sSpecificFormId)) {
				this.sPK = (this.oFrm.getAttribute("pk") != null) ? this.oFrm.getAttribute("pk") : "";
				this.sXPath = "root/" + this.sFrmId + "[@pk=\"" + this.sPK + "\"]";
				this.oRoot = this.init.oXDt.document.documentElement;
				this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
				if (this.oNd == null) {
					this.oNd = this.init.oXDt.createNode(1,this.sFrmId,"");
					this.oNd.setAttribute("tipo","form");
					this.oNd.setAttribute("pk",this.sPK);
					this.oRoot.appendChild(this.oNd);
					this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
				}
				if (this.oNd != null) {
					this.oElmnts = document.forms[iF].elements;
					for (var iE = 0; iE < this.oElmnts.length; iE++) {
						this.oElmnt = this.oElmnts[iE];
						this.sElmntId = (this.oElmnt.getAttribute("id") != null) ? this.oElmnt.getAttribute("id") : "";
						this.sTgNm = this.oElmnt.tagName;
						if (this.sElmntId != "") {
							switch(this.sTgNm) {
								case "INPUT":
									this.sTgNm += "-" + this.oElmnt.type;
									break;
								case "SELECT":
									this.sTgNm = this.oElmnt.type;
									break;
							}
							this.sTgNm = this.sTgNm.toLowerCase();
							switch(this.sTgNm) {
								case "input-file":
								case "input-hidden":
								case "input-text":
								case "textarea":
									this.sStts = "local";
									this.sServerValue = "";
									this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId);
									if (this.oDt != null) {
										this.sStts = (this.oDt.getAttribute("status") != null) ? this.oDt.getAttribute("status") : "local";
										this.sServerValue = (this.oDt.getAttribute("server_value") != null) ? this.oDt.getAttribute("server_value") : "";
										this.oNd.removeChild(this.oDt);
										
									}
									this.sVl = this.oElmnt.value;
									this.createNode(2,this.sElmntId,this.sXPath,"",
										"server_value",this.sServerValue,
										"value",escape(this.sVl),
										"status",this.sStts);
									break;
								case "input-checkbox":
									this.sStts = "local";
									this.sServerValue = "";
									this.sChecked = "false";
									this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId);
									if (this.oDt != null) {
										this.sStts = (this.oDt.getAttribute("status") != null) ? this.oDt.getAttribute("status") : "local";
										this.sServerValue = (this.oDt.getAttribute("server_value") != null) ? this.oDt.getAttribute("server_value") : "";
										this.oNd.removeChild(this.oDt);
										
									}
									if (this.oElmnt.checked) {
										this.sChecked = "true";
									}
									this.oDt = this.init.oXD.selectSingleNode("root/" + this.sFrmId + "/" + this.sElmntId);
									if (this.oDt != null) {
										this.sVl = (this.oDt.getAttribute("value") != null) ? unescape(this.oDt.getAttribute("value")) : "::";
										if (this.sChecked == "true") {
											this.sVl = this.sVl.split("::")[0];
										}
										else {
											this.sVl = this.sVl.split("::")[1];
										}
									}
									else {
										this.sVl = this.oElmnt.getAttribute("value");
									}
									this.createNode(2,this.sElmntId,this.sXPath,"",
										"server_value",this.sServerValue,
										"value",escape(this.sVl),
										"checked",this.sChecked,
										"status",this.sStts);
									break;
								case "input-radio":
									this.sStts = "local";
									this.sServerValue = "";
									this.sChecked = "false";
									this.sVl = this.oElmnt.getAttribute("value");
									this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@value='" + escape(this.sVl) + "']");
									if (this.oDt != null) {
										this.sStts = (this.oDt.getAttribute("status") != null) ? this.oDt.getAttribute("status") : "local";
										this.sServerValue = (this.oDt.getAttribute("server_value") != null) ? this.oDt.getAttribute("server_value") : "";
										this.oNd.removeChild(this.oDt);
										
									}
									if (this.oElmnt.checked) {
										this.sChecked = "true";
									}
									this.createNode(2,this.sElmntId,this.sXPath,"",
										"server_value",this.sServerValue,
										"value",escape(this.sVl),
										"checked",this.sChecked,
										"status",this.sStts);
									break;
								case "select-one":
								case "select-multiple":
									for (var iL = 0; iL < this.oElmnt.length; iL++) {
										this.sStts = "local";
										this.sServerValue = "";
										this.sSelected = "false";
										this.sVl = (this.oElmnt[iL].getAttribute("value") != null) ? this.oElmnt[iL].getAttribute("value") : "";
										this.sTxt = (this.oElmnt[iL].getAttribute("text") != null) ? this.oElmnt[iL].getAttribute("text") : "";
										this.oDt = this.init.oXDt.selectSingleNode(this.sXPath + "/" + this.sElmntId + "[@value='" + escape(this.sVl) + "']");
										if (this.oDt != null) {
											this.sStts = (this.oDt.getAttribute("status") != null) ? this.oDt.getAttribute("status") : "local";
											this.sServerValue = (this.oDt.getAttribute("server_value") != null) ? this.oDt.getAttribute("server_value") : "";
											this.oNd.removeChild(this.oDt);
											
										}
										if (this.oElmnt[iL].selected) {
											this.sSelected = "true";
										}
										this.createNode(2,this.sElmntId,this.sXPath,this.sTxt,
											"server_value",this.sServerValue,
											"value",escape(this.sVl),
											"selected",this.sSelected,
											"status",this.sStts);
									}
									break;
							}
						}
					}
				}
			}
		}

		this.sSpecificFormId = null;
		this.oFrm = null;
		this.sFrmId = null;
		this.sPK = null;
		this.sXPath = null;
		this.oRoot = null;
		this.oNd = null;
		this.oRoot = null;
		this.oElmnts = null;
		this.oElmnt = null;
		this.sElmntId = null;
		this.sTgNm = null;
		this.sStts = null;
		this.sServerValue = null;
		this.oDt = null;
		this.sVl = null;
		this.sSelected = null;
		this.sTxt = null;
}

UltraCargo.prototype.clearForms = function(psFormIds) {
		this.sOperation = (arguments[1] != null) ? arguments[1] : "";
		if (psFormIds != "") {
			this.asForm = psFormIds.split("|");
			for (var iF = 0; iF < this.asForm.length; iF++) {
				this.oFrm = document.getElementById(this.asForm[iF]);
				if (this.oFrm != null) {
					this.oElmnts = this.oFrm.elements;
					for (var iE = 0; iE < this.oElmnts.length; iE++) {
						this.oElmnt = this.oElmnts[iE];
						this.sFixed = (this.oElmnt.getAttribute("fixed") != null) ? (this.oElmnt.getAttribute("fixed").toString() == "true") ? true : false : false;
						this.sOper = (this.oElmnt.getAttribute("operation") != null) ? this.oElmnt.getAttribute("operation") : "";
						if (this.sOperation != "") {
							this.bClear = (("," + this.sOper + ",").indexOf("," + this.sOperation + ",") != -1) ? true : false;
						}
						else {
							this.bClear = (!this.sFixed) ? true : false;
						}
						if (this.sFixed != true && this.bClear) {
							this.sTgNm = this.oElmnt.tagName;
							if (this.sElmntId != "") {
								switch(this.sTgNm) {
									case "INPUT":
										this.sTgNm += "-" + this.oElmnt.type;
										break;
									case "SELECT":
										this.sTgNm = this.oElmnt.type;
										break;
								}
								this.sTgNm = this.sTgNm.toLowerCase();
								switch(this.sTgNm) {
									case "input-file":
									case "input-hidden":
									case "input-text":
									case "textarea":
										this.oElmnt.setAttribute("value","");
										break;
									case "input-checkbox":
									case "input-radio":
										this.oElmnt.checked = false;
										break;
									case "select-one":
									case "select-multiple":
										for (var iL = 0; iL < this.oElmnt.length; iL++) {
											this.oElmnt[iL].selected = false;
										}
										this.oElmnt.selectedIndex = -1;
										break;
								}
							}
						}
					}
				}
			}
		}

		this.bUnique = null;
		this.asForm = null;
		this.oFrm = null;
		this.oElmnts = null;
		this.oElmnt = null;
		this.sFixed = null;
		this.sUnique = null;
		this.bClear = null;
		this.sTgNm = null;
}

UltraCargo.prototype.clearLinkedForm = function(psFormId) 
{
		this.bLoop = (arguments[1] != null) ? (arguments[1] == true) ? true : false : false;
		if (!this.bLoop) {
			this.updateData();
		}
		if (psFormId == "") {
			return;
		}
		this.oFrm = document.getElementById(psFormId);
		if (this.oFrm != null) {
			this.sLinked = "";
			for (var iF = 0; iF < document.forms.length; iF++) {
				this.oFrm = document.forms[iF];
				this.sFrmId = (this.oFrm.getAttribute("id") != null) ? this.oFrm.getAttribute("id") : "";
				this.sLnk = (this.oFrm.getAttribute("linked") != null) ? this.oFrm.getAttribute("linked") : "";
				if (this.sFrmId != "" && this.sLnk == psFormId) {
					this.oNd = this.init.oXD.selectSingleNode("root/*[@linked='" + this.sFrmId +"']");
					if (this.oNd != null) {
						this.clearLinkedForm(this.sFrmId);
					}
					this.oFrm.setAttribute("pk","");
					this.oElmnts = this.oFrm.elements;
					for (var iE = 0; iE < this.oElmnts.length; iE++) {
						this.oElmnt = this.oElmnts[iE];
						this.sFixed = (this.oElmnt.getAttribute("fixed") != null) ? (this.oElmnt.getAttribute("fixed").toString() == "true") ? true : false : false;
						if (!this.sFixed) {
							this.sTgNm = this.oElmnt.tagName;
							if (this.sElmntId != "") {
								switch(this.sTgNm) {
									case "INPUT":
										this.sTgNm += "-" + this.oElmnt.type;
										break;
									case "SELECT":
										this.sTgNm = this.oElmnt.type;
										break;
								}
								this.sTgNm = this.sTgNm.toLowerCase();
								switch(this.sTgNm) {
									case "input-file":
									case "input-hidden":
									case "input-text":
									case "textarea":
										this.oElmnt.setAttribute("value","");
										break;
									case "input-checkbox":
									case "input-radio":
										this.oElmnt.checked = false;
										break;
									case "select-one":
									case "select-multiple":
										for (var iL = 0; iL < this.oElmnt.length; iL++) {
											this.oElmnt[iL].selected = false;
										}
										this.oElmnt.selectedIndex = -1;
										break;
								}
							}
						}
					}
				}
			}
			this.oFras = document.getElementsByTagName("IFRAME");
			for (var iF = 0; iF < this.oFras.length; iF++) {
				this.oFra = this.oFras[iF];
				this.sFraId = (this.oFra.getAttribute("id") != null) ? this.oFra.getAttribute("id") : "";
				this.sLnk = (this.oFra.getAttribute("linked") != null) ? this.oFra.getAttribute("linked") : "";
				this.sFixed = (this.oFra.getAttribute("fixed") != null) ? this.oFra.getAttribute("fixed") : "";
				if (this.sFraId != "" && this.sLnk == psFormId) {
					this.oFra.setAttribute("pk","");
					if (this.sFixed != "true") {
						self.frames[iF].clearGrid();
					}
					this.sLinked += this.sFraId + "|";
				}
			}
			if (!this.bLoop) {
				this.clearLinkedFrames(this.sLinked);
			}
		}

		this.bLoop = null;
		this.oFrm = null;
		this.sLinked = null;
		this.sFrmId = null;
		this.sLnk = null;
		this.oNd = null;
		this.oElmnts = null;
		this.oElmnt = null;
		this.sFixed = null;
		this.sTgNm = null;
		this.oFras = null;
		this.oFra = null;
		this.sFraId = null;
		this.sLnk = null;

}

UltraCargo.prototype.cLF = function() {
}

UltraCargo.prototype.clearLinkedFrames = function(psFormId) {
		this.cLF.asFrms = psFormId.split("|");
		for (var iK = 0; iK < this.cLF.asFrms.length; iK++) {
			if (this.cLF.asFrms[iK] != "") {
				this.clearLinkedForm(this.cLF.asFrms[iK],true);
			}
		}

}

UltraCargo.prototype.send = function() 
{
		this.shwSessionMsg = false;
		/* COMENTADO PARA SIMULACAO FABIO
		if (this.verifyExpiredSession()){
			return;
		}*/
		
		if (parent.top.frm_rodape != null){
			this.sBtn = parent.top.frm_rodape.getButton();
			parent.top.frm_rodape.setButton("X");
		}
		
		this.bSendMethod = false;
		this.sResp = (arguments[0] != null) ? arguments[0] : "";
		this.sXml = "";
		this.bIsForm = false;
		this.bIsTable = false;
		this.bIsValidateMessage = true;
		
		if (this.sResp == "") 
		{
			if (!this.validateToSend()) 
			{
				return;
			}
			this.updateData();
			
			if (this.init.reset) 
			{
				if (this.init.form != "") 
				{
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.init.form);
					if (this.oNd != null) 
					{
						this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
						if (this.sTipo == "table")
						{
							this.oNd.setAttribute("page","1");
							this.oNd.setAttribute("page_count","0");
						}
					}
				}
			}
			
			this.sResp = this.extractXmlData(this.init.operation,this.init.groupData);
			
			if (!this.doNotVerify) 
			{
				if (!this.verifyFields(this.sResp,this.init.operation))
				{	
					if (parent.top.frm_rodape != null){
						parent.top.frm_rodape.setButton(this.sBtn);
					}
					return;
				}
			}
			
			this.oXD = new XMLHttpRequest()
			this.oXD.loadXML(this.sResp);
			this.oRoot = this.oXD.document.documentElement;
			this.oNd = this.oXD.selectSingleNode("root/*");
			
			if (this.init.form != "" && this.init.form != this.oNd.nodeName) 
			{
				this.sTipo = "";
				this.oDt = this.init.oXD.selectSingleNode("root/" + this.init.form);
				if (this.oDt != null) 
				{
					this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
				}
				this.oDt = this.oXD.createNode(1,this.init.form,"");
				this.oDt.setAttribute("tipo",this.sTipo);
				for (var iE = 0; iE < this.oNd.children.length; iE++) {
					this.oDt.appendChild(this.oNd.children[iE].cloneNode(true));
				}
				this.oRoot.replaceChild(this.oDt,this.oNd);
				if (this.init.operation != "") 
				{
					this.oNd = this.oXD.selectSingleNode("root/operation");
					if (this.oNd != null) 
					{
						this.oNd.setAttribute("value",this.init.operation);
					}
					else 
					{
						this.oNd = this.oXD.createNode(1,"operation","");
						this.oNd.setAttribute("value",this.init.operation);
						this.oXD.documentElement.appendChild(this.oNd);
					}
				}
			}
			this.saveXmlQuery(this.oXD.xml());
		}
		else 
		{
			this.oXD = new XMLHttpRequest()
			this.oXD.loadXML(this.sResp);
			this.oRoot = this.oXD.document.documentElement;
			this.oNd = this.oXD.selectSingleNode("root/*");
			if (this.init.form != "" && this.init.form != this.oNd.nodeName) 
			{
				this.sTipo = "";
				this.oDt = this.init.oXD.selectSingleNode("root/" + this.init.form);
				if (this.oDt != null) 
				{
					this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
				}
				this.oDt = this.oXD.createNode(1,this.init.form,"");
				this.oDt.setAttribute("tipo",this.sTipo);
				for (var iE = 0; iE < this.oNd.children.length; iE++) 
				{
					this.oDt.appendChild(this.oNd.children[iE].cloneNode(true));
				}
				this.oRoot.replaceChild(this.oDt,this.oNd);
				if (this.init.operation != "") 
				{
					this.oNd = this.oXD.selectSingleNode("root/operation");
					if (this.oNd != null) 
					{
						
						this.oNd.setAttribute("value",this.init.operation);
					}
					else {
						this.oNd = this.oXD.createNode(1,"operation","");
						this.oNd.setAttribute("value",this.init.operation);
						this.oXD.documentElement.appendChild(this.oNd);
					}
				}
				
				this.saveXmlQuery(this.oXD.xml);
			}
			else 
			{
				if (this.oNd != null) 
				{
					this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
					if (this.sTipo == "") 
					{
						this.oDt = this.init.oXD.selectSingleNode("root/" + this.oNd.nodeName);
						if (this.oDt != null) 
						{
							this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
						}
						this.oNd.setAttribute("tipo",this.sTipo);
					}
				}
			}
			if (this.init.multiForm != "") 
			{
				this.oXAux = new XMLHttpRequest()
				this.oXAux.loadXML("<root/>");
				this.oRootAux = this.oXAux.documentElement;
				this.asForm = this.init.multiForm.split("|");
				this.oNds = this.oNd.children;
				for (var iM = 0; iM < this.asForm.length; iM++) 
				{
					this.sTipo = "";
					this.sPgSiz = "";
					this.sPgNum = "";
					this.oDt = this.init.oXD.selectSingleNode("root/" + this.asForm[iM]);
					if (this.oDt != null) 
					{
						this.sTipo = (this.oDt.getAttribute("tipo") != null) ? this.oDt.getAttribute("tipo") : "";
						this.sPgSiz = (this.oDt.getAttribute("page_size") != null) ? this.oDt.getAttribute("page_size") : 10;
						this.sPgNum = (this.oDt.getAttribute("page") != null) ? this.oDt.getAttribute("page") : 1;
					}
					this.oDt = this.oXD.selectSingleNode("root/" + this.asForm[iM]);
					if (this.oDt == null) 
					{
						if (this.asForm[iM] != this.oNd.nodeName) 
						{
							this.oDt = this.oXAux.createNode(1,this.asForm[iM],"");
							this.oDt.setAttribute("tipo",this.sTipo);
							for (var iN = 0; iN < this.oNds.length; iN++) 
							{
								this.oDt.appendChild(this.oNds[iN].cloneNode(true));
							}
							this.oRootAux.appendChild(this.oDt);
						}
					}
					else 
					{
						this.oDt.setAttribute("tipo",this.sTipo);
					}
					if (this.sTipo == "table") 
					{
						this.oNd = this.oXAux.selectSingleNode("root/" + this.asForm[iM] + "/page_size");
						if (this.oNd == null) 
						{
							this.oNd = this.oXD.createNode(1,"page_size","");
							this.oNd.textContent = this.sPgSiz;
							this.oDt.appendChild(this.oNd);
							this.oNd = this.oXD.createNode(1,"page_number","");
							this.oNd.textContent = this.sPgNum;
							this.oDt.appendChild(this.oNd);
						}
					}
				}
				this.oNd = this.oXD.selectSingleNode("root/operation");
				if (this.oNd != null) 
				{
					this.oRootAux.appendChild(this.oNd.cloneNode(true));
				}
				this.oXD.loadXML(this.oRootAux.xml);
				this.oNds = this.oXD.selectNodes("root/*");
				for (var iM = 0; iM < this.oNds.length; iM++) 
				{
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.oNds[iM].nodeName);
					if (this.oNd != null) 
					{
						this.oXAux.loadXML("<root/>");
						this.oRootAux = this.oXAux.documentElement;
						this.oRootAux.appendChild(this.oNds[iM].cloneNode(true));
						this.oNd = this.oXD.selectSingleNode("root/operation");
						if (this.oNd != null) 
						{
							this.oRootAux.appendChild(this.oNd.cloneNode(true));
						}
						this.saveXmlQuery(this.oXAux.xml);
					}
				}
				
			}
			this.oNd = this.oXD.selectSingleNode("root/operation");
			
			if (this.oNd != null) 
			{
				this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
				if (this.init.operation != this.sOper) 
				{
					this.oNd.setAttribute("value",this.init.operation);
				}
			}
			else 
			{
				this.oNd = this.oXD.createNode(1,"operation","");
				this.oNd.setAttribute("value",this.init.operation);
				this.oXD.document.documentElement.appendChild(this.oNd);
			}
			this.sResp = this.oXD.xml();
		}
		
		this.sXml = this.checkLongTypeNodes(this.sResp);
		
		while(this.sXml == "")
		{
			continue;
		}

		while (this.bIsValidateMessage == true)
		{
			this.bIsValidateMessage = this.postXML(this.sXml);
		}
		
		this.terminateToSend();
		
		if (parent.top.frm_rodape != null){
			parent.top.frm_rodape.setButton(this.sBtn);
		}
		
		return this.bSendMethod;

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
}

UltraCargo.prototype.postXML = function() 
{
		
		this.bPostXML = false;
		this.oXHttp = new XMLHttpRequest();
		this.oXHttp.open("POST",this.init.processPage, false);
		
		if(this.init.sPageOperation != '' && this.init.sPageOperation != null)
		{
			var vwObjXMLPost	= new XMLHttpRequest();
			var vwsNode			= null;
			vwObjXMLPost.loadXML(this.sXml);
			if(vwObjXMLPost.parseError ==0)
			{
				vwsNode  = vwObjXMLPost.selectSingleNode('root/operation');
				if(vwsNode != null)
				{
					vwsNode.setAttribute('value',this.init.sPageOperation); 
				}
				this.sXml  =  vwObjXMLPost.xml;   
			}
		} 
		
		this.init.sPageOperation = "";
		
		this.sXml = this.sXml.replace(/%20/g," ");
		this.LogaString("XML Envio  :" , this.sXml);
	
		this.oXHttp.send(this.sXml);
		
		while(this.oXHttp.readyState != 4)
		{
			continue;
		}
		
		this.serro = true;
		
		this.sResp = this.oXHttp.responseText;
		
		this.oXD = new XMLHttpRequest()
		
		this.oXD.loadXML(this.checkStringValue(this.sResp));
		
		this.LogaString("XML Retorno:" , this.sResp);
		
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true)
		{
			this.init.sXml = this.sResp;
			this.oNds = this.oXD.selectNodes("root/*[@key='true']");
			this.init.key = "";
			
			if (this.oNds[0] != null)
			{
				this.init.key = "<root>";
				
				for (var iM = 0; iM < this.oNds.length; iM++)
				{
				  this.init.key += this.oNds[iM].xml;
				}
				
				this.init.key += "</root>";
			}
			
			this.oNd = this.oXD.selectSingleNode("//mensagem");
			
			if (this.oNd == null)
			{
				this.asForm = (this.init.multiForm != "") ? this.init.multiForm.split("|") : this.init.form.split("|");
				this.asXml = new Array();
				this.oNds = this.oXD.selectNodes("root/*");
				
				for (var iM = 0; iM < this.asForm.length; iM++)
				{
					this.sResp = "";
					this.oNd = this.oXD.selectSingleNode("root/" + this.asForm[iM]);
				
					if (this.oNd != null)
					{
						this.sResp = "<root>" + new XMLSerializer().serializeToString(this.oNd) + "</root>";
					}
					
					this.asXml[iM] = this.sResp;
				}
				
				for (var iM = 0; iM < this.asForm.length; iM++)
				{
					if (this.asForm[iM] != "")
					{
						this.oNd = this.init.oXD.selectSingleNode("root/" + this.asForm[iM]);
					
						if (this.oNd != null)
						{
							this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
							
							if (this.sTipo == "table")
							{
								this.bIsTable = true;
							}
							else if (this.sTipo == "form")
							{
								this.bIsForm = true;
							}
						}

						if (this.bIsTable)
						{
							this.saveXmlGrid(this.asXml[iM]);
						}
						else if (this.bIsForm)
						{
							this.pageLoader(this.asXml[iM]);
						}
					}
				}
			}
			else
			{
				
				this.oNd = this.oXD.selectSingleNode("//botoes_mensagem");
				if (this.oNd != null) {
					this.bPostXML = this.showMessageList(this.sResp);
				}
				else {
					this.bSendMethod = this.showMessage(this.sResp);
					if (Math.floor(this.init.code) == 1 ||
					    Math.floor(this.init.code) == 2)
					{
					    this.updateGrid(this.sXml);
					}
				}
			}
		}
		else 
		{
			this.LogaString("Err:" , this.sResp);
			this.init.sXml = "<root></root>";
		}
		return this.bPostXML;

}

UltraCargo.prototype.validateToSend = function() 
{
	var vwTipoMensagem = 0
	try {
		this.bValidate = true;
		this.unique = (this.unique != undefined) ? (this.unique == true) ? true : false : false;
		this.doNotVerify = (this.doNotVerify != undefined) ? (this.doNotVerify == true) ? true : false : false;
		this.init.code = "";
		this.init.form = (this.init.form != undefined) ? this.init.form : "";
		this.init.multiForm = (this.init.multiForm != undefined) ? this.init.multiForm : "";
		this.init.operation = (this.init.operation != undefined) ? this.init.operation : "";
		this.init.reset = (this.init.reset != undefined) ? (this.init.reset == true) ? true : false : true;
		this.init.processPage = (this.init.processPage != undefined) ? this.init.processPage : "";
		this.init.toCheck = (this.init.toCheck != undefined) ? (this.init.toCheck == true) ? true : false : true;
		
		if (this.init.form == "" && this.init.multiForm == "") {
			this.bValidate = false;
		}
		else if (this.init.operation == "") {
			this.bValidate = false;
		}
		else if (this.init.processPage == "") {
			this.bValidate = false;
		}
		
		if((this.doVerifySession) && (this.init.sLoginAtu  == '' || this.init.sLoginAtu == null)) {
			vwTipoMensagem =  1; 
			this.bValidate = false;
		}
		 
		/* COMENTADO PARA SIMULACAO FABIO
		if (!this.bValidate) 
		{
			if(vwTipoMensagem == 0)
			{
				throw "Verifique se todos os atributos foram informados.";
			}
			
			if(vwTipoMensagem == 1)
			{
				throw "Sua sess�o expirou, por favor realize o Login novamente.";
			}
			 
		}*/
		
		return true;
	}
	catch(oException) {
		this.exception(oException,"UltraCargo[validateToSend]");
		return false;
	}
	finally {
		this.bValidate = null;
	}
}

UltraCargo.prototype.terminateToSend = function() {
		this.shwMsg = true;
		this.sysMsg = true;
		this.unique = false;
		this.doNotVerify = false;
		this.init.form = "";
		this.init.multiForm = "";
		this.init.operation = "";
		this.init.reset = true;
		this.init.toCheck = false;

}

UltraCargo.prototype.verifyFields = function() 
{
		this.sXML = (arguments[0]) ? arguments[0] : "";
		this.sOper = (arguments[1]) ? arguments[1] : "";
		this.bGrid = (arguments[2]) ? (arguments[2] == true) ? true : false : false;
		
		if (this.sXML == "" || this.sOper == "") 
		{
			return false;
		}
		this.sMsgHder = "________________________________________________     \n\n"
			+ " UltraCargo: Aviso de Sistema \n"
			+ "________________________________________________     \n\n"
			+ " - Os seguintes campos obrigat�rios est�o vazios:\n";
		this.sMsgBdy = "";
		this.bVerify = false;
		this.bOr = false;
		this.iTpMsg;
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(this.sXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			
			this.bVerify = true;
			this.sOper = "";
			this.oNd = this.oXD.selectSingleNode("root/operation");
			if (this.oNd != null) {
				this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
			}
			this.oNds = this.init.oXD.selectNodes("root/*/*[@operation!='' and @lbl!='']");
			if (this.oNds[0] != null) {
				this.bVerify = true;
				for (var iF = 0; iF < this.oNds.length; iF++) {
					this.oNd = this.oNds[iF];
					this.sElmntId = this.oNd.nodeName;
					this.sAls = (this.oNd.getAttribute("alias") != null) ? this.oNd.getAttribute("alias") : "";
					this.sVrf = (this.oNd.getAttribute("verify") != null) ? this.oNd.getAttribute("verify") : "";
					this.sTgNm = (this.oNd.getAttribute("tag") != null) ? this.oNd.getAttribute("tag") : "";
					this.sNdeOper = (this.oNd.getAttribute("operation") != null) ? this.oNd.getAttribute("operation") : "";
					this.sLabel = (this.oNd.getAttribute("lbl") != null) ? unescape(this.oNd.getAttribute("lbl")) : "";
					if (("," + this.sNdeOper + ",").indexOf("," + this.sOper + ",") != -1) {
						if (this.sLabel != "") {
							switch(this.sTgNm) {
								case "input-file":
								case "input-hidden":
								case "input-text":
								case "textarea":
								case "input-checkbox":
								case "input-radio":
								case "select-one":
								case "select-multiple":
									this.bVrf = false;
									this.oDt = this.oXD.selectSingleNode(((this.sAls != "") ? "//" + this.sAls + "[@value!='']" : "//" + this.sElmntId + "[@value!='']"));
									if (this.oDt == null) {
										this.bVrf = true;
										if (this.sVrf != "") {
											this.asVrf = this.sVrf.split("::");											
											if (this.asVrf.length > 1){
												this.bVrf = false;
												for (var iV = 0; iV < this.asVrf.length; iV++) {												
													if (this.asVrf[iV] != "") {
														this.oDt = this.oXD.selectSingleNode(this.asVrf[iV]);
														if (this.oDt == null) {
															this.bVrf = true;
														}
													}
												}
											}else{
												this.asVrf = this.sVrf.split("|");
												for (var iV = 0; iV < this.asVrf.length; iV++) {
													if (this.asVrf[iV] != "") {
														this.oDt = this.oXD.selectSingleNode(this.asVrf[iV]);
														if (this.oDt != null) {
															this.bVrf = false;
															break;
														}
													}
												}
											}
										}
										if (this.bVrf) {
											this.sMsgBdy += "   " + this.sLabel + "\n";
											this.bOr = true;
										}
									}
									break;
							}
						}
					}
				}
			}
			this.oNds = this.init.oXD.selectNodes("root/*[@tipo='table' and @required='true']");
			if (this.oNds[0] != null) {
				this.bVerify = true;
				for (var iF = 0; iF < this.oNds.length; iF++) {
					this.sLabel = (this.oNds[iF].getAttribute("lbl") != null) ? unescape(this.oNds[iF].getAttribute("lbl")) : "";
					this.sNdeOper = (this.oNds[iF].getAttribute("operation") != null) ? this.oNds[iF].getAttribute("operation") : "";
					this.sEmpty = (this.oNds[iF].getAttribute("empty") != null) ? this.oNds[iF].getAttribute("empty") : "";
					if (this.sLabel != "") {
						if (("," + this.sNdeOper + ",").indexOf("," + this.sOper + ",") != -1) {
							this.oDt = this.oXD.selectSingleNode("root/" + this.oNds[iF].nodeName + "/row[@status!='del']");
							if (this.oDt == null) {
								this.sPKElement = "";
								this.oFld = document.getElementById(this.oNds[iF].nodeName);
								if (this.oFld != null) {
									this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
								}
								this.oDts = this.oXD.selectNodes("root/" + this.oNds[iF].nodeName + "/row[@status='del']");
								this.iCnt = this.oDts.length;
								this.oDts = this.init.oXGr.selectNodes("root/" + this.oNds[iF].nodeName + "[@pk=\"" + this.sPKElement + "\"]/row");
								if (this.oDts.length <= this.iCnt && this.sEmpty == "false") {
									this.sMsgBdy += "   " + this.sLabel + "\n";
								}
							}
							else {
								this.sLabel = this.verifyDataGrid(this.oNds[iF].nodeName);
								if (this.sLabel != "") {
									this.sMsgBdy += this.sLabel;
								}
							}
						}
					}
				}
			}
		}
		if (this.sMsgBdy != "") {
			if (this.shwMsg == true) {
				
			switch (this.init.operation){
				case "qry":
					msgBox(" - Necess�rio informar pelo menos um campo no filtro:\n" + this.sMsgBdy);
					break;
				case "ins","upd":
					msgBox(" - Necess�rio informar campos obrigat�rios:\n" + this.sMsgBdy);
					break;
				default:
					msgBox(" - Necess�rio informar os seguintes campos obrigat�rios:\n" + this.sMsgBdy);
					break;				
				}
				
			}
			this.bVerify = false;
		}
		return this.bVerify;

		this.sXML = null;
		this.sOper = null;
		this.sMsgHder = null;
		this.sMsgBdy = null;
		this.bVerify = null;
		this.bOr = null;
		this.iTpMsg = null;
		this.oXD = null;
		this.oNd = null;
		this.oNds = null;
		this.sElmntId = null;
		this.sAls = null;
		this.sVrf = null;
		this.sTgNm = null;
		this.sNdeOper = null;
		this.sLabel = null;
		this.bVrf = null;
		this.oDt = null;
		this.asVrf = null;
		this.sEmpty = null;
		this.sPKElement = null;
		this.oFld = null;
		this.oDts = null;
		this.iCnt = null;
}

UltraCargo.prototype.vDG = function() {
}

UltraCargo.prototype.verifyDataGrid = function(pstr_Frame) {
		this.vDG.sMsgBdy = "";
		this.vDG.oNd = document.getElementById(pstr_Frame);
		if (this.vDG.oNd != null) {
			this.vDG.sPK = (this.vDG.oNd.getAttribute("pk") != null) ? this.vDG.oNd.getAttribute("pk") : "";
			this.vDG.sVld = "";
			this.vDG.sLabel = "";
			this.vDG.oNd = this.init.oXD.selectSingleNode("root/" + pstr_Frame);
			if (this.vDG.oNd != null) {
				this.vDG.sVld = (this.vDG.oNd.getAttribute("validate") != null) ? this.vDG.oNd.getAttribute("validate") : "";
				this.vDG.sLabel = (this.vDG.oNd.getAttribute("lbl") != null) ? this.vDG.oNd.getAttribute("lbl") : "";
			}
			if (this.vDG.sVld != "") {
				this.vDG.oNds = this.init.oXD.selectNodes("root/" + pstr_Frame + "/row/*[@index!='']");
				if (this.vDG.oNds[0] != null) {
					for (var iVDG = 0; iVDG < this.vDG.oNds.length; iVDG++) {
						if (("|" + this.vDG.sVld + "|").indexOf("|" + (1 + Math.floor(iVDG)) + "|") != -1) {
							this.vDG.oNd = this.init.oXD.selectSingleNode("root/" + pstr_Frame + "/row/*[@index='" + iVDG + "']");
							if (this.vDG.oNd != null) {
								this.vDG.sTitle = (this.vDG.oNd.getAttribute("title") != null) ? unescape(this.vDG.oNd.getAttribute("title")) : "";
								this.vDG.oNd = this.init.oXDt.selectSingleNode("root/" + pstr_Frame + "[@pk=\"" + this.vDG.sPK + "\"]/row/" + this.vDG.oNd.nodeName + "[@value='']");
								if (this.vDG.oNd != null) {
									this.vDG.sMsgBdy += " " + this.vDG.sTitle + ",";
								}
							}
						}
					}
					if (this.vDG.sMsgBdy != "") {
						this.vDG.sMsgBdy = this.vDG.sMsgBdy.substring(0,(this.vDG.sMsgBdy.length - 1)) + " ";
					}
				}
			}
		}
		return (this.vDG.sMsgBdy != "") ? (this.vDG.sLabel + ": (" + this.vDG.sMsgBdy + ")") : "";

		this.vDG.sMsgBdy = null;
		this.vDG.oNd = null;
		this.vDG.sPK = null;
		this.vDG.sVld = null;
		this.vDG.sLabel = null;
		this.vDG.oNds = null;
		this.vDG.sTitle = null;
}

UltraCargo.prototype.sKV = function() {
}

UltraCargo.prototype.setKeyValues = function() {
		this.sKV.bAll = (arguments[0] != null) ? (arguments[0] == true) ? true : false : false;
		this.sKV.sFrms = (arguments[1] != null) ? arguments[1] : "";
		this.sKV.bSK = false;
		this.sKV.oXD = new XMLHttpRequest();
		this.sKV.oXD.loadXML(this.init.key);
		if (this.sKV.oXD.parseError == 0) {
			for (var iKV = 2; iKV < arguments.length; iKV++) {
				this.sKV.sElmnt = "";
				if (arguments[iKV] != "") {
					this.sKV.oNd = this.sKV.oXD.selectSingleNode(arguments[iKV].split(",")[0]);
					if (this.sKV.oNd != null) {
						this.sKV.sVl = (this.sKV.oNd.getAttribute("value") != null) ? unescape(this.sKV.oNd.getAttribute("value")) : "";
						if (arguments[iKV].split(",")[1] != null) {
							this.sKV.sElmnt = arguments[iKV].split(",")[1];
						}
						else {
							this.sKV.sElmnt = this.sKV.oNd.nodeName;
						}
						if (this.sKV.bAll) {
							this.sKV.oElmnts = document.all(this.sKV.sElmnt);
							if (this.sKV.oElmnts != null) {
								if (this.sKV.oElmnts.length != null) {
									for (var iKE = 0; iKE < this.sKV.oElmnts.length; iKE++) {
										this.sKV.oElmnts[iKE].setAttribute("value",this.sKV.sVl);
										this.sKV.bSK = true;
									}
								}
								else {
									this.sKV.oElmnts.setAttribute("value",this.sKV.sVl);
									this.sKV.bSK = true;
								}
							}
						}
						else {
							this.sKV.asFrms = this.sKV.sFrms.split("|");
							for (var iKF = 0; iKF < this.sKV.asFrms.length; iKF++) {
								if (this.sKV.asFrms[iKF] != "") {
									this.sKV.oFrm = document.getElementById(this.sKV.asFrms[iKF]);
									if (this.sKV.oFrm != null) {
										if (this.sKV.oFrm.item(this.sKV.sElmnt) != null) {
											this.sKV.oFrm.item(this.sKV.sElmnt).setAttribute("value",this.sKV.sVl);
											this.sKV.bSK = true;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if (this.sKV.bSK) {
			this.updateData();
		}
		return this.sKV.bSK;

		this.sKV.bAll = null;
		this.sKV.sFrms = null;
		this.sKV.bSK = null;
		this.sKV.oXD = null;
		this.sKV.sElmnt = null;
		this.sKV.oNd = null;
		this.sKV.sVl = null;
		this.sKV.oElmnts = null;
		this.sKV.asFrms = null;
		this.sKV.oFrm = null;
}

UltraCargo.prototype.checkLongTypeNodes = function(psXml)
{
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXml);		

		//TODO: FABIO - CHECK XML VIA PARSER
		if (true)
		{
			this.oNds = this.init.oXD.selectNodes("//*[@tipo!='']");

			if (this.oNds[0] != null)
			{
				for (var iN = 0; iN < this.oNds.length; iN++)
				{
					this.oNd = this.oNds[iN];
					
					this.sAlias = (this.oNd.getAttribute("alias") != null) ? this.oNd.getAttribute("alias") : "";
					this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
					
					if (this.sTipo.indexOf("int") != -1 || this.sTipo.indexOf("lng") != -1)
					{
						this.oDts = this.oXD.selectNodes("//" + ((this.sAlias != "") ? this.sAlias : this.oNd.nodeName));
						
						if (this.oDts[0] != null)
						{
							for (var iI = 0; iI < this.oDts.length ; iI++)
							{
								this.oDt = this.oDts[iI];
								
								this.sSrvVl = (this.oDt.getAttribute("server_value") != null) ? unescape(this.oDt.getAttribute("server_value")) : "";
								this.sVl = (this.oDt.getAttribute("value") != null) ? unescape(this.oDt.getAttribute("value")) : "";
								
								if (this.sSrvVl != "")
								{
									this.sSrvVl = new String(this.sSrvVl);
									this.sSrvVl = this.sSrvVl.replace(/\,/g,".");
									this.sSrvVl = escape(this.sSrvVl);
									this.sSrvVl = this.sSrvVl.replace(/%20/g," ");
									this.oDt.setAttribute("server_value",this.sSrvVl);
								}
								
								if (this.sVl != "")
								{
									this.sVl = new String(this.sVl);
									this.sVl = this.sVl.replace(/\,/g,".");
									this.sVl = escape(this.sVl);
									this.sVl = this.sVl.replace(/%20/g," ");
									this.oDt.setAttribute("value",this.sVl);
								}
							}
						}
					}
				}
			}
		}
		return this.oXD.xml();

		this.oXD = null;
		this.oNds = null;
		this.oNd = null;
		this.sAlias = null;
		this.sTipo = null;
		this.oDts = null;
		this.oDt = null;
		this.sSrvVl = null;
		this.sVl = null;
}

UltraCargo.prototype.pageLoader = function(psXML) {
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oFrm = this.oXD.selectSingleNode("root/*");
			if (this.oFrm != null) {
				this.sFrmId = this.oFrm.nodeName;
				this.sXPath = "root/" + this.sFrmId;
				if (this.unique) {
					this.bSendMethod = true;
					this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/row_count");
					if (this.oNd != null) {
						if (Math.floor(parseInt(this.oNd.textContent)) > 1) {
							this.bSendMethod = false;
							return;
						}
					}
				}
				this.sFrmLn = "";
				this.oNd = this.init.oXD.selectSingleNode(this.sXPath);
				if (this.oNd != null) {
					this.sPK = "";
					this.sLnk = (this.oNd.getAttribute("linked") != null) ? this.oNd.getAttribute("linked") : "";
					if (this.sLnk != "") {
						this.oFld = document.getElementById(this.sLnk);
						if (this.oFld != null) {
							this.sPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
							this.sFrmLn = (this.oFld.getAttribute("active_line") != null) ? this.oFld.getAttribute("active_line").toString() : "";
						}
					}
					if (this.unique) {
						this.oNds = this.init.oXD.selectNodes("root/*[@tipo='form' and @linked='" + this.sLnk + "']/*[@unique='true']");
					}
					else {
						this.oNds = this.init.oXD.selectNodes("root/*[@tipo='form' and @linked='" + this.sLnk + "']/*[@ignore='false']");
					}
					if (this.oNds[0] != null) {
						this.oRoot = this.init.oXDt.document.documentElement;
						for (var iN = 0; iN < this.oNds.length; iN++) {
							this.oNd = this.oNds[iN];
							this.sNdId = this.oNd.nodeName;
							this.sNdAls = (this.oNd.getAttribute("alias") != null) ? this.oNd.getAttribute("alias") : "";
							this.sNdOper = (this.oNd.getAttribute("operation") != null) ? this.oNd.getAttribute("operation") : "";
							this.sNdFrmId = this.oNd.parentNode.nodeName;
							this.sXPath2 = "root/" + this.sNdFrmId;
							this.oFrmRoot = null;
							if (this.sFrmLn != "") {
								this.sXPath2 += "[@pk=\"" + ((this.sPK != "") ? this.sPK : "root") + "/" + this.sLnk + "/row[@line='" + this.sFrmLn + "']\"]";
								this.oFrmRoot = this.init.oXDt.selectSingleNode(this.sXPath2);
								if (this.oFrmRoot == null) {
									this.oDt = this.init.oXDt.createNode(1,this.sNdFrmId,"");
									this.oDt.setAttribute("tipo","form");
									this.oDt.setAttribute("pk",((this.sPK != "") ? this.sPK : "root") + "/" + this.sLnk + "/row[@line='" + this.sFrmLn + "']");
									this.oRoot.appendChild(this.oDt);
									this.oFrmRoot = this.init.oXDt.selectSingleNode(this.sXPath2);
								}
							}
							else {
								this.sXPath2 += "[@pk=\"" + this.sPK + "\"]";
								this.oFrmRoot = this.init.oXDt.selectSingleNode(this.sXPath2);
								if (this.oFrmRoot == null) {
									this.oDt = this.init.oXDt.createNode(1,this.sNdFrmId,"");
									this.oDt.setAttribute("tipo","form");
									this.oDt.setAttribute("pk",this.sPK);
									this.oRoot.appendChild(this.oDt);
									this.oFrmRoot = this.init.oXDt.selectSingleNode(this.sXPath2);
								}
							}

							if (this.oFrmRoot != null) {
								this.bAlias = false;
								this.oDt = this.oXD.selectSingleNode("root/*/" + this.sNdId);
								if (this.oDt == null) {
									if (this.sNdAls != "") {
										this.oDt = this.oXD.selectSingleNode("root/*/" + this.sNdAls);
										if (this.oDt != null) {
											this.bAlias = true;
										}
									}
								}
								if ((!this.unique && this.oDt != null) || (this.unique && this.oDt != null && ("," + this.sNdOper + ",").indexOf("," + this.init.operation + ",") != -1)) {
									this.oDt = null;
									this.bExist = true;
									this.sTgNm = (this.oNd.getAttribute("tag") != null) ? this.oNd.getAttribute("tag") : "";
									switch(this.sTgNm) {
										case "input-file":
										case "input-hidden":
										case "input-text":
										case "textarea":
											this.sVl = "";
											this.oDt = this.oXD.selectSingleNode("root/*/" + ((!this.bAlias) ? this.sNdId :  this.sNdAls));
											if (this.oDt != null) {
												this.sVl = (this.oDt.getAttribute("value") != null) ? unescape(this.oDt.getAttribute("value")) : "";
												this.sVl = escape(this.sVl);
											}
											else {
												if (this.sNdAls != "") {
													this.oDt = this.oXD.selectSingleNode("root/*/" + this.sNdAls);
													if (this.oDt != null) {
														this.sVl = (this.oDt.getAttribute("value") != null) ? unescape(this.oDt.getAttribute("value")) : "";
														this.sVl = escape(this.sVl);
													}
												}
											}
											if (this.sVl != "") {
												this.oDt = this.init.oXDt.selectSingleNode(this.sXPath2 + "/" + this.sNdId);
												if (this.oDt == null) {
													this.oDt = this.init.oXDt.createNode(1,this.sNdId,"");
													this.bExist = false;
												}
												this.oDt.setAttribute("server_value",this.sVl);
												this.oDt.setAttribute("value",this.sVl);
												this.oDt.setAttribute("status","server");
											}
											break;
										case "input-checkbox":
											this.sVl = "";
											this.sVl = (this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : "";
											this.oDt = this.oXD.selectSingleNode("root/*/" + ((!this.bAlias) ? this.sNdId :  this.sNdAls) + "[@value='" + escape(this.sVl.split("::")[0]).replace(/%20/g," ") + "']");
											this.sStts = "false";
											if (this.oDt != null) {
												this.sStts = "true";
												this.bExist = false;
											}
											else {
												if (this.sNdAls != "") {
													this.oDt = this.oXD.selectSingleNode("root/*/" + this.sNdAls + "[@value='" + escape(this.sVl.split("::")[0]).replace(/%20/g," ") + "']");
													if (this.oDt != null) {
														this.sStts = "true";
														this.bExist = false;
													}
												}
											}
											if (this.sVl != "") {
												this.oDt = this.init.oXDt.selectSingleNode(this.sXPath2 + "/" + this.sNdId);
												if (this.oDt == null) {
													this.oDt = this.init.oXDt.createNode(1,this.sNdId,"");
													this.bExist = false;
												}
												this.oDt.setAttribute("server_value",((this.sStts == "true") ? escape(this.sVl.split("::")[0]) : escape(this.sVl.split("::")[1])));
												this.oDt.setAttribute("value",((this.sStts == "true") ? escape(this.sVl.split("::")[0]) : escape(this.sVl.split("::")[1])));
												this.oDt.setAttribute("checked",this.sStts);
												this.oDt.setAttribute("status","server");
											}
											break;
										case "input-radio":
											this.sVl = "";
											this.sVl = (this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : "";
											this.sVl = escape(this.sVl).replace(/%20/g," ");
											this.oDt = this.oXD.selectSingleNode("root/*/" + ((!this.bAlias) ? this.sNdId :  this.sNdAls) + "[@value='" + this.sVl + "']");
											this.sStts = "false";
											if (this.oDt != null) {
												this.sStts = "true";
											}
											else {
												if (this.sNdAls != "") {
													this.oDt = this.oXD.selectSingleNode("root/*/" + this.sNdAls + "[@value='" + this.sVl + "']");
													if (this.oDt != null) {
														this.sStts = "true";
													}
												}
											}
											if (this.sVl != "") {
												if (this.sStts != "false") {
													this.sVl = escape(unescape(this.sVl));
													this.oDt = this.init.oXDt.selectSingleNode(this.sXPath2 + "/" + this.sNdId);
													if (this.oDt == null) {
														this.oDt = this.init.oXDt.createNode(1,this.sNdId,"");
														this.bExist = false;
													}
													this.oDt.setAttribute("server_value",this.sVl);
													this.oDt.setAttribute("value",this.sVl);
													this.oDt.setAttribute("checked",this.sStts);
													this.oDt.setAttribute("status","server");
												}
											}
											break;
										case "select-one":
										case "select-multiple":
											this.sFlds = (this.oNd.getAttribute("fields") != null) ? this.oNd.getAttribute("fields") : "";
											this.oDts = this.oXD.selectNodes("//" + ((!this.bAlias) ? this.sNdId :  this.sNdAls));
											if (this.oDts[0] != null) {
												for (var iL = 0; iL < this.oDts.length; iL++) {
													this.oDt = this.oDts[iL];
													this.sVl = (this.oDt.getAttribute("value") != null) ? escape(unescape(this.oDt.getAttribute("value"))) : "";
													this.oDt.setAttribute("value",this.sVl);
												}
											}
											this.oDts = this.oNd.children;
											for (var iL = 0; iL < this.oDts.length; iL++) {
												this.sStts = "false";
												this.sVl = (this.oDts[iL].getAttribute("value") != null) ? this.oDts[iL].getAttribute("value") : "";
												this.sFieldValue = unescape(this.sVl);
												if (this.sFlds.indexOf("|") != -1) {
													this.sVl = escape(this.sFieldValue);
												}
												this.oDt = this.oXD.selectSingleNode("//" + ((!this.bAlias) ? this.sNdId :  this.sNdAls) + "[@value='" + this.sVl + "']");
												if (this.oDt != null) {
													this.sStts = "true";
												}
												else {
													if (this.sNdAls != "") {
														this.oDt = this.oXD.selectSingleNode("//" + this.sNdAls + "[@value='" + this.sVl + "']");
														if (this.oDt != null) {
															this.sStts = "true";
														}
													}
												}
 												this.oDt = this.init.oXDt.selectSingleNode(this.sXPath2 + "/" + this.sNdId + "[@value='" + this.sVl + "']");
												this.bExist = true;
												if (this.oDt == null) {
													this.oDt = this.init.oXDt.createNode(1,this.sNdId,"");
													this.bExist = false;
												}
												this.sVl = escape(unescape(this.sVl));
												this.oDt.setAttribute("server_value",this.sVl);
												this.oDt.setAttribute("value",this.sVl);
												this.oDt.setAttribute("selected",this.sStts);
												this.oDt.setAttribute("status","server");
												if (!this.bExist) {
													this.oFrmRoot.appendChild(this.oDt);
												}
											}
											this.bExist = true;
											break;
									}
									if (!this.bExist) {

										this.oFrmRoot.appendChild(this.oDt);
									}
								}
							}
						}

					}
				}
			}
		}

		this.oXD = null;
		this.oFrm = null;
		this.sFrmId = null;
		this.sXPath = null;
		this.oNd = null;
		this.sFrmLn = null;
		this.sPK = null;
		this.sLnk = null;
		this.oFld = null;
		this.oNds = null;
		this.oRoot = null;
		this.sNdId = null;
		this.sNdAls = null;
		this.sNdOper = null;
		this.sNdFrmId = null;
		this.sXPath2 = null;
		this.oFrmRoot = null;
		this.oDt = null;
		this.bAlias = null;
		this.bExist = null;
		this.sTgNm = null;
		this.sVl = null;
		this.sStts = null;
		this.sFlds = null;
		this.oDts = null;
		this.sFieldValue = null;

}

UltraCargo.prototype.getXml = function(psFormId,psOperation) {
		this.bGroupData = (arguments[2] != null) ? (arguments[2] == true) ? true : false : true;
		this.sXPathAux = (arguments[3] != null) ? arguments[3] : "";
		this.updateData();
		this.init.form = psFormId;
		this.sResp = this.extractXmlData(psOperation,this.bGroupData);
		if (this.sXPathAux != "") 
		{
			this.oXD = new XMLHttpRequest();
			this.oXD.loadXML(this.sResp);
			////TODO: FABIO - CHECK XML VIA PARSER
			if (true) {
				this.oXAux = new XMLHttpRequest();
				this.oXAux.loadXML("<root/>");
				this.oRoot = this.oXAux.documentElement;
				this.oNds = this.oXD.selectNodes(this.sXPathAux);
				for (var iN =0; iN < this.oNds.length; iN++) 
				{
					this.oRoot.appendChild(this.oNds[iN]);
				}
				this.oNd = this.oXD.selectSingleNode("root/operation");
				if (this.oNd != null) {
					this.oRoot.appendChild(this.oNd);
				}
				this.sResp = this.oXAux.xml;
			}
		}
		return this.sResp;

		this.bGroupData = null;
		this.sXPathAux = null;
		this.sResp = null;
		this.oXD = null;
		this.oXAux = null;
		this.oRoot = null;
		this.oNds = null;
		this.oNd = null;

}

UltraCargo.prototype.extractXmlData = function(psOperation) 
{
		this.bGroupData = (arguments[1] != null) ? (arguments[1] == true) ? true : false : true;
		this.bAdd = false;
		if (psOperation != "") 
		{
			this.oXD = new XMLHttpRequest();
			this.oXD.loadXML("<root/>");
			this.oRoot = this.oXD.document.documentElement;
			this.bBrf = true;
			if (this.bGroupData) 
			{
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.init.form);
				if (this.oNd != null) 
				{
					this.oFrmRoot = this.oXD.createNode(1,this.init.form,"");
					this.oFrmRoot.setAttribute("tipo",((this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : ""));
				}
				else 
				{
					this.bBrf = false;
				}
			}
			this.oFrmPk = "";
			if (this.bBrf) 
			{
				this.oNds = this.init.oXD.selectNodes("//*[@tag!='' and @operation!='']");
				for (var iN = 0; iN < this.oNds.length; iN++) {
					this.oElmnt = this.oNds[iN];
					this.oElmntId = this.oElmnt.nodeName;
					this.sElmntTag = this.oElmnt.getAttribute("tag");
					this.sElmntAls = this.oElmnt.getAttribute("alias");
					this.sElmntOper = this.oElmnt.getAttribute("operation");
					if (("," + this.sElmntOper + ",").indexOf("," + psOperation + ",") != -1) {
						this.bAdd = true;
						this.sFrmId = this.oNds[iN].parentNode.nodeName;
						this.oFrmPk = "";
						this.oFld = document.getElementById(this.sFrmId);
						if (this.oFld != null) {
							this.oFrmPk = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
						}
						this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
						if (this.oNd != null) {
							if (!this.bGroupData) {
								this.oFrmRoot = this.oXD.selectSingleNode("root/" + this.sFrmId);
								if (this.oFrmRoot == null) {
									this.oFrmRoot = this.oXD.createNode(1,this.sFrmId,"");
									this.oFrmRoot.setAttribute("tipo",((this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : ""));
								}
							}
							this.oNdId = this.oElmntId;
							if (this.sElmntAls != "") {
								this.oNdId = this.sElmntAls;
							}
							this.oNewNd = null;
							switch(this.sElmntTag) {
								case "input-checkbox":
									this.sNdVl = "";
									this.sNdSrvVl = "";
									this.sNdChk = "false";
									this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
									this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId);
									if (this.oNd != null) {
										this.sNdSrvVl = (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "";
										this.sNdChk = (this.oNd.getAttribute("checked") != null) ? this.oNd.getAttribute("checked") : "false";
									}
									this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId + "/" + this.oElmntId);
									if (this.oNd != null) {
										this.sNdVl = (this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : "::";
										if (this.sNdChk == "true") {
											this.sNdVl = this.sNdVl.split("::")[0];
										}
										else {
											this.sNdVl = this.sNdVl.split("::")[1];
										}
									}
									this.oNewNd.setAttribute("value",escape(this.sNdVl));
									this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
									break;
								case "input-radio":
									this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@checked='true']");
									if (this.oNd != null) {
										this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
										this.sNdVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
										this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@server_value!='']");
										this.sNdSrvVl = (this.oNd != null) ? (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "" : "";
										this.oNewNd.setAttribute("value",this.sNdVl);
										this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
										this.oFrmRoot.appendChild(this.oNewNd);
									}
									break;
								case "select-one":
								case "select-multiple":
									this.oItems = this.init.oXDt.selectNodes("root/" + this.sFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@selected='true']");
									if (this.oItems[0] != null) {
										for (var iI = 0; iI < this.oItems.length; iI++) {
											this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
											this.sNdVl = (this.oItems[iI].getAttribute("value") != null) ? this.oItems[iI].getAttribute("value") : "";
											this.sNdSrvVl = (this.oItems[iI].getAttribute("server_value") != null) ? this.oItems[iI].getAttribute("server_value") : "";
											this.sTxt = this.oItems[iI].text;
											this.oNewNd.setAttribute("value",this.sNdVl);
											this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
											this.oNewNd.text = this.sTxt;
											this.oFrmRoot.appendChild(this.oNewNd);
										}
									}
									break;
								case "input-file":
								case "input-hidden":
								case "input-text":
								case "textarea":
									this.sNdVl = "";
									this.sNdSrvVl = "";
									this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
									this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId);
									if (this.oNd != null) {
										this.sNdVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
										this.sNdSrvVl = (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "";
									}
									this.oNewNd.setAttribute("value",this.sNdVl);
									this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
									break;
							}
							if (this.oNewNd != null) {
								if (this.bGroupData) {
									switch(this.sElmntTag) {
										case "input-file":
										case "input-hidden":
										case "input-text":
										case "input-checkbox":
										case "textarea":
											this.oNd = this.oXD.selectSingleNode("root/" + this.init.form + "/" + this.oElmntId);
											if (this.oNd != null) {
												this.oFrmRoot.replaceChild(this.oNewNd,this.oNd);
											}
											else {
												this.oFrmRoot.appendChild(this.oNewNd);	
											}
											break;
									}
								}
								else {
									this.oFrmRoot.appendChild(this.oNewNd);
								}
							}
							if (!this.bGroupData) {
								this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/loginatu");
								if (this.oNd == null) {
									this.oNd = this.oXD.createNode(1,"loginatu","");
									this.oNd.setAttribute("value",this.init.sLoginAtu);
									this.oFrmRoot.appendChild(this.oNd);
									this.oNd = this.oXD.createNode(1,"loginentidade","");
									this.oNd.setAttribute("value",this.init.sIdEntidade);
									this.oFrmRoot.appendChild(this.oNd);
									this.oNd = this.oXD.createNode(1,"loginfilial","");
									this.oNd.setAttribute("value",this.init.sIdFilial);
									this.oFrmRoot.appendChild(this.oNd);
								}
								this.oRoot.appendChild(this.oFrmRoot);
							}
						}
					}
				}
				if (this.bAdd && this.bGroupData) {
					if (this.oFrmRoot != null) {
						this.oNd = this.oXD.selectSingleNode("root/" + this.init.form + "/loginatu");
						if (this.oNd == null) {
							this.oNd = this.oXD.createNode(1,"loginatu","");
							this.oNd.setAttribute("value",this.init.sLoginAtu);
							this.oFrmRoot.appendChild(this.oNd);
							this.oNd = this.oXD.createNode(1,"loginentidade","");
							this.oNd.setAttribute("value",this.init.sIdEntidade);
							this.oFrmRoot.appendChild(this.oNd);
							this.oNd = this.oXD.createNode(1,"loginfilial","");
							this.oNd.setAttribute("value",this.init.sIdFilial);
							this.oFrmRoot.appendChild(this.oNd);
						}
						this.oRoot.appendChild(this.oFrmRoot);
					}
				}
				this.oNds = this.init.oXD.selectNodes("//*[@tipo='table' and @operation!='' and @execute='server']");
				for (var iN = 0; iN < this.oNds.length; iN++) {
					this.oFrm = this.oNds[iN];
					this.sFrmId = this.oFrm.nodeName;
					this.sFrmOper = this.oFrm.getAttribute("operation");
					this.sFrmExec = this.oFrm.getAttribute("execute");
					if (("," + this.sFrmOper + ",").indexOf("," + psOperation + ",") != -1) {
						this.oFrmRoot = this.oXD.selectSingleNode("root/" + this.sFrmId);
						if (this.oFrmRoot == null) {
							this.oFrmRoot = this.oXD.createNode(1,this.sFrmId,"");
							this.oFrmRoot.setAttribute("tipo","table");
							this.oRoot.appendChild(this.oFrmRoot);
							this.oFrmRoot = this.oXD.selectSingleNode("root/" + this.sFrmId);
						}
						this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/loginatu");
						if (this.oNd == null) {
							this.oNd = this.oXD.createNode(1,"loginatu","");
							this.oNd.setAttribute("value",this.init.sLoginAtu);
							this.oFrmRoot.appendChild(this.oNd);
							this.oNd = this.oXD.createNode(1,"loginentidade","");
							this.oNd.setAttribute("value",this.init.sIdEntidade);
							this.oFrmRoot.appendChild(this.oNd);
							this.oNd = this.oXD.createNode(1,"loginfilial","");
							this.oNd.setAttribute("value",this.init.sIdFilial);
							this.oFrmRoot.appendChild(this.oNd);
						}
						if (this.oFrmRoot != null) {
							this.oElmnts = this.init.oXD.selectNodes("root/*[@tipo='form' and @linked='" + this.sFrmId + "']/*");
							for (var iE = 0; iE < this.oElmnts.length; iE++) {
								this.oElmnt = this.oElmnts[iE];
								this.oElmntId = this.oElmnt.nodeName;
								this.sElmntTag = this.oElmnt.getAttribute("tag");
								this.sElmntAls = this.oElmnt.getAttribute("alias");
								this.sElmntOper = this.oElmnt.getAttribute("operation");
								this.sElmntFrmId = this.oElmnts[iN].parentNode.nodeName;
								this.oFrmPk = "";
								this.oFld = document.getElementById(this.sElmntFrmId);
								if (this.oFld != null) {
									this.oFrmPk = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
								}
								this.oNdId = this.oElmntId;
								if (this.sElmntAls != "") {
									this.oNdId = this.sElmntAls;
								}
								this.oNewNd = null;
								switch(this.sElmntTag) {
									case "input-checkbox":
										this.sNdVl = "";
										this.sNdSrvVl = "";
										this.sNdChk = "false";
										this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
										this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sElmntFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId);
										if (this.oNd != null) {
											this.sNdSrvVl = (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "";
											this.sNdChk = (this.oNd.getAttribute("checked") != null) ? this.oNd.getAttribute("checked") : "false";
										}
										this.oNd = this.init.oXD.selectSingleNode("root/" + this.sElmntFrmId + "/" + this.oElmntId);
										if (this.oNd != null) {
											this.sNdVl = (this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : "::";
											if (this.sNdChk == "true") {
												this.sNdVl = this.sNdVl.split("::")[0];
											}
											else {
												this.sNdVl = this.sNdVl.split("::")[1];
											}
										}
										this.oNewNd.setAttribute("value",escape(this.sNdVl));
										this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
										break;
									case "input-radio":
										this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sElmntFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@checked='true']");
										if (this.oNd != null) {
											this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
											this.sNdVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
											this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sElmntFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@server_value!='']");
											this.sNdSrvVl = (this.oNd != null) ? (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "" : "";
											this.oNewNd.setAttribute("value",this.sNdVl);
											this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
											this.oFrmRoot.appendChild(this.oNewNd);
										}
										break;
									case "select-one":
									case "select-multiple":
										this.oItems = this.init.oXDt.selectNodes("root/" + this.sElmntFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId + "[@selected='true']");
										if (this.oItems[0] != null) {
											for (var iI = 0; iI < this.oItems.length; iI++) {
												this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
												this.sNdVl = (this.oItems[iI].getAttribute("value") != null) ? this.oItems[iI].getAttribute("value") : "";
												this.sNdSrvVl = (this.oItems[iI].getAttribute("server_value") != null) ? this.oItems[iI].getAttribute("server_value") : "";
												this.sTxt = this.oItems[iI].text;
												this.oNewNd.setAttribute("value",this.sNdVl);
												this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
												this.oNewNd.text = this.sTxt;
												this.oFrmRoot.appendChild(this.oNewNd);
											}
										}
										break;
									case "input-file":
									case "input-hidden":
									case "input-text":
									case "textarea":
										this.sNdVl = "";
										this.sNdSrvVl = "";
										this.oNewNd = this.oXD.createNode(1,this.oNdId,"");
										this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sElmntFrmId + "[@pk=\"" + this.oFrmPk + "\"]/" + this.oElmntId);
										if (this.oNd != null) {
											this.sNdVl = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
											this.sNdSrvVl = (this.oNd.getAttribute("server_value") != null) ? this.oNd.getAttribute("server_value") : "";
										}
										this.oNewNd.setAttribute("value",this.sNdVl);
										this.oNewNd.setAttribute("server_value",this.sNdSrvVl);
										break;
								}
								if (this.oNewNd != null) {
									if (this.bGroupData) {
										switch(this.sElmntTag) {
											case "input-file":
											case "input-hidden":
											case "input-text":
											case "input-checkbox":
											case "textarea":
												this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/" + this.oElmntId);
												if (this.oNd != null) {
													this.oFrmRoot.replaceChild(this.oNewNd,this.oNd);
												}
												else {
													this.oFrmRoot.appendChild(this.oNewNd);	
												}
												break;
										}
									}
									else {
										this.oFrmRoot.appendChild(this.oNewNd);
									}
								}
							}
						}
						this.oFraNds = this.init.oXD.selectNodes("//*[@tipo='table' and @linked='" + this.sFrmId + "']");
						for (var iNd = 0; iNd < this.oFraNds.length; iNd++) {
							this.oFra = this.oFraNds[iNd];
							this.sFraId = this.oFra.nodeName;
							this.sFraOper = this.oFra.getAttribute("operation");
							this.sFraExec = this.oFra.getAttribute("execute");
							this.oFraRoot = this.oXD.selectSingleNode("root/" + this.sFraId);
							if (this.oFraRoot == null) {
								this.oFraRoot = this.oXD.createNode(1,this.sFraId,"");
								this.oFraRoot.setAttribute("tipo","table");
							}
							this.oRws = this.init.oXDt.selectNodes("root/" + this.sFraId + "/row");
							for (var iR = 0; iR < this.oRws.length; iR++) {
								this.oNd = this.oRws[iR].selectSingleNode("loginatu");
								this.bExist = (this.oNd == null);
								if (this.bExist) {
									this.oNd = this.init.oXDt.createNode(1,"loginatu","");
									this.oNd.setAttribute("value",this.init.sLoginAtu);
									this.oRws[iR].appendChild(this.oNd);
									this.oNd = this.init.oXDt.createNode(1,"loginentidade","");
									this.oNd.setAttribute("value",this.init.sIdEntidade);
									this.oRws[iR].appendChild(this.oNd);
									this.oNd = this.init.oXDt.createNode(1,"loginfilial","");
									this.oNd.setAttribute("value",this.init.sIdFilial);
									this.oRws[iR].appendChild(this.oNd);
								}
								this.oRw = this.oRws[iR].cloneNode(true);
								this.sStts = this.oRw.getAttribute("status");
								switch(this.sStts) {
									case "chk_ins":
									case "sel_ins":
										this.sStts = "ins";
										break;
									case "srv_upd":
										this.sStts = "upd";
										break;
									case "chk_del":
									case "sel_del":
									case "srv_del":
										this.sStts = "del";
										break;
								}

								this.oRw.setAttribute("status",this.sStts);
								this.oFraRoot.appendChild(this.oRw);
							}
							this.oRoot.appendChild(this.oFraRoot);
						}
					}
				}
				this.oNds = this.init.oXD.selectNodes("//*[@tipo='table' and @execute='local']");
				for (var iN = 0; iN < this.oNds.length; iN++) {
					this.oFrm = this.oNds[iN];
					this.sFrmId = this.oFrm.nodeName;
					this.sFrmOper = this.oFrm.getAttribute("operation");
					this.sFrmExec = this.oFrm.getAttribute("execute");
					if (("," + this.sFrmOper + ",").indexOf("," + psOperation + ",") != -1) {
						this.oFrmRoot = this.oXD.selectSingleNode("root/" + this.sFrmId);
						if (this.oFrmRoot == null) {
							this.oFrmRoot = this.oXD.createNode(1,this.sFrmId,"");
							this.oFrmRoot.setAttribute("tipo","table");
						}
						this.oRws = this.init.oXDt.selectNodes("root/" + this.sFrmId + "/row");
						for (var iR = 0; iR < this.oRws.length; iR++) {
							this.oNd = this.oRws[iR].selectSingleNode("loginatu");
							this.bExist = (this.oNd == null);
							if (this.bExist) {
								this.oNd = this.init.oXDt.createNode(1,"loginatu","");
								this.oNd.setAttribute("value",this.init.sLoginAtu);
								this.oRws[iR].appendChild(this.oNd);
								this.oNd = this.init.oXDt.createNode(1,"loginentidade","");
								this.oNd.setAttribute("value",this.init.sIdEntidade);
								this.oRws[iR].appendChild(this.oNd);
								this.oNd = this.init.oXDt.createNode(1,"loginfilial","");
								this.oNd.setAttribute("value",this.init.sIdFilial);
								this.oRws[iR].appendChild(this.oNd);
							}
							this.oRw = this.oRws[iR].cloneNode(true);
							this.sStts = this.oRw.getAttribute("status");
							switch(this.sStts) {
								case "chk_ins":
									this.sStts = "ins";
									break;
								case "srv_upd":
									this.sStts = "upd";
									break;
								case "chk_del":
								case "srv_del":
									this.sStts = "del";
									break;
							}
							this.oRw.setAttribute("status",this.sStts);
							this.oFrmRoot.appendChild(this.oRw);
						}
						this.oRoot.appendChild(this.oFrmRoot);
					}
				}
				this.oNds = this.oXD.selectNodes("root/*");
				for (var iN = 0; iN < this.oNds.length; iN++) 
				{
					this.oFrm = this.oNds[iN];
					this.sFrmId = this.oFrm.nodeName;
					this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
					if (this.oNd != null) {
						this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
						this.sPgSiz = (this.oNd.getAttribute("page_size") != null) ? this.oNd.getAttribute("page_size") : 10;
						this.sPgNum = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : 1;
						
						
						
						if (this.sTipo == "table") 
						{
							this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId + "/page_size");
							if (this.oNd == null) 
							{
								this.oNd = this.oXD.createNode(1,"page_size","");
								this.oNd.textContent = this.sPgSiz;
								this.oFrm.appendChild(this.oNd);
								this.oNd = this.oXD.createNode(1,"page_number","");
								this.oNd.textContent = this.sPgNum;
								this.oFrm.appendChild(this.oNd);
							}
						}
					}
				}
			}
			this.oNd = this.oXD.createNode(1,"operation","");
			this.oNd.setAttribute("value",psOperation);
			this.oRoot.appendChild(this.oNd);
			return this.oXD.xml();
		}
		this.bGroupData = null;
		this.bAdd = null;
		this.oXD = null;
		this.oRoot = null;
		this.bBrf = null;
		this.oNd = null;
		this.oFrmRoot = null;
		this.oFrmPk = null;
		this.oNds = null;
		this.oElmnt = null;
		this.oElmntId = null;
		this.sElmntTag = null;
		this.sElmntAls = null;
		this.sElmntOper = null;
		this.bAdd = null;
		this.sFrmId = null;
		this.oFld = null;
		this.oNdId = null;
		this.oNewNd = null;
		this.sNdVl = null;
		this.sNdSrvVl = null;
		this.sNdChk = null;
		this.oItems = null;
		this.sTxt = null;
		this.oFrm = null;
		this.sFrmOper = null;
		this.sFrmExec = null;
		this.oElmnts = null;
		this.sElmntFrmId = null;
		this.oFraNds = null;
		this.oFra = null;
		this.sFraId = null;
		this.sFraOper = null;
		this.sFraExec = null;
		this.oFraRoot = null;
		this.oRws = null;
		this.oRw = null;
		this.sStts = null;
		this.sTipo = null;
		this.sPgSiz = null;
		this.sPgNum = null;
}

UltraCargo.prototype.popUp = function() 
{
		if(bln_pop == false){
			return false;
		}
		bln_pop = false;
		this.sUrl = self.location.toString().substring(0,(self.location.toString().lastIndexOf("/") + 1));
		this.sPopUpProcessPage = (arguments[0] != null) ? arguments[0] : "";
		this.sXML = (arguments[1] != null) ? arguments[1] : "";
		this.iWidth = (arguments[2] != null) ? arguments[2] : 655;
		this.iHeight = (arguments[3] != null) ? arguments[3] : 385;
		this.sScroll = (arguments[4] != null) ? (arguments[4] == true) ? "yes" : "no" : "yes";
		this.bFill = (arguments[5] != null) ? (arguments[5] == true) ? true : false : false;
		this.popUp.sXml = "";
		this.sXmlPop = "";
		
		this.TipoPop = arguments[6];
		this.XML_NOTIN = arguments[7];
		this.Chave_NOTIN = arguments[8];
		
		
		if(this.TipoPop ==null)
		{
			this.TipoPop  = '' 
		}
		
		if (this.sPopUpProcessPage != null) 
		{
			this.asXML = new Array();
			this.asXML[0] = this.sXML;
			if(this.TipoPop =='NOTIN')
			{
				this.XML_NOTIN.value		=  this.asXML  + '||' +  this.XML_NOTIN.value  +  '||' + this.Chave_NOTIN;
				this.vwArgumentos	=   this.XML_NOTIN;
				this.sResp = showModalDialog(this.sUrl + this.sPopUpProcessPage,this.vwArgumentos,"center=yes;help:no;dialogWidth=" + this.iWidth + "px;dialogHeight=" + this.iHeight + "px;status=no;scroll=" + this.sScroll);
			}
			else
			{
				this.sResp = showModalDialog(this.sUrl + this.sPopUpProcessPage,this.asXML,"center=yes;help:no;dialogWidth=" + this.iWidth + "px;dialogHeight=" + this.iHeight + "px;status=no;scroll=" + this.sScroll);
			}
			
			if (this.sResp != null) 
			{
				this.sXmlPop = this.sResp;
				this.oXD = new XMLHttpRequest();
				this.oXD.loadXML(this.sResp);
				this.popUp.sXml = this.sResp;
				//TODO: FABIO - CHECK XML VIA PARSER
				if (true) 
				{
					if (this.init.oPopUp != null) 
					{
						this.sElmntId = (this.init.oPopUp.getAttribute("id") != null) ? this.init.oPopUp.getAttribute("id") : "";
						if (this.sElmntId != "") 
						{
							this.oNd = this.oXD.selectSingleNode("//" + this.sElmntId);
							if (this.oNd != null) 
							{
								this.init.oPopUp.setAttribute("value",((this.oNd.getAttribute("value") != null) ? unescape(this.oNd.getAttribute("value")) : ""));
							}
						}
					}
					else if (this.init.sPopUp != "") 
					{
						if (!this.bFill) 
						{
							this.oNd = this.init.oXD.selectSingleNode("root/" + this.init.sPopUp);
							if (this.oNd != null) {
								this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
								switch(this.sTipo) 
								{
									case "form":
										this.oFrm = document.getElementById(this.init.sPopUp);
										if (this.oFrm != null) {
											this.oNds = this.oXD.selectNodes("//row/*");
											if (this.oNds[0] != null) {
												for (var iN = 0; iN < this.oNds.length; iN++) {
													this.oNd = this.oNds[iN];
													this.sNdId = this.oNd.nodeName;
													this.sNodeValue = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
													this.oFld = this.oFrm.item(this.sNdId);
													if (this.oFld != null) {
														this.oDt = this.init.oXD.selectSingleNode("root/" + this.init.sPopUp + "/" + this.sNdId);
														if (this.oDt != null) {
															this.sTgNm = (this.oDt.getAttribute("tag") != null) ? this.oDt.getAttribute("tag") : "";
															switch(this.sTgNm) {
																case "input-file":
																case "input-hidden":
																case "input-text":
																case "textarea":
																case "select-one":
																	this.oFld.setAttribute("value",unescape(this.sNodeValue));
																	break;
																case "input-checkbox":
																	this.sVl = (this.oDt.getAttribute("value") != null) ? unescape(this.oDt.getAttribute("value")) : "";
																	if ((this.sVl.split("::")[0]) == unescape(this.sNodeValue)) {
																		this.oFld.checked = true;
																	}
																	break;
																case "input-radio":
																	for (var iI = 0; iI < this.oFld.length; iI++) {
																		this.sVl = (this.oFld[iI].getAttribute("value") != null) ? this.oFld[iI].getAttribute("value") : "";
																		if (escape(this.sVl) == this.sNodeValue) {
																			this.oFld[iI].checked = true;
																		}
																	}
																	break;
																case "select-multiple":
																	for (var iI = 0; iI < this.oFld.length; iI++) {
																		this.sVl = (this.oFld[iI].getAttribute("value") != null) ? this.oFld[iI].getAttribute("value") : "";
																		if (escape(this.sVl) == this.sNodeValue) {
																			this.oFld[iI].selected = true;
																		}
																	}
																	break;
															}
														}
													}
												}
											}
										}
										break;
									case "table":
										this.oXDt = new XMLHttpRequest();
										this.oXDt.loadXML("<root/>");
										this.oRoot = this.oXDt.documentElement;
										this.oFrmRoot = this.oXDt.createNode(1,this.init.sPopUp,"");
										this.oFrmRoot.setAttribute("tipo","table");
										this.oNds = this.oXD.selectNodes("//row/*");
										if (this.oNds[0] != null) {
											for (var iN = 0; iN < this.oNds.length; iN++) {
												this.oFrmRoot.appendChild(this.oNds[iN].cloneNode(true));
											}
										}
										this.oRoot.appendChild(this.oFrmRoot);
										this.oFras = document.getElementsByTagName("IFRAME");
										this.sResp = "";
										for (var iF = 0; iF < this.oFras.length; iF++) {
											this.oFra = this.oFras[iF];
											this.sFraId = (this.oFra.getAttribute("id") != null) ? this.oFra.getAttribute("id") : "";
											if (this.sFraId == this.init.sPopUp) {
												self.frames[iF].loadRow(this.oXDt.xml);
											}
										}
										break;
								}
							}
						}
						else 
						{
							

							this.oNd = this.init.oXD.selectSingleNode("root/" + this.init.sPopUp);
							if (this.oNd != null) {
								this.sLnk = (this.oNd.getAttribute("linked") != null) ? this.oNd.getAttribute("linked") : "";
								this.sPK = (this.oNd.getAttribute("pk") != null) ? this.oNd.getAttribute("pk") : "";
								this.sFK = (this.oNd.getAttribute("fk") != null) ? this.oNd.getAttribute("fk") : "";
								this.sHF = (this.oNd.getAttribute("hidden") != null) ? this.oNd.getAttribute("hidden") : "";
								this.sPg = (this.oNd.getAttribute("page") != null) ? this.oNd.getAttribute("page") : "";
								this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
								this.sDupl = (this.oNd.getAttribute("duplicar") != null) ? this.oNd.getAttribute("duplicar") : "";
								
								 
								
								
								
								switch(this.sTipo) 
								{
									case "table":
										this.sKeys = this.sPK;
										this.sFlds = "";
										this.oNds = this.init.oXD.selectNodes("root/" + this.init.sPopUp + "/row/*[@index!='']");
										
										for (var iN = 0; iN < this.oNds.length; iN++) 
										{
											this.oNd = this.oNds[iN];
											this.sPK += "|" + this.oNd.nodeName;
											this.sFlds += (this.sFlds != "") ? ("|" + this.oNd.nodeName) : this.oNd.nodeName;
										}
										if (this.sHF != "") 
										{
											this.sFlds += (this.sFlds != "") ? ("|" + this.sHF) : this.sHF;
										}
										this.oRws = this.oXD.selectNodes("//row");
										if (this.oRws[0] != null) 
										{
											this.oCls = this.oRws[0].children;
											this.sFlds = "";
											for (var iC = 0; iC < this.oCls.length; iC++) 
											{
												this.sFlds += this.oCls[iC].nodeName + "|";
											}
											this.asFlds = this.sFlds.split("|");
											this.sFlds = "";
											for (var iC = 0; iC < this.asFlds.length; iC++) 
											{
												if (("|" + this.sPK + "|").indexOf("|" + this.asFlds[iC] + "|") == -1) {
													this.sFlds += (this.sFlds != "") ? "|" + this.asFlds[iC] : this.asFlds[iC];
												}
											}
											this.sFlds = (this.sFlds.indexOf("|") != -1) ? this.sFlds.substring(0,(this.sFlds.lastIndexOf("|") - 1)) : "";
											this.asFlds = this.sFlds.split("|");
											this.sFlds = "";
											for (var iC = 0; iC < this.asFlds.length; iC++) 
											{
												if (this.asFlds[iC] != "") 
												{
													this.oNds = this.oXD.selectNodes("//" + this.asFlds[iC]);
													if (this.oNds[0] != null) 
													{
														for (var iN = 0; iN < this.oNds.length; iN++) 
														{
															this.oNds[iN].parentNode.removeChild(this.oNds[iN]);
															
														}
													}
												}
											}
										}
										this.sFlds = "";
										this.oNds = this.init.oXD.selectNodes("root/" + this.init.sPopUp + "/row/*[@index!='']");
										for (var iN = 0; iN < this.oNds.length; iN++) {
											this.oNd = this.oNds[iN];
											this.sPK += "|" + this.oNd.nodeName;
											this.sFlds += (this.sFlds != "") ? ("|" + this.oNd.nodeName) : this.oNd.nodeName;
										}
										if (this.sHF != "") {
											this.sFlds += (this.sFlds != "") ? ("|" + this.sHF) : this.sHF;
										}
										this.sFlds = (this.sKeys != "") ? (this.sKeys + "|" + this.sFlds) : this.sFlds;
										this.asFlds = this.sFlds.split("|");
										this.sFlds = "";
										for (var iC = 0; iC < this.asFlds.length; iC++) {
											this.oNd = this.oXD.selectSingleNode("//" + this.asFlds[iC]);
											if (this.oNd == null) {
												this.sFlds += (this.sFlds != "") ? ("|" + this.asFlds[iC]) : this.asFlds[iC];
											}
										}
										this.asFlds = this.sFlds.split("|");
										for (var iC = 0; iC < this.asFlds.length; iC++) 
										{
											if (this.asFlds[iC] != "") 
											{
												this.oNd = this.oXD.createNode(1,this.asFlds[iC],"");
												this.oNd.setAttribute("value","");
												this.oNd.setAttribute("server_value","");
												this.oNd.setAttribute("pk",((("|" + this.sKeys + "|").indexOf("|" + this.asFlds[iC] + "|") != -1) ? "true" : "false"));
												this.oRws = this.oXD.selectNodes("//row");
												if (this.oRws[0] != null) 
												{
													for (var iR = 0; iR < this.oRws.length; iR++) 
													{
														this.oRws[iR].appendChild(this.oNd.cloneNode(true));
													}
												}
											}
										}
										this.sPKElement = "";
										this.oFld = document.getElementById(this.init.sPopUp);
										if (this.oFld != null) {
											this.sPKElement = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
										}
										this.sXPath = "root/" + this.init.sPopUp + "[@pk=\"" + this.sPKElement + "\" and @page='" + this.sPg + "']";
										this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
										if (this.oNd == null) {
											this.createNode(2,this.init.sPopUp,"root","",
												"linked",this.sLnk,
												"pk",this.sPKElement,
												"page",this.sPg);
										}
										if (this.sFK.indexOf(".") != -1) 
										{
											this.asFK = this.sFK.split("|");
											for (var iF = 0; iF < this.asFK.length; iF++) {
												if (this.asFK[iF].indexOf(".") != -1) {
													this.oFld = document.getElementById(this.asFK[iF].split(".")[0]);
													if (this.oFld != null) {
														this.oElmnt = this.oFld.item(this.asFK[iF].split(".")[1]);
														if (this.oElmnt != null) {
															this.sVl = (this.oElmnt.getAttribute("value") != null) ? this.oElmnt.getAttribute("value") : "";
															this.oNd = this.init.oXD.selectSingleNode("//" + this.asFK[iF].split(".")[0] + "/" + this.asFK[iF].split(".")[1] + "[@tag='input-checkbox']");
															if (this.oNd != null) {
																this.sVl = unescape(this.oNd.getAttribute("value"));
																this.sVl = escape((this.oElmnt.checked) ? this.sVl.split("::")[0] : this.sVl.split("::")[1]);
															}
															this.oNd = this.oXD.selectSingleNode("//" + this.asFK[iF].split(".")[1]);
															if (this.oNd == null) {
																this.oNd = this.oXD.createNode(1,this.asFK[iF].split(".")[1],"");
																this.oNd.setAttribute("value","");
																this.oNd.setAttribute("server_value","");
																this.oNd.setAttribute("pk","true");
																this.oRws = this.oXD.selectNodes("//row");
																if (this.oRws[0] != null) {
																	for (var iR = 0; iR < this.oRws.length; iR++) {
																		this.oRws[iR].appendChild(this.oNd.cloneNode(true));
																	}
																}
															}
															else {
																this.oNd.setAttribute("pk","true");
															}
															this.oRws = this.oXD.selectNodes("//row/" + this.asFK[iF].split(".")[1] + "[@value='']");
															if (this.oRws[0] != null) {
																for (var iR = 0; iR < this.oRws.length; iR++) {
																	this.oRws[iR].setAttribute("value",this.sVl);
																}
															}
														}
													}
												}
											}
										}
										this.oRws = this.oXD.selectNodes("//row");
										if (this.oRws[0] != null) 
										{
											for (var iR = 0; iR < this.oRws.length; iR++) {
												this.sAuxXPath = "";
												for (var iC = 0; iC < this.sKeys.split("|").length; iC++) 
												{
													this.oCl = this.oRws[iR].selectSingleNode(this.sKeys.split("|")[iC]);
													this.sVl = (this.oCl != null) ? (this.oCl.getAttribute("value") != null) ? this.oCl.getAttribute("value") : "" : "";
													this.sAuxXPath += (this.sAuxXPath != "") ? (" and ./" + this.sKeys.split("|")[iC] + "[@value='" + this.sVl + "']") : ("./" + this.sKeys.split("|")[iC] + "[@value='" + this.sVl + "']");
												}
												
												this.oRw = this.init.oXGr.selectSingleNode("root/" + this.init.sPopUp + "[@pk=\"" + this.sPKElement + "\"]/row[" + this.sAuxXPath + "]");
												if (this.oRw == null) 
												{
													this.oRw = this.init.oXDt.selectSingleNode("root/" + this.init.sPopUp + "[@pk=\"" + this.sPKElement + "\"]/row[" + this.sAuxXPath + "]");
												}
												if (this.oRw != null) 
												{
													if(this.sDupl != 'true')
													{
														this.oRws[iR].parentNode.removeChild(this.oRws[iR]);
													}	
												}
											}
										}
										this.oNd = this.init.oXDt.selectSingleNode(this.sXPath);
										if (this.oNd != null) {
											this.oRws = this.oXD.selectNodes("//row");
											if (this.oRws[0] != null) 
											{
												for (var iR = 0; iR < this.oRws.length; iR++) 
												{
													this.iLn = this.getSequence(this.init.sPopUp);
													this.oRws[iR].setAttribute("status","ins");
													this.oRws[iR].setAttribute("line",this.iLn);
													this.oNd.appendChild(this.oRws[iR]);
												}
											}
										}
										this.generateTableContent(this.init.sPopUp);
										break;
								}
							}
						}
					}
					else if (this.init.sPopUpGrid != "") {
					}
				}
			}
		}
		bln_pop = true;

		this.sUrl = null;
		this.sPopUpProcessPage = null;
		this.sXML = null;
		this.iWidth = null;
		this.iHeight = null;
		this.sScroll = null;
		this.bFill = null;
		this.asXML = null;
		this.sResp = null;
		this.oXD = null;
		this.sElmntId = null;
		this.oNd = null;
		this.sTipo = null;
		this.oFrm = null;
		this.oNds = null;
		this.sNdId = null;
		this.sNodeValue = null;
		this.oFld = null;
		this.oDt = null;
		this.sTgNm = null;
		this.sVl = null;
		this.oXDt = null;
		this.oRoot = null;
		this.oFrmRoot = null;
		this.oFras = null;
		this.oFra = null;
		this.sFraId = null;
		this.sLnk = null;
		this.sPK = null;
		this.sFK = null;
		this.sHF = null;
		this.sPg = null;
		this.sKeys = null;
		this.sFlds = null;
		this.oRws = null;
		this.oCls = null;
		this.asFlds = null;
		this.sPKElement = null;
		this.sXPath = null;
		this.asFK = null;
		this.oElmnt = null;
		this.sAuxXPath = null;
		this.oCl = null;
		this.oRw = null;
		this.iLn = null;
}

UltraCargo.prototype.notExistDataLink = function(psXML) {
		this.oXD = new XMLHttpRequest()
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXD.selectSingleNode("root/*");
			if (this.oNd != null) {
				this.sFrmId = this.oNd.nodeName;
				this.sPK = "";
				this.oFld = document.getElementById(this.sFrmId);
				if (this.oFld != null) 
				{
					this.sPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				}
				this.iLn = (this.oNd.getAttribute("line") != null) ? this.oNd.getAttribute("line") : "";
				if (this.sPK != "") 
				{
					this.sXPath = this.sPK + "/" + this.sFrmId + "/row[@line='" + this.iLn + "']";
				}
				else 
				{
					this.sXPath = "root/" + this.sFrmId + "/row[@line='" + this.iLn + "']";
				}
				this.oNd = this.init.oXDt.selectSingleNode("root/*[@pk=\"" + this.sXPath + "\"]");
				if (this.oNd != null) 
				{
					return true;
				}
			}
		}
		return true;

		this.oXD = null;
		this.oNd = null;
		this.sFrmId = null;
		this.sPK = null;
		this.iLn = null;
		this.sXPath = null;
}

UltraCargo.prototype.saveXmlQuery = function(psXML) 
{
		this.oXDom = new XMLHttpRequest();
		this.oXDom.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNd = this.oXDom.selectSingleNode("root/*");
			if (this.oNd != null) {
				this.sTblId = this.oNd.nodeName;
				this.sTipo = "";
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.sTblId);
				if (this.oNd != null) {
					this.sTipo = (this.oNd.getAttribute("tipo") != null) ? this.oNd.getAttribute("tipo") : "";
				}
				this.sOper = "";
				this.oNd = this.oXDom.selectSingleNode("root/operation");
				if (this.oNd != null) {
					this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
				}
				
				if (this.sTipo == "table") 
				{
					this.iPos = this.init.asQuery.length;
					for (var iA = 0; iA < this.init.asQuery.length; iA++) 
					{
						if (this.init.asQuery[iA][0] == this.sTblId) {
							this.iPos = iA;
						}
					}
					this.init.asQuery[this.iPos] = new Array();
					this.init.asQuery[this.iPos][0] = this.sTblId;
					this.init.asQuery[this.iPos][1] = psXML;
				}
			}
		}

		this.oXDom = null;
		this.oNd = null;
		this.sTblId = null;
		this.sTipo = null;
		this.sOper = null;
		this.iPos = null;
}

UltraCargo.prototype.rebuild = function(psTableId) 
{
		this.sCase = (arguments[1] != null) ? arguments[1] : "";
		this.iPos = -1;
		for (var iA = 0; iA < this.init.asQuery.length; iA++) {
			if (this.init.asQuery[iA][0] == psTableId) {
				this.iPos = iA;
			}
		}
		if (this.iPos != -1) 
		{
			this.sXML = this.init.asQuery[this.iPos][1];
			this.oXD = new XMLHttpRequest()
			this.oXD.loadXML(this.sXML);
			//TODO: FABIO - CHECK XML VIA PARSER
			if (true) {
				this.sFrmId = "";
				this.oNd = this.oXD.selectSingleNode("root/*");
				if (this.oNd != null) {
					this.sFrmId = this.oNd.nodeName;
					this.oFras = document.getElementsByTagName("IFRAME");
					for (var iF = 0; iF < this.oFras.length; iF++) 
					{
						this.oFra = this.oFras[iF];
						this.sFraId = (this.oFra.getAttribute("id") != null) ? this.oFra.getAttribute("id") : "";
						if (this.sFraId == this.sFrmId) 
						{
							self.frames[iF].clearGrid();
						}
					}
					this.oDt = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
					if (this.oDt != null) 
					{
						this.sPgNum = (this.oDt.getAttribute("page") != null) ? this.oDt.getAttribute("page") : "1";
					}
					this.sElementPK = "";
					this.oFld = document.getElementById(this.sFrmId);
					if (this.oFld != null) {
						this.sElementPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
					}
					this.oNd = this.init.oXGr.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sElementPK + "\" and @page='" + this.sPgNum + "']");
					if (this.oNd != null) 
					{
						this.init.oXGr.document.documentElement.removeChild(this.oNd);
						
					}
					this.oNd = this.init.oXDt.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sElementPK + "\" and @page='" + this.sPgNum + "']");
					if (this.oNd != null) 
					{
						this.init.oXDt.document.documentElement.removeChild(this.oNd);
						
					}
				}
				this.oNd = this.oXD.selectSingleNode("root/operation");
				if (this.oNd != null) {
					this.sOper = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
					if (this.sOper != "") {
						this.cascade(psTableId);
						if (this.sCase != "") 
						{
							main(this.sCase,null,this.oXD.xml);
						}
						else {
							this.form(psTableId);
							this.operation(this.sOper);
							this.shwMsg = false;
							this.send(this.oXD.xml);
						}
					}
				}
			}
		}
		this.shwMsg = true;

		this.sCase = null;
		this.iPos = null;
		this.sXML = null;
		this.oXD = null;
		this.sFrmId = null;
		this.oNd = null;
		this.oFras = null;
		this.oFra = null;
		this.sFraId = null;
		this.oDt = null;
		this.sPgNum = null;
		this.sElementPK = null;
		this.oFld = null;
		this.oRoot = null;
		this.sOper = null;
}

UltraCargo.prototype.gSI = function() 
{
}

UltraCargo.prototype.getSelectedItem = function(psXML)
{
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		this.oNXD = this.oXD.selectSingleNode("root/*");
		this.sName = this.oNXD.nodeName;
		this.sLine = this.oNXD.getAttribute("line");
		this.sPage = this.oNXD.getAttribute("page");
		
		this.oNSt = this.init.oXD.selectSingleNode("//" + this.sName);
		if (this.oNSt.getAttribute("tipogrid") == "CHECK_SELE"){
			this.oNXCheck = this.init.oXDt.selectSingleNode("root/" + this.sName + "/row[@line=" + this.sLine + "and @page=" + this.sPage + "]");
			if (this.oNXCheck != null){
				return "<root><" + this.sName + ">" + this.oNXCheck.xml + "</" + this.sName + "></root>";
			}
		}else{
			this.oNXCheck = this.init.oXGr.selectSingleNode("root/" + this.sName + "/row[@line=" + this.sLine + "and @page=" + this.sPage + "]");
			if (this.oNXCheck != null){
				return "<root><" + this.sName + ">" + this.oNXCheck.xml + "</" + this.sName + "></root>";
			}
		}
		
}

UltraCargo.prototype.getSelectedItens = function(psTableId) 
{
		this.gSI.bResp = (arguments[1] != null) ? (arguments[1] == true) ? true : false : false;
		this.gSI.bMerge = (arguments[2] != null) ? (arguments[2] == true) ? true : false : false;
		this.bClneNd = (arguments[3] != null) ? (arguments[3] == true) ? true : false : false;
		
		this.gSI.oFras = document.getElementsByTagName("IFRAME");
		this.gSI.sResp = "";
		
		for (var iF = 0; iF < this.gSI.oFras.length; iF++) 
		{
			this.gSI.oFra = this.gSI.oFras[iF];
			this.gSI.sFraId = (this.gSI.oFra.getAttribute("id") != null) ? this.gSI.oFra.getAttribute("id") : "";
			if (this.gSI.sFraId == psTableId) {
				this.gSI.sResp = self.frames[iF].getSelectedItens(psTableId);
			}
		}
		this.gSI.oXD = new XMLHttpRequest()
		this.gSI.oXD.loadXML(this.gSI.sResp);
		if (this.gSI.oXD.parseError == 0) {
			this.gSI.oNd = this.init.oXD.selectSingleNode("root/" + psTableId);
			this.gSI.sPg = "0";
			if (this.gSI.oNd != null) {
				this.gSI.sPg = (this.gSI.oNd.getAttribute("page") != null) ? this.gSI.oNd.getAttribute("page") : "0";
			}
			
			this.gSI.oFrmRoot = this.gSI.oXD.selectSingleNode("root/" + psTableId);
			this.gSI.oNds = this.gSI.oXD.selectNodes("root/" + psTableId + "/row");
			
			
			for (var iR = 0; iR < this.gSI.oNds.length; iR++) {
				this.gSI.oNd = this.gSI.oNds[iR];
				this.gSI.iLn = (this.gSI.oNd.getAttribute("line") != null) ? this.gSI.oNd.getAttribute("line") : "";
				
				if (this.gSI.bMerge){
				
					this.str_XMLL = this.init.oXGr.selectSingleNode("root/" + psTableId);
					this.str_XMLS = this.init.oXDt.selectSingleNode("root/" + psTableId);
					
					this.str_XML = mergeXMLSL(this.str_XMLS,"<root>" + this.str_XMLL + "</root>");
					
					return
					
					this.gSI.oNds = this.gSI.oXD.selectNodes("root/" + psTableId + "/row");
				}else{
					this.gSI.oDt = this.init.oXGr.selectSingleNode("root/" + psTableId + "/row[@page='" + this.gSI.sPg + "' and @line='" + this.gSI.iLn + "']");
				}
				
				if (this.gSI.oDt != null) {
					if (this.bClneNd){
						this.gSI.oFrmRoot.replaceChild(this.gSI.oDt.cloneNode(true),this.gSI.oNd);
					}else{
						this.gSI.oFrmRoot.replaceChild(this.gSI.oDt,this.gSI.oNd);
					}
				}
			}
			if (this.gSI.bResp) {
				return this.gSI.oXD.xml;
			}
			else 
			{
				main((psTableId + "_chk"),null,this.gSI.oXD.xml);
			}
		}

		this.gSI.bResp = null;
		this.gSI.oFras = null;
		this.gSI.sResp = null;
		this.gSI.oFra = null;
		this.gSI.sFraId = null;
		this.gSI.oXD = null;
		this.gSI.oNd = null;
		this.gSI.sPg = null;
		this.gSI.oFrmRoot = null;
		this.gSI.oNds = null;
		this.gSI.iLn = null;
		this.gSI.oDt = null;

}

UltraCargo.prototype.RetornaLinhaXML = function(psTableId,psLinha,psPage) 
{
		this.gSI.oXD = new XMLHttpRequest()
		this.gSI.oXD.loadXML(this.init.oXGr.xml);
		var vwXmlRetorno='';
		if (this.gSI.oXD.parseError == 0)
		{
			this.gSI.oDt = this.init.oXGr.selectSingleNode("root/" + psTableId + "/row[@page='" + psPage + "' and @line='" + psLinha + "']");
			if (this.gSI.oDt != null)
			{
				vwXmlRetorno ='<root><' + psTableId + '>' +  this.gSI.oDt.xml +  '</' + psTableId + '></root>';
			}
		}
		return vwXmlRetorno;
}

UltraCargo.prototype.getSelectedItensCheck = function(psTableId) 
{
		this.gSI.oXD = new XMLHttpRequest()
		this.gSI.oXD.loadXML(this.init.oXCheck.xml);
		this.gSI.oNd = this.gSI.oXD.selectSingleNode("root/" + psTableId);
		if(this.gSI.oNd != null)
		{
			return  this.gSI.oNd.xml;
		}
		else
		{
			return  '';
		}
}

UltraCargo.prototype.showMessage = function(psXML) 
{
		this.bError = false;
		this.sMsgHder = "________________________________________________     \n\n"
			+ " Integra\n"
			+ "________________________________________________     \n\n";
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.sMsgBdy = "";
			this.oNds = this.oXD.selectNodes("root/mensagem");
			if (this.oNds[0] != null) {
				if (this.shwMsg == true) {
					this.bError = true;
					if ((this.oNds[0].getAttribute("value") >= 1) && (this.oNds[0].getAttribute("value") <= 5))
					{
						if(this.init.operation == 'qry' && this.oNds[0].getAttribute("value") == 5)
						{
							this.ClearXmlData_Filtro(this.init.form);
						}
						this.bError = true;
						window.focus();
					}
					else{
						this.bError = false;
					}
					for (var iM = 0; iM < this.oNds.length; iM++) {
						this.init.code = (this.oNds[iM].getAttribute("value") != null) ? this.oNds[iM].getAttribute("value") : "";
						this.sMsgBdy += "   " + unescape(this.oNds[iM].text) + "\n";
					}
					this.sMsgBdy += "\n";
				}
			}
			if (this.sysMsg == true) {
				this.oNds = this.oXD.selectNodes("root/system/mensagem");
				if (this.oNds[0] != null) {
					this.bError = false;
					if (this.sysMsg == true) {
						this.sMsgBdy += "Alerta:\n\n";
						for (var iM = 0; iM < this.oNds.length; iM++) 
						{
							this.init.code = (this.oNds[iM].getAttribute("value") != null) ? this.oNds[iM].getAttribute("value") : "";
							this.sMsgBdy += " - " + unescape(this.oNds[iM].text) + "\n";
						}
					}
				}
			}
			if (this.sMsgBdy != "") 
			{
				this.init.message = this.sMsgBdy;
				msgBox(this.sMsgBdy);
			}
		}
		return this.bError;

		this.bError = null;
		this.sMsgHder = null;
		this.oXD = null;
		this.sMsgBdy = null;
		this.oNds = null;
		this.bError = null;

}

UltraCargo.prototype.showMessageList = function(psXML) {
		this.bError = false;
		this.oNd = null;
		this.sMsgHder = "________________________________________________     \n\n"
			+ " Integra\n"
			+ "________________________________________________     \n\n";
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			this.oNds = this.oXD.selectSingleNode("//botoes_mensagem");
			this.sMsgBut = "SIM|NAO"
			if (this.oNds != null) {
				this.sMsgBut = (this.oNds.getAttribute("value") != null) ? this.oNds.getAttribute("value") : this.sMsgBut;
			}
			this.sMsgBdy = "";
			this.oNds = this.oXD.selectNodes("root/mensagem");
			if (this.oNds[0] != null) {
				for (var iM = 0; iM < this.oNds.length; iM++) {
					this.init.code = (this.oNds[iM].getAttribute("value") != null) ? this.oNds[iM].getAttribute("value") : "";
					this.sMsgBdy += " - " + unescape(this.oNds[iM].text) + "\n";
				}
			}
			if (this.sMsgBdy != "") {
				this.init.message = this.sMsgBdy;
				if (this.sMsgBut == "SIM|NAO") {
					this.bError = (msgBox(this.sMsgBdy,null,"SIM","NAO") == 0) ? true : false;
					if (this.bError == true) {
						this.oNds = this.oXD.selectNodes("//mensagem[@return='']");
						if (this.oNds[0] != null) {
							for (var iM = 0; iM < this.oNds.length; iM++) {
								this.oNds[iM].setAttribute("return",(this.bError == true) ? "SIM" :"NAO")
							}
						}
					}	
				}	
				else {
					 this.bError = (msgBox(this.sMsgBdy,null,"OK",null) == 0) ? true : false;
					 return;
				}	
			}
		}
		this.oXD2 = new XMLHttpRequest();
		this.oXD2.loadXML(this.sXml);
		if (this.oXD2.parseError == 0) {
			this.oNds = this.oXD.selectNodes("//mensagem[@return!='']");
			for (var iM = 0; iM < this.oNds.length; iM++) {
				this.oXD2.documentElement.appendChild(this.oNds[iM]);
			}
			this.sXml = this.oXD2.xml;
		}
		return this.bError;

		this.bError = null;
		this.sMsgHder = null;
		this.oXD = null;
		this.sMsgBut = null;
		this.sMsgBdy = null;
		this.oNds = null;
		this.bError = null;
		this.oXD2 = null;

}

UltraCargo.prototype.saveXmlGrid = function(psXML)
{
		var strFrmCheckSelec;
		var strCheckSelec;
		var strTipoCheckSelec;
				
		this.oXD = new XMLHttpRequest();
		this.oXD.loadXML(psXML);
		
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) 
		{
			this.oNd = this.oXD.selectSingleNode("root/*");
			if (this.oNd != null) {
				this.sFrmId = this.oNd.nodeName;
				this.cascade(this.sFrmId);
				this.sPgNum = "1";
				this.sPgCnt = "0";
				this.oDt = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
				if (this.oDt != null) {
					this.sPgNum = (this.oDt.getAttribute("page") != null) ? this.oDt.getAttribute("page") : "1";
				}
				this.oDt = this.oXD.selectSingleNode("root/" + this.sFrmId + "/page_count");
				if (this.oDt != null) {
					this.sPgCnt = (this.oDt.text != "") ? this.oDt.text : "0";
				}
				this.sElementPK = "";
				this.oFld = document.getElementById(this.sFrmId);
				if (this.oFld != null) {
					this.sElementPK = (this.oFld.getAttribute("pk") != null) ? this.oFld.getAttribute("pk") : "";
				}
				this.sLnk = "";
				this.sPK = "";
				this.sHidFlds = "";
				this.oNd = this.init.oXD.selectSingleNode("root/" + this.sFrmId);
				if (this.oNd != null) 
				{
					this.oNd.setAttribute("page_count",this.sPgCnt);
					this.sLnk = (this.oNd.getAttribute("linked") != null) ? this.oNd.getAttribute("linked") : "";
					this.sPK = (this.oNd.getAttribute("pk") != null) ? this.oNd.getAttribute("pk") : "";
					this.sHidFlds = (this.oNd.getAttribute("hidden") != null) ? this.oNd.getAttribute("hidden") : "";
				}
				this.oNd = this.init.oXGr.selectSingleNode("root/" + this.sFrmId + "[@pk=\"" + this.sElementPK + "\" and @page='" + this.sPgNum + "']");
				this.oRoot = this.init.oXGr.document;
				
				if (this.oNd != null) 
					this.oRoot.documentElement.removeChild(this.oNd);
				
				if (this.init.oXD.selectSingleNode("root/" + this.sFrmId).getAttribute('gridcheck') != "")
				    strFrmCheckSelec = this.init.oXD.selectSingleNode("root/" + this.sFrmId).getAttribute('gridcheck');
				else
				    strFrmCheckSelec = this.init.oXD.selectSingleNode("root/" + this.sFrmId).getAttribute('gridsele');
								
				if (strFrmCheckSelec != "" && strFrmCheckSelec != null)
				{
				    if (this.init.oXD.selectSingleNode("root/" + strFrmCheckSelec).getAttribute('gridcheck') != "")
				        strCheckSelec = 'gridcheck';
				    else
				        strCheckSelec = 'gridsele';
				    
				    strTipoCheckSelec = this.init.oXD.selectSingleNode("root/" + this.sFrmId).getAttribute('tipogrid');    
				    strFrmCheckSelec = this.init.oXD.selectSingleNode("root/" + strFrmCheckSelec).getAttribute(strCheckSelec);   
				}
				else
				{
					this.oNd = this.init.oXGr.createNode(1,this.sFrmId,"");
					strFrmCheckSelec = this.oNd.nodeName;
					strTipoCheckSelec = "CHECK_SELE";
				}
				 
				if (strFrmCheckSelec != this.sFrmId || strTipoCheckSelec == "CHECK_SELE")
                {	
				    this.oNd = this.init.oXGr.createNode(1,this.sFrmId,"");
				    this.oNd.setAttribute("linked",this.sLnk);
				    this.oNd.setAttribute("pk",this.sElementPK);
				    this.oNd.setAttribute("page",this.sPgNum);
				    this.oNds = this.oXD.selectNodes("root/" + this.sFrmId + "/row");
				    for (var iR = 0; iR < this.oNds.length; iR++) 
				    {
					    this.sXPath = "";
					    this.bRemoveDataRow = false;
					    this.bRemoveAbort = false;
					    this.oDtRow = null;
					    this.oRow = this.init.oXGr.createNode(1,"row","");
					    this.oRow.setAttribute("line",iR);
					    this.oRow.setAttribute("page",this.sPgNum);
					    this.oRow.setAttribute("status","server");
					    this.oCol = this.oXD.selectSingleNode("//loginatu");
					    if (this.oCol == null) 
					    {
						    this.oCol = this.oXD.createNode(1,"loginatu","");
						    this.oCol.setAttribute("value",this.init.sLoginAtu);
						    this.oRow.appendChild(this.oCol);
						    this.oCol = this.oXD.createNode(1,"loginentidade","");
						    this.oCol.setAttribute("value",this.init.sIdEntidade);
						    this.oRow.appendChild(this.oCol);
						    this.oCol = this.oXD.createNode(1,"loginfilial","");
						    this.oCol.setAttribute("value",this.init.sIdFilial);
						    this.oRow.appendChild(this.oCol);
					    }
					    for (var iC = 0; iC < this.oNds[iR].children.length; iC++) 
					    {
						    this.bPK = "false";
						    this.sVl = (this.oNds[iR].children[iC].getAttribute("value") != null) ? unescape(this.oNds[iR].children[iC].getAttribute("value")) : "";
						    this.oNds[iR].children[iC].setAttribute("server_value",escape(this.sVl));
						    if (this.sPK != "") {
							    if (("|" + this.sPK + "|").indexOf("|" + this.oNds[iR].children[iC].nodeName + "|") != -1) {
								    this.sXPath = "root/" + this.sFrmId + "/row/" + this.oNds[iR].children[iC].nodeName + "[@value='" + escape(this.sVl) + "']";
								    this.oDt = this.init.oXDt.selectSingleNode(this.sXPath);
								    if (this.oDt != null) 
								    {
									    if (!this.bRemoveAbort) 
									    {
										    this.oDtRow = this.init.oXDt.selectSingleNode(this.sXPath).parentNode;
										    this.bRemoveDataRow = true;
									    }
								    }
								    else 
								    {
									    if (this.bRemoveDataRow) 
									    {
										    this.bRemoveDataRow = false;
										    this.bRemoveAbort = true;
										    this.oDtRow = null;
									    }
								    }
								    this.bPK = "true";
							    }
						    }
						    if (this.bPK == "false") 
						    {
							    this.oCol = this.init.oXD.selectSingleNode("root/" + this.sFrmId + "/row/" + this.oNds[iR].children[iC].nodeName);
							    if (this.oCol == null) 
							    {
								    this.bPK = "";
							    }
						    }
						    if (this.sHidFlds != "") 
						    {
							    if (("|" + this.sHidFlds + "|").indexOf("|" + this.oNds[iR].children[iC].nodeName + "|") != -1) 
							    {
								    this.bRemoveDataRow = false;
								    this.bPK = "false";
							    }
						    }
						    if (this.bPK != "") 
						    {
							    this.oNds[iR].children[iC].setAttribute("pk",this.bPK);
							    this.oRow.appendChild(this.oNds[iR].children[iC].cloneNode(true));
						    }
					    }
					    if (this.bRemoveDataRow) 
					    {
						    if (this.oDtRow != null) 
						    {
							    this.oRootData = this.init.oXDt.selectSingleNode("root/" + this.sFrmId);
							    this.oRootData.removeChild(this.oDtRow);
    							
						    }
					    }
					    this.oNd.appendChild(this.oRow);
				    }
				}
				else
				{
				    this.oNd = this.oXD.selectSingleNode("root/" + this.sFrmId)
				    this.oNd.setAttribute("linked",this.sLnk);
				    this.oNd.setAttribute("pk",this.sElementPK);
				    this.oNd.setAttribute("page",this.sPgNum);
				}    
				
				this.oRoot.documentElement.appendChild(this.oNd);
				this.oElmnts = this.init.oXD.selectNodes("root/" + this.sFrmId + "/row/*[@index!='']");
				
				this.sXPath = "root/" + this.sFrmId + "[@linked='" + this.sLnk + "' and @pk=\"" + this.sElementPK + "\" and @page='" + this.sPgNum + "']";
				this.oNds = this.init.oXGr.selectNodes(this.sXPath + "/row");

//				for (var iR = 0; iR < this.oNds.length; iR++) 
//				{
//					for (var iE = 0; iE < this.oElmnts.length; iE++) 
//					{
//						for (var iC = 0; iC < this.oNds[iR].children.length; iC++) 
//						{
//							if (this.oElmnts[iE].nodeName == this.oNds[iR].children[iC].nodeName) 
//							{
//								this.oElmnt = this.oNds[iR].children[iC].cloneNode(true);
//								this.oNds[iR].removeChild(this.oNds[iR].children[iC]);
//								
//								this.oNds[iR].insertBefore(this.oElmnt,this.oNds[iR].children.item(iE));
//							}
//						}
//					}
//				}
			}
		}
		this.generateTableContent(this.sFrmId);

		this.oXD = null;
		this.oNd = null;
		this.sFrmId = null;
		this.sPgNum = null;
		this.sPgCnt = null;
		this.oDt = null;
		this.sElementPK = null;
		this.oFld = null;
		this.sLnk = null;
		this.sPK = null;
		this.sHidFlds = null;
		this.oRoot = null;
		this.sXPath = null;
		this.bRemoveDataRow = null;
		this.bRemoveAbort = null;
		this.oDtRow = null;
		this.oRow = null;
		this.oCol = null;
		this.bPK = null;
		this.sVl = null;
		this.oElmnts = null;
		this.oNds = null;
		this.oElmnt = null;
}

UltraCargo.prototype.lock = function(psOper) {
		this.disableControls(psOper,true);
}

UltraCargo.prototype.unlock = function(psOper) {
		this.disableControls(psOper,false);
}

UltraCargo.prototype.disableControls = function(psOper,bDisable) {
		this.oNds = this.init.oXD.selectNodes("//*[@tipo='form']/*[@operation!='']");
		if (this.oNds[0] != null) {
			for (var iC = 0; iC < this.oNds.length; iC++) {
				this.oNd = this.oNds[iC];
				this.sOper = (this.oNd.getAttribute("operation") != null) ? this.oNd.getAttribute("operation") : "";
				if (this.sOper != "" && ("," + this.sOper + ",").indexOf("," + psOper + ",") != -1) {
					this.sFrmId = this.oNd.parentNode.nodeName;
					this.oFrm = document.getElementById(this.sFrmId);
					if (this.oFrm != null) {
						this.sFldId = this.oNd.nodeName;
						this.oFld = this.oFrm.item(this.sFldId);
						if (this.oFld != null) {
							if (this.oFld.tagName != null) {
								this.oFld.disabled = bDisable;
							}
							else {
								for (var iI = 0; iI < this.oFld.length; iI++) {
									this.oFld[iI].disabled = bDisable;
								}
							}
						}
					}
				}
			}
		}

		this.oNds = null;
		this.oNd = null;
		this.sOper = null;
		this.sFrmId = null;
		this.oFrm = null;
		this.sFldId = null;
		this.oFld = null;
}

UltraCargo.prototype.checkStringValue = function(psValue) {
		return psValue.replace(/[^a-zA-Z0-9"'!@#$%&*()_+-=[]{},.<>;:\/?|\���������������������������������������������������]/gi," ");
}

UltraCargo.prototype.getValue = function(psXML,psXPath) {
		this.sResult = "";
		this.sAtt = arguments[2];
		this.sAtt = (this.sAtt == null || this.sAtt == undefined) ? "" : this.sAtt;

		this.oXD = new XMLHttpRequest();
		if(psXML.constructor.name == 'Element'){
			psXML = new XMLSerializer().serializeToString(psXML);
		}
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			if (psXPath != "") {
				this.oNd = this.oXD.selectSingleNode(psXPath);
				if (this.oNd != null) {
					if (this.sAtt == ""){
						this.sResult = (this.oNd.getAttribute("value") != null) ? this.oNd.getAttribute("value") : "";
					}else{
						this.sResult = (this.oNd.getAttribute(this.sAtt) != null) ? this.oNd.getAttribute(this.sAtt) : "";
					}
				}
			}
		}
		return this.sResult;

		this.sResult = null;
		this.oXD = null;
		this.oNd = null;

}

UltraCargo.prototype.updateNodes = function(psXML,psXPath,psValue) {
		this.sAttribute = (this.sAttribute == null || this.sAttribute == undefined) ? "" : this.sAttribute;
		this.oXD = new XMLHttpRequest()
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			if (psXPath != "") {
				this.oNd = this.oXD.selectSingleNode(psXPath);
				if (this.oNd != null) {
					if(this.sAttribute == ""){
						this.oNd.setAttribute("value",psValue);
					}else{
						this.oNd.setAttribute(this.sAttribute,psValue);
					}
				}
			}
		}
		return this.oXD.xml;

		this.sAttribute = null;
		this.oXD = null;
		this.oNd = null;

}

UltraCargo.prototype.getText = function(psXML,psXPath) {
		this.sResult = "";
		this.oXD = new XMLHttpRequest()
		this.oXD.loadXML(psXML);
		//TODO: FABIO - CHECK XML VIA PARSER
		if (true) {
			if (psXPath != "") {
				this.oNd = this.oXD.selectSingleNode(psXPath);
				if (this.oNd != null) {
					this.sResult = (this.oNd.textContent != null) ? this.oNd.textContent : "";
				}
			}
		}
		return this.sResult;

		this.sResult = null;
		this.oXD = null;
		this.oNd = null;

}

UltraCargo.prototype.createNode = function(plng_XmlDom,psNodeId,psXPath,psNodeText) {
		switch(plng_XmlDom) {
			case 1:
				this.createNode.oNode = this.init.oXD.selectSingleNode(psXPath);
				this.createNode.oElement = this.init.oXD.createNode(1,psNodeId,"");
				break;
			case 2:
				this.createNode.oNode = this.init.oXDt.selectSingleNode(psXPath);
				this.createNode.oElement = this.init.oXDt.createNode(1,psNodeId,"");
				break;
			case 3:
				this.createNode.oNode = this.init.oXGr.selectSingleNode(psXPath);
				this.createNode.oElement = this.init.oXGr.createNode(1,psNodeId,"");
				break;
			case 4:
				this.createNode.oNode = this.init.oXCheck.selectSingleNode(psXPath);
				this.createNode.oElement = this.init.oXCheck.createNode(1,psNodeId,"");
				break;
			case 5:
				this.createNode.oNode = this.init.oXCheckXML.selectSingleNode(psXPath);
				this.createNode.oElement = this.init.oXCheckXML.createNode(1,psNodeId,"");
				break;
		}
		
		for (var iA = 4; iA < arguments.length; iA+=2) 
		{
			this.createNode.oElement.setAttribute(arguments[iA],arguments[(1 + iA)]);
		}
		if (psNodeText != "") {
			this.createNode.oElement.text = psNodeText;
		}
		this.createNode.oNode.appendChild(this.createNode.oElement);

		this.createNode.oNode = null;
		this.createNode.oElement = null;

}

UltraCargo.prototype.addAttribute = function(plng_XmlDom,psXPath) 
{
		switch(plng_XmlDom) {
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
			for (var iA = 2; iA < arguments.length; iA+=2) {
				this.addAttribute.oElement.setAttribute(arguments[iA],arguments[(1 + iA)]);
			}
		}

		this.addAttribute.oAttribute = null;
}

UltraCargo.prototype.updateStruct = function(psXPath,psAttribute,psNewValue) {
		if (psXPath != "" && psAttribute != "" && psNewValue != "") {
			this.oNds = this.init.oXD.selectNodes(psXPath);
			if (this.oNds[0] != null) {
				for (var iN = 0; iN < this.oNds.length; iN++) {
					this.oNds[iN].setAttribute(psAttribute,psNewValue);
				}
			}
		}
		this.oNds = null;
}

UltraCargo.prototype.exception = function(poException,psClassMethod) {
		this.exception.sBody = "";
		if (poException != null) {
			if (poException.number != null && poException.name != null && poException.description != null) {
				if (poException.number != 0) {
					this.exception.sBody += "Erro: " + psClassMethod + "\n\n"
						+ "Descri��o1 : [" + poException.number + "] "
						+ poException.name + " - "
						+ poException.description + "\n\n"
						+ self.location + "\n";
				}
			}
			else {
				if (poException.description == undefined) {
					this.exception.sBody += "Erro: " + psClassMethod + "\n\n"
						+ "Descri��o : " + poException + "\n";
				}
			}
		}
		if (this.exception.sBody != "") {
			this.exception.sBody = "Favor reportar esta mensagem para o suporte do sistema,\n"
				+ "comentando a opera��o que est� sendo executada.\n\n" + this.exception.sBody;
			msgBox(this.exception.sBody);
		}
		this.exception.sBody = null;
}

function msgBox() 
{
		this.msgBox.sHost = getHost();
		this.msgBox.sMsg = (arguments[0] != null) ? arguments[0] : "";
		this.msgBox.iImg = (arguments[1] != null) ? arguments[1] : -1;
		this.msgBox.iImg = (isNaN(parseInt(this.msgBox.iImg))) ? -1 : parseInt(this.msgBox.iImg);
		this.msgBox.asFeatures = new Array();
		this.msgBox.asFeatures[0] = this.msgBox.sMsg;
		this.msgBox.asFeatures[1] = this.msgBox.iImg;
		this.msgBox.iCont = 0;
		while(this.msgBox.sMsg.indexOf("\n") != -1) {
			this.msgBox.sMsg = this.msgBox.sMsg.replace("\n","");
			this.msgBox.iCont++;
		}
		this.msgBox.iCont = (1 + parseInt(((this.msgBox.sMsg.length + (45 * this.msgBox.iCont)) / 45)));
		this.msgBox.iHeight = 155 + (8 * this.msgBox.iCont);
		if (arguments[2] != null) {
			for (this.msgBox.iMsg = 2; this.msgBox.iMsg < arguments.length; this.msgBox.iMsg++) {
				if (arguments[this.msgBox.iMsg] != null) {
					this.msgBox.asFeatures[this.msgBox.asFeatures.length] = arguments[this.msgBox.iMsg];
				}
			}
		}
		else {
			this.msgBox.asFeatures[2] = "OK";
		}
		this.msgBox.sResp = window.showModalDialog(this.msgBox.sHost + "/includes/mensagem.asp",this.msgBox.asFeatures,"dialogHeight:" + this.msgBox.iHeight + "px;dialogWidth:350px;help:no;resizable:no;status:no;scroll:no");
		if (this.msgBox.sResp != null) {
			if (this.msgBox.sResp.toString() == "true") {
				return true;
			}
			else if (this.msgBox.sResp.toString() == "false") {
				return false;
			}
			else {
				return this.msgBox.sResp.toString();
			}
		}
		else {
			return null;
		}

		this.msgBox.sHost = null;
		this.msgBox.sMsg = null;
		this.msgBox.asFeatures = null;
		this.msgBox.sResp = null;
}

msgBox.prototype.msgBox = function() 
{

}

UltraCargo.prototype.LogaString = function( valor1 , valor2 )
{
		if (false)
		{
		try
			{
			var Fso = new ActiveXObject("Scripting.FileSystemObject");
			var arquivoEnvio;
			var data = new Date();
			var ddata;
			
			ddata = data.getDate() + "/" + data.getMonth() + "/" + data.getYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" +  data.getSeconds();			
			if (Fso.FileExists("c:\\saida.txt") == false)
				{
				arquivoEnvio = Fso.CreateTextFile("c:\\saida.txt",true);
				}
			else
				{
				arquivoEnvio = Fso.OpenTextFile("c:\\saida.txt",8,false);
				}
				
			arquivoEnvio.WriteLine(ddata + "=" + valor1 + valor2);
			arquivoEnvio.close();
			}
		catch(excpt)
			{
			
			}
		}
}

UltraCargo.prototype.LTrim = function(stringToTrim)
{
	return stringToTrim.replace(/^\s+/,"");
}

UltraCargo.prototype.RTrim = function(stringToTrim)
{
	return this.replace(/\s+$/,"");
}

UltraCargo.prototype.Pad = function(pad, str, padLeft)
{
  if (typeof str === 'undefined') 
    return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}