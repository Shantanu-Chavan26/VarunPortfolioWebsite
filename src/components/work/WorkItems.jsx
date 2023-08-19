const WorkItems = ({ item, deploymentLink, demoLink }) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}<br></br> <br></br></h3>
        <div class="btn-container">


          <a href={deploymentLink} target="_blank" className="work__button" rel="noreferrer"> 
            <button class="btn btn-color-2 project-btn">
                Github
              </button>
          </a>

          {/* <a href={demoLink} target="_blank" className="work__button" rel="noreferrer"> 
            <button class="btn btn-color-2 project-btn">
                Mockup
              </button>
          </a> */}
        </div>
    </div>
  )
}

export default WorkItems
