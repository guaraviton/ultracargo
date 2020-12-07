var obj_Timer = null;
var bln_Timer = false;
var vwNr_NivelPath;

var Tini;
var Tfim;
var time_diff;
//1
function setTini(){
	Tini = new Date();
}
//2
function setTfim(){
	Tfim = new Date();
	time_diff = Tfim.getTime() - Tini.getTime();
}
//3
function getTdif(){
		
	var time_hour = Math.floor(time_diff / (1000 * 60 * 60)); 
	time_diff -= time_hour * (1000 * 60 * 60);
	var time_min = Math.floor(time_diff / (1000 * 60));
	time_diff -= time_min * (1000 * 60);
	var time_sec = Math.floor(time_diff / 1000);
		
	time_diff -= time_sec * 1000;
	var time_msec = Math.floor(time_diff);
		
	alert(time_hour + ":" + time_min + ":" + time_sec + ":" + time_msec)
	
	delete Tini;
	delete Tfim;
	delete time_hour;
	delete time_min;
	delete time_msec;
}
//4
function callShortcut(){
	if (parent.top.frm_rodape != null){
		
		var obj_div = document.getElementsByTagName("DIV");
		var qtGridsVisible = 0;
		var bln_GridVivible = false;
		for (var int_cont = 0; int_cont < obj_div.length;int_cont++){
			if (obj_div[int_cont].getAttribute("id") != "" && (obj_div[int_cont].style.display == "" || obj_div[int_cont].style.display == "block") && obj_div[int_cont].getElementsByTagName("IFRAME").length >= 1){
				bln_GridVivible = true;
				break;
			}
		}
		if (bln_GridVivible){
			var str_NameGrid = obj_div[int_cont].getElementsByTagName("IFRAME")[0].getAttribute("id")
			
			if (event.keyCode == 7){
				main(str_NameGrid + "_lst");
			}
		}
		var sBtn = new String(parent.top.frm_rodape.getButton());
		if (sBtn.indexOf("P") != -1){
			if (event.keyCode == 16){
				main("qry");
			}
		}
		if (sBtn.indexOf("N") != -1){
			if (event.keyCode == 14){
				main("new");
			}
		}
		if (sBtn.indexOf("X") != -1){
			
			if (event.keyCode == 27){
				main("ext");
			}
		}
		if (sBtn.indexOf("S") != -1){
			if (event.keyCode == 19){
				main("ins");
			}
		}
	}
}

function timeAdd(int_Minutes)
{
	
	var obj_date    = new Date();
	var int_hours   = obj_date.getHours();
	var int_minutes = obj_date.getMinutes();
	
	int_minutes = int_minutes + (eval(int_Minutes));
	obj_date.setMinutes(int_minutes);
	
	int_hours   = obj_date.getHours(); int_minutes = obj_date.getMinutes(); delete obj_date;
	if(int_minutes < 10){int_minutes = "0" + int_minutes.toString();}
	if(int_hours < 10)  {int_hours = "0" + int_hours.toString();}
	return int_hours + ":" + int_minutes;

}

function isNumber(str_Value)
{
    var str_Caracter;
    var flg_Numero;
    var int_cont;
    
    if (str_Value == '')
        return false;
    else
        flg_Numero = true;
    
    for(int_cont=0; int_cont < str_Value.length; int_cont++)
    { flg_Numero = flg_Numero;
       str_Caracter = str_Value.charAt(int_cont);
        if(isNaN(parseInt(str_Caracter)))
        {
            flg_Numero = false;
            int_cont = str_Value.length;
        }
    }
	return flg_Numero;
}

function browseMode(objForm)
{
	parent.top.frm_rodape.setButton("X");
	var tamForm = objForm.length;
	var activeMode = (arguments[1] != null) ? arguments[1] : true;
	for(var i=0; i < tamForm; i++){objForm.item(i).disabled = activeMode;}
}

function getHost()
{
	var str_Host, astr_Host, str_Host_Origem;
    
	if (opener != null) {
		str_Host = self.opener.parent.top.location.toString().toLowerCase();
		str_Host = str_Host.substring(0,str_Host.lastIndexOf("/"));
	}
	else {    	
		str_Host = parent.top.location.toString().toLowerCase();	
		str_Host_Origem = str_Host;
		astr_Host = str_Host.split("//");
		str_Host = (astr_Host[0] + "//");
		astr_Host = astr_Host[1].split("/");
		
		if (astr_Host[1].lastIndexOf("integra") != -1  || astr_Host[1].lastIndexOf("website") != -1)
		{
			for (var iH = 0; iH < 2; iH++) {
				str_Host += (astr_Host[iH] + "/");
			}
		}
		else
		{
			for (var iH = 0; iH < 1; iH++) {
				str_Host += (astr_Host[iH] + "/");
			}
		}

		str_Host = str_Host.substring(0,(str_Host.length - 1));
	}
	return str_Host;
}

function Fu_TrocaSepDec(paValor,paSep)
{
	var vwSepTroca			= '';
	var vwValorRetorno		= '';
	
	if(paSep == '' || paSep == null)
	{
		paSep  =  '.'
	}
	
	if(paSep == '.')
	{
		vwSepTroca  =  ','
	}
	else
	{
		vwSepTroca  = '.'
	}
	vwValorRetorno  =  paValor.replace(vwSepTroca,paSep)
	
	return vwValorRetorno;
	
}

function Fu_AtuaValueNodesXML(paXMLString, paPathNodes, paNodeAtu,paValorAtu)
{
	var vwobjXml = new XMLHttpRequest();
	var vwNodes  = null; 
	var vwSNode  = null;
	vwobjXml.loadXML(paXMLString)
	
	//TODO: FABIO - CHECK XML VIA PARSER
	if(false)
	{
		alert('Erro ao tentar abrir o XML para atualiza��o de valores de Nodes!')
		return  ''
	}
	vwNodes  =  vwobjXml.selectNodes(paPathNodes); 
	if(vwNodes != null)
	{
		for(var vwi = 0;vwi<=vwNodes.length-1;vwi++)
		{
			vwSNode  =   vwNodes[vwi].selectSingleNode(paNodeAtu); 
			if(vwSNode!= null)
			{
				vwSNode.setAttribute('value',escape(paValorAtu));
				vwSNode.setAttribute('server_value',escape(paValorAtu));
			}
		}
	}
	return vwobjXml.xml;
}
function Fu_SendReceXML(paXML,paPrc)
{
		var vwobj_XHttp = new ActiveXObject("Microsoft.XMLHTTP");
		vwobj_XHttp.open("POST",'./prc/' + paPrc, false);
		paXML = paXML.replace(/%20/g," ");
		vwobj_XHttp.send(paXML);
		while(vwobj_XHttp.readyState != 4)
		{
			continue;
		}
		var vwsResp = vwobj_XHttp.responseText;
		return vwsResp; 
}

function msgBoxG() 
{
		var sHost; 
		var asHost;
		var sMsg;
		var iImg;
		var iCont; 
		var iHeight;
		var sResp ;
		var iMsg;

		sHost = getHost();
		sMsg = (arguments[0] != null) ? arguments[0] : "";
		iImg = (arguments[1] != null) ? arguments[1] : -1;
		iImg = (isNaN(parseInt(iImg))) ? -1 : parseInt(iImg);
		
		var asFeatures = new Array();
		
		asFeatures[0] = sMsg;
		asFeatures[1] = iImg;
		iCont = 0;
		
		while(sMsg.indexOf("\n") != -1) 
		{
			sMsg = sMsg.replace("\n","");
			iCont++;
		}
		
		iCont = (1 + parseInt(((sMsg.length + (45 * iCont)) / 45)));
		iHeight = 155 + (8 * iCont);
		if (arguments[2] != null) 
		{
			for (iMsg = 2; iMsg < arguments.length; iMsg++) {
				if (arguments[iMsg] != null) {
					asFeatures[asFeatures.length] = arguments[iMsg];
				}
			}
		}
		else 
		{
			asFeatures[2] = "OK";
		}
		sResp = window.showModalDialog(sHost + "/includes/mensagem.asp",asFeatures,"dialogHeight:" + iHeight + "px;dialogWidth:350px;center:yes;help:no;resizable:no;status:no;scroll:no");
		if (sResp != null) 
		{
			if (sResp.toString() == "true") 
			{
				return true;
			}
			else if (sResp.toString() == "false") 
			{
				return false;
			}
			else 
			{
				return sResp.toString();
			}
		}
		else 
		{
			return null;
		}
}

function Fu_NoSubmit(paEvento)
{
	var tecla = event.keyCode;
	if(tecla ==13)
	{
		return false;
	} 
	else
	{
		return true; 
	}
}

function Fu_DigPA_keypress(paObj)
{
	var temp;
	var digito = paObj.value;
	
	if(event.keyCode < 47 || event.keyCode >=58 )
	{
		return false;
	}
	else if((event.keyCode == 47 && digito.search('/') != -1) || (event.keyCode == 47 && digito.length<1)){
			return false;
	}
	else if((digito.indexOf('/') == -1) && (digito.length >= 8) && (event.keyCode != 47) ){
		return false;
	}
	else if((digito.indexOf('/') != -1)){
		vwPos = digito.indexOf('/');
		
		if( digito.length > digito.substr(0,vwPos).length + 3 ){
			return false;
		}else{
			return true;		
		}
	}
	else{
		return true;
	}
}

function Fu_DigDI_keyup(pobj)
{
	var str_Data = (pobj != null) ? pobj.value : "";
	
	if (event.keyCode != 8) {
		var int_Data = str_Data.length;
		if (int_Data > 14)
		{
		  pobj.value = str_Data.substring(0, 14);
		  event.returnValue = false;
		  return;
		}  
		
		str_Data = str_Data.replace("-","");
		
		int_Data = str_Data.length;
		var int_Ini = (int_Data < 2) ? 1 : 2;
		var int_Meio = (int_Data < 10) ? 9 : 10;
		var int_Fim = 11;
		
		var str_Ini = str_Data.substring(0, int_Ini);
		var str_Meio = str_Data.substring(3,int_Meio);
		var str_Fim = str_Data.substring(int_Meio, int_Fim);
		
		str_Data = str_Ini;
		if (int_Data >= 2) {
			str_Data += "/";
		}
		
		str_Data += str_Meio;
		if (int_Data >= 10) {
			str_Data += "-" ;
		}
		
		str_Fim = str_Fim.replace("-","");
		str_Data += str_Fim;
		pobj.value = str_Data;
	}
	
	event.returnValue = false;
}

function onlyNum(){
	
	if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 45){
		event.cancelBubble = true;
		event.returnValue = false;
	}
}

function Fu_DigData_keypress(paObj){

	var data   = paObj.value;
	var mydata = '';
	var vwPos; 
	var vwMes;
	var vwPosBarDia;
	var vwPosBarMes; 
	mydata = mydata + data;
	
	if(event.keyCode <= 47 || event.keyCode >=58 ){
		return false;
	}
	
	if (mydata.length == 2){
		vwPos  =  mydata.indexOf('/');
		if(vwPos == 1){
			paObj.value  =  mydata.substr(0,vwPos);
			return;
		}
		if(parseInt(mydata) > 31){
			paObj.value  =  '';
			return;
		}
		paObj.value = mydata + '/'; 
		return;
	}
              
	if (mydata.length == 5){
		vwPos  =  mydata.indexOf('/');
		vwMes  =  mydata.substr(vwPos+1,2);
				
		if(vwMes.length != 2){
			paObj.value  =  mydata.substr(0,vwPos+1);
			return;
		} 
				
		if(parseInt(vwMes) > 12 ){
			paObj.value  =  mydata.substr(0,vwPos+1);
			return;
		}
				
		vwPosBarDia  = mydata.indexOf('/');
		vwPosBarMes  = mydata.lastIndexOf('/');
				
		if (vwPosBarMes == vwPosBarDia){
			vwPosBarMes  = mydata.length  -vwPosBarDia;
		}
		vwMes =     mydata.substr(vwPosBarDia+1,  vwPosBarMes-1);
		vwPos =  vwMes.indexOf('/');
		if(vwPos != -1){
			vwMes  = vwMes.substr(0,vwPos);
			paObj.value  = paObj.value.substr(0,paObj.value.length-1);
		}
		if(vwMes.length == 2){
			paObj.value = mydata + '/';
		}
		return;
	}
	if (mydata.length >= 5){
		vwPosBarDia  = mydata.indexOf('/');
		vwPosBarMes  = mydata.lastIndexOf('/');
		vwMes =     mydata.substr(vwPosBarDia+1,  (vwPosBarMes - vwPosBarDia)-1);
		if(vwMes.length > 2){
			paObj.value  =  mydata.substr(0,vwPosBarDia+1);
			return;
		}else{
			if(vwMes.length == 1){
				if (mydata.length != 7 && mydata.length != 9){
					paObj.value  =  mydata.substr(0,vwPosBarDia+2);
					return;
				}
			}
		}
		
		if(parseInt(vwMes) > 12 ){
			paObj.value  =  mydata.substr(0,vwPosBarDia+1);
			return;
		}
	}
}

