// ******* INICIO FUNCIONES DE PROCESAR DATOS *******

function procesarDatosCliente(){
    
    // Obtener referencia a botones
    const botones = document.querySelectorAll(".btn");
        
    // Definir función y evitar definirla de manera anónima
    const cuandoSeHaceClick = function (evento) {
        let botonPresionado = this.innerText;
        
        function activarCampos(){
            document.querySelector("#idCliente").disabled = false;
            document.querySelector("#nombreCliente").disabled = false;
            document.querySelector("#emailCliente").disabled = false;
            document.querySelector("#edadCliente").disabled = false;
        }
        
        if(botonPresionado == "Insertar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#btnModificar").disabled = true;
            document.querySelector("#btnModificar").style.backgroundColor = "gray";
        }
        
        if(botonPresionado == "Modificar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#btnInsertar").disabled = true;
            document.querySelector("#btnInsertar").style.backgroundColor = "gray";
        }

        if(botonPresionado == "Guardar"){
            if(proceso == "Insertar"){
                guardarDatosCliente();
                document.querySelector("#btnModificar").disabled = false;
                document.querySelector("#btnModificar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            if(proceso == "Modificar"){
                modificarDatosCliente();
                document.querySelector("#btnInsertar").disabled = false;
                document.querySelector("#btnInsertar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            document.querySelector("#idCliente").disabled = true;
            document.querySelector("#nombreCliente").disabled = true;
            document.querySelector("#emailCliente").disabled = true;
            document.querySelector("#edadCliente").disabled = true;
        }
    }

    // botones es un arreglo así que lo recorremos
    botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
    });    
}

function procesarDatosDisfraz(){
    
    // Obtener referencia a botones
    const botones = document.querySelectorAll(".btn");
        
    // Definir función y evitar definirla de manera anónima
    const cuandoSeHaceClick = function (evento) {
        let botonPresionado = this.innerText;
        
        function activarCampos(){
            document.querySelector("#idDisfraz").disabled = false;
            document.querySelector("#marcaDisfraz").disabled = false;
            document.querySelector("#modeloDisfraz").disabled = false;
            document.querySelector("#categoriaDisfraz").disabled = false;
            document.querySelector("#nombreDisfraz").disabled = false;
        }

        if(botonPresionado == "Insertar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#idDisfraz").disabled = true;
            document.querySelector("#btnModificar").disabled = true;
            document.querySelector("#btnModificar").style.backgroundColor = "gray";
        }
        
        if(botonPresionado == "Modificar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#btnInsertar").disabled = true;
            document.querySelector("#btnInsertar").style.backgroundColor = "gray";
        }

        if(botonPresionado == "Guardar"){
            if(proceso == "Insertar"){
                guardarDatosDisfraz();
                document.querySelector("#btnModificar").disabled = false;
                document.querySelector("#btnModificar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            if(proceso == "Modificar"){
                modificarDatosDisfraz();
                document.querySelector("#btnInsertar").disabled = false;
                document.querySelector("#btnInsertar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            document.querySelector("#idDisfraz").disabled = true;
            document.querySelector("#marcaDisfraz").disabled = true;
            document.querySelector("#modeloDisfraz").disabled = true;
            document.querySelector("#categoriaDisfraz").disabled = true;
            document.querySelector("#nombreDisfraz").disabled = true;
        }
    }

    // botones es un arreglo así que lo recorremos
    botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
    });    
}

function procesarDatosMensaje(){
    
    // Obtener referencia a botones
    const botones = document.querySelectorAll(".btn");
        
    // Definir función y evitar definirla de manera anónima
    const cuandoSeHaceClick = function (evento) {
        let botonPresionado = this.innerText;
        
        function activarCampos(){
            document.querySelector("#idMensaje").disabled = false;
            document.querySelector("#descripcionMensaje").disabled = false;
        }

        if(botonPresionado == "Insertar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#idMensaje").disabled = true;
            document.querySelector("#btnModificar").disabled = true;
            document.querySelector("#btnModificar").style.backgroundColor = "gray";
        }
        
        if(botonPresionado == "Modificar"){
            activarCampos();
            proceso = this.innerText;
            document.querySelector("#btnInsertar").disabled = true;
            document.querySelector("#btnInsertar").style.backgroundColor = "gray";
        }

        if(botonPresionado == "Guardar"){
            if(proceso == "Insertar"){
                guardarDatosMensaje();
                document.querySelector("#btnModificar").disabled = false;
                document.querySelector("#btnModificar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            if(proceso == "Modificar"){
                modificarDatosMensaje();
                document.querySelector("#btnInsertar").disabled = false;
                document.querySelector("#btnInsertar").style.backgroundColor = "rgb(15, 150, 150)";
            }
            document.querySelector("#idMensaje").disabled = true;
            document.querySelector("#descripcionMensaje").disabled = true;
        }
    }

    // botones es un arreglo así que lo recorremos
    botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
    });    
}


