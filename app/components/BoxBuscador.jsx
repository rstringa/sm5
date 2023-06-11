"use client"
export const BoxBuscador = () => {

function handleDropDown(){
    const dropDown = document.querySelector(".box_filtros");
    dropDown.classList.toggle("is-visible")
  }  

  return (
    <>

<div className="box_campo_busqueda">
      
      
      
      <div className="input-group">
        <button 
        onClick={handleDropDown}
        className="input-group-addon btn btn-custom hidden-sm-down" name="accion_mostrar_filtros" id="mostrar_filtros"><span className="fa fa-caret-down fa-lg"></span></button>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre, asunto o contenido" />
        <button className="input-group-addon btn btn-custom " name="accion_buscar"><span className="fa fa-search fa-lg"></span></button>
      </div>
      
      {/* <!-- / --> */}
      
      <div className="box_tipo_campania hidden-md-up">
        <select className="custom-select " data-style="btn-secondary" data-width="100%">
          <option>Todas las Campañas</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      
      {/* <!-- / --> */}
      
      
      <div className="dropdown-menu box_filtros hidden-sm-down" role="menu">
       
       <button 
       onClick={handleDropDown}
       type="button" className="close" aria-label="Cerrar" title="Cerrar y no aplicar filtros"><span aria-hidden="true">&times;</span></button>
       
        <div className="container">
          <div className="form-group row">
            <label className="col-lg-2 col-md-12 col-form-label">Destinatarios</label>
            <div className="col-lg-9 col-md-12">
              <select className="custom-select" style={{width:'100%'}} >
                <option value="0">Mostrar todas las campañas</option>
                <option value="1">Opcion 2</option>
                <option value="2">Opcion 3</option>
              </select>
            </div>
            </div>
            
           <div className="form-group row">
            <label className="col-lg-2 col-md-12 col-form-label">Estados</label>
            <div className="col-lg-9 col-md-12">
              <select className="custom-select " style={{width:'100%'}}>
                <option value="0">Todos los estados</option>
                <option value="1">Opcion 2</option>
                <option value="2">Opcion 3</option>
              </select>
            </div>
            </div>
            
         
          <div className="box_filtros_footer">
          <button type="submit" className="btn btn-primary mr-2">Aplicar Filtros</button>
          <button type="submit" className="btn btn-secondary">Reestablecer</button>
          </div>
          
          
         </div>  
          
          
        </div>
      {/* <!-- /dropdown--> */}
        
        
     
    </div>
    {/* <!-- /box-campo-busqueda-->  */}

    </>
  )
}
