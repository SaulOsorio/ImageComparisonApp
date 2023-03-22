/* export function App(){
    return <h1>Hi madafaka</h1>
} */

//export const HelloWorldApp = () => <h1>Arrow Function</h1>
/*
export const HelloWorldApp = () => {
    return(
        <div>Hello World App</div>
    );
}
*/
import './style.css'

export const TitleSection = ({title, subtitle}) =>{
    return (
        <div className = "Titles" >
        <h1 className='center'>{ title }</h1>
        <p className='center'>{ subtitle }</p>
       </div>
    );
};


