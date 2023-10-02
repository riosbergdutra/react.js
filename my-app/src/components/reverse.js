 const Reverse = ({children}) => {
    const reverseText = children.split('').reverse().join('')
    console.log (reverseText)
    return (
        <p>{reverseText}</p>
    )
 }

 export default Reverse