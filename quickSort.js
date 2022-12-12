const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.final-container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')

    })

    containers.forEach (container => {
        container.addEventListener ('dragover', e => {
            e.preventDefault()
            const draggable = document.querySelector('.dragging')
            container.appendChild(draggable)
        })
    })
})

const alas = document.querySelector('#alas')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const sinco = document.querySelector('#sinco')
const sais = document.querySelector('#sais')
const syete = document.querySelector('#syete')

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const fifth = document.querySelector('#fifth')
const sixth = document.querySelector('#sixth')
const seventh = document.querySelector('#seventh')

let arr = [];


const ascending = document.querySelector('.btn1')
const descending = document.querySelector('.btn2')

ascending.addEventListener('click', setAscend);
descending.addEventListener('click', setDescend);

let setter = 0; 

function setAscend ()
{
    setter = 1;
    ascending.classList.add('isClicked')
    descending.classList.remove('isClicked')
}

function setDescend ()
{
    setter = 2;
    descending.classList.add('isClicked')
    ascending.classList.remove('isClicked')
}

const sortBtn =document.querySelector('.btn3')

sortBtn.addEventListener('click', sortNow)
let par = 0;

function sortNow ()
{
    const temp = [first, second, third, fourth, fifth, sixth, seventh]
    let looper = 0; 
    let decider = 0; 

    for (element of temp)
    {
        if(element.contains(alas)) 
        {
            arr.push(1);
            decider = 1;
        }
        else if (element.contains(dos))
        {
            arr.push(2);
            decider = 2;
        }
        else if (element.contains(tres))
        {
            arr.push(3);
            decider = 3;
        }

        else if (element.contains(quatro))
        {
            arr.push(4);
            decider = 4;
        }

        else if (element.contains(sinco))
        {
            arr.push(5);
            decider = 5;
        }

        else if (element.contains(sais))
        {
            arr.push(6);
            decider = 6;
        }

        else if (element.contains(syete))
        {
            arr.push(7);
            decider = 7;
        }
       looper++;
    }

    if (setter == 1)
    {
        console.log(`Initial Array Input: ${arr}`);

        var startTime = performance.now()

        function swap(arr, i, j) {

            if (arr[i] == arr [j]) {
                console.log('Pivot is greater than ' + arr[i] + ', no swapping');
            }

            else {
                console.log('Pivot is less than ' + arr[i] + ', swapping ' + arr[i] +' and ' + arr[j])
            }

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        function partition(arr, low, high) {
            par++;
            console.log('');
            console.log('Sorting Partition no. ' + par);
            let pivot = arr[high];
            console.log('Pivot value is '+ pivot +"...");
            
            let i = (low - 1);
        
            for (let j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return (i + 1);
        }
        
        function quickSort(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        let n = arr.length;
        quickSort(arr, 0, n - 1);
        console.log('');
        console.log('Successfully sorted the array!');
        console.log('Sorted Array: ' + arr);
        aDisplay();

        var endTime = performance.now()
        console.log(`Algorithm Runtime: ${parseFloat(endTime - startTime).toFixed(4)} milliseconds`)
    }

    else if (setter == 2)
    {
        console.log(`Initial Array Input: ${arr}`);

        var startTime = performance.now()

        function swap(arr, i, j) {

            if (arr[i] == arr [j]) {
                console.log('Pivot is less than ' + arr[i] + ', no swapping');
            }

            else {
                console.log('Pivot is greater than ' + arr[i] + ', swapping ' + arr[i] +' and ' + arr[j])
            }

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        function partition(arr, low, high) {
            par++;
            console.log('');
            console.log('Sorting Partition no. ' + par);
            let pivot = arr[high];
            console.log('Pivot value is '+ pivot +"...");
            
            let i = (low - 1);
        
            for (let j = low; j <= high - 1; j++) {
                if (arr[j] > pivot) {
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return (i + 1);
        }
        
        function quickSort(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        let n = arr.length;
        quickSort(arr, 0, n - 1);
        console.log('');
        console.log('Successfully sorted the array!');
        console.log('Sorted Array: ' + arr);
        dDisplay();

        var endTime = performance.now()
        console.log(`Algorithm Runtime: ${parseFloat(endTime - startTime).toFixed(4)} milliseconds`)
    }

    else {}
}

function aDisplay ()
{
    first.appendChild(alas)
    second.appendChild(dos)
    third.appendChild(tres)
    fourth.appendChild(quatro)
    fifth.appendChild(sinco)
    sixth.appendChild(sais)
    seventh.appendChild(syete)
}

function dDisplay ()
{
    seventh.appendChild(alas)
    sixth.appendChild(dos)
    fifth.appendChild(tres)
    fourth.appendChild(quatro)
    third.appendChild(sinco)
    second.appendChild(sais)
    first.appendChild(syete)
}