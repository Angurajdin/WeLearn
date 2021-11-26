<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<input type="date" min="" max="" value="" id="avoid-past-date">
    
    <script>
        let dateInput=document.querySelector('#avoid-past-date').value
        let today=new Date()
        let date=today.getFullYear() + '-' + ('0'+Number(today.getMonth()+1)).slice(-2) + '-' +('0'+today.getDate()).slice(-2)
        document.querySelector('#avoid-past-date').value=date
        document.querySelector('#avoid-past-date').min=date
    </script>
</body>
</html>