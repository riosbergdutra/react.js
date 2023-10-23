 import './reverse.css'
 
 const Reverse = ({children}) => {
    const reverseText = children.split('').reverse().join('')
    console.log (reverseText)
    return (
        <p className='reverse-text'>{children} <span> => </span> {reverseText}</p>
    )
 }

 export default Reverse