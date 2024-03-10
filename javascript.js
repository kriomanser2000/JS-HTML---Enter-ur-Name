document.getElementById('username').addEventListener('input', function(event)
{
    let input = event.target;
    let filteredValue = input.value.replace(/\d/g, '');
    if (input.value !== filteredValue)
    {
        input.value = filteredValue;
    }
});
document.getElementById('Btn').addEventListener('click', function() 
{
    let username = document.getElementById('username').value;
    alert("Your Name: " + username);
});