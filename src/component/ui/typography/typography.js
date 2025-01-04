import './typography.css'
export default function Typography({ component, children, className }) {
  return (
 
      
        <div
          className={`${className ? className : ""} ${component}`}
        >
          {children}
        </div>
    

  );
}


