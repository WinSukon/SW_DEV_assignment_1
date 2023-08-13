const onClickhandler=()=>{

    let n=false
    let cn=false
    let cnum=false
    let ch=false
    let s=false

    let name= document.getElementById("name").value
    if(name===""){
        document.getElementById("err_name").innerHTML="Company name is required *"
        n=false
    }
    else{
        document.getElementById("err_name").innerHTML=""
        n=true
    }

    let contact_name= document.getElementById("contact_name").value
    if(contact_name===""){
        document.getElementById("err_con_name").innerHTML="Contact name is required *"
        cn=false
    }
    else{
        document.getElementById("err_con_name").innerHTML=""
        cn=true
    }

    let contact_num= document.getElementById("contact_num").value
    if(contact_num===""){
        document.getElementById("err_con_num").innerHTML="Contact num is required *"
        cnum=false
    }
    else{
        document.getElementById("err_con_num").innerHTML=""
        cnum=true


    }

    let chair= document.getElementById("chair").value
    if(chair===""){
        document.getElementById("err_chair").innerHTML=""
        ch=true

    }
    else{
        if(chair<1 || chair>10){
            document.getElementById("err_chair").innerHTML="Amount of chair must be between 1 and 10 *"
            ch=false
        }
        else{
            document.getElementById("err_chair").innerHTML=""
            ch=true

        }
    }
   
    let sizes= document.getElementById("sizes").value
    if(sizes===""){
        document.getElementById("err_sizes").innerHTML="Booth size is required *"
        s=false
    }
    else{
        document.getElementById("err_sizes").innerHTML=""
        s=true
    }

    if(n && cn && ch && cnum && s){
        document.getElementById("isValid").innerHTML="All the inputs are Valid"
    }
    else{
        document.getElementById("isValid").innerHTML=""
    }

}