const onClickhandler=()=>{

    let name= document.getElementById("name").value
    if(name===""){
        document.getElementById("err_name").innerHTML="Company name is required *"
    }
    else{
        document.getElementById("err_name").innerHTML=""

    }

    let contact_name= document.getElementById("contact_name").value
    if(contact_name===""){
        document.getElementById("err_con_name").innerHTML="Contact name is required *"
    }
    else{
        document.getElementById("err_con_name").innerHTML=""

    }

    let contact_num= document.getElementById("contact_num").value
    if(contact_num===""){
        document.getElementById("err_con_num").innerHTML="Contact num is required *"
    }
    else{
        document.getElementById("err_con_num").innerHTML=""

    }

    let chair= document.getElementById("chair").value
    console.log(chair)
    if(chair===""){
        document.getElementById("err_chair").innerHTML=""
    }
    else{
        if(chair<1 || chair>10){
            document.getElementById("err_chair").innerHTML="Amount of chair must be between 1 and 10 *"
        }
        else{
            document.getElementById("err_chair").innerHTML=""
        }
    }
   
    let sizes= document.getElementById("sizes").value
    if(sizes===""){
        document.getElementById("err_sizes").innerHTML="Booth size is required *"
    }
    else{
        document.getElementById("err_sizes").innerHTML=""

    }

}