<html>
        <head>
            <meta charset="UTF-8">
                <title>Home Fitness</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
                <link type="text/css" rel="stylesheet" href="styles.css" />
                <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
                <script>
                    function display(form){
                        form.o_weight.value = form.weight.value;
                        return false;
                    }

                    //GLOBAL VARIABLES
                    var arrayX = 10;   //rows
                    var arrayY = 2;    //columns
                    var array = new Array(arrayX);
                    var arrayIndex = 0;
                    //Create a new local array
                    for (x=0; x<array.length; x++){
                        array [x] = new Array(arrayY);
                    }

                    //If local array already exists set array to localarray
                    if(localStorage["localarray"]){
                        array = JSON.parse(localStorage["localarray"]);
                        arrayIndex = Number(localStorage.localindex);
                    }
                    //else initiates a new localarray and localindex
                    else{
                        localStorage["localarray"] = JSON.stringify(array);
                        localStorage.localindex = 0;
                    }

                    //CLEAR LOCAL STORAGE
                    function clearLocal() {
                        localStorage.clear();   //Clears the local storage
                        location.reload();      //Reloads the page (Stops a bug where the weight values don't disappear)
                    }

                    //INSERT VALUES INTO ARRAY
                    function insert(val1, val2){
                        if (arrayIndex >= arrayX){
                            alert("Recent Entries is Full");
                            return false;
                        }

                        // Stops the ability to add an entry without a weight or unit
                        if (val1 == 0 || val2 == ""){
                            document.getElementById('weight1').value = '';      //Reset the weight to 0 (can delete if you want)
                            alert("Please Enter a Weight Correctly!");  
                            return false;
                        }

                        //Adding values to the local array
                        array[arrayIndex][0] = val1;
                        array[arrayIndex][1] = val2;
                        arrayIndex++;

                        //Stores the arrayIndex in localStorage
                        localStorage.localindex = arrayIndex;

                        //localStorage can only deal with strings so use JSON.stringify() to allow this to work
                        localStorage['localarray'] = JSON.stringify(array);
                        document.getElementById('weight1').value = '';
                        document.getElementById('unit').value = 'KG'; <!-- Sets it back to a default of KG -->
                    }

                    //SHOW CONTENTS OF ARRAY    
                    function show() {
                        var string='<b>Weight Entries</b><br>';

                        //Access the localStorage array and get its contents    
                        array = JSON.parse(localStorage["localarray"]);

                        for(i = 0; i < array.length; i++){
                            if(array[i][0] != undefined) <!-- Doesn’t show empty entries (gets rid of 'undefined') -->
                                string+=''+array[i][0]+' '+array[i][1]+'<br>';
                        }

                        if(array.length > 0)
                            document.getElementById('myDiv').innerHTML = string;
                    }
                </script>
        </head>
    <body>

    <!-- Loads the weights when the page loads 
    //<body onload = "show();">
    -->
    <header>
        <h1>Weight Tracker</h1>
    </header>
        <article>
            <h3>Weight Input</h3>
            <p>Please enter your current weight below and submit.</p>
        </article>
        <div id = "main_content">
            <form name="form1">
                <table align="center" width="407">
                    <tr>
                        <td width="154" align="right">
                            <b>Weight</b>
                        </td>
                        <td width="9">
                            <b>&nbsp;:</b>
                        </td>
                        <td width="224">
                            <input type="integer" name="weight" id="weight1"/>
                        </td>
                    <tr>
                    </br>
                        <td width="154" align="right">
                            <b>Unit</b>
                        </td>
                        <td width="9">
                            <b>&nbsp;:</b>
                        </td>
                        <td width="224">
                            <!-- Added a selection box instead to get rid of typed mistakes -->
                            <select type="string" name="unit" id="unit">
                                <option value="KG">KG</option>
                                <option value="Lbs">Lbs</option>
                                <option value="Stone">Stone</option>
                            </select>
                        </td>
                    </tr>
                </table>
                </br>
                <table width="407">
                    <!-- // Added show() to onclick so that it will automatically show up when you submit a new weight  -->
                </br>
                    <div id = "submit_container">
                        <input id="bigbutton" type="button" value="Submit Weight" onclick="insert(this.form.weight.value,this.form.unit.value);show();" />
                    </div>
                    <input type="button" value="Recent Entries"onclick="show();"/>
                    <!--clears all data in localstorage-->
                    <input type="button" value="Clear" onclick="clearLocal();"/>
                </table>
            </form>
            </br>
            <div id="myDiv"></div>
                </br>
                <nav>
                    </div>
                        <ul>
                            <a href="index.html">Home</a> |
                            <a href="Progress.html">Your Progress</a>
                            </ul>
                </nav>

        <script src="https://code.jquery.com/jquery.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script> 
    </body>
</html>