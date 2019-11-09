var table999 = `

<div class="modal modal-lg mb-4 mt-4 pb-4 pt-4 ml-auto mr-auto d-flex container justify-content-center" id="modalLp">
    <form id="mainForm" class="mb-2 mt-2 pb-2 pt-2 margin-left ml-auto mr-auto rounded">
        <legend class="d-flex justify-content-center" >Valve Retrofit Form</legend>
        
<!-- Starts costumer information form -->
        <fieldset id="seccion1">
            <div class="row">
                <p class="col text-center ">Costumer Information</p>
            </div>
            <div class="form-row " >
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group" >
                    <label for="inputCompanyLabel">Company:</label>
                    <input type="text" class="form-control" id="lpCompany" placeholder="Company name" required>
                </div>
                <div class="form-group  col-md-6 ">
                    <label for="inputContactLabel">Contact</label>
                    <input type="text" class="form-control" id="lpName" placeholder="Contact number" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputLocationLabel">Location</label>
                <input type="text" class="form-control" id="lpLocation" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputPhoneLabel">Phone Number</label>
                <input type="number" class="form-control" id="lpPhone" placeholder="678 -123-4567" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCityLabel">City</label>
                    <input type="text" class="form-control" id="lpCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputStateLabel">State</label>
                    <input type="text" class="form-control" id="lpState">

                </div>
                <div class="form-group col-md-2">
                    <label for="inputZipLabel">Zip</label>
                    <input type="number" class="form-control" id="lpZip">
                </div>
            </div>
    </fieldset>
    <fieldset id="seccion2">
            <div class="row">
                <p class="col text-center ">Valve Information</p>
            </div>
            <div class="form-row">
                <div class="col-md-6 ">
                    <label for="valveSize">Valve Size</label>
                    <input type="text" class="form-control" id="lpValveSize" placeholder="Valve size" required>
                </div>
                <div class="col-md-6 ">
                    <label for="Brand">Brand</label>
                    <input type="text" class="form-control" id="lpBrand" placeholder="Brand" required>
                </div>
            </div>
            <div class="form-group">
                <label for="series">Series</label>
                <input type="text" class="form-control" id="lpSeries">
            </div>
    
        </fieldset>

<!--Start form seccion 3  -->

        <fieldset id="seccion3" class="text-center">
            <div class="row text-center">
                <p class="col text-center ">Valve Type</p>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="exampleRadios" id="valve2way" value="2way" >
                <label class="form-check-label text-center" for="exampleRadios1">
                2 way </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="exampleRadios" id="valve3way" value="3way" >
                <label class="form-check-label text-center" for="exampleRadios1">
            3 way </label>
            </div>
            <br><br>

        <fieldset class="text-center">
            <div class="row text-center">
                <p class="col text-center ">Actuator Type</p>
            </div>

            <!-- <label for="size">Model:</label> -->
            <select id="selectSeccion3" class="text-center" name="select-seccion-3">
                <option  value="select" selected>Select one</option>
                <option  value="Electric" id="electric">Electric Actuator</option>
                <option  value="HP" id="hp">High Pressure Pneumatic</option>
                <option  value="LP" id="lp">Low Pressure Pneumatic</option>
            </select>

        </fieldset>
        <br><br>
           
        </fieldset>
<fieldset class="text-center" id="seccion6">
            <div class="row text-center">
                <legend class="justify-content-center legend1">Low Pressure Pneumatic</legend>
            </div>
            <div class="form-group">
                <label for="brand-damage-actuator">Brand</label>
                <input type="text" class="form-control" id="lpBrandDamageActuator">
                <label for="model-number-actuator">Model Number</label>
                <input type="text" class="form-control" id="lpModelDamageActuator">

            </div>

            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="lp2positions"
                value="lp-2positions">
                <label class="form-check-label text-center">
                2 Positions </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="lpModulating"
                value="lpModulating">
                <label class="form-check-label text-center">
                Modulating
                </label>
            </div>
            <br><br>

    <div class="col text-center">
        <button type="button" id="editLowPressureActuator" class="btn btn-primary" >Edit</button>
    </div>
    </fieldset>

`;

/*

Como recordatorio, para obtener los valores de los "radio buttons" y del "select-option" fue dentro de la celda de la tabla, primero obtenerla con "querySelector", esto lo hice utilizando su "id" correspondiente, despues utilizando ".value =", poner como valor el parametro correspondiente que recibe la funcion "editLowPresure()"  

checar linea #466

*/
