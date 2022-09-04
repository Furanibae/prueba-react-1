import { useState } from "react";

const Descripcion = ({feriados}) =>{
    const [tipo, setTipo] = useState("");
    
   return(
<div className="container-general">
<div className="container-1">
<div className=" textoconimg">
<h3 className="h3-1 mb-5">En este sitio podrás conocer los feriados para Chile</h3>
</div>
</div> 
<div className="container-2 col-md-12">
<div className="bg">
<h3 className="pb-3 pt-3">¿Cómo puedo buscar los feriados?</h3>  
</div>    
<h5 className="mt-5">Puedes ver tanto los feriados religiosos como los civiles</h5>
<p>Para ello sólo debes seleccionar una de las opciones a continuación:</p>
<div className="select">

<select
        defaultValue={""}
        className="form-select"
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        <option value="Religioso">Feriados Religiosos</option>
        <option value="Civil">Feriados Civiles</option>
        <option value="Religioso , Civil">Todos los Feriados</option>
      </select>
 
</div>    
        
</div>


<div className="containercards container col-md-12">
{tipo
          ? feriados
              
              .filter((el) => {
                if (tipo === "" || tipo === "Religioso , Civil") {
                  return el;
                } else if (
                  el.type.toLocaleLowerCase() === tipo.toLocaleLowerCase()
                ) {
                  return el;
                }
                return console.log("");
              })
              .map((f) => (
                <div className="col-md-4 card d-1">
                  <div className="card-header"><h5>{f.title}</h5></div>
                  <div className="card-body">
                    <p className="card-text">{f.date}</p>
                  </div>
                </div>
              ))
          : ""}
  </div>    
  
</div>    
)}


export default Descripcion;