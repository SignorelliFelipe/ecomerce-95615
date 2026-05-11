import "./titulo.css"

import banner from  "../../../img/react-banner.webp"

const Titulo = () =>{


    return(
        <div className="titulo">
          <img src={banner} alt="" className="titulo-img" />
          <h2 className="titulo-h2" >Bienvenidos a la 2da clase!</h2>
          
        </div>
    );
};

//
export default Titulo;


















/*
const Titulo = () =>{

    const styles ={
        color:"white",
        padding:"20px",
        backgroundColor: "darkCyan",
        borderRadius:"10px"
    };


//Todo lo qu esta arriba es Js

//Todo lo que esta en el return es Jsx
    return(
        <>
          <h2 style={styles} >Bienvenidos a la 2da clase!</h2>
        </>
    );
};
*/