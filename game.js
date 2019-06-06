const tableElements = document.getElementsByClassName("table")[0]

let rowLength=tableElements.children.length
let colLength=tableElements.children[0].children.length

for (let i = 0 ; i < rowLength ; i++) {
    for (let j = 0 ; j < colLength ; j++) {
       const cellElement = tableElements.children[i].children[j]
       
       cellElement.innerHTML = `(${i}, ${j})`
       cellElement.setAttribute('data-row', i)
       cellElement.setAttribute('data-col', j)
       cellElement.addEventListener('click', function (){
            var row=parseInt(cellElement.dataset.row)
            var col=parseInt(cellElement.dataset.col)
            getLocation(row,col)
       })
 
       console.dir(cellElement)
    }
}

function color_center(r, c){
    tableElements.children[r].children[c].classList.toggle('plum')
   }
function color_left(r, c){
    tableElements.children[r].children[c-1].classList.toggle('plum')
}
function color_right(r,c){
    tableElements.children[r].children[c+1].classList.toggle('plum')
}
function color_up(r,c){
    tableElements.children[r-1].children[c].classList.toggle('plum')
}
function color_under(r,c){
    tableElements.children[r+1].children[c].classList.toggle('plum')
}

function case1(r,c){
    color_center(r,c), color_left(r,c), color_right(r,c), color_up(r,c), color_under(r,c)
}

function case2(r,c){
    color_center(r,c)
    if(c===0){
        if(r===0){
            color_right(r,c), color_under(r,c)
        }
        else{
            color_up(r,c), color_right(r,c)
        }
    }
    else{
        if(r===0){
            color_left(r,c), color_under(r,c)
        }
        else{
            color_left(r,c), color_up(r,c)
        }
    }
}

function case3(r,c){
    color_center(r,c)
    if(r===0){
        color_left(r,c), color_under(r,c), color_right(r,c)
    }
    else if(c===0){
        color_up(r,c), color_right(r,c), color_under(r,c)
    }
    else if(r===4){
        color_left(r,c), color_right(r,c), color_up(r,c)
    }
    else{
        color_up(r,c), color_left(r,c), color_under(r,c)
    }
}

function getLocation(row, col){
    if(row>0 && row<4 && col>0 && col<4){
        case1(row, col)
    }
    else if((row===0 && (col===0 || col===4)) || (row===4 && (col===0 || col===4))){
        case2(row, col)
    }
    else{
        case3(row, col)
    }
}