function Fu_FormataData_keyup(paObj)
{
	var data   = paObj.value;
	var mydata = '';
	var vwPos; 
	var vwMes;
	var vwPosBarDia;
	var vwPosBarMes; 
	mydata = mydata + data;
              
	if (mydata.length == 2)
	{
		vwPos  =  mydata.indexOf('/');
		if(vwPos == 1)
		{
			paObj.value  =  mydata.substr(0,vwPos);
			return;
		}
		if(parseInt(mydata) > 31)
		{
			paObj.value  =  '';
			return;
		}
		paObj.value = mydata + '/'; 
		return;
	}
              
	if (mydata.length == 5)
	{
		vwPos  =  mydata.indexOf('/');
		vwMes  =  mydata.substr(vwPos+1,2);
				
		if(vwMes.length != 2)
		{
			paObj.value  =  mydata.substr(0,vwPos+1);
			return;
		} 
				
		if(parseInt(vwMes) > 12 )
		{
			paObj.value  =  mydata.substr(0,vwPos+1);
			return;
		}
				
		vwPosBarDia  = mydata.indexOf('/');
		vwPosBarMes  = mydata.lastIndexOf('/');
				
		if (vwPosBarMes == vwPosBarDia)
		{
			vwPosBarMes  = mydata.length  -vwPosBarDia;
		}
		vwMes =     mydata.substr(vwPosBarDia+1,  vwPosBarMes-1);
		vwPos =  vwMes.indexOf('/');
		if(vwPos != -1)
		{
			vwMes  = vwMes.substr(0,vwPos);
			paObj.value  = paObj.value.substr(0,paObj.value.length-1);
		}
		if(vwMes.length == 2)
		{
			paObj.value = mydata + '/';
		}
		return;
	}
	if (mydata.length >= 5)
	{
		vwPosBarDia  = mydata.indexOf('/');
		vwPosBarMes  = mydata.lastIndexOf('/');
		vwMes =     mydata.substr(vwPosBarDia+1,  (vwPosBarMes - vwPosBarDia)-1);
		if(vwMes.length > 2)
		{
			paObj.value  =  mydata.substr(0,vwPosBarDia+1);
			return;
		}
		else
		{
			if(vwMes.length == 1)
			{
				paObj.value  =  mydata.substr(0,vwPosBarDia+2);
				return;
			}
		}
		
		if(parseInt(vwMes) > 12 )
		{
			paObj.value  =  mydata.substr(0,vwPosBarDia+1);
			return;
		}
	}
}

function Fu_ValidaData_blur(paObj) 
{
//	var vwDataValor   =  trim(paObj.value);
//	
//	var dtNovaData = new Date();
//	
//	if(vwDataValor == '')
//	{
//		return; 
//	}
//	var vwPosBarDia  = vwDataValor.indexOf('/');
//	var vwPosBarMes  = vwDataValor.lastIndexOf('/');
//		
//	var dia = vwDataValor.substr(0,vwPosBarDia);
//	var mes = vwDataValor.substr(vwPosBarDia +1,(vwPosBarMes - vwPosBarDia)-1); 
//	var ano = vwDataValor.substr(vwPosBarMes +1,vwDataValor.lenght); 
//	if(ano.length == 0)
//	{
//		ano = dtNovaData.getFullYear();
//		paObj.value = dia + '/' + mes + '/' + ano;
//	}

//	if(ano.length < 4)
//	{
//		ano = dtNovaData.getFullYear();
//		paObj.value = dia + '/' + mes + '/' + ano;
//	}
//	situacao = "";
//	
//	if (ano < 1900){
//		msgBoxG('O Ano informado � inv�lido!');
//		paObj.focus(); 
//		return;
//	}
//	
//	if ((dia < 01)||(dia < 01 || dia > 30) && (  mes == 04 || mes == 06 || mes == 09 || mes == 11 ) || dia > 31) 
//	{ 
//		situacao = "falsa";
//	} 

//	if (mes < 01 || mes > 12 ) 
//	{ 
//		situacao = "falsa"; 
//	} 

//	if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) 
//	{ 
//		situacao = "falsa"; 
//	} 

//	if (paObj.value == "") 
//	{ 
//		situacao = "falsa"; 
//	} 

//	if (situacao == "falsa")
//	{ 
//		msgBoxG("Data inv�lida!");
//		paObj.value= ''; 
//		paObj.focus();
//		return;  
//	} 
    var dtNovaData;
    try
    {
        if (paObj.value != '') {
            dtNovaData = new Date();
            
            var Data = paObj.value.split("/")
            
            if (Data.length > 2)
            {
                if (Data[2].length < 4)
                    Data[2] = dtNovaData.getFullYear();
            }
            else
                Data[2] = dtNovaData.getFullYear();
            
            var nData = new Date(Data[2]+"/"+Data[1]+"/"+Data[0]+" "+"01:00:00");
            if (nData.getDate() == Data[0] && nData.getMonth() + 1 == Data[1] && nData.getFullYear() == Data[2])
            {
                paObj.value = ((Data[0].length < 2)? "0" + Data[0] : Data[0]) + '/' + ((Data[1].length < 2)? "0" + Data[1] : Data[1]) + '/' + Data[2];
                return true;
            }
            else
            {
                msgBoxG("Data inv�lida!");
                paObj.value = '';
                paObj.focus();
                //return;
            }
        }
    }
    catch (ex)
    {
        return false;
    }
}

function Fu_CarregaFiltroFromIns(paFormOrigem,paFormDestino)
{

	if(paFormOrigem =='' || paFormOrigem ==null)
	{
		paFormOrigem = 'frm_detalhe';
	}
	if(paFormDestino =='' || paFormDestino ==null)
	{
		paFormDestino = 'frm_filtro';
	}

	var objOrigem	= document.getElementById(paFormOrigem); 
	var objDestino	= document.getElementById(paFormDestino);
	var vwAtributo; 
	var vwValor; 
	for(var i = 0; i<= objOrigem.length-1;i++)
	{
		vwAtributo  = objOrigem[i].getAttribute('filtro_ins');
		vwValor		= objOrigem[i].value;
		
		if(vwAtributo != null && vwAtributo != '')
		{
			for(var j = 0; j<= objDestino.length-1;j++)
			{
				if(objDestino[j].id == vwAtributo)
				{
					if(objDestino[j].type == 'text' || objDestino[j].type == 'hidden') 
					{
						objDestino[j].value  = vwValor; 
					} 
					
					if(objDestino[j].type == 'select-one')
					{
						for(var k = 0;k<=objDestino[j].length -1; k++)
						{
							
							if(objDestino[j][k].value == vwValor)
							{
								objDestino[j].selectedIndex = k
							}  
						}
					}
				} 
			} 
		} 
	}
}

function Fu_LimpaPaginador(paTabela)
{
		obj_Ultra.createTableFooter_ini(paTabela);
}

function Fu_ClearLnkHid(paForm, paObjeto,paSempre)
{
	var vwObjetos	=  document.getElementById(paForm);
	var vwObjetoID	=  paObjeto.id;
	
	
	
	for(var i = 0; i <= vwObjetos.length-1;i++)
	{
		if(vwObjetos[i].linkhidden != undefined)
		{
			if(vwObjetos[i].linkhidden == vwObjetoID)
			{
				if(paSempre == null || paSempre == '')
				{
					vwObjetos[i].value  = ''; 
				}
				else
				{
					vwObjetos[i].value  = ''; 
				}
			}
		}
	}
}

function maskDec_TypeBlur(paObjeto,paNrInteiros, paNrDecimais,paSepDecimais)
{
	var vwString = new String();
	var vwPos;
	vwString = paObjeto.value;
	if(vwString == '')
	{
		return true; 
	} 
	
	vwPos  =  vwString.indexOf(paSepDecimais ,0);
	if(vwPos == -1)
	{
		paObjeto.value = paObjeto.value + paSepDecimais;
		for(var i = 0;i<=parseInt(paNrDecimais)-1;i++)
		{
			paObjeto.value = paObjeto.value  + '0';
		}
	}
	else
	{
		var vwInt;
		var vwDec;
		var vwValor  = new String();  
		vwValor = paObjeto.value;
		vwInt = vwValor.substr(0,vwPos); 
		vwDec = vwValor.substr(vwPos+1,vwValor.length);
		vwInt
		for(i = 0 ; i<= parseInt(paNrDecimais) -1;i++)
		{
			vwDec = vwDec  +  '0';
		}
		paObjeto.value  = vwInt + paSepDecimais  + vwDec.substr(0,paNrDecimais);
	} 
}

function maskDec_TypeKeyUp(paObjeto,paNrInteiros, paNrDecimais,paSepDecimais)
{
	var vwString  = new String() ;
	vwString = paObjeto.value;
	
	
	var vwPos1 = vwString.indexOf(paSepDecimais + paSepDecimais,0);
	if(vwPos1 != -1)
	{
		var vwStringSep = new String(); 
		vwStringSep =   paObjeto.value; 
		vwStringSep = vwStringSep.substr(0,vwStringSep.length-1);  
		paObjeto.value = vwStringSep;
	}
	
	var vwPos  =  vwString.indexOf(paSepDecimais ,0);
	var vwDec; 
	var vwInt;
	if(vwPos != -1)
	{
		vwDec  =  vwString.substr(vwPos+1,vwString.length);
		if(vwDec.length > parseInt(paNrDecimais)) // Se estourar o numero de decimais, n�o deixa digitar
		{
			vwInt  =  vwString.substr(0,vwPos);
			vwDec  =  vwString.substr(vwPos+1,paNrDecimais);
			paObjeto.value  =   vwInt + paSepDecimais + vwDec;
		}
		
		var vwStringTemp  = vwString.substr(0,vwPos);
		if(vwStringTemp.length > parseInt(paNrInteiros))
		{
			vwInt  =  vwString.substr(0,vwPos-1);
			vwDec  =  vwString.substr(vwPos+1,paNrDecimais);
			paObjeto.value  =   vwInt + paSepDecimais  + vwDec;
		}
	}
}

function maskDec_Type(paEvento,paObjeto,paNrInteiros, paNrDecimais,paSepDecimais)
{
	var tecla = event.keyCode;
	var vwString = new String();
	var vwInt;
	var vwPos; 
	var vwDec; 
	vwString  = paObjeto.value;
	if (paSepDecimais != ',' && paSepDecimais != '.')
	{
		alert('O Separador de Decimal informado � inv�lido.')
	} 
	
	if((tecla > 47 && tecla < 58) || (tecla == 44 || tecla == 46)) 
	{
		if(tecla == 44 && paSepDecimais=='.')
		{
			return false; 
		}
		
		if(tecla == 46 && paSepDecimais==',')
		{
			return false; 
		}
	
		if(tecla == 46 || tecla == 44)
		{
			vwPos  =  vwString.indexOf(paSepDecimais,0);
			if(vwPos != -1)
			{
				return false;
			} 
		}
		
		if(vwString.length == parseInt(paNrInteiros))
		{
			vwPos  =  vwString.indexOf(paSepDecimais ,0);
			if(vwPos == -1)
			{
				paObjeto.value   = paObjeto.value  + paSepDecimais;
			}
		}
		else
		{
			vwPos  =  vwString.indexOf(paSepDecimais ,0);
			if(vwPos == -1)
			{
				if(vwString.length > parseInt(paNrInteiros))
				{
					return false;
				}
			} 
			else
			{
				var vwStringTemp  = vwString.substr(0,vwPos);
				if(vwStringTemp.length > parseInt(paNrInteiros))
				{
					return false;
				}
			} 
		} 
		vwPos  =  vwString.indexOf(paSepDecimais ,0);
		if(vwPos != -1)
		{
			vwDec  =  vwString.substr(vwPos+1,vwString.length);
			if(vwDec.length > parseInt(paNrDecimais))
			{
				return false;
			}
		}
		return true;
	}
	else
	{
		return false;
	}
}

function maskDec_TypeBlur_lng(paObjeto,paNrInteiros, paNrDecimais,paSepDecimais)
{
	var vwString = new String();
	var vwPos;
	vwString = paObjeto.value;
	if(vwString == '')
	{
		return true; 
	} 
	
	vwPos  =  vwString.indexOf(paSepDecimais ,0);
	if(vwPos == -1)
	{
		paObjeto.value = paObjeto.value + paSepDecimais;
		for(var i = 0;i<=parseInt(paNrDecimais)-1;i++)
		{
			paObjeto.value = paObjeto.value  + '0';
		}
	}
	else
	{
		var vwInt;
		var vwDec;
		var vwValor  = new String();  
		vwValor = paObjeto.value;
		vwInt = vwValor.substr(0,vwPos); 
		vwDec = vwValor.substr(vwPos+1,vwValor.length);
		for(i = 0 ; i<= parseInt(paNrDecimais) -1;i++)
		{
			vwDec = vwDec  +  '0';
		}
		if(parseInt(paNrDecimais)!= 0)
		{
			 paObjeto.value  = vwInt + paSepDecimais  + vwDec.substr(0,paNrDecimais);
		}
	} 
	
	var vwFirstChar = paObjeto.value.substr(0,1);
	paObjeto.value = (vwFirstChar == paSepDecimais) ? "0" + paObjeto.value : paObjeto.value;
	
}

