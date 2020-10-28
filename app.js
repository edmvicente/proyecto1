function cambiarestado(){
            document.getElementById("cambioB").disabled=false;
            document.getElementById("cambioA").disabled=true;
        }
     document.getElementById("cambioA").addEventListener("click", cambiarestado, false);