/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function(){
    window.screen.orientation.lock('portrait')
    $("#qrBoton").off("click").on("click",function(){
        leerQR();
    })
})

function leerQR(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {
             if(!result.cancelled){
                    // En este caso solo queremos que procese código QR
                    if(result.format == "QR_CODE"){
                         var value = result.text;
                         // Contenido del código QR
                         console.log(value);
                    }else{
                       alert("Ops, se escaneo un código pero al parecer no es QR");
                    }
             }else{
               alert("El usuario se ha saltado el escaneo.");
             }
          },
          function (error) {
               alert("Ha ocurrido un error: " + error);
          }
     );
}