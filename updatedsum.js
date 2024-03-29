<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
    <style>
        /* Add styling for buttons and display */
        button {
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Scientific Calculator</h1>
    <input type="text" id="display" readonly>
    <br>
    <button onclick="clearDisplay()">C</button>
    <button onclick="appendCharacter('7')">7</button>
    <button onclick="appendCharacter('8')">8</button>
    <button onclick="appendCharacter('9')">9</button>
    <button onclick="appendCharacter('+')">+</button>
    <br>
    <button onclick="appendCharacter('4')">4</button>
    <button onclick="appendCharacter('5')">5</button>
    <button onclick="appendCharacter('6')">6</button>
    <button onclick="appendCharacter('-')">-</button>
    <br>
    <button onclick="appendCharacter('1')">1</button>
    <button onclick="appendCharacter('2')">2</button>
    <button onclick="appendCharacter('3')">3</button>
    <button onclick="appendCharacter('*')">*</button>
    <br>
    <button onclick="appendCharacter('0')">0</button>
    <button onclick="appendCharacter('.')">.</button>
    <button onclick="calculate()">=</button>
    <button onclick="appendCharacter('/')">/</button>
    <br>
    <button onclick="appendCharacter('Math.sqrt(')">√</button>
    <button onclick="appendCharacter('Math.sin(')">sin</button>
    <button onclick="appendCharacter('Math.cos(')">cos</button>
    <button onclick="appendCharacter('Math.tan(')">tan</button>
    <br>
    <script>
        function appendCharacter(char) {
            document.getElementById('display').value += char;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            try {
                const expression = document.getElementById('display').value;
                if (expression.includes('/0')) {
                    throw new Error('Division by zero is not allowed');
                }
                const result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error: ' + error.message;
            }
        }

        // Handle key press events for numeric keys and operators
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (key.match(/[0-9+\-*/.]/)) {
                appendCharacter(key);
            } else if (key === 'Enter') {
                calculate();
            }
        });
    </script>
</body>
</html>
