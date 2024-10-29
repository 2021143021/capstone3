OPENAPI_KEY = ""

smode135 = "gpt-3.5-turbo"
smodelmini = "gpt-4o-mini"
//squestion = "황진이가 누구지"

function draw(){
    squestion = txtMsg.value
    data ={
      prompt : squestion,
      n: 2,
      size:"512x512"
    }

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY 
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        gimage.src = response.data[0].url
        gimage2.src = response.data[1].url
    }).fail(

    )
       
    
    

        

    
}

talk()
