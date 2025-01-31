document.getElementById('convert-btn').addEventListener('click', convertNumbers);
document.getElementById('reset-btn').addEventListener('click', resetFields);

function convertNumbers() {
    const decimalInput = document.getElementById('decimal').value;
    const hexInput = document.getElementById('hexadecimal').value;
    const octalInput = document.getElementById('octal').value;
    const binaryInput = document.getElementById('binary').value;

    // Check if more than maximum
    if (decimalInput > 255) {
        alert("Error: The decimal input value cannot exceed 255.");
    } else if (hexInput && parseInt(hexInput, 16) > 255) {
        alert("Error: The hexadecimal input value cannot exceed FF.");
    } else if (octalInput && parseInt(octalInput, 8) > 255) {
        alert("Error: The octal input value must be less than 400 (377 or less).");
    } else if (binaryInput && parseInt(binaryInput, 2) > 255) {
        alert("Error: The binary input value cannot exceed 1111 1111.");
    } else {
    
    // Conversion and update value on screen
    if (decimalInput) {
        const decimal = parseInt(decimalInput, 10);
        document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
        document.getElementById('octal').value = decimal.toString(8);
        document.getElementById('binary').value = decimal.toString(2);
    } else if (hexInput) {
        const decimal = parseInt(hexInput, 16);
        document.getElementById('decimal').value = decimal.toString(10);
        document.getElementById('octal').value = decimal.toString(8);
        document.getElementById('binary').value = decimal.toString(2);
    } else if (octalInput) {
        const decimal = parseInt(octalInput, 8);
        document.getElementById('decimal').value = decimal.toString(10);
        document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
        document.getElementById('binary').value = decimal.toString(2);
    } else if (binaryInput) {
        const decimal = parseInt(binaryInput, 2);
        document.getElementById('decimal').value = decimal.toString(10);
        document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
        document.getElementById('octal').value = decimal.toString(8);
    }
    
        let decimal;
        if (decimalInput) {
            decimal = parseInt(decimalInput, 10);
        } else if (hexInput) {
            decimal = parseInt(hexInput, 16);
        } else if (octalInput) {
            decimal = parseInt(octalInput, 8);
        } else if (binaryInput) {
            decimal = parseInt(binaryInput, 2);
        } else {
            return; // No input
        }
    
        // Update all number fields
        document.getElementById('decimal').value = decimal;
        document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
        document.getElementById('octal').value = decimal.toString(8);
        document.getElementById('binary').value = decimal.toString(2);
    
        // Update visual boxes
        updateVisualBoxes(decimal);
    }
}


function updateVisualBoxes(decimal) {
    // Decimal
    const decDigits = decimal.toString().padStart(3, '0').split('');
    document.querySelectorAll('.visual-decimal .digit-box').forEach((box, i) => {
        box.value = decDigits[i];
    });

    // Hexadecimal
    const hexDigits = decimal.toString(16).padStart(2, '0').toUpperCase().split('');
    document.querySelectorAll('.visual-hex .digit-box').forEach((box, i) => {
        box.value = hexDigits[i];
    });

    // Octal
    const octDigits = decimal.toString(8).padStart(3, '0').split('');
    document.querySelectorAll('.visual-octal .digit-box').forEach((box, i) => {
        box.value = octDigits[i];
    });

    // Binary
    const binDigits = decimal.toString(2).padStart(8, '0').split('');
    document.querySelectorAll('.visual-binary .digit-box').forEach((box, i) => {
        box.value = binDigits[i];
    });
}


function resetFields() {
    document.getElementById('decimal').value = '';
    document.getElementById('hexadecimal').value = '';
    document.getElementById('octal').value = '';
    document.getElementById('binary').value = '';
    document.querySelectorAll('.digit-box').forEach(box => {
        box.value = '';
    });
}