// ******* INICIO FUNCIONES DE LA TABLA CLIENTE *******

function listarDatosCliente(){
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(clientes){
            let myTable = "<table border='1' class='tabla'>";
            let clte = clientes.items;
            $("#listaClientes").empty();

            // Escribir los encabezados de las columnas de la tabla
            myTable+="<tr>";
                myTable+="<th class='tabla'>" + "Id" + "</th>";
                myTable+="<th class='tabla'>" + "Nombre" + "</th>";
                myTable+="<th class='tabla'>" + "Correo" + "</th>";
                myTable+="<th class='tabla'>" + "Edad" + "</th>";
            myTable+="</tr>";

            // Escribir la información en las filas de la tabla 
            for(i=0; i<clte.length; i++){
                myTable+="<tr>";
                 myTable+="<td class='tabla'>" + clte[i].id + "</td>";
                myTable+="<td class='tabla'>" + clte[i].name + "</td>";
                myTable+="<td class='tabla'>" + clte[i].email + "</td>";
                myTable+="<td class='tabla'>" + clte[i].age + "</td>";
                myTable+="<td class='tabla'> <button onclick='borrarDatosCliente("+clte[i].id+")' class='btn-borrar'>Borrar</button>";
                myTable+="</tr>";
            }

            myTable+="</table>";
            $("#listaClientes").append(myTable);
        }
    });
}

function guardarDatosCliente(){
    
    // Almacenar los datos del formulario en cada una de las variables.
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCliente = $("#edadCliente").val();

    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idCliente,
        name:nombreCliente,
        email:emailCliente,
        age:edadCliente
    };

    /* *************************************
    // Probar la información almacenada en el objeto data.
    console.log(data);
    ************************************* */ 

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);


    /* *************************************
    console.log(dataToSend);
    //************************************* */ 

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){            
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
            listarDatosCliente();
         }
    });    
}

function modificarDatosCliente(){

    // Almacenar los datos del formulario en cada una de las variables.
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCliente = $("#edadCliente").val();

    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idCliente,
        name:nombreCliente,
        email:emailCliente,
        age:edadCliente
    };

    /* *************************************
    // Probar la información almacenada en el objeto data.
    console.log(data);
    ************************************* */ 

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);


    /* *************************************
    console.log(dataToSend);
    //************************************* */ 

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");            
            listarDatosCliente();
        }
    });
}

function borrarDatosCliente(idCliente){
    
    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idCliente
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);


    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            listarDatosCliente();
        }
    });
}

// ******* INICIO FUNCIONES DE LA TABLA DISFRAZ *******

function listarDatosDisfraz(){
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"GET",
        datatype:"JSON",
        success:function(disfraces){
            let myTable = "<table border='1' class='tabla'>";
            let disf = disfraces.items;
            $("#listaDisfraces").empty();

            // Escribir los encabezados de las columnas de la tabla
            myTable+="<tr>";
                myTable+="<th class='tabla'>" + "Id" + "</th>";
                myTable+="<th class='tabla'>" + "Marca" + "</th>";
                myTable+="<th class='tabla'>" + "Modelo" + "</th>";
                myTable+="<th class='tabla'>" + "Categoria" + "</th>";
                myTable+="<th class='tabla'>" + "Nombre" + "</th>";
            myTable+="</tr>";

            // Escribir la información en las filas de la tabla 
            for(i=0; i<disf.length; i++){
                myTable+="<tr>";
                 myTable+="<td class='tabla'>" + disf[i].id + "</td>";
                myTable+="<td class='tabla'>" + disf[i].brand + "</td>";
                myTable+="<td class='tabla'>" + disf[i].model + "</td>";
                myTable+="<td class='tabla'>" + disf[i].category_id + "</td>";
                myTable+="<td class='tabla'>" + disf[i].name + "</td>";
                myTable+="<td class='tabla'> <button onclick='borrarDatosDisfraz("+disf[i].id+")' class='btn-borrar'>Borrar</button>";
                myTable+="</tr>";
            }

            myTable+="</table>";
            $("#listaDisfraces").append(myTable);

        }
    });
}

