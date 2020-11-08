const get_marks = Array.from(document.getElementsByClassName('marks'))
get_marks.map(i => i.setAttribute('onInput', 'mainFunc()'))

const mapGradesToPoints = () => Array.from(document.getElementsByClassName('grade')).map((e,i) => e.innerText =  latter_grade(Array.from(document.getElementsByClassName('point')).map(i => parseFloat(i.innerText))[i]))

const getOptional = () => {
  for (let checkbox of document.getElementsByName('optional')) {
    if (checkbox.checked){
       return checkbox.value 
      
    }
  }
}

const failDetectionFinal = num =>{
  for(let i = 0; i < getTotalPointsArray().length ; i++){
    if (getTotalPointsArray()[num] == 0){
      continue
    }
    if (getTotalPointsArray()[i] == 0){
      gpa.innerText = 00
      break
    }
  }
}

const getTotalNum = (marks) => document.getElementById('totalNum').innerText = marks.reduce((a,b) => a.concat(b),[]).reduce((a,b) => a + b, 0)

const getTotalPointsArray = () => Array.from(document.getElementsByClassName('point')).map(e => parseFloat(e.innerText))

const assignPoints = (marksToPoints) => Array.from(document.getElementsByClassName('point')).map((e, i) => e.innerText = marksToPoints[i] )

const latter_grade = (props) =>{
  if(props == 0 || props == undefined){
    return 'F'
  } else if (props >= 1 && 2 > props){
    return 'D'
  } else if (props >= 2 && 3 > props){
    return 'C'
  } else if (props >= 3 && 3.5 > props){
    return 'B'
  } else if (props >= 3.5 && 4 > props){
    return 'A-'
  } else if (props >= 4 && 5 > props){
    return 'A' 
  } else if (5 <= props){
    return 'A+' 
  }
}


const point = (num) => {   
    if (num < 33){
      return 0 
    } else if ( 33 <= num  && num < 40){
      return 1
    } else if (40 <= num  && num < 50){
      return 2
    } else if (50 <= num  && num < 60){
      return 3
    }else if (60 <=  num && num < 70){
      return 3.5
    } else if (70 <= num  && num < 80){
      return 4
    } else if (80 <= num  && num <= 100){
      return 5
    }
}
