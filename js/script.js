var i=0;

function show1()
{	
if(i==0)
{

document.getElementById("t6").style.display="inline";
document.getElementById("l1").style.display="inline";
i=1;
}

}
function hide1()
{
		
if(i==1)
{
document.getElementById("t6").style.display="none";
document.getElementById("l1").style.display="none";
i=0;
}
}

function postalcode(value)

{
	var regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
var match = regex.exec(value);
if (match){if ( (value.indexOf("-") == -1 || value.indexOf(" ") == -1 ) && value.length() == 6 ) 
{
	return true;
}
    else if ( (value.indexOf("-") !== -1 || value.indexOf(" ") !== -1 ) && value.length() == 7 ) 
	{
        return true;
    } 
} 

else 
{
        return false;
}
}