function maskDec_TypeKeyUp_lng(paObjeto,paNrInteiros, paNrDecimais,paSepDecimais)
{
	var vwString  = new String() ;
	vwString = paObjeto.value;
	
	
	var vwPos1 = vwString.indexOf(paSepDecimais + paSepDecimais,0);
	if(vwPos1 != -1)
	{
		var vwStringSep = new String(); 
		vwStringSep =   paObjeto.value; 
		vwStringSep = vwStringSep.substr(0,vwStringSep.length-1);  
		paObjeto.value = vwStringSep;
	}
	
	var vwPos  =  vwString.indexOf(paSepDecimais ,0);
	var vwDec; 
	var vwInt;
	if(vwPos != -1)
	{
		vwDec  =  vwString.substr(vwPos+1,vwString.length);
		if(vwDec.length > parseInt(paNrDecimais))
		{
			vwInt  =  vwString.substr(0,vwPos);
			vwDec  =  vwString.substr(vwPos+1,paNrDecimais);
			paObjeto.value  =   vwInt + paSepDecimais + vwDec;
		}
		
		var vwStringTemp  = vwString.substr(0,vwPos);
		if(vwStringTemp.length > parseInt(paNrInteiros))
		{
			vwInt  =  vwString.substr(0,vwPos-1);
			vwDec  =  vwString.substr(vwPos+1,paNrDecimais);
			paObjeto.value  =   vwInt + paSepDecimais  + vwDec;
		}
	}
}

function maskDec_Type_lng(paEvento,paObjeto,paNrInteiros, paNrDecimais,paSepDecimais,pstr_Escala)
{
	var tecla = event.keyCode;
	var vwString = new String();
	var vwInt;
	var vwPos; 
	var vwDec; 
	
	this.str_Escala = (pstr_Escala != null) ? pstr_Escala : "" ;
	
	vwString  = paObjeto.value;
	if (paSepDecimais != ',' && paSepDecimais != '.')
	{
		alert('O Separador de Decimal informado � inv�lido.')
	} 
	
	if((tecla > 47 && tecla < 58) || (tecla == 44 || tecla == 46 || tecla == 45)) 
	{
		if(tecla == 44 && paSepDecimais=='.')
		{
			return false; 
		}
		
		if(tecla == 46 && paSepDecimais==',')
		{
			return false; 
		}
		
		if (this.str_Escala != "NP" && tecla == 45){
			return false;
		}
		
		if (tecla == 45 && this.str_Escala == "NP" && (paObjeto.value.indexOf("-") != -1 || paObjeto.value.length != 0)){
			return false;
		}
		
		if(tecla == 46 || tecla == 44)
		{
			vwPos  =  vwString.indexOf(paSepDecimais,0);
			if(vwPos != -1)
			{
				return false;
			} 
		}
		
		if(vwString.length == parseInt(paNrInteiros))
		{
			vwPos  =  vwString.indexOf(paSepDecimais ,0);
			if(vwPos == -1)
			{
				paObjeto.value   = paObjeto.value  + paSepDecimais;
			}
		}
		else
		{
			vwPos  =  vwString.indexOf(paSepDecimais ,0);
			if(vwPos == -1)
			{
				if(vwString.length > parseInt(paNrInteiros))
				{
					return false;
				}
			} 
			else
			{
				var vwStringTemp  = vwString.substr(0,vwPos);
				if(vwStringTemp.length > parseInt(paNrInteiros))
				{
					return false;
				}
			} 
		} 
		vwPos  =  vwString.indexOf(paSepDecimais ,0);
		if(vwPos != -1)
		{
			vwDec  =  vwString.substr(vwPos+1,vwString.length);
			if(vwDec.length > parseInt(paNrDecimais)) // Se estourar o numero de decimais, n�o deixa digitar
			{
				return false;
			}
		}
		return true;
	}
	else
	{
		return false;
	}
}

function Fu_AutoCompletar(paObject,paXml,paNo)
{
	var objXML  =  new XMLHttpRequest();
	var objNodes
	var objFill
	objXML.loadXML(paXml)
	//TODO: FABIO - CHECK XML VIA PARSER
	if(false) // Erro  
	{
		alert('Erro na leitura do XML informado.')
		return false;
	}
	objNodes  = objXML.selectNodes("root/*/" + paNo)
	if(objNodes.length != 1) 
	{
		return false;
	}
	if(objNodes[0].getAttribute("value") != null) 
	{
		if(paObject != undefined)
		{
			paObject.value  =  unescape(objNodes[0].getAttribute("value"));
			
		} 
	}
	else
	{
		if(paObject != undefined)
		{
			paObject.value  =  '';
		}
	}
}

function checkCPFCNPJ(pobj_text){
	var str_dac = "";
	var str_number = "";
	var bln_check = false;
	
	try{
		if (pobj_text.value == "") return false;		
		if (pobj_text.type == undefined) return false;
		
		if (!validarCPFCNPJ(pobj_text.value)){
			msgBox("CNPJ Raiz / CPF � inv�lido\n");
			return false;
		}
		
		str_number = getNumbers(pobj_text.value);
		
		if (str_number == "") return false;
		if (arguments[1] == "CPF"){
			if (str_number.length != 11){
				msgBox("CPF � inv�lido\n");
				return false;
			}	
		}else if (arguments[1] == "CNPJ"){
			if (str_number.length != 14){			
				msgBox("CNPJ � inv�lido\n");
				return false;
			}	
		}else{
			if (str_number.length < 11 || str_number.length > 14){			
				msgBox("CNPJ Raiz / CPF � inv�lido\n");
				return false;
			}			
			if (str_number.length > 11 && str_number.length < 14){			
				msgBox("CNPJ Raiz / CPF � inv�lido\n");
				return false;
			}			
		}	
		
		str_dac = str_number.substr(str_number.length - 2, 2);
		str_number = str_number.substr(0, str_number.length - 2);
		
		if (str_number == "000000000"){
			msgBox("CNPJ Raiz / CPF � inv�lido\n");
			return false;
		}
		bln_check = isCPF_CNPJ(str_number, str_dac);
		
		if (!bln_check) {
			if (arguments[1] == undefined){
				msgBox("CNPJ Raiz / CPF � inv�lido\n");				
			}else{
				msgBox(arguments[1] + " � inv�lido\n");				
			}
			return false;
		}
		return true;
	}
	catch(obj_Error){
		showMessageError("checkCPFCNPJ", obj_Error);
	}
}
function isCPF_CNPJ(pstr_Number, pstr_Dac){
	var dbl_Soma = 0;
	var int_fator = 1;
	var int_limFator;
	var str_ConDac = "";	
	var int_digito = 0;
	int_limFator = pstr_Number.length > 9 ? 9: 11;
	try{
		for (var int_cont = pstr_Number.length-1; int_cont >= 0; int_cont--){
			int_fator = (int_fator == int_limFator) ? 2: ++int_fator;
			dbl_Soma += parseInt(int_fator * Number(pstr_Number.substr(int_cont, 1)));
		}		
		dbl_Soma /= 11;
		int_digito = Math.round(11 * (dbl_Soma - Math.floor(dbl_Soma)));
		int_digito = int_digito > 1 ? 11 - int_digito: 0;
		
		str_ConDac = int_digito.toString();
		
		pstr_Number = pstr_Number.concat(int_digito);
		int_fator = 1;
		dbl_Soma = 0;
		for (var int_cont = pstr_Number.length-1; int_cont >= 0; int_cont--){
			int_fator = (int_fator == int_limFator) ? 2: ++int_fator;
			dbl_Soma += parseInt(int_fator * Number(pstr_Number.substr(int_cont, 1)));
		}		
		dbl_Soma /= 11;
		int_digito = Math.round(11 * (dbl_Soma - Math.floor(dbl_Soma)));
		int_digito = int_digito > 1 ? 11 - int_digito: 0;
		
		str_ConDac = str_ConDac.concat(int_digito);
		return (pstr_Dac == str_ConDac);
	}
	catch(obj_Error){
		showMessageError("isCPF", obj_Error);
	}
}

function validarCPFCNPJ(pstr_Value){
	try{
		if(pstr_Value == null || 
		   pstr_Value == '' || 
		   pstr_Value == 'undefined') return true;
	
		var str_ValPossiveis = "0123456789.-/";
		for (var int_cont = 0; int_cont < pstr_Value.length; int_cont++){			
			if (str_ValPossiveis.indexOf(pstr_Value.substr(int_cont, 1)) == -1){	
				return false;
				break;
			}
		}
		return true;
	}
	catch(obj_Error){
		showMessageError("validarCPFCNPJ", obj_Error);
	}
}

function getNumbers(pstr_Value){
	try{
		if(pstr_Value == null || 
		   pstr_Value == '' || 
		   pstr_Value == 'undefined') return '';
	
		var str_num = "0123456789";
		var str_buffer = "";
		for (var int_cont = 0; int_cont < pstr_Value.length; int_cont++){			
			if (str_num.indexOf(pstr_Value.substr(int_cont, 1)) > -1){				
				str_buffer += pstr_Value.substr(int_cont, 1);
			}
		}
		return str_buffer;
	}
	catch(obj_Error){
		showMessageError("getNumbers", obj_Error);
	}
}

