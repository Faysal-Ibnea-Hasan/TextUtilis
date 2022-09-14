// import React,{useState} from 'react'

export default function About(props) {
// const [myStyle, setMystyle] = useState({
//   color : 'black',
//   backgroundColor : 'white'
// })
// For dark mode
let myStyle = {
  color: props.mode ==='dark'? 'white':'black',
  backgroundColor : props.mode ==='dark'? 'black':'white'
}
// const [btntext, setBtnText] = useState("Enable Dark Mode")

// const toggleStyle = ()=>{
//   if(myStyle.color === 'black'){
//     setMystyle({
//       color : 'white',
//       backgroundColor : 'black',
//       border : '.5px solid white'
//     })
//     setBtnText("Enable Light Mode")
//   }
//   else{
//     setMystyle({
//       color : 'black',
//       backgroundColor : 'white'
//     })
//     setBtnText("Enable Dark Mode")
//   }

// }


  return (
    <>
          <div className="container" style={myStyle}>
            <h1 className='my-3'>About us</h1>

          <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
              Accordion Item #1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body"style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
              Accordion Item #2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
              Accordion Item #3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
            {/* <div className="btncontainer my-3">

              <div onClick={toggleStyle} className="form-check form-switch">
               <input  className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
              </div>
            </div> */}
        </div>
    </>
    
      
    
  )
}
