function find(event)
{
    event.preventDefault();
    let num=document.getElementById("num");
    let msg=document.getElementById("msg");
    let operation=event.submitter.value;
    let n=parseFloat(num.value);

    if(num.value===""){
        alert("You Didnot Enter a Number");
        msg.innerHTML="";
        num.focus();
        return;
    }
    let r;

    if(operation==="Square") {
    r=n*n;
    let a="Square "+ r.toFixed(2);
    msg.innerHTML=a;  
    }      
    else if(operation==="Cube"){
        r=n*n*n;
        let a="Cube "+ r.toFixed(2);
        msg.innerHTML=a;  
    }
    else if(operation==="Square Root"){
        if(num.value<0)
        {
            alert("Square root is not defined for negative numbers");
            msg.innerHTML="";
            num.focus();
            return;
        }
        r=Math.sqrt(n);
        let a="Square Root "+ r.toFixed(2);
        msg.innerHTML=a;  
    
    } 
}