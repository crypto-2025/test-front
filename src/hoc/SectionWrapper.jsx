import './SectionWrapper.css'
const SectionWrapper = (Commponent,index,className) => {
return(
  function HOC(props){
    return(
  
      <section 
     
      className={`SectionWrapper ${className}`}
      >
        <span className='hash-span ' id={index}>
         &nbsp;
        </span>
        
        <Commponent {...props}/>
      </section>
    )
   }
)
}

export default SectionWrapper