function onlyNumeric(pobj_Field,plng_Integer,plng_Decimal,pstr_Decimal,pstr_Escala) { //,pstr_LatLong) {
  try
  {
    this.bln_Verify = true;
    this.bln_IsDecimal = (plng_Decimal != null) ? (plng_Decimal > 0) ? true : false : false;
    this.str_Decimal = (pstr_Decimal != null) ? pstr_Decimal : "," ;
	
    this.str_Escala = (pstr_Escala != null) ? pstr_Escala : "" ;
    
    if (this.bln_Verify)
    {
	  
	  if (event.keyCode >= 48 && event.keyCode <= 57) 
      {
		this.bln_Verify = false;
	  }
         if (event.keyCode == 45 && this.str_Escala == "NP" && pobj_Field.value.indexOf("-") == -1){
		this.bln_Verify = false;
	  }
    }
    
    if (this.bln_IsDecimal)
    {
      if (event.keyCode == this.str_Decimal.charCodeAt())
      {
		if (pobj_Field.getAttribute("value").indexOf(this.str_Decimal) == -1) 
		{
			this.bln_Verify = false;
		}   
      }
    }
    
    if (this.bln_Verify)
    {
      event.cancelBubble = true;
      event.returnValue = false;
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[onlyNumeric]");
  }
  finally {
    this.bln_Verify = null;
    this.bln_IsDecimal = null;
    this.str_Decimal = null;
    this.bln_Verify = null;
  }
}

function validarSinalNeg_TypeKeyUp(pobjField)
{
	if(event.keyCode == 189 && pobjField.value.substr(0,1) != "-"){
		pobjField.value = pobjField.value.substr(0,pobjField.value.length - 1);
	}
}

function onlyInteiros(pobj_Field)
{
      if (event.keyCode < 48 || event.keyCode > 57) 
      {
        return false;
      }
}
function getCurrentDate(){
  try
  {
    var obj_Data, str_Data = '';           
    obj_Data = new Date();
	
    str_Data = ((obj_Data.getDate() + "/").length > 2) ? obj_Data.getDate() + "/" : "0" + obj_Data.getDate() + "/" ;
	str_Data += (((obj_Data.getMonth()+1) +"/").length > 2) ? (obj_Data.getMonth()+1) + "/" : "0"  + (obj_Data.getMonth()+1) + "/";
	str_Data += obj_Data.getYear();    	
    return str_Data;
  } 
  catch(obj_Exception) {
    exception(obj_Exception,"General[data error]");		
  }
  finally {
    obj_Data = null;
    str_Data = null;
  }
}
function verificarDataInicialMaiorCnh(dataInicial,dataFinal){
  try {
   
    var str_DataInicial, str_DataFinal, str_Data=false;           
    var str_Dia, arr_Data, str_Mes, str_Ano, str_DiaTotal, str_DataMot        
    var str_ultimoDiaMes;
    
    str_DataMot = dataInicial;
	arr_Data = str_DataMot.split("/");
	
	str_Mes			 = arr_Data[1];
	str_ultimoDiaMes = verificaUltimoDiaMes(str_Mes);
	str_Ano			 = arr_Data[2];
			
	str_Dia		 = arr_Data[0];	
	str_Dia		 = parseInt(str_Dia);
	str_DiaTotal = str_Dia;	
	
	for (var i=0; i < str_ultimoDiaMes; i++) {		
		if (str_DiaTotal == 30) {
			var str_Sobra = parseInt(str_ultimoDiaMes) - parseInt(i);			
			if (str_Sobra == 0) {
				str_Dia = "01";							
				} else {
				str_Dia = str_Sobra;
				}
				
			str_Mes = parseInt(parseFloat(str_Mes)) + 1;
			if (str_Mes == 13) {
				str_Mes = "01";
				str_Ano = parseInt(str_Ano) + 1;
				}						
			break;
			} else {
			str_DiaTotal = str_DiaTotal + 1;			
			}		
		}
		
	if (str_Dia.toString().length == 1) {		
		str_Dia = "0" + str_Dia;
		}	
	
	str_DataMot = str_Dia + "/" + str_Mes + "/" + str_Ano;		  
    str_DataMot = new Date(ANSIDate(str_DataMot));            
    str_DataFinal = new Date(ANSIDate(dataFinal));

    if (str_DataMot > str_DataFinal) {    
		str_Data=true;
		}	
    return str_Data;
  } 
    catch(obj_Exception) {
		exception(obj_Exception,"General[data error]");		
  }
  finally {
  }
}

function calcularData(str_dtRef , int_dias)
{
  try 
  {
       var l_dtRef, str_dtReturn;
       l_dtRef = new Date(ANSIDate(str_dtRef));
       l_dtRef.setDate(l_dtRef.getDate() + eval(int_dias));
       str_dtReturn = l_dtRef.getDate() + '/' + (l_dtRef.getMonth()+1) + '/' + l_dtRef.getFullYear();

       return str_dtReturn;
  } 
  catch(obj_Exception) 
  {
	   exception(obj_Exception,"General[data error]");		
  }
  finally 
  {
  }
}

function verificarDataInicialMaior(dataInicial,dataFinal) {
  try {
    
    var str_DataInicial, str_DataFinal, str_Data=false;           
    str_DataInicial = new Date(ANSIDate(dataInicial));

    str_DataFinal = new Date(ANSIDate(dataFinal));
	
    if (str_DataInicial > str_DataFinal)
    {
	str_Data=true;
    }	
    return str_Data;
  } 
    catch(obj_Exception) {
		exception(obj_Exception,"General[data error]");		
  }
  finally {
  }
}

function verificaUltimoDiaMes(mes) {	
	var dataAtual = new Date();
	var anoAtual  = dataAtual.getYear();
	var anoBissexto = parseInt(anoAtual) / 4;		
    var resto = anoBissexto.toString().split(".");	
	var restante = resto[1];				
	switch (mes) {
		case "2":
		case "02":
			if (restante != undefined) {
				return "28";
				} else {					
				return "29";
				}
			break;	
		case "4":
		case "04":
		case "6":
		case "06":
		case "9":
		case "09":
		case "11":
			return "30";
			break;	
		default:		
			return "31";
			break;								
		}	
	}

function ANSIDate(pstr_Data){
  try{
	var arr_Data = pstr_Data;
	arr_Data = arr_Data.split("/");
	return arr_Data[2] + "/" + arr_Data[1] + "/" + arr_Data[0];
		
  }
    catch(obj_Exception) {
		exception(obj_Exception,"General[verificarDataInicialMaior]");		
  }
  finally {
  }
}

function FORMA(num){
Resp=""
if(num<10){
Resp="0"
}
Resp=Resp+num
return Resp
}
function getCurrentTime(){
agora=new Date();
hora=agora.getHours();
minu=agora.getMinutes();
texto=FORMA(hora)+ ":" + FORMA(minu);
return texto;
}


function maskNumeric(pobj_Field,plng_Integer,plng_Decimal,pstr_Decimal)
{
  try
  {
    this.bln_IsDecimal = (plng_Decimal != null) ? (plng_Decimal > 0) ? true : false : false;
    this.str_Decimal = (plng_Decimal = 0) ? pstr_Decimal : "," ;
    
    this.str_AcceptChr = "0123456789" + this.str_Decimal;
    
    this.str_FieldValue = "";
    this.str_NewValue = "";
    
    if (pobj_Field.getAttribute("value") != "")
    {
      for (var int_C = 0; int_C < pobj_Field.getAttribute("value").length; int_C++)
      {
        if (this.str_AcceptChr.indexOf(pobj_Field.getAttribute("value").charAt(int_C)) != -1)
        {
          this.str_FieldValue += pobj_Field.getAttribute("value").charAt(int_C);
        }
      }
    }

  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[maskNumeric]");
  }
  finally {
    this.bln_IsDecimal = null;
    this.str_Decimal = null;
    this.str_AcceptChr = null;
    this.str_FieldValue = null;
    this.str_NewValue = null;
  }
}

function onlyDate(pobj_Field) {
  try {
    if (event.keyCode < 47 || event.keyCode > 57) {
      event.cancelBubble = true;
      event.returnValue = false;
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[onlyDate]");
  }
}

function maskDate(pobj_Field) {
  try {
    if (pobj_Field.value.split("/").length > 2) {
      this.str_Date = new Date(pobj_Field.value.split("/")[2],(Math.floor(pobj_Field.value.split("/")[1])-1),pobj_Field.value.split("/")[0],01,00,00);
      this.str_Day = ("00" + this.str_Date.getDate());
      this.str_Month = ("00" + (this.str_Date.getMonth() + 1));
      this.str_Year = ("0000" + this.str_Date.getFullYear());
      this.str_Day = this.str_Day.substring((this.str_Day.length - 2),this.str_Day.length);
      this.str_Month = this.str_Month.substring((this.str_Month.length - 2),this.str_Month.length);
      this.str_Year = this.str_Year.substring((this.str_Year.length - 4),this.str_Year.length);
      pobj_Field.value = (this.str_Day + "/" + this.str_Month + "/" + this.str_Year);
    }
    else {
      pobj_Field.value = "";
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[maskDate]");
  }
  finally {
    this.str_Date = null;
    this.str_Day = null;
    this.str_Month = null;
    this.str_Year = null;
  }
}

function onlyTime(pobj_Field) {
  try {
    if (event.keyCode < 48 || event.keyCode > 58) {
      event.cancelBubble = true;
      event.returnValue = false;
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[onlyTime]");
  }
}

function maskTime(pobj_Field) {
  try {
    this.str_Date = new Date(0,0,0,pobj_Field.value.split(":")[0],((pobj_Field.value.split(":")[1] != null) ? pobj_Field.value.split(":")[1] : "0"));
    this.str_Hour = ("00" + this.str_Date.getHours());
    this.str_Minute = ("00" + this.str_Date.getMinutes());
    this.str_Hour = this.str_Hour.substring((this.str_Hour.length - 2),this.str_Hour.length);
    this.str_Minute = this.str_Minute.substring((this.str_Minute.length - 2),this.str_Minute.length);
    pobj_Field.value = (this.str_Hour + ":" + this.str_Minute);
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[maskTime]");
  }
}

function maskHour_Type(paEvento,paObjeto)
{
	var tecla = event.keyCode;
	var vwString = new String();
		
	if(tecla > 47 && tecla < 58) 
	{
		vwString  = paObjeto.value 
		switch(vwString.length)
		{
			case 1:
				if (parseInt(paObjeto.value) > 2)
				{
					paObjeto.value = "";
					return false;
				}
			break;
			case 2:
				if (parseInt(paObjeto.value) > 23)
				{
					paObjeto.value = "";
					return false;
				}
				paObjeto.value   = paObjeto.value  + ':'
			break;
			case 4:
				if (parseInt(paObjeto.value.substring(paObjeto.value.length -1,paObjeto.value.length)) > 5)
				{
					paObjeto.value = paObjeto.value.substring(0,paObjeto.value.length-1);
					return false;
				}
			break;
		}
		return true;
	}
	else 
	{
		return false;
	}
}


function maskHour(paObj)
{
	var vwValor  = new String() 
	var vwPosi, vwTemp;  
	var vwHora, vwMinuto
	vwValor  =  paObj.value;
	vwValor = vwValor.substr(0,5)  
	if(paObj.value == '')
	{
		return;
	} 
	
	vwPosi  = vwValor.indexOf(":",1);
	if(vwPosi > -1)
	{
		vwTemp		=  vwValor.split(":");
		vwHora		=  vwTemp[0];
		vwMinuto	=  vwTemp[1];
	}
	else
	{
		vwValor = vwValor.substr(0,4)  
		vwHora  =  vwValor.substr(0,2);
		vwMinuto  =  vwValor.substr(2,2);
	}
	vwHora		=	'00' + vwHora;
	vwHora      =   vwHora.substr(vwHora.length-2,2);
	vwMinuto	=	'00' + vwMinuto;
	vwMinuto    =   vwMinuto.substr(vwMinuto.length-2,2);
	
	if(parseInt(vwHora) > 23 ||  parseInt(vwHora)  < -1) 
	{
		paObj.value  =  '23:59'
		return; 
	}  
	if(parseInt(vwMinuto) > 59 ||  parseInt(vwMinuto)  < -1) 
	{
		paObj.value  =  '23:59'
		return; 
	}  
	paObj.value  =  vwHora  + ':' + vwMinuto;
}


function calendar(pobj_Field) {
  try {
    if (!pobj_Field.disabled){
	    this.str_URL = getHost()+"/includes/calendar.asp";
	    this.str_Result = showModalDialog(this.str_URL,"","center=yes;dialogWidth=321px;dialogHeight=192px;status=no");
	    if (this.str_Result != null) {
	      if (this.str_Result != "") {
	        pobj_Field.value = this.str_Result;
	        maskDate(pobj_Field);
	        main('retData',pobj_Field,pobj_Field.value);
	      }else{
	      	pobj_Field.value = "";
	      }
	      
	    }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[calendar]");
  }
  finally {
    this.str_URL = null;
    this.str_Result = null;
  }
}

function maxLength(pobj_Field,plng_Length) {
try 
{
    if (pobj_Field.value.length >= plng_Length) 
    {
      pobj_Field.value = pobj_Field.value.substring(0,plng_Length);
      event.cancelBubble = true;
      event.returnValue = false;
    }
}
catch(obj_Exception) 
{
    exception(obj_Exception,"General[maxLength]");
}

}

function clone(pobj_Field) {
  try {
    this.str_FieldId = (pobj_Field.getAttribute("id") != null) ? pobj_Field.getAttribute("id") : "";
    if (this.str_FieldId != "") {
      this.obj_Elements = document.all(this.str_FieldId);
      for (var int_E = 0; int_E < this.obj_Elements.length; int_E++) {
        if (pobj_Field.type == this.obj_Elements[int_E].type) {
          this.bln_Clone = (this.obj_Elements[int_E].getAttribute("clone") != null) ? ((this.obj_Elements[int_E].getAttribute("clone") == "true") ? true : false) : false;
          if (this.bln_Clone) {
            this.obj_Elements[int_E].value = pobj_Field.getAttribute("value");
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[clone]");
  }
  finally {
    this.str_FieldId = null;
    this.obj_Elements = null;
  }
}

function copyFormToForm() {
  try {
    this.str_FormIdFrom = (arguments[0] != null) ? arguments[0] : "";
    this.str_FormIdTo = (arguments[1] != null) ? arguments[1] : "";
    if (this.str_FormIdFrom != "" && this.str_FormIdTo != "") {
      this.obj_FormFrom = document.getElementById(this.str_FormIdFrom);
      this.obj_FormTo = document.getElementById(this.str_FormIdTo);
      if (this.obj_FormFrom != null && this.obj_FormTo != null) {
        this.obj_ElementsFrom = this.obj_FormFrom.elements;
        for (var int_F = 0; int_F < this.obj_ElementsFrom.length; int_F++) {
          this.str_ElementId = (this.obj_ElementsFrom[int_F].getAttribute("id") != null) ? this.obj_ElementsFrom[int_F].getAttribute("id") : "";
          if (this.str_ElementId != "") {
            if (this.obj_FormTo.item(this.str_ElementId) != null) {
              this.obj_FormTo.item(this.str_ElementId).setAttribute("value",((this.obj_ElementsFrom[int_F].getAttribute("value") != null) ? this.obj_ElementsFrom[int_F].getAttribute("value") : ""));
            }
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[copyFormToForm]");
  }
  finally {
    this.str_FormIdFrom = null;
    this.str_FormIdTo = null;
    this.obj_FormFrom = null;
    this.obj_FormTo = null;
    this.obj_ElementsFrom = null;
    this.str_ElementId = null;
  }
}

function showLayer(pstr_FieldId) {
  try {
    var bln_All = (arguments[1] != null) ? (arguments[1] == true) ? true : false : true;
    if (!bln_All) {
      if (document.getElementById(pstr_FieldId) != null) {
        document.getElementById(pstr_FieldId).style.display = "";
      }
    }
    else {
      var obj_Divs = document.all(pstr_FieldId);
      if (obj_Divs != null) {
        if (obj_Divs.length != null) {
          for (var int_D = 0; int_D < obj_Divs.length; int_D++) {
            if (obj_Divs[int_D].style.display != "") {
              obj_Divs[int_D].style.display = "";
            }
          }
        }
        else {
          if (obj_Divs.style.display != "") {
            obj_Divs.style.display = "";
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[showLayer]");
  }
  finally {
    delete bln_All;
    delete obj_Divs;
  }
}

function hideLayer(pstr_FieldId) {
  try {
    var bln_All = (arguments[1] != null) ? (arguments[1] == true) ? true : false : true;
    if (!bln_All) {
      if (document.getElementById(pstr_FieldId) != null) {
        document.getElementById(pstr_FieldId).style.display = "none";
      }
    }
    else {
      var obj_Divs = document.all(pstr_FieldId);
      if (obj_Divs != null) {
        if (obj_Divs.length != null) {
          for (var int_D = 0; int_D < obj_Divs.length; int_D++) {
            if (obj_Divs[int_D].style.display != "none") {
              obj_Divs[int_D].style.display = "none";
            }
          }
        }
        else {
          if (obj_Divs.style.display != "none") {
            obj_Divs.style.display = "none";
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[hideLayer]");
  }
  finally {
    delete bln_All;
    delete obj_Divs;
  }
}

var bln_Expand = false;

function setLayer(pstr_FieldId) {
  try {
    var bln_ExpandAll = (arguments[1] != null) ? (arguments[1] == true) ? true : false : false;
    expand(pstr_FieldId,true,bln_ExpandAll,true);
    var obj_Field = document.getElementById(pstr_FieldId);
    if (obj_Field != null) {
      var str_Src = obj_Field.getAttribute("src");
      if (str_Src.indexOf("mais.gif") != -1) {
        expand(pstr_FieldId,true,bln_ExpandAll,true);
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[setLayer]");
  }
  finally {
    delete bln_ExpandAll;
    delete obj_Field;
    delete str_Src;
  }
}

function setFocus(pstr_Id) {
  try {
    this.int_FocusIndex = (arguments[1] != null) ? arguments[1] : 0;
    this.obj_Element = document.getElementById(pstr_Id);
    if (this.obj_Element != null) {
      while(this.obj_Element.tagName != "FORM") {
        this.obj_Element = this.obj_Element.parentElement;
      }
      this.int_Index = -1;
      for (var int_F = 0; int_F < document.forms.length; int_F++) {
        if (document.forms[int_F].getAttribute("id") == this.obj_Element.getAttribute("id")) {
          this.int_Index = int_F;
          break;
        }
      }
      if (this.int_Index == -1) {
        return;
      }
      this.int_Cont = 0;
      for (var int_E = 0; int_E < document.forms[this.int_Index].elements.length; int_E++) {
        this.obj_Element = document.forms[this.int_Index].elements[int_E];
        if (this.obj_Element.getAttribute("disabled") != true && this.obj_Element.getAttribute("readOnly") != true) {
          this.str_TagName = this.obj_Element.tagName;
          switch(this.str_TagName) {
            case "INPUT":
              this.str_TagName += "-" + this.obj_Element.type;
              break;
            case "SELECT":
              this.str_TagName = this.obj_Element.type;
              break;
          }
          this.str_TagName = this.str_TagName.toLowerCase();
          switch(this.str_TagName) {
            case "input-file":
            case "input-text":
            case "input-checkbox":
            case "input-radio":
            case "input-button":
            case "select-one":
            case "select-multiple":
            case "textarea":
              if (this.int_FocusIndex != 0) {
                if (this.int_Cont == this.int_FocusIndex) {
                  this.obj_Element.focus();
                  return;
                }
              }
              else {
                this.obj_Element.focus();
                return;
              }
              this.int_Cont++;
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[setFocus]");
  }
  finally {
    this.int_FocusIndex = null;
    this.obj_Element = null;
    this.int_Index = null;
    this.obj_Elements = null;
    this.bln_Exit = null;
    this.str_TagName = null;
  }
}

function expand(pstr_FieldId) 
{
	// var vwNivelPath =  "../../";
	var vwNivelPath =  "";
	if(vwNr_NivelPath == 1)  
	{
		// vwNivelPath  =  "../";
		vwNivelPath  =  "";
	} 
//  try {
    if (!bln_Expand) {
      this.bln_Show = (arguments[1] != null) ? ((arguments[1] == true) ? true : false) : false;
      this.bln_Expand = (!bln_Expand && arguments[2] != null) ? ((arguments[2] == true) ? true : false) : false;
      this.bln_Bar = (arguments[3] != null) ? ((arguments[3] == true) ? true : false) : false;
      if (!this.bln_Show) {
        return;
      }
    }
    this.obj_XmlDom = new XMLHttpRequest();
    this.obj_XmlDom.loadXML("<root/>");
    this.obj_Root = this.obj_XmlDom.document.documentElement;
    this.obj_Form = null;
    this.obj_Img = document.getElementById(pstr_FieldId);
    if (this.obj_Img != null) {
      this.str_ParentElement = "";
      while(this.obj_Form == null) {
        this.str_ParentElement += ".parentElement";
        if (eval("this.obj_Img" + this.str_ParentElement + ".tagName") == "FORM") {
          this.obj_Form = eval("this.obj_Img" + this.str_ParentElement);
        }
        if (eval("this.obj_Img" + this.str_ParentElement + ".tagName") == "BODY") {
          break;
        }
      }
      if (this.obj_Form != null) {
        this.str_FormId = (this.obj_Form.getAttribute("id") != null) ? this.obj_Form.getAttribute("id") : "";
        this.str_PK = (this.obj_Form.getAttribute("pk") != null) ? this.obj_Form.getAttribute("pk") : "";
        this.obj_Node = this.obj_XmlDom.createNode(1,this.str_FormId,"");
        this.obj_Node.setAttribute("pk",this.str_PK);
        this.obj_Root.appendChild(this.obj_Node);
      }
      this.obj_Div = document.getElementById("div"+pstr_FieldId.substring(3,pstr_FieldId.length));
      if (this.obj_Div != null) {
        if (this.obj_Img.src.indexOf("_menos") != -1) {
        
          this.obj_Img.src = vwNivelPath + "images_home/img_display/img_botoes/ultr_mais.gif";
          this.obj_Div.style.display = "none";
          this.bln_Hide = true;
        }
        else {
          this.obj_Img.src = vwNivelPath + "images_home/img_display/img_botoes/ultr_menos.gif";
          this.obj_Div.style.display = "";
          this.bln_Hide = false;
        }
        this.str_NivelOrigem = (this.obj_Div.getAttribute("nivel") != null) ? this.obj_Div.getAttribute("nivel") : "0";
        this.obj_Divs = document.getElementsByTagName("DIV");
        if (this.obj_Divs != null) {
          for (var int_D = 0; int_D < this.obj_Divs.length; int_D++) {
            this.str_Id = (this.obj_Divs[int_D].getAttribute("id") != null) ? this.obj_Divs[int_D].getAttribute("id") : "";
            this.str_Nivel = (this.obj_Divs[int_D].getAttribute("nivel") != null) ? this.obj_Divs[int_D].getAttribute("nivel") : "";
			if(this.obj_Divs[int_D].getAttribute("id")){
				this.obj_Img = document.getElementById("img"+this.obj_Divs[int_D].getAttribute("id").substring(3,this.obj_Divs[int_D].getAttribute("id").length));
				if (this.str_Id != "" && this.str_Nivel != "") {
				  if (this.bln_Hide) {
					if (this.str_Id == ("div"+pstr_FieldId.substring(3,pstr_FieldId.length))) {
					  if (this.obj_Img != null) {
						this.obj_Img.src = vwNivelPath +  "images_home/img_display/img_botoes/ultr_mais.gif";
					  }
					  this.obj_Divs[int_D].style.display = "none";
					}
				  }
				  else {
					if (this.str_Id == ("div"+pstr_FieldId.substring(3,pstr_FieldId.length))) {
					  if (this.obj_Img != null) {
						this.obj_Img.src = vwNivelPath + "images_home/img_display/img_botoes/ultr_menos.gif";
					  }
					  this.obj_Divs[int_D].style.display = "";
					}
					else {
					  if (Math.floor(this.str_Nivel) >= Math.floor(this.str_NivelOrigem)) {
						if (this.obj_Img != null) {
						  this.obj_Img.src = vwNivelPath + "images_home/img_display/img_botoes/ultr_mais.gif";
						}
						this.obj_Divs[int_D].style.display = "none";
					  }
					}
				  }
				}
			}
          }
        }
        if (this.obj_Form != null) {
          this.obj_Node = this.obj_XmlDom.selectSingleNode("root/operation");
          if (this.obj_Node == null) {
            this.obj_Node = this.obj_XmlDom.createNode(1,"operation","");
            this.obj_Root.appendChild(this.obj_Node);
          }
          this.obj_Node = this.obj_XmlDom.selectSingleNode("root/operation");
          if (this.bln_Hide) {
            this.obj_Node.setAttribute("value","save");
          }
          else {
            if (!this.bln_Bar) {
              this.obj_Node.setAttribute("value","save");
              main("forms",null,this.obj_XmlDom.xml());
            }
            this.obj_Node.setAttribute("value","load");
          }
          main("forms",null,this.obj_XmlDom.xml());
        }
      }
    }

    this.obj_XmlDom = null;
    this.obj_Root = null;
    this.obj_Form = null;
    this.obj_Img = null;
    this.str_ParentElement = null;
    this.str_FormId = null;
    this.str_PK = null;
    this.obj_Node = null;
    this.obj_Div = null;
    this.bln_Hide = null;
    this.str_NivelOrigem = null;
    this.obj_Divs = null;
    this.str_Id = null;
    this.str_Nivel = null;

}

function changeFolder(pobj_Collumn,pstr_DivsId,pint_Index) {
  try {
    this.obj_Cols = pobj_Collumn.parentElement.getElementsByTagName("TD")
    if (this.obj_Cols != null) {
      for (var int_C = 0; int_C < this.obj_Cols.length; int_C++) {
        this.obj_Cols[int_C].className = "abaroxa";
      }
      pobj_Collumn.className = "abaazulroll";
      this.obj_Divs = document.all(pstr_DivsId);
      if (this.obj_Divs != null) {
        for (var int_D = 0; int_D < this.obj_Divs.length; int_D++) {
          if (pint_Index == int_D) {
            this.obj_Divs[int_D].style.display = "block";
          }
          else {
            this.obj_Divs[int_D].style.display = "none";
          }
        }
      }
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[changeFolder]");
  }
  finally {
    this.obj_Cols = null;
    this.obj_Divs = null;
  }
}

function exception(pobj_Exception,pstr_ClassMethod) {
  try {
    this.str_ExceptionBody = "";
    if (pobj_Exception != null)
    {
      if (pobj_Exception.number != 0) {
        this.str_ExceptionBody += "Erro: " + pstr_ClassMethod + "\n\n";
        this.str_ExceptionBody += "Descri��o : [" + pobj_Exception.number + "] ";
        this.str_ExceptionBody += pobj_Exception.name + " - ";
        this.str_ExceptionBody += pobj_Exception.description + "\n\n";
        this.str_ExceptionBody += self.location + "\n";
      }
      else {
        if (pobj_Exception.message != "" || pobj_Exception.description != "") {
          this.str_ExceptionBody = "\n" + pobj_Exception.description + "\n";
        }
      }
    }
    if (this.str_ExceptionBody != "") {
      this.str_ExceptionBody = "Favor reportar esta mensagem para o suporte do sitema, comentando\n"
        + "a opera��o que est� sendo executada.\n\n" + this.str_ExceptionBody;
      alert(this.str_ExceptionBody);
    }
  }
  catch(lobj_Exception) {
    alert("Exception: [" + pobj_Exception.number + "] " + lobj_Exception.description);
  }
  finally {
    this.str_ExceptionBody = "";
  }
}

function store(pobj_Field) {
  try {
    if (pobj_Field.createTextRange) {
      pobj_Field.caretPos = document.selection.createRange().duplicate();
    }
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[store]");
  }
  finally {
  }
}

function trim(pstr_Value) {
  try {
    var str_Result = pstr_Value;
    while(str_Result.indexOf("  ") != -1) {
      str_Result = str_Result.replace(/  /g," ");
    }
    if (str_Result.substring(0,1) == " ") {
      str_Result = str_Result.substring(1,str_Result.length);
    }
    if (str_Result.substring((str_Result.length - 1),str_Result.length) == " ") {
      str_Result = str_Result.substring(0,(str_Result.length - 1));
    }
    return str_Result;
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[trim]");
  }
  finally {
    delete str_Result;
  }
}

function omitirBarra(){		
	if(event.keyCode == 193 || event.keyCode == 111){
		event.returnValue = false;
	}
}

function lerMensagem(pstr_IdMensagem){
try {
    var obj_XML = new XMLHttpRequest();
    var obj_NXML;
    var str_DsMensagem = "";
    var str_Host, astr_Host;
    var arr_Param;
    
    str_Host = getHost();
    obj_XML.async = false;
    obj_XML.load(str_Host + "/includes/mensagem.xml");
    if (obj_XML.parseError == 0){		
	obj_NXML = obj_XML.selectSingleNode("//*[@value='" + pstr_IdMensagem.toUpperCase() + "']");		
	if (obj_NXML == null){
		str_DsMensagem = "Mensagem n�o encontrada";
	}else{
		str_DsMensagem = obj_NXML.text;
	}
   }	
   
   if (str_DsMensagem.indexOf("[") != -1 && arguments[1] != undefined){
   	var arr_Param = arguments[1].split("|");
   	for (var int_cont = 0; int_cont < arr_Param.length; int_cont++){
	   	var str_Param = str_DsMensagem.substr(str_DsMensagem.indexOf("["),str_DsMensagem.indexOf("]") + 1 -str_DsMensagem.indexOf("["));
		str_DsMensagem = str_DsMensagem.replace(str_Param,arr_Param[int_cont]);
	}
	
   }else if (str_DsMensagem.indexOf("[") != -1 && arguments[1] == undefined) {
   	str_DsMensagem = "Informar o(s) par�metro(s) da mensagem";
   }
   return unescape(str_DsMensagem);
}
	catch(obj_Exception) {
    	exception(obj_Exception,"General[lerMensagem]");
}finally {
	delete obj_XML;
    	delete obj_NXML;
	delete str_DsMensagem;    
  }
}

function mergeXMLSL(pstr_XMLServer,pstr_XMLLocal){
  try {
	var str_FormName = "";
	
	var str_XMLServer = "";	
	var obj_XMLServer = new XMLHttpRequest();
	obj_XMLServer.loadXML(pstr_XMLServer);
	
	var obj_NServer = obj_XMLServer.selectNodes("//row");	
	for(var int_conts=0; int_conts < obj_NServer.length; int_conts++){		
		if (obj_NServer[int_conts].getAttribute("status") == "server"){
			str_XMLServer += obj_NServer[int_conts].xml;
		}
	}
	
	var str_XMLLocal = "";	
	var obj_XMLLocal = new XMLHttpRequest();
	obj_XMLLocal.loadXML(pstr_XMLLocal);
	
	var obj_NLocal = obj_XMLLocal.selectNodes("//row");	
	for(var int_contl=0; int_contl < obj_NLocal.length; int_contl++){		
		if (obj_NLocal[int_contl].getAttribute("status") != "del"){
			str_XMLLocal += obj_NLocal[int_contl].xml;			
		}
	}
		
	var str_MergedXML = "<root><form tipo='table'>" + str_XMLLocal + str_XMLServer + "</form></root>";
	return str_MergedXML;
  }
  catch(obj_Exception) {
    exception(obj_Exception,"General[mergeXMLSL]");
  }
  finally {
    delete obj_XMLServer;
    delete obj_XMLLocal;
    delete obj_NServer;
    delete obj_NLocal;
  }
}

//***********************************************************************
// Funcionalidade: Merge array contendo mais de um item de programa
// Data          : 27/11/2012
//***********************************************************************
function mergeXmlArrayReceita (pastr_Xml)
{
 
  try
  { 
		var obj_MergeXml;
		var obj_MergeXml2;
		var obj_MergeRoot;
		var obj_MergeNode;
		var obj_ItemNode;
		var llng_cont;       

		obj_MergeXml	  = new XMLHttpRequest();
		obj_MergeXml2	  = new XMLHttpRequest();
		obj_ItemNode      = new XMLHttpRequest();
    
		obj_MergeXml.loadXML ("<root/>");
    
		obj_MergeRoot = obj_MergeXml.document.documentElement;
		for(llng_cont = 0 ; llng_cont < pastr_Xml.length ; llng_cont++)
		{
			obj_MergeXml2.loadXML (pastr_Xml[llng_cont]);
		    
		    if (obj_MergeXml2.parseError == 0)
			{
		        if (llng_cont == 1)
				{
					var obj_nodesItems = obj_MergeXml2.selectNodes("//row");
					if (obj_nodesItems != null)
					{
						for(var int_conts=0; int_conts < obj_nodesItems.length; int_conts++)
						{
							obj_MergeRoot.appendChild (obj_nodesItems[int_conts].cloneNode("True"));
						}
					}
					
				}
				else
				{
					obj_MergeNode = obj_MergeXml2.selectSingleNode("root/*");
		        
					if(obj_MergeNode!= null)
					{
						obj_MergeRoot.appendChild (obj_MergeNode.cloneNode("True"));
					}
				}
		    }
    	}
    
	return obj_MergeXml.xml;
  
  }
  catch(obj_Exception) 
  {
    exception(obj_Exception,"General[mergeXmlArray]");
  }
  finally 
  {
	delete obj_MergeXml;
	delete obj_MergeXml2;
	delete obj_MergeRoot;
	delete obj_MergeNode;
    
  }
}

function separateEntFil(pstr_Field,pobj_Ent,pobj_Fil){
	try {
	   var str_separator = arguments[3];
	   if (str_separator == undefined){
	   	str_separator = "/";
	   }
	   if (pstr_Field != "") {	   	
	   	var dsentidade = pstr_Field.substr(0,pstr_Field.indexOf(str_separator));
	   	if (pstr_Field.indexOf(str_separator) >0) {
	   		pobj_Ent.value = trim(unescape(dsentidade));
	   		var dsfilial = pstr_Field.substr(pstr_Field.indexOf(str_separator) + 1, pstr_Field.length);
	   		pobj_Fil.value = trim(unescape(dsfilial));
	   	}
	   	else {
	   		pobj_Ent.value = pstr_Field;
	   		pobj_Fil.value = "";
	   	}
	  }else{
	  	pobj_Ent.value = "";
  	  	pobj_Fil.value = "";
	  }

	}
	catch(obj_Exception) {
		exception(obj_Exception,"General[separateEntFil]");
  	}
	finally {
		delete pstr_Field;
		delete pobj_Ent;
		delete pobj_Fil;
  	}
}

function eliminatekeyboard(){
	try {
		var astr_KeyCode = arguments[0].split("|");
		
		for (var int_cont = 0; int_cont < astr_KeyCode.length; int_cont++){
			if (event.keyCode == astr_KeyCode[int_cont]){
				
				event.cancelBubble = true;
				event.returnValue = false;
			}
		}
	}
	catch(obj_Exception) {
		exception(obj_Exception,"General[eliminatekeyboard]");
	}
}

//FABIO
//REMOVER ACENTUACAO E PASSAR PARA MAIUSCULO
function digitarUpper(pobj)
{
	var aceitaMinusculo = (arguments[1] != null) ? arguments[1] : "N";	
	
	var novokeyCode = event.keyCode;
	
	if(event.keyCode == 199 || event.keyCode == 231)
	{
		novokeyCode = 67;
	}
	if (aceitaMinusculo == "N"){
		if (event.keyCode >= 97 && event.keyCode <= 122){
			novokeyCode = event.keyCode - 32
		}
	}
	
	if((event.keyCode>=192 && event.keyCode<=195)||(event.keyCode>=224 && event.keyCode <=227)){
		novokeyCode = 65;
	}
	else if((event.keyCode>=200 && event.keyCode <=203)||(event.keyCode>=232 && event.keyCode <=235)){
		novokeyCode = 69;
	}
	else if((event.keyCode>=204 && event.keyCode <=207)||(event.keyCode>=236 && event.keyCode <=239)){
		novokeyCode = 73;
	}
	else if((event.keyCode>=210 && event.keyCode <=214)||(event.keyCode>=242 && event.keyCode <=246)){
		novokeyCode = 79;
	}

	else if((event.keyCode>=217 && event.keyCode <=220)||(event.keyCode>=249 && event.keyCode <=252)){
		novokeyCode = 85;
	}
	else if(event.keyCode==209 || event.keyCode==241){
		novokeyCode = 78;
	}
	else if(event.keyCode==126 || event.keyCode==96 || event.keyCode==180 || event.keyCode==94){
		novokeyCode = 13;
	}else if(event.keyCode==39){
		 novokeyCode = 00;
	}
	event.srcElement.value = event.srcElement.value + String.fromCharCode(novokeyCode);
	event.preventDefault();	
}

function trim(pstr_Palavra) {
    var inicial=0;
    var final=pstr_Palavra.length;
    while (pstr_Palavra.charCodeAt(inicial)==32) {inicial++;}
    while (pstr_Palavra.charCodeAt(final-1)==32) {final--;}
    return(pstr_Palavra.substr(inicial,final-inicial));
}

var reEmail1 = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
var reEmail2 = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
var reEmail3 = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
var reEmail = reEmail3;

function ValidaEmail(pStr, pFmt)
{
	eval("reEmail = reEmail" + pFmt);
	if (reEmail.test(pStr)) 
	{
		return true;
		
	} else if (pStr != null && pStr != "") 
	{
		return false;
		
	}
}

function markCombo(obj, refValue)
{
	var volta = false;
	if (obj != undefined)
	{
		if(obj.disabled){obj.disabled = false; volta = true;}
	
		var limCombo = obj.length;
		for (i=0; i < limCombo; i++)
		{
					
			if(obj.item(i).value == refValue)
			{
			obj.item(i).selected = true;
			
			}		
		}
	
		obj.disabled = volta;
	}
}


function mergeXmlArray (pastr_Xml){
 
  try{ 
		var obj_MergeXml;
		var obj_MergeXml2;
		var obj_MergeRoot;
		var obj_MergeNode;
		var llng_cont;       

		obj_MergeXml	  = new XMLHttpRequest();
		obj_MergeXml2	  = new XMLHttpRequest();
    
		obj_MergeXml.loadXML ("<root/>");
    
		obj_MergeRoot = obj_MergeXml.document.documentElement;
		for(llng_cont = 0 ; llng_cont < pastr_Xml.length ; llng_cont++)
		{
			obj_MergeXml2.loadXML (pastr_Xml[llng_cont]);
		    
		    if (obj_MergeXml2.parseError == 0){
		        
		        obj_MergeNode = obj_MergeXml2.selectSingleNode("root/*");
		        
		        if(obj_MergeNode!= null){
		            obj_MergeRoot.appendChild (obj_MergeNode.cloneNode("True"));
		        }
		    }
    	}
    
	return obj_MergeXml.xml;
  
  }catch(obj_Exception) {
    exception(obj_Exception,"General[mergeXmlArray]");
  }
  finally {
	delete obj_MergeXml;
	delete obj_MergeXml2;
	delete obj_MergeRoot;
	delete obj_MergeNode;
    
  }
}

function getAttribute(strXML, atribute, path)
{
	var objDOM_v = new XMLHttpRequest();
	objDOM_v.loadXML(strXML);
	if (objDOM_v.parseError == 0) 
	{
	    if(objDOM_v.selectSingleNode(path) != null) 
	    {obj_Node = objDOM_v.selectSingleNode(path);return obj_Node.getAttribute(atribute);}
		else{return "";}
	}
	delete objDOM_v;
}


function getXmlToRel(){
	try{
		
		var str_xml_in = arguments[0];
		
		var objXML_At  =  new XMLHttpRequest();
		var objNodesAt;
		var objXML_Tipo  =  new XMLHttpRequest();
		var objNodesTipo;
	
		objXML_At.loadXML(str_xml_in);
	
		objNodesAt = objXML_At.selectSingleNode("root/*");
		objNodesAt.setAttribute("pathname",arguments[1]);
	
		var nodename = objNodesAt.nodeName;
		str_xml_in = objXML_At.xml;
				
		objXML_Tipo.loadXML(str_xml_in);
		objNodesTipo = objXML_At.selectNodes("//frm_filtro");
				
		var xml_ini = "";
		var xml_meio = "";
		var xml_fim = "";
		var xml_rel = "";
				
		xml_ini = "<root><frm pathname='" + arguments[1] + "'>";
		xml_fim = "</frm></root>";
				
		var obj_NodeFilho = objNodesTipo(0).childNodes;
				
		for(i=0;i < obj_NodeFilho.length;i++){
			if (obj_NodeFilho(i).nodeName !="loginatu" && obj_NodeFilho(i).nodeName !="loginentidade" && obj_NodeFilho(i).nodeName !="loginfilial"){
				var nodeSel = document.getElementById(obj_NodeFilho(i).nodeName);
				xml_meio += "<" + unescape(obj_NodeFilho(i).nodeName) + " value='" + unescape(nodeSel.value) + "' type_value='" + unescape(nodeSel.type_value) + "'/>";
			 }else{
			 	xml_meio += "<" + unescape(obj_NodeFilho(i).nodeName) + " value='" + unescape(obj_NodeFilho(i).getAttribute("value")) + "' type_value='int'/>";
			 }
		}
		xml_rel = xml_ini + xml_meio + xml_fim;
		
		return xml_rel;
		
	}catch(obj_Exception) {
		exception(obj_Exception,"General[getXmlToRel]");
	}
	finally {
		delete objXML_At;
		delete objNodesAt;
		delete objXML_Tipo;
		delete objNodesTipo;
		delete obj_NodeFilho;
	}
}

function fncForceForm(objForm){

	var mensagem = "Necess�rio informar o(s) seguinte(s) campo(s):\n\n";
	var indice = "";
	for (var i=0; i < objForm.length; i++)
	{
		
		if ((objForm.item(i).lbl != undefined)&&(objForm.item(i).lbl != ""))
		{
			if (trim(objForm.item(i).value) == "")
			{
				mensagem += "- " + objForm.item(i).lbl + "\n";
				if (indice.toString() == "") 
				{
					indice = i;
				}
			}
		}
	}
	if (indice.toString() != "")
	{
		msgBox(mensagem);
		objForm.item(indice).focus();
		return false;
	}
	else
	{
		return true;
	}
}
function fncObtemImpressora()
{
	return Impressora.ObtemImpressora;
}

function fncVerificaImpressora()
{
	var nrVersao			= 0;
	var strXMLImpressora	= "";
	var objXMLImpressora	= new XMLHttpRequest();
	
	strXMLImpressora = Impressora.ObtemImpressora;
	objXMLImpressora.loadXML(strXMLImpressora);
	
	if (objXMLImpressora.parseError == 0) 
	{
		nrVersao = objXMLImpressora.selectSingleNode("//versao").getAttribute("value");
	
		if (nrVersao == "")
		{
			nrVersao = "0";
		}
		
		if (nrVersao == "6")
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	else
	{
		return false;
	}
}

function fncVerificaVersaoOcxBal(){
	var nrVersao	  = 0;
	var strXMLBalanca = "";
	var objXMLBalanca = new XMLHttpRequest();
	
	strXMLBalanca = BalancaToledo.ObtemBalanca;
	objXMLBalanca.loadXML(strXMLBalanca);
	if (objXMLBalanca.parseError == 0) {
		nrVersao = objXMLBalanca.selectSingleNode("//versao").getAttribute("value");
		nrVersao = (nrVersao == "") ? "0" : nrVersao;
		if (nrVersao == "6"){
			return true;
		} else{
			return false;
		}	
	}else{
		return false;
	}
}

function formatarDecimal(valor, precisao){
	try{
		valor = valor.replace(".",",")
		var valor_conv = valor.split(",");
		var valor_aux = "";
		var valor_zero = "";
		var resultado;
		
		if (valor_conv.length > 1){
			if (valor_conv[1].length < precisao){
				for(i=valor_conv[1].length;i < precisao;i++){
					valor_zero = valor_zero + '0'
				}
				resultado = valor_conv[0] + "," + valor_conv[1] + valor_zero;
			}else{
				valor_aux = valor_conv[1].substr(0,precisao);
				resultado = valor_conv[0] + "," + valor_aux;
			}
		}else{
			for(i=0;i < precisao;i++){
				valor_zero = valor_zero + '0'
			}
			resultado = valor + ',' + valor_zero;
			}
			
		return resultado;
	}catch(obj_Exception) {
		exception(obj_Exception,"General[formatarDecimal]");
	}
}

function verificarDataInicialFinal(dataInicial,horaInicial,dataFinal,horaFinal,operador){
  try{
	var str_DataInicial, str_DataFinal, str_Data=false;           

	if (trim(dataInicial) == "" || trim(horaInicial) == "" || trim(dataFinal) == "" || trim(horaFinal) == ""){
		str_Data = false;
	}else{
		str_DataInicial = new Date(ANSIDate(dataInicial + " " + horaInicial));
		str_DataFinal = new Date(ANSIDate(dataFinal + " " + horaFinal));
		switch(operador){
			case ">":
				if (str_DataInicial > str_DataFinal){
					str_Data=true;
				}	
			break;
			case ">=":
				if (str_DataInicial >= str_DataFinal){
					str_Data=true;
				}	
			break;
			case "<":
				if (str_DataInicial < str_DataFinal){
					str_Data=true;
				}	
			break;
			case "<=":
				if (str_DataInicial <= str_DataFinal){
					str_Data=true;
				}	
			break;
			default:
				if (str_DataInicial == str_DataFinal){
					str_Data=true;
					}	
			break;
		}
	}
    return str_Data;
  } 
    catch(obj_Exception) {
		exception(obj_Exception,"General[data error]");		
  }
  finally {
  }
}

function TimeMedia(str_hora, str_dia){
	if(parseInt(str_dia) == 0){
		return "0:00"
	}
	var hora_ret = "";
	var minu_ret = "";
	var hora = str_hora.split(":")[0]
	var minu = str_hora.split(":")[1]
	var media = (parseInt(hora)*60 + parseInt(minu)) / parseInt(str_dia);
	
	hora_ret = parseInt(parseInt(media)/60);	
	minu_ret = parseInt(media)%60;
	
	if (minu_ret.toString().length < 2){
		minu_ret = "0" + minu_ret;
	}
	return hora_ret + ":" + minu_ret;
}

function TimeMinutMedia(str_minut, str_dia){
	if(parseInt(str_dia) == 0){
		return "0:00"
	}
	var hora_ret = "";
	var minu_ret = "";
	var media = (parseInt(str_minut)) / parseInt(str_dia);
	
	hora_ret = parseInt(parseInt(media)/60);
	minu_ret = parseInt(media)%60;
	
	if (minu_ret.toString().length < 2){
		minu_ret = "0" + minu_ret;
	}
	return hora_ret + ":" + minu_ret;
}

 function valida_AlfabetoComPontuacao(objElemento) {
            if (objElemento.length > 0) {
                var reVerifica = /^[.:;@&, ()$��\/\-\r\n0-9a-zA-Z]*$/ 
                if (objElemento.replace('\r\n','').search(reVerifica) == -1) {
                    alert('Insira valores sem acentua��es');
                    return false;
                }
            }
         }
         
function valida_Pontuacao(objElemento)
 {
    if (objElemento.length > 0) {
        var reVerifica = /^[\/\\.\,\&\-\r\n0-9a-zA-Z ]*$/ 
        if (objElemento.replace('\r\n','').search(reVerifica) == -1) {
            alert('Insira valores sem pontua��o.');
            objElemento.replace('\r\n','')
            return false;
        }
        else
        {
            return true;
        }
     }
     else
     {
        return true;
     }
  }




var OrdZero = '0'.charCodeAt(0);
function CharToInt(ch)
{
return ch.charCodeAt(0) - OrdZero;
}


function IntToChar(intt)
{
return String.fromCharCode(intt + OrdZero);
}


function CheckIEAC(ie){
if (ie.length != 13)
return false;
var b = 4, soma = 0;

for (var i = 0; i <= 10; i++)
{
soma += CharToInt(ie.charAt(i)) * b;
--b;
if (b == 1) { b = 9; }
}
dig = 11 - (soma % 11);
if (dig >= 10) { dig = 0; }
resultado = (IntToChar(dig) == ie.charAt(11));
if (!resultado) { return false; }

b = 5;
soma = 0;
for (var i = 0; i <= 11; i++)
{
soma += CharToInt(ie.charAt(i)) * b;
--b;
if (b == 1) { b = 9; }
}
dig = 11 - (soma % 11);
if (dig >= 10) { dig = 0; }
if (IntToChar(dig) == ie.charAt(12)) { return true; } else { return false; }
} //AC


function CheckIEAL(ie)
{
if (ie.length != 9)
  return false;
var b = 9, soma = 0;
for (var i = 0; i <= 7; i++)
{
   soma += CharToInt(ie.charAt(i)) * b;
   --b;
}
soma *= 10;
dig = soma - Math.floor(soma / 11) * 11;
if (dig == 10) { dig = 0; }
return (IntToChar(dig) == ie.charAt(8));
} //AL


function CheckIEAM(ie)
{
if (ie.length != 9)
  return false;
var b = 9, soma = 0;
for (var i = 0; i <= 7; i++)
{
  soma += CharToInt(ie.charAt(i)) * b;
  b--;
}
if (soma < 11) { dig = 11 - soma; }
else {
   i = soma % 11;
   if (i <= 1) { dig = 0; } else { dig = 11 - i; }
}
return (IntToChar(dig) == ie.charAt(8));
} //am


function CheckIEAP(ie)
{
if (ie.length != 9)
  return false;
var p = 0, d = 0, i = ie.substring(1, 8);
if ((i >= 3000001) && (i <= 3017000))
{
  p =5;
  d = 0;
}
else if ((i >= 3017001) && (i <= 3019022))
{
  p = 9;
  d = 1;
}
b = 9;
soma = p;
for (var i = 0; i <= 7; i++)
{
  soma += CharToInt(ie.charAt(i)) * b;
  b--;
}
dig = 11 - (soma % 11);
if (dig == 10)
{
   dig = 0;
}
else if (dig == 11)
{
   dig = d;
}
return (IntToChar(dig) == ie.charAt(8));
} //ap


function CheckIEBA(ie){
if (ie.length == 8)
{ 
    die = ie.substring(0, 8);
    var nro = new Array(8);
    var dig = -1;
    for (var i = 0; i <= 7; i++)
    {
      nro[i] = CharToInt(die.charAt(i));
    }
    var NumMod = 0;
    if (String(nro[0]).match(/[0123458]/))
    {
       NumMod = 10;
    }
    else
    {
       NumMod = 11;
    }
    b = 7;
    soma = 0;
    for (i = 0; i <= 5; i++)
    {
      soma += nro[i] * b;
      b--;
    }
    i = soma % NumMod;
    if (NumMod == 10)
    {
      if (i == 0) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    else
    {
      if (i <= 1) 
      { 
        dig = 0; 
      } 
      else 
      {
        dig = NumMod - i; 
      }
    }
    resultado = (dig == nro[7]);
    if (!resultado) 
    { 
        return false; 
    }
    b = 8;
    soma = 0;
    for (i = 0; i <= 5; i++)
    {
      soma += nro[i] * b;
      b--;
    }
    soma += nro[7] * 2;
    i = soma % NumMod;
    if (NumMod == 10)
    {
      if (i == 0) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    else
    {
      if (i <= 1) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    return (dig == nro[6]);
    
}
else if(ie.length == 9)
{
    die = ie.substring(0, 9);
    var nro = new Array(9);
    var dig = -1;
    for (var i = 0; i <= 8; i++)
    {
      nro[i] = CharToInt(die.charAt(i));
    }
    var NumMod = 0;
    if (String(nro[1]).match(/[0123458]/))
    {
       NumMod = 10;
    }
    else
    {
       NumMod = 11;
    }
    b = 8;
    soma = 0;
    for (i = 0; i <= 6; i++)
    {
      soma += nro[i] * b;
      b--;
    }
    i = soma % NumMod;
    if (NumMod == 10)
    {
      if (i == 0) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    else
    {
      if (i <= 1) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    resultado = (dig == nro[8]);
    if (!resultado) 
    { 
        return false; 
    }
    b = 9;
    soma = 0;
    for (i = 0; i <= 6; i++)
    {
      soma += nro[i] * b;
      b--;
    }
    soma += nro[8] * 2;
    i = soma % NumMod;
    if (NumMod == 10)
    {
      if (i == 0) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    else
    {
      if (i <= 1) 
      { 
        dig = 0; 
      } 
      else 
      { 
        dig = NumMod - i; 
      }
    }
    return (dig == nro[7]);
    
}
else
{
    return false;
}
}//ba


function CheckIECE(ie)
{
if (ie.length > 9)
  return false;
die = ie;
if (ie.length < 9)
{
  while (die.length <= 8)
   die = '0' + die;
}
var nro = Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(die);
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
dig = 11 - (soma % 11);
if (dig >= 10)
  dig = 0;
return (dig == nro[8]);
} //ce


function CheckIEDF(ie)
{
if (ie.length != 13)
  return false;
var nro = new Array(13);
for (var i = 0; i <= 12; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 4;
soma = 0;
for (i = 0; i <= 10; i++)
{
  soma += nro[i] * b;
  b--;
  if (b == 1)
   b = 9;
}
dig = 11 - (soma % 11);
if (dig >= 10)
  dig = 0;
resultado = (dig == nro[11]);
if (!resultado)
  return false;  
b = 5;
soma = 0;
for (i = 0; i <= 11; i++)
{
  soma += nro[i] * b;
  b--;
  if (b == 1)
   b = 9;
}
dig = 11 - (soma % 11);
if (dig >= 10)
  dig = 0;
return (dig == nro[12]);
}


// CHRISTOPHE T. C. <wG @ codingz.info>
function CheckIEES(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i < 2)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
}


function CheckIEGO(ie)
{
if (ie.length != 9)
  return false;
s = ie.substring(0, 2);
if ((s == '10') || (s == '11') || (s == '15'))
{
  var nro = new Array(9);
  for (var i = 0; i <= 8; i++)
   nro[i] = CharToInt(ie.charAt(i));
  n = Math.floor(ie / 10);
  if (n = 11094402)
  {
   if ((nro[8] == 0) || (nro[8] == 1))
return true;
  }
  b = 9;
  soma = 0;
  for (i = 0; i <= 7; i++)
  {
   soma += nro[i] * b;
   b--;
  }
  i = soma % 11;
  if (i == 0)
   dig = 0;
  else
  {
   if (i == 1)
   {
if ((n >= 10103105) && (n <= 10119997))
  dig = 1;
else
  dig = 0;
   }
   else
dig = 11 - i;
  }
  return (dig == nro[8]);
}
}


function CheckIEMA(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
}


function CheckIEMT(ie)
{
if (ie.length < 9)
  return false;
die = ie;
if (die.length < 11)
{
  while (die.length <= 10)
   die = '0' + die;
  var nro = new Array(11);
  for (var i = 0; i <= 10; i++)
   nro[i] = CharToInt(die);
  b = 3;
  soma = 0;
  for (i = 0; i <= 9; i++)
  {
   soma += nro[i] * b;
   b--;
   if (b == 1)
b = 9;
  }
  i = soma % 11;
  if (i <= 1)
   dig = 0;
  else
   dig = 11 - i;
  return (dig == nro[10]);
}
} //muito


function CheckIEMS(ie)
{
if (ie.length != 9)
  return false;
if (ie.substring(0,2) != '28')
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
} //ms


function CheckIEPA(ie)
{
if (ie.length != 9)
  return false;
if (ie.substring(0, 2) != '15')
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
} //pra


function CheckIEPB(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;  
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
} //pb


function CheckIEPR(ie)
{
if (ie.length != 10)
  return false;
var nro = new Array(10);
for (var i = 0; i <= 9; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 3;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
  if (b == 1)
   b = 7;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
resultado = (dig == nro[8]);
if (!resultado)
  return false;
b = 4;
soma = 0;
for (i = 0; i <= 8; i++)
{
  soma += nro[i] * b;
  b--;
  if (b == 1)
   b = 7;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[9]);
} //pr


function CheckIEPE_Old(ie)
{
    if (ie.length != 14)
        return false;
    var nro = new Array(14);
    for (var i = 0; i <= 13; i++)
        nro[i] = CharToInt(ie.charAt(i));
    b = 5;
    soma = 0;
    for (i = 0; i <= 12; i++)
    {
        soma += nro[i] * b;
        b--;
        if (b == 0)
        b = 9;
    }
    dig = 11 - (soma % 11);
    if (dig > 9)
        dig = dig - 10;
    return (dig == nro[13]);
} //pe

//Change Request 27996 - Raphael da Cunha Crejo - everis - 02 de maio de 2012
function CheckIEPE(ie)
{
    if (ie.length != 9)
    {
        return false; 
    }
    
    var nro = new Array(9);
    for (var i = 0; i <= 8; i++)
    {
        nro[i] = CharToInt(ie.charAt(i));
    }
    
    var soma1 = 0;
    for (var j = 0; j <= 6; j++)
    {
        soma1 += nro[j] * (8 - j);
    }
    
    var resto1 = soma1 % 11;
    var digito1;
    if (resto1 == 0 || resto1 == 1)
    {
        digito1 = 0;
    }
    else
    {
        digito1 = 11 - resto1;
    }
    
    var soma2 = digito1 * 2;
    for (var k = 0; k <= 6; k++)
    {
        soma2 += nro[k] * (9 - k);
    }
    
    var resto2 = soma2 % 11;
    var digito2;
    if (resto2 == 0 || resto2 == 1)
    {
        digito2 = 0;
    }
    else
    {
        digito2 = 11 - resto2;
    }
    
    if (digito1 == nro[7])
    {
        if (digito2 == nro[8])
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

function CheckIEPI(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
} //pi


function CheckIERJ(ie)
{
if (ie.length != 8)
  return false;
var nro = new Array(8);
for (var i = 0; i <= 7; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 2;
soma = 0;
for (i = 0; i <= 6; i++)
{
  soma += nro[i] * b;
  b--;
  if (b == 1)
   b = 7;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[7]);
} //rj


// CHRISTOPHE T. C. <wG @ codingz.info>
function CheckIERN(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
soma *= 10;
dig = soma % 11;
if (dig == 10)
  dig = 0;
return (dig == nro[8]);
} //rn


function CheckIERS(ie)
{
if (ie.length != 10)
  return false;
i = ie.substring(0, 3);
if ((i >= 1) && (i <= 467))
{
  var nro = new Array(10);
  for (var i = 0; i <= 9; i++)
   nro[i] = CharToInt(ie.charAt(i));
  b = 2;
  soma = 0;
  for (i = 0; i <= 8; i++)
  {
   soma += nro[i] * b;
   b--;
   if (b == 1)
b = 9;
  }
  dig = 11 - (soma % 11);
  if (dig >= 10)
   dig = 0;
  return (dig == nro[9]);
} //if i&&i
} //rs


function CheckIEROantigo(ie)
{
if (ie.length != 9) {
return false;
}

var nro = new Array(9);
b=6;
soma =0;

for( var i = 3; i <= 8; i++) {

    nro[i] = CharToInt(ie.charAt(i));

        if( i != 8 ) {
            soma = soma + ( nro[i] * b );
            b--;
        }

}

dig = 11 - (soma % 11);
if (dig >= 10)
  dig = dig - 10;

return (dig == nro[8]);

} //ro-antiga


function CheckIERO(ie)
{

if (ie.length != 14) {
return false;
}

var nro = new Array(14);
b=6;
soma=0;

        for(var i=0; i <= 4; i++) {
    
            nro[i] = CharToInt(ie.charAt(i));

        
                soma = soma + ( nro[i] * b );
                b--;

        }

        b=9;
        for(var i=5; i <= 13; i++) {
    
            nro[i] = CharToInt(ie.charAt(i));

                if ( i != 13 ) {        
                soma = soma + ( nro[i] * b );
                b--;
                }

        }

                        dig = 11 - ( soma % 11);
                            
                            if (dig >= 10)
                                  dig = dig - 10;

                                    return(dig == nro[13]);
                        
} //ro nova


function CheckIERR(ie)
{
if (ie.length != 9)
  return false;
if (ie.substring(0,2) != '24')
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
var soma = 0;
var n = 0;
for (i = 0; i <= 7; i++)
  soma += nro * ++n;
dig = soma % 9;
return (dig == nro[8]);
} //rr


function CheckIESC(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
i = soma % 11;
if (i <= 1)
  dig = 0;
else
  dig = 11 - i;
return (dig == nro[8]);
} //sc


// CHRISTOPHE T. C. <wG @ codingz.info>
function CheckIESP(ie)
{
if (((ie.substring(0,1)).toUpperCase()) == 'P')
{
  s = ie.substring(1, 9);
  var nro = new Array(12);
  for (var i = 0; i <= 7; i++)
   nro[i] = CharToInt(s);
  soma = (nro[0] * 1) + (nro[1] * 3) + (nro[2] * 4) + (nro[3] * 5) +
   (nro[4] * 6) + (nro[5] * 7) + (nro[6] * 8) + (nro[7] * 10);
  dig = soma % 11;
  if (dig >= 10)
   dig = 0;
  resultado = (dig == nro[8]);
  if (!resultado)
   return false;
}
else
{
  if (ie.length != 12 )
   return false;
  var nro = new Array(12);
  for (var i = 0; i <= 11; i++)
   nro[i] = CharToInt(ie.charAt(i));
  soma = (nro[0] * 1) + (nro[1] * 3) + (nro[2] * 4) + (nro[3] * 5) +
   (nro[4] * 6) + (nro[5] * 7) + (nro[6] * 8) + (nro[7] * 10);
  dig = soma % 11;
  if (dig >= 10)
   dig = 0;
  resultado = (dig == nro[8]);
  if (!resultado)
   return false;
  soma = (nro[0] * 3) + (nro[1] * 2) + (nro[2] * 10) + (nro[3] * 9) +
   (nro[4] * 8) + (nro[5] * 7) + (nro[6] * 6)  + (nro[7] * 5) +
   (nro[8] * 4) + (nro[9] * 3) + (nro[10] * 2);
  dig = soma % 11;
  if (dig >= 10)
   dig = 0;
  return (dig == nro[11]);
}
} //sp


function CheckIESE(ie)
{
if (ie.length != 9)
  return false;
var nro = new Array(9);
for (var i = 0; i <= 8; i++)
  nro[i] = CharToInt(ie.charAt(i));
b = 9;
soma = 0;
for (i = 0; i <= 7; i++)
{
  soma += nro[i] * b;
  b--;
}
dig = 11 - (soma % 11);
if (dig >= 10)
  dig = 0;
return (dig == nro[8]);
} //se


function CheckIETO(ie)
{
if (ie.length != 9) {
return false;
}

var nro = new Array(9);
b=9;
soma=0;

for (var i=0; i <= 8; i++ ) {

nro[i] = CharToInt(ie.charAt(i));

if(i != 8) {
soma = soma + ( nro[i] * b );
b--;
}


}

ver = soma % 11;

if ( ver < 2 )

dig=0;

if ( ver >= 2 )
dig = 11 - ver;

return(dig == nro[8]);
} //to


//inscri��o estadual antiga
function CheckIETOantigo(ie)
{

if ( ie.length != 11 ) {
    return false;

}


var nro = new Array(11);
b=9;
soma=0;

s = ie.substring(2, 4);

    if( s != '01' || s != '02' || s != '03' || s != '99' ) {


        for ( var i=0; i <= 10; i++)
        {

            nro[i] = CharToInt(ie.charAt(i));    

            if( i != 3 || i != 4) {

            soma = soma + ( nro[i] * b );
            b--;
            
            } // if ( i != 3 || i != 4 )

        } //fecha for


            resto = soma % 11;        
            
                if( resto < 2 ) {    

                    dig = 0;

                }


                if ( resto >= 2 ) {

                    dig = 11 - resto;

                }            

                return (dig == nro[10]);

    } // fecha if


}//fecha fun��o CheckIETOantiga


function CheckIEMG(ie)
{
if (ie.substring(0,2) == 'PR')
  return true;
if (ie.substring(0,5) == 'ISENT')
  return true;
if (ie.length != 13)
  return false;
dig1 = ie.substring(11, 12);
dig2 = ie.substring(12, 13);
inscC = ie.substring(0, 3) + '0' + ie.substring(3, 11);
insc=inscC.split('');
npos = 11;
i = 1;
ptotal = 0;
psoma = 0;
while (npos >= 0)
{
  i++;
  psoma = CharToInt(insc[npos]) * i;  
  if (psoma >= 10)
   psoma -= 9;
  ptotal += psoma;
  if (i == 2)
   i = 0;
  npos--;
}
nresto = ptotal % 10;
if (nresto == 0)
  nresto = 10;
nresto = 10 - nresto;
if (nresto != CharToInt(dig1))
  return false;
npos = 11;
i = 1;
ptotal = 0;
is=ie.split('');
while (npos >= 0)
{
  i++;
  if (i == 12)
   i = 2;
  ptotal += CharToInt(is[npos]) * i;
  npos--;
}
nresto = ptotal % 11;
if ((nresto == 0) || (nresto == 1))
  nresto = 11;
nresto = 11 - nresto;  
return (nresto == CharToInt(dig2));
}


function CheckIE(ie, estado)
{
ie = ie.replace(/\./g, '');
ie = ie.replace(/\\/g, '');
ie = ie.replace(/\-/g, '');
ie = ie.replace(/\//g, '');
if ( ie == 'ISENTO')
  return true;
switch (estado)
{
  case 'MG': return CheckIEMG(ie); break;
  case 'AC': return CheckIEAC(ie); break;
  case 'AL': return CheckIEAL(ie); break;
  case 'AM': return CheckIEAM(ie); break;
  case 'AP': return CheckIEAP(ie); break;
  case 'BA': return CheckIEBA(ie); break;
  case 'CE': return CheckIECE(ie); break;
  case 'DF': return CheckIEDF(ie); break;
  case 'ES': return CheckIEES(ie); break;
  case 'GO': return CheckIEGO(ie); break;
  case 'MA': return CheckIEMA(ie); break;
  case 'muito': return CheckIEMT(ie); break;
  case 'MS': return CheckIEMS(ie); break;
  case 'pra': return CheckIEPA(ie); break;
  case 'PB': return CheckIEPB(ie); break;
  case 'PR': return CheckIEPR(ie); break;
  case 'PE': return CheckIEPE(ie); break;
  case 'PI': return CheckIEPI(ie); break;
  case 'RJ': return CheckIERJ(ie); break;
  case 'RN': return CheckIERN(ie); break;
  case 'RS': return CheckIERS(ie); break;
  case 'RO': return ((CheckIERO(ie)) || (CheckIEROantigo(ie))); break;
  case 'RR': return CheckIERR(ie); break;
  case 'SC': return CheckIESC(ie); break;
  case 'SP': return CheckIESP(ie); break;
  case 'SE': return CheckIESE(ie); break;
  case 'TO': return ((CheckIETO(ie)) || (CheckIETOantigo(ie))); break;//return CheckIETO(ie); break;        
}
}

function validaNomeProprio(objNome)
{//Validar se nome possui menos de 5 letras.
	var strNome = objNome.value;
	if (strNome.length > 0 && strNome.length <5)
	{
		alert("Informe um nome V�lido!")
		objNome.value = "";
		objNome.focus();
	}
}


function formataValorTexto(obj)
{
    var strValue = obj.value;
    
    strValue = strValue.toUpperCase();
    
    strValue = strValue.replace(/�/g, 'A').replace(/�/g, 'A').replace(/�/g, 'A').replace(/�/g, 'A').replace(/�/g, 'A');
    strValue = strValue.replace(/�/g, 'E').replace(/�/g, 'E').replace(/�/g, 'E').replace(/�/g, 'E');
    strValue = strValue.replace(/�/g, 'O').replace(/�/g, 'O').replace(/�/g, 'O').replace(/�/g, 'O').replace(/�/g, 'O');
    strValue = strValue.replace(/�/g, 'I').replace(/�/g, 'I').replace(/�/g, 'I').replace(/�/g, 'I');
    strValue = strValue.replace(/�/g, 'U').replace(/�/g, 'U').replace(/�/g, 'U').replace(/�/g, 'U');
    strValue = strValue.replace(/�/g, 'N');
    strValue = strValue.replace(/�/g, 'C');
    
    obj.value = strValue;
}

function verificarStringVazia(pString) {
    switch (pString) {
        case typeof this == "undefined":
        case null:
        case "":
            return true;
        default:
            if(pString.replace(/^\s+|\s+$/g,"") == "")
            {
               return true;
            }
            return false;
    }
}

function validarHorario(pHorario) {
    var hrPart = unescape(pHorario).split(":");
    var horas = parseInt(hrPart[0]);
    var minutos = parseInt(hrPart[1]);

    if (isNaN(horas) || isNaN(minutos)) {
        return false;
    }

    if ((horas < 0) || (horas > 23) ||
     (minutos < 0) || (minutos > 59)) {

        return false;
    }

    return true;
}

function converterStringToDateTime(pData, pHorario) {
    var dtPart = unescape(pData).split("/");
    var hrPart = unescape(pHorario).split(":");

    // YYYY/MM/DD HH/MI/SS
    return new Date(dtPart[2], dtPart[1], dtPart[0], hrPart[0], hrPart[1], 0);
}