  function appendValue(value) {
        document.getElementById('result').value += value;
    }
    
    function clearResult() {
        document.getElementById('result').value = '';
    }
    
    function deleteValue() {
        const resultField = document.getElementById('result');
        resultField.value = resultField.value.slice(0, -1);
    }
    
    function calculate() {
        try {
            const resultField = document.getElementById('result');
            resultField.value = eval(resultField.value);
        } catch (error) {
            alert('Invalid Expression');
        }
    }
    