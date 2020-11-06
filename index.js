const get_marks = Array.from(document.getElementsByClassName('marks'))
get_marks.map(i => i.setAttribute('onInput', 'mainFunc()'))

const mainFunc = () =>{
  const marks = get_marks.map(i => i.value).map(i => i.split(',').map(i => parseFloat(i)))

     const ban =  ultimate_point([(marks[0][0] + marks[1][0]) , (marks[0][1] + marks[1][1]) ].map(i => i/2))
     const bgs = ultimate_point([...marks[9]])
     const rlgs = ultimate_point([...marks[10]])
     const math = ultimate_point([...marks[4]])
     const eng = point((marks[2][0]+ marks[3][0])/2)
     const phy = ultimate_point([...marks[5]])
     const che = ultimate_point([...marks[6]])
     const bio = ultimate_point([...marks[7]])
     const hm = ultimate_point([...marks[8]])
     const ict = ultimate_point([...marks[11]].map(i => i*2))

     const marksToPoints = [ban, eng, math,  phy, che, bio, hm, bgs, rlgs, ict]
     Array.from(document.getElementsByClassName('point')).map((e, i) => e.innerText = marksToPoints[i] )
     Array.from(document.getElementsByClassName('grade')).map((e,i) => e.innerText = latter_grade(Array.from(document.getElementsByClassName('point')).map(i => parseFloat(i.innerText))[i]))
     Array.from(document.getElementsByClassName('point')).map(i => parseFloat(i.innerText )).reduce((a,b) => a + b, 0)
     
     // Main Results
     document.getElementById('totalNum').innerText = marks.reduce((a,b) => a.concat(b),[]).reduce((a,b) => a + b, 0)
      // Dealing with optional
     for (let checkbox of document.getElementsByName('optional')) {
       if (checkbox.checked){
          var optional = checkbox.value 
         
       }
     }
     // gpa
    const total_points = Array.from(document.getElementsByClassName('point')).map(e => parseFloat(e.innerText))
      const gpa = document.getElementById('gpa')
    if (optional === 'bio'){ 
      if(total_points[6] == 0){
        gpa.innerText = 0 ;
      } else{ 
        if(total_points[5] < 2){
        total_points[5] = 0 ;
        gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/9)
      } 
      else if (total_points[5] > 2){
        total_points[5] = (total_points[5] - 2)
        gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/9)
      }
    }
    } else if (optional === 'hm'){
      if(total_points[5] == 0){
        gpa.innerText = 0
      } 
      else {
        if(total_points[6] < 2){
        total_points[6] = 0
        gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/9)
      } 
      else if (total_points[6] > 2){
        total_points[6] = (total_points[6] - 2)
        gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/9)
      }
    }
    }
     console.log(total_points)
    // Grade
    document.getElementById('gpaLatter').innerText = latter_grade(parseFloat(gpa.innerText))
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

const ultimate_point = (props) => {
  if (props.length == 2 && props[1] > 30 ){
    return (props[0] >= 8 && props[1] >= 8 ) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
  }else if ( props.length == 2){
    return (props[0] >= 23  && props[1] >= 10 ) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
  }else if ( props.length == 3){
    return (props[0] >=17 && (props[1] >= 8 && props[2] >= 8)) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
  }
}

const latter_grade = (props) =>{
  if(props == 0 || undefined){
    return 'F'
  } else if (props <= 1 && 2 > props){
    return 'D'
  } else if (props <= 2 && 3 > props){
    return 'C'
  } else if (props <= 3 && 3.5 > props){
    return 'B'
  } else if (props <= 3.5 && 4 > props){
    return 'A-'
  } else if (props <= 4 && 5 > props){
    return 'A' 
  } else if (5 <= props){
    return 'A+' 
  }
}
