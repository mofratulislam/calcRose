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
     const ict = ultimate_point([...marks[11], 0, 0])

     const marksToPoints = [ban, eng, math,  phy, che, bio, hm, bgs, rlgs, ict]
     assignPoints(marksToPoints)
     mapGradesToPoints() 
     
    
     
    
    const total_points = getTotalPointsArray()
     //point 
     const gpa = document.getElementById('gpa')
     gpa.innerText = (total_points.reduce((a, b) =>  a + b, 0)/9)
      console.log(total_points)
       // Dealing with optional
     
     const optional = getOptional()
    if (optional === 'bio'){ 
     
       failDetectionFinal(5)
       
        if(total_points[5] < 2){
        total_points[5] = 0 ;
      } 
      else if (total_points[5] > 2){
        total_points[5] = (total_points[5] - 2)
      }

      marks[7] =  [marks[7].reduce((a, b) =>  a + b, 0)]
      if(marks[7][0] < 40){
        marks[7][0] = 0
      } else if (marks[7][0] > 40){
        marks[7][0] = marks[7][0] - 40
      }
    
    } 
     if (optional === 'hm'){
       
      failDetectionFinal(6)
      
      if(total_points[6] < 2){
        total_points[6] = 0
        
      } 
      else if (total_points[6] > 2){
        total_points[6] = (total_points[6] - 2)
        
      }
      marks[8] = [marks[8].reduce((a, b) =>  a + b, 0)]
      if(marks[8][0] < 40){
        marks[8][0] = 0
      } else if (marks[8][0] > 40){
        marks[8][0] = marks[8][0] - 40
      }

      
    
    }
    
    
    // Main Results
    getTotalNum(marks)
    
    // Grade
    document.getElementById('gpaLatter').innerText = latter_grade(parseFloat(gpa.innerText))
}


const ultimate_point = (props) => {
  if (props.length == 4 ){
    return (props[0] >= 8 && props[1] >= 8 ) ? point(props.map(i => i*2).reduce((a, b) =>  a + b, 0)) : 0
  }else if ( props.length == 2){
    return (props[0] >= 23  && props[1] >= 10 ) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
  }else if ( props.length == 3){
    return (props[0] >=17 && (props[1] >= 8 && props[2] >= 8)) ? point(props.reduce((a, b) =>  a + b, 0)) : 0
  }
}
