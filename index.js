let counting=document.getElementById("counting");
let err=document.getElementById('error');
let clr=document.getElementById('clear');
let curr_val=0;
clr.addEventListener("click",()=>{
    console.log("clicking!!");
    curr_val=0;    
    err.style.cssText="display:none;";
    clr.style.cssText="display:none;";
    let cnt=document.getElementById('counting');
    cnt.textContent=`Your Current Count is: ${curr_val}`;
    cnt.appendChild();
}); 
document.getElementById('inc').addEventListener("click",()=>{
    curr_val++;
    err.style.cssText="display:none";
    clr.style.cssText="display:glow;";
    let cnt=document.getElementById('counting');
    cnt.textContent=`Your Current Count is: ${curr_val}`;
    cnt.appendChild();
});
document.getElementById('dec').addEventListener("click",()=>{
    if(curr_val===0)
    {
        err.style.cssText="display:glow;color:red;margin-top:10px; margin-bottom:10px;";
    }
    else{
        curr_val--;
        if(curr_val===0)
        {
            clr.style.cssText="display:none;"
        }
        let cnt=document.getElementById('counting');
        cnt.textContent=`Your Current Count is: ${curr_val}`;
        cnt.appendChild();
    }
});