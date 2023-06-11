const MainCampanias = () => {
  return (
    <>
    
    
<div className="container-fluid">
  <section className="main_sub_header clearfix">
    <h1 className="titulo_seccion hidden-sm-down">Ver y Crear Campañas</h1>
    <div className="col_btn hidden-sm-down">
      <button type="button" className="btn btn-primary btn-bold"><span className="fa fa-plus fa_left"></span>Nueva Campaña</button>
    </div>
  </section>
  <section className="main clearfix">
    <div className="box box_buscador">
    
      <div className="box_texto hidden-sm-down">
        <p>Viendo el total de las <strong>42 campañas</strong> de la lista</p>
      </div>
      {/* <!-- /box-texto--> */}
      
      <div className="box_campo_busqueda">
      
      
      
        <div className="input-group">
          <button className="input-group-addon btn btn-custom hidden-sm-down" name="accion_mostrar_filtros" id="mostrar_filtros"><span className="fa fa-caret-down fa-lg"></span></button>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre, asunto o contenido" />
          <button className="input-group-addon btn btn-custom " name="accion_buscar"><span className="fa fa-search fa-lg"></span></button>
        </div>
        
        {/* <!-- / --> */}
        
        <div className="box_tipo_campania hidden-md-up">
          <select className="selectpicker" data-style="btn-secondary" data-width="100%">
            <option>Todas las Campañas</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        
        {/* <!-- / --> */}
        
        
        <div className="dropdown-menu box_filtros hidden-sm-down" role="menu">
         
         <button type="button" className="close" aria-label="Cerrar" title="Cerrar y no aplicar filtros"><span aria-hidden="true">&times;</span></button>
         
          <div className="container">
            <div className="form-group row">
              <label className="col-lg-2 col-md-12 col-form-label">Destinatarios</label>
              <div className="col-lg-9 col-md-12">
                <select className="selectpicker" data-style="btn-secondary" data-width="100%">
                  <option value="0">Mostrar todas las campañas</option>
                  <option value="1">Opcion 2</option>
                  <option value="2">Opcion 3</option>
                </select>
              </div>
              </div>
              
             <div className="form-group row">
              <label className="col-lg-2 col-md-12 col-form-label">Estados</label>
              <div className="col-lg-9 col-md-12">
                <select className="selectpicker" data-style="btn-secondary" data-width="100%">
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
      
      <div className="box_block">
      <div className="alert alert-normal alert-dismissible fade show" role="alert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Cerrar">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Filtrado por:</strong>
  Segmento: Lorem Ipsum, Segmento deportivo. 
</div>
      </div>
      {/* <!-- box-block --> */}
      
    </div>
    {/* <!-- /box-buscador--> */}
    
    <div className="box_texto_mobile hidden-md-up">
      <p>Viendo el total de las <strong>42 campañas</strong> de la lista</p>
    </div>
    {/* <!-- /box-texto--> */}
    
    <div className="box_ordenar_items hidden-sm-down">
      <div className="items_izq">
        <div className="box box_item box_checkbox">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input indeterminate-checkbox" />
            <span className="custom-control-indicator"></span> </label>
        </div>
        <div className="box_item box_boton_accion">
          <button type="button" className="btn btn-secondary">Eliminar</button>
        </div>
      </div>
      <div className="items_der">
        <div className="box_item  box_boton_ordenar_por">
          {/* <select className="selectpicker" data-style="btn-secondary"  data-width="fit">
            <option selected>Fecha</option>
            <option>Opcion 2 mas largo</option>
            <option>Opcion 3 menos</option>
          </select> */}
          <button type="button" className="btn btn-secondary"><span className="fa fa-long-arrow-up fa-lg"></span></button>
        </div>
        <div className="box_item box_boton_mostrar_cantidad">
          <select className="selectpicker" data-style="btn-secondary"  data-width="fit">
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
    </div>
    {/* <!-- *box_ordenar_tablas--> */}
    
    
    <section className="ver_campanias">
    
    <div className="box box_ver_campanias">
      <div className="box_columnas">
        <div className="col_1 hidden-sm-down">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <span className="custom-control-indicator"></span> </label>
        </div>
        {/* <!-- /col-1 --> */}
        
        <div className="col_2">
          <div className="box_text_content modificado_con_graficos">
            <div className="box_top clearfix">
              <div className="box_top_text">
                <h3 className="titulo"><a href="#">Novedades Verano en Lorem Ipsum</a></h3>
              </div>
            </div>
            <div className="box_middle">
              <div className="box_middle_info">
                <p>Asunto: Lorem ipsum dolor sit amet</p>
                <p>Creada el 22/01/2017 a las 17:02</p>
                <p>Segmento: Lorem impsum dolor</p>
                <p>Enviando...</p>
              </div>
            </div>
          </div>
          {/* <!-- /box-text-content --> */}
          
          <div className="box_estado_envio">
            <p className="texto">Enviando <span className="porciento">80%</span></p>
            <div className="progress">
            <div className="progress-bar bg-success" style={{ width: '80%' }}></div>
            </div>
            <div className="box_estado_btn"> <a href="#" className="btn btn-secondary"><span className="fa fa-pause fa_left_5"></span>Pausar</a> <a href="#" className="btn btn-secondary"><span className="fa fa-ban fa_left_5"></span>Cancelar</a> </div>
          </div>
        </div>
        {/* <!-- /col-2 --> */}
        
        <div className="col_3">
          <div className="box_top_menu">
            <div className="dropdown"> <a href="#" className="icono_menu" data-toggle="dropdown"><span className="fa fa-ellipsis-v"></span></a>
              <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="#">Ir al reporte</a> <a className="dropdown-item" href="ver-detalle-campania.html">Ver detalles de la campaña</a> <a className="dropdown-item" href="#">Duplicar y Reenviar</a> <a className="dropdown-item" href="#">Duplicar para otra lista</a> <a className="dropdown-item" href="#">Eliminar</a> </div>
            </div>
          </div>
        </div>
        {/* <!-- /col-3 -->  */}
        
      </div>
      <div className="box_footer">
        <div className="estado_campania"> <span className="texto_estado_envio hidden-sm-down">Enviando</span>
          <p><span className="fa fa-send"></span></p>
        </div>
      </div>
    </div>
    
    {/* <!-- *************** / Box 1 ******************************* --> */}
    
    <div className="box box_ver_campanias">
      <div className="box_columnas">
        <div className="col_1 hidden-sm-down">
          <input type="checkbox" />
        </div>
        {/* <!-- /col-1 --> */}
        
        <div className="col_2">
          <div className="box_text_content modificado_con_graficos">
            <div className="box_top clearfix">
              <div className="box_top_text">
                <h3 className="titulo"><a href="#">Nombre de la campaña nananana</a></h3>
              </div>
            </div>
            <div className="box_middle">
              <div className="box_middle_info">
                <p>Asunto: Lorem ipsum dolor sit amet</p>
                <p>Creada el 22/01/2017 a las 17:02</p>
                <p>Segmento: Lorem impsum dolor</p>
                <p>Envío finalizado hace 2 días</p>
              </div>
            </div>
          </div>
          {/* <!-- /box-text-content --> */}
          
          <div className="box_graficos">
            <div className="col_grafico">
              <div className="numero">235.568</div>
              <div className="label">Enviados</div>
            </div>
            <div className="col_grafico">
              <div className="numero">15%</div>
              <div className="label">Abiertos</div>
            </div>
            <div className="col_grafico">
              <div className="numero">10%</div>
              <div className="label">Clics</div>
            </div>
          </div>
        </div>
        {/* <!-- /col-2 --> */}
        
        <div className="col_3">
          <div className="box_top_menu">
            <div className="dropdown"> <a href="#" className="icono_menu" data-toggle="dropdown"><span className="fa fa-ellipsis-v"></span></a>
              <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="#">Ir al reporte</a> <a className="dropdown-item" href="#">Ver detalles de la campaña</a> <a className="dropdown-item" href="#">Duplicar y Reenviar</a> <a className="dropdown-item" href="#">Duplicar para otra lista</a> <a className="dropdown-item" href="#">Eliminar</a> </div>
            </div>
          </div>
        </div>
        {/* <!-- /col-3 -->  */}
        
      </div>
      <div className="box_footer">
        <div className="estado_campania"> <span className="texto_estado_envio hidden-sm-down">Enviada</span>
          <p><span className="fa fa-check"></span></p>
        </div>
      </div>
    </div>
    
    {/* <!-- *************** / Box 2 ******************************* --> */}
    
    <div className="box box_ver_campanias">
      <div className="box_columnas">
        <div className="col_1 hidden-sm-down">
          <input type="checkbox" />
        </div>
        {/* <!-- /col-1 --> */}
        
        <div className="col_2">
          <div className="box_text_content modificado_con_graficos">
            <div className="box_top clearfix">
              <div className="box_top_text">
                <h3 className="titulo"><a href="#">Lorem impsum dolor sit amet</a></h3>
              </div>
            </div>
            <div className="box_middle">
              <div className="box_middle_info">
                <p>Asunto: Lorem ipsum dolor sit amet</p>
                <p>Creada el 22/01/2017 a las 17:02</p>
                <p>Segmento: Lorem impsum dolor</p>
                <p className="pasos_borrador"><a href="#">Asunto y Remitente</a> &gt; <a href="#">Contenido</a> &gt; <a href="#">Destinatarios</a> &gt; <a href="#">Envío</a></p>
              </div>
            </div>
          </div>
          {/* <!-- /box-text-content -->  */}
          
          {/* <!-- <div className="box_estado_envio">
                    <p className="texto_estado_envio">Enviando <span className="porciento">80%</span></p>
                    <progress className="progress progress-success" value="80" max="100"></progress>
                    <div className="box_estado_btn"> <a href="#" className="btn btn-secondary"><span className="fa fa-pause fa_left"></span>Pausar</a> <a href="#" className="btn btn-secondary"><span className="fa fa-ban fa_left"></span>Cancelar</a> </div>
                  </div>-->  */}
          
        </div>
        {/* <!-- /col-2 --> */}
        
        <div className="col_3">
          <div className="box_top_menu">
            <div className="dropdown"> <a href="#" className="icono_menu" data-toggle="dropdown"><span className="fa fa-ellipsis-v"></span></a>
              <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="#">Ir al reporte</a> <a className="dropdown-item" href="#">Ver detalles de la campaña</a> <a className="dropdown-item" href="#">Duplicar y Reenviar</a> <a className="dropdown-item" href="#">Duplicar para otra lista</a> <a className="dropdown-item" href="#">Eliminar</a> </div>
            </div>
          </div>
        </div>
        {/* <!-- /col-3 -->  */}
        
      </div>
      <div className="box_footer">
        <div className="estado_campania"> <span className="texto_estado_envio hidden-sm-down">Borrador</span>
          <p><span className="fa fa-file-o"></span></p>
        </div>
      </div>
    </div>
    
    {/* <!-- *************** / Box 3 ******************************* --> */}
    
    <div className="box box_ver_campanias">
      <div className="box_columnas">
        <div className="col_1 hidden-sm-down">
          <input type="checkbox" />
        </div>
        {/* <!-- /col-1 --> */}
        
        <div className="col_2">
          <div className="box_text_content modificado_con_graficos">
            <div className="box_top clearfix">
              <div className="box_top_text">
                <h3 className="titulo"><a href="#">Lorem impsum dolor sit amet</a></h3>
              </div>
            </div>
            <div className="box_middle">
              <div className="box_middle_info">
                <p>Asunto: Lorem ipsum dolor sit amet</p>
                <p>Creada el 22/01/2017 a las 17:02</p>
                <p>Segmento: Lorem impsum dolor</p>
                <p className="texto_destacado">Comenzará a enviarse en 2 días y 4 horas</p>
              </div>
            </div>
          </div>
          {/* <!-- /box-text-content  --> */}
          
          {/* <!-- <div className="box_estado_envio">
                    <p className="texto_estado_envio hidden-sm-down">Enviando <span className="porciento">80%</span></p>
                    <progress className="progress progress-success" value="80" max="100"></progress>
                    <div className="box_estado_btn"> <a href="#" className="btn btn-secondary"><span className="fa fa-pause fa_left"></span>Pausar</a> <a href="#" className="btn btn-secondary"><span className="fa fa-ban fa_left"></span>Cancelar</a> </div>
                  </div>-->  */}
          
        </div>
        {/* <!-- /col-2 --> */}
        
        <div className="col_3">
          <div className="box_top_menu">
            <div className="dropdown"> <a href="#" className="icono_menu" data-toggle="dropdown"><span className="fa fa-ellipsis-v"></span></a>
              <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="#">Ver Campaña</a> <a className="dropdown-item" href="#">Replicar</a> <a className="dropdown-item" href="#">Ir al Reporte</a> <a className="dropdown-item" href="#">Eliminar</a> </div>
            </div>
          </div>
        </div>
        {/* <!-- /col-3 -->  */}
        
      </div>
      <div className="box_footer">
        <div className="estado_campania"> <span className="texto_estado_envio hidden-sm-down">Programada</span>
          <p><span className="fa fa-calendar"></span></p>
        </div>
      </div>
    </div>
    
    {/* <!-- *************** / Box 4 ******************************* --> */}
    
    <button type="button" className="btn btn-custom btn-block btn-bold">Mostrar próximos 10 resultados <span className="fa fa-angle-down fa_right_10"></span></button>
  
  	 </section>
     {/*<!-- /ver_campanias--> */}
  </section>
</div>
{/* <!-- /container--> */}

    </>
  )
}

export default MainCampanias