function guardarDatosDisfraz(){
    
    // Almacenar los datos del formulario en cada una de las variables.
    let marcaDisfraz = $("#marcaDisfraz").val();
    let modeloDisfraz = $("#modeloDisfraz").val();
    let categoriaDisfraz = $("#categoriaDisfraz").val();
    let nombreDisfraz = $("#nombreDisfraz").val();

    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        brand:marcaDisfraz,
        model:modeloDisfraz,
        category_id:categoriaDisfraz,
        name:nombreDisfraz
    };

    
    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"POST",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
            listarDatosDisfraz();
        }
    });    
}

function modificarDatosDisfraz(){
    // Almacenar los datos del formulario en cada una de las variables.
    let idDisfraz = $("#idDisfraz").val();
    let marcaDisfraz = $("#marcaDisfraz").val();
    let modeloDisfraz = $("#modeloDisfraz").val();
    let categoriaDisfraz = $("#categoriaDisfraz").val();
    let nombreDisfraz = $("#nombreDisfraz").val();

    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idDisfraz,
        brand:marcaDisfraz,
        model:modeloDisfraz,
        category_id:categoriaDisfraz,
        name:nombreDisfraz
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
            listarDatosDisfraz();
        }
    });
}

function borrarDatosDisfraz(idDisfraz){
    
    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idDisfraz
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            listarDatosDisfraz();
        }
    });
}

// ******* INICIO FUNCIONES DE LA TABLA MENSAJES *******

function listarDatosMensaje(){
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(mensajes){
            let myTable = "<table border='1' class='tabla'>";
            let msg = mensajes.items;
            $("#listaMensajes").empty();

            // Escribir los encabezados de las columnas de la tabla
            myTable+="<tr>";
                myTable+="<th class='tabla'>" + "Id" + "</th>";
                myTable+="<th class='tabla'>" + "Mensaje" + "</th>";
            myTable+="</tr>";

            // Escribir la información en las filas de la tabla 
            for(i=0; i<msg.length; i++){
                myTable+="<tr>";
                 myTable+="<td class='tabla'>" + msg[i].id + "</td>";
                myTable+="<td class='tabla'>" + msg[i].messagetext + "</td>";
                myTable+="<td class='tabla'> <button onclick='borrarDatosMensajes("+msg[i].id+")' class='btn-borrar'>Borrar</button>";
                myTable+="</tr>";
            }
            myTable+="</table>";
            $("#listaMensajes").append(myTable);
        }
    });
}

function guardarDatosMensaje(){
    
    // Almacenar los datos del formulario en cada una de las variables.
    let descripcionMensaje = $("#descripcionMensaje").val();
    
    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        messagetext:descripcionMensaje
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            $("#idMensaje").val("");
            $("#descripcionMensaje").val("");
            listarDatosMensaje();
        }
    });
}

function modificarDatosMensaje(){
    
    // Almacenar los datos del formulario en cada una de las variables.
    let idMensaje = $("#idMensaje").val();
    let descripcionMensaje = $("#descripcionMensaje").val();
    
    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idMensaje,
        messagetext:descripcionMensaje
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            $("#idMensaje").val("");
            $("#descripcionMensaje").val("");
            listarDatosMensaje();
        }
    });    
}

function borrarDatosMensajes(idMensajes){
    
    // Crear el objeto data para almacenar todos los datos de las variables.
    let data={
        id:idMensajes
    };

    // Pasar los datos a formato JSON para luego ser enviados al servidor.
    let dataToSend = JSON.stringify(data);

    // Envío de los datos en formato JSON al servidor.
    $.ajax({
        url:"https://gbd475496abaa6c-bdrjp.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/json",
        complete:function(){
            listarDatosMensaje();
        }
    });
}