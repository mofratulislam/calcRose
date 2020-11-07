const mainFunc = () =>{
    const marks = get_marks.map(i => i.value).map(i => i.split(',').map(i => parseFloat(i)))
    const marksToPoints = []
    for(let [i, a, b] = [0, 0, 1]; i < 6; i++){
       marksToPoints.push(marks[a].concat(marks[b])) 
       a = a + 2
       b = b + 2
    }
    marksToPoints.push(marks[12])
   const marks3 = []
    marksToPoints.map((e,i) => {
        if(e.length == 2){
           marksToPoints[i] = point(e.reduce((a, b) =>  a + b, 0)/2)
        } else if (e.length == 3){
            marksToPoints[i] =  ultimate_point(marksToPoints[i])
        } else if(e.length == 4){
            marksToPoints[i] = ultimate_point([(e[0] + e[2]) , (e[1] + e[3])].map(i => i/2))
        } else if (e.length == 6){
            marksToPoints[i] = ultimate_point([(e[0] + e[3]) ,(e[1] + e[4]) ,(e[2] + e[5]) ].map(i => i/2))
        }
    })
    assignPoints(marksToPoints)
    mapGradesToPoints() 
    const optional = getOptional()
    const total_points = getTotalPointsArray()
    //dealing with optional 
    if (optional === 'bio'){ 
       
        if(total_points[5] < 2){
        total_points[5] = 0 ;
        
      } 
      else if (total_points[5] > 2){
        total_points[5] = (total_points[5] - 2)
        
      }
    
    } else if (optional === 'hm'){
      
        if(total_points[2] < 2){
        total_points[2] = 0
        
      } 
      else if (total_points[2] > 2){
        total_points[2] = (total_points[6] - 2)
        
      }
    
    }
    // Main Results
    getTotalNum(marks)
    //point 
    const gpa = document.getElementById('gpa')
    gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/6)
    // Grade
    document.getElementById('gpaLatter').innerText = latter_grade(parseFloat(gpa.innerText))

}

const ultimate_point = (props) => {
    if ( props.length == 3){
        return (props[0] >=17 && (props[1] >= 8 && props[2] >= 8)) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
    } else if ( props.length == 2){
        return (props[0] >= 23  && props[1] >= 10 ) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
    }
} 