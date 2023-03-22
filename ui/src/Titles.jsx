import './style.css'

export const TitleSection = ({title, subtitle}) =>{
    return (
        <div className = "Titles" >
        <h1 className='center'>{ title }</h1>
        <p className='center'>{ subtitle }</p>
        <br/>
        
       </div>
    );
};


