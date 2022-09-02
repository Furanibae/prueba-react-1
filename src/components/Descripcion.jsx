import { useState } from "react";

const Descripcion = () =>{
   
    const [nType, setnType] = useState("");
    const [feriados, setFeriados] = useState([]);


    const buscarFeriado = (e) => {
        e.preventDefault();
        if (nType ==="Religioso") {

            var ferFilter = feriados.filter(f=>f.type==="Religioso");
            setFeriados([...ferFilter]);
        }
        if(nType==="Civil"){
            var ferFilter = feriados.filter(f=>f.type==="Civil")
            setFeriados({...ferFilter});
        } 
    };

    const state = {value:""}

    const handleChange=(event) => {
        state.value=event.target.value;
    }
      
      
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

<form onSubmit={buscarFeriado}>    
<select value={state.value} onChange={handleChange} className="form-select">
    <option selected>Selecciona una opción</option>    
    <option value="Religioso">Feriados Religiosos</option> 
    <option value="Civil">Feriados Civiles</option>
    <option value="Religioso , Civil">Todos los Feriados</option>     
</select>
</form>

</div>    
    <input type="submit" className="btn bg mt-3" value="Buscar" />            
</div>


<div className="containercards container col-md-12">
    {feriados.map(f =>
    <div className="col-md-4 card">
    <div class="card-header">{f.title}</div>        
    <div class="card-body">
    <p class="card-text">{f.date}</p>
  </div>    
  
</div>    
)}
</div>

</div>
    )
}



export default Descripcion;