// let Button = document.getElementById('button');

const arr = [9,31,43,2,4,5,6,34,90,54,0,1,3,6]


const handleClick = () =>{
    let InputValue = document.getElementById('input').value
    if(InputValue < arr.length && InputValue > 0 && typeof parseInt(InputValue) === 'number'){

         alert(arr[InputValue])
    } else{
        alert("Please enter valid number")
    }
}

