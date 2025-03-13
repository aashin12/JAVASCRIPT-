function appendValue(value) {
    let display = document.getElementById('display');
    if (display.value === '0')
    {
        display.value = value;
    }
    else
    {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || '0';

}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error'
        setTimeout(()=>{
            display.value='0'
        },1000)
        
    }
}

function toggleMode() {
    const body = document.body;
    const button = document.querySelector(".toggle-btn");
    
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        button.textContent = "Light Mode";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        button.textContent = "Dark Mode";
    }
}