const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }


    const fehToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5/9 );
        return celsius;
    }


    let result;
    if(valueTemp === 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

}


/*

<option>: This is an HTML element used to define an option within a dropdown list.
value="cel": This is an attribute of the <option> element. It defines the value associated with this option. In this case, the value is set to "cel".
°Celsius: This is the content of the <option> element, which is the text that will be displayed to the user within the dropdown list. In this case, it shows the text "°Celsius".


When the user selects this particular option from the dropdown list, the value associated with it ("cel") will typically be accessible through JavaScript code. This allows you to retrieve the selected value and perform any necessary operations based on that value.



*/


/*

The value attribute in the <option> element is used to specify the value associated with that option. It is a common practice to use the value attribute to store a corresponding value that is different from the displayed text.

In the example you provided, the value attribute is set to "cel". This means that if the user selects this option, the value "cel" will be associated with it. The user will see the text "°Celsius" as the visible option in the dropdown list, but the underlying value stored in the HTML will be "cel".

Using the value attribute allows you to retrieve the selected value through JavaScript and perform various operations based on that value. It provides a way to associate a meaningful value with each option while displaying a user-friendly label


*/



/*

Here's a breakdown of the components:

<input>: This is the opening tag of the input element.
attribute1, attribute2, etc.: These are optional attributes that can be added to the input element to modify its behavior or appearance.
"value1", "value2", etc.: These are the values assigned to the attributes.
Some commonly used attributes for input elements include:

type: Specifies the type of input control, such as "text", "number", "email", "password", etc.
name: Provides a name for the input element, which is used to identify the input when submitting a form or accessing it through JavaScript.
value: Sets the initial value of the input element.
placeholder: Displays a short hint or example text inside the input field.
required: Specifies that the input must be filled out before submitting a form.
disabled: Disables the input element, making it uneditable.
readonly: Makes the input element read-only, preventing user modifications.

*/


