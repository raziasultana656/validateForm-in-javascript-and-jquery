
  var table = [];
 var edit_trigger=0;
 var index_row=0;

function country_function(mycountry)
{
    var ctext="";
    var xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var myObj = JSON.parse(this.responseText);
            if(mycountry =="INDIA"){
                for(x in myObj.India){
                    ctext +="<option>" +myObj.India[x]+ "</option>";
                }
            }
            else if(mycountry=="US")
            {
                for(x in myObj.US){
                    ctext +="<option>" + myObj.US[x] + "</option>";
                }
            }
            document.getElementById("output").innerHTML=ctext;
        }
    };
    xhttp.open("GET","student.json",true);
    xhttp.send();
    /*
    var a=document.getElementById("input").value;
    if(a==="INDIA")
    {
        var arr=["Maharashtra","Delhi"];
    }
    else if(a==="USA")
    {
        var arr=["Washington","Texas","New York"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("output").innerHTML=string;*/

}
function month_function(){
    var month=document.getElementById("input_month").value;
    var year= document.getElementById("year").value;
    var arr =[];
    if(month=="JAN"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
    else if(month=="FEB"){
            if(Number(year)%4==0 && Number(year)%100!=0){
                for(var i=1;i<=29;i++)
                     arr.push(i); 
            }
            else if(Number(year)%4==0 && Number(year)%100 ==0 && Number(year)%400 ==0){ 
                for(var i=1;i<=29;i++)
                     arr.push(i); 
            }
            else{
                for(var i=1;i<=28 ;i++)
                arr.push(i);  
            }
    }
    else if(month=="MAR"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
         
    else if(month=="APR"){
        for(var i=1;i<=30;i++)
        arr.push(i);
    }
        
    else if(month=="MAY"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
        
    else if(month=="JUN"){
        for(var i=1;i<=30;i++)
        arr.push(i);
    }
         
    else if(month=="JULY"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
    else if(month=="AUG"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
    else if(month=="SEP"){
        for(var i=1;i<=30;i++)
        arr.push(i);
    }
    else if(month=="OCT"){
        for(var i=1;i<=31;i++)
        arr.push(i);
    }
    else if(month=="NOV")
        { 
            for(var i=1;i<=31;i++)
            arr.push(i);
        }
    else if(month=="DEC"){
         for(var i=1;i<=31;i++)
        arr.push(i);
    }
        
    

        var string="<option value='0' disabled selected>Day</option>";
 
        for(i=0;i<arr.length;i++)
        {
            string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
        }
        document.getElementById("output_day").innerHTML=string;
    
}
function data_upload(){
    var regName = /^[A-Za-z\\s]+$/;
    var regPhone = /^\d{10}$/;
    if(form.firstname.value=="") {
        
        document.getElementById("txtFname").style.borderColor = "red";
        //alert("Please Enter First Name");
        form.firstname.focus();
         
      }
      else if(!regName.test(form.firstname.value)){
        //alert("Please Enter valid First Name");
        document.getElementById("txtFname").style.borderColor = "red";
       
        form.firstname.focus();
      }
     else if(form.lastname.value=="") {
        //alert("Please Enter Last Name");
        document.getElementById("txtLname").style.borderColor = "red";
       
        form.lastname.focus();
        
      }
      else if(!regName.test(form.lastname.value)){
       // alert("Please Enter valid last Name");
       document.getElementById("txtLname").style.borderColor = "red";
      
        form.firstname.focus();
      }
      else if(form.email.value=="") {
        document.getElementById("txtEmail").style.borderColor = "red";
       // alert("Please Enter Email");
        form.email.focus();
         
      }
      else if(form.phone.value=="") {
       // alert("Please Enter Phone");
        document.getElementById("txtPhone").style.borderColor = "red";
        
        form.phone.focus();
        
      }
      else if(!regPhone.test(form.phone.value)){
        //alert("Please Enter valid  Phone Number");
        document.getElementById("txtPhone").style.borderColor = "red";
        form.phone.focus();
      }//month validation
    else if(document.getElementById('input_month').value=="0")
      {
      alert("Please Select Month");
      } //for year
    else if(document.getElementById('year').value=="0")
      {
      alert("Please Select Year");
      }
      else if(document.getElementById('input').value=="0")
      {
          alert("Please select Country");
      }
      else if(document.getElementById('max_edu').value=="0")
      {
          alert("Please select Max qualification");
      }
      else{
        
        var dob="";
        var hobby="";
        var gender="male";
        var day=document.getElementById("output_day").value;
        var month= document.getElementById("input_month").value;
        var year= document.getElementById("year").value;
        dob=day+"-"+month+"-"+year;

        if(document.getElementById("chkReading").checked ==true)
        {
        hobby +=(document.getElementById("chkReading").value)+",";
        }
        if(document.getElementById("chkListening").checked ==true)
        {
        hobby +=(document.getElementById("chkListening").value)+",";
        }
         if(document.getElementById("chkOther").checked ==true)
        {
        hobby +=(document.getElementById("chkOther").value);
        }
             if(document.getElementById("rdbFemale").checked==true)
                     gender="female";
            if(document.getElementById("rdbOther").checked==true)
                     gender="other";
         var obj = {
                firstname:form.firstname.value,
                lastname:form.lastname.value,
                email:form.email.value,
                phone: form.phone.value,
                dob:dob,
                country:document.getElementById("input").value,
                state:document.getElementById("output").value,
                gender:gender,
                hobby:hobby,
                education:document.getElementById("max_edu").value
                };
        
     if(edit_trigger == 0)
        { 
            //push in table
            table.push(obj);
        }
    else{
         //update in table
         
       table[index_row] = obj;
        edit_trigger = 0;
    }
       var txt=" <table>"+
      " <tr>"+
          " <th>FIRST NAME </th>"+
           "<th>LAST NAME</th>"+
           "<th>Email</th>"+
           "<th>Phone Number</th>"+
           "<th>DOB</th>"+
          " <th>Country</th>"+
           "<th>State</th>"+
          " <th>Gender</th>"+
           "<th>Hobbies</th>"+
           "<th>Education</th>"+
           "<th>Action</th>"+
       "</tr>";
        
        for(x in table){
       txt+="<tr><td>"+table[x].firstname+"</td>"+
            "<td>"+table[x].lastname+"</td>"+
            "<td>"+table[x].email+"</td>"+
            "<td>"+table[x].phone+"</td>"+
            "<td>"+table[x].dob+"</td>"+
            "<td>"+table[x].country+"</td>"+
            "<td>"+table[x].state+"</td>"+
            "<td>"+table[x].gender+"</td>"+
            "<td>"+table[x].hobby+"</td>"+
            "<td>"+table[x].education+"</td>"+
            
            "<td><button  onclick='data_edit(this)'>Edit</button><button onclick='data_delete(this)'>Del</button></td></tr>";
            
           }
           txt+="</table>";
           document.getElementById("demo").innerHTML=txt;
      //form cleaning
      document.getElementById("btnSubmit").innerHTML="SUBMIT";
      document.getElementById("txtFname").value ="";
    document.getElementById("txtLname").value ="";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("input_month").value ="0";
    document.getElementById("year").value ="0";
    document.getElementById("output_day").value ="0";
    document.getElementById("input").value="0";
    document.getElementById("output").value ="0";
    document.getElementById("rdbMale").checked = true;
    document.getElementById("chkListening").checked = false;
    document.getElementById("chkReading").checked = false;
    document.getElementById("chkOther").checked = false;
    document.getElementById("max_edu").value ="0";

        }
}
function selectedRowToInput(){
    var rIndex,table_fit=document.getElementById("table_data");
    for(var i=1;i< table_fit.rows.length; i++)
    {
        table_fit.rows[i].onclick =function()
        {
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
        };
    }
}
//selectedRowToInput();

function data_edit(row){
    index_row=row.parentNode.parentNode.rowIndex-1;
    
     
     
    edit_trigger=1;
     
    document.getElementById("txtFname").value = table[index_row].firstname;
    document.getElementById("txtLname").value = table[index_row].lastname;
    document.getElementById("txtEmail").value = table[index_row].email;
    document.getElementById("txtPhone").value = table[index_row].phone;
   // var strDOB=table[index_row].dob;
   // alert(strDOB);
   // str=strDOB.split("-");
   document.getElementById("input").value = table[index_row].country;
  // document.getElementById("input_month").value=str.charAt(1);
  // document.getElementById("output_day").value=str.charAt(0);
  // document.getElementById("year").value=str.charAt(2);

   document.getElementById("output").value = table[index_row].state;
   document.getElementById("max_edu").value = table[index_row].education;
    //button value change
    document.getElementById("btnSubmit").innerHTML="UPDATE";

}
function data_delete(row){
    index_row=row.parentNode.parentNode;
     
    index_row.parentNode.removeChild(index_row);
   // delete table[index_row];
     
}
 

