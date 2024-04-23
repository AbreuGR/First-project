const localStoragekey = "to-do-list-gn"

    
function newtask()
{
    let input = document.getElementById('input-new-task')
//let input para imputar algo//
   

    
    if(!input.value)
    {
        alert('Put a task')
    }

    else
    {
        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey, JSON.stringify(values))
        input.value = ""
        showValues()
    }

}

function showValues()
{

    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]" )
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    
    for(let i = 1; i < values.length; i++)
    {
        list.innerHTML += `<li class="group-hover:block group flex justify-between px-4 py-2 w-full rounded-t-lg text-white cursor-pointer">${i}: ${values[i]['name']}<button class="group-hover:opacity-100 opacity-0" id='btn-ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
    }

}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey,JSON.stringify(values))
    showValues()
}

showValues()