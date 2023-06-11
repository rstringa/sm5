import Link from 'next/link'
import './Header.scss'
export default function Header () {
  return (
    <header className="header clearfix"> 
  
    {/* <!--HEADER DESKTOP--> */}
    
    <div className="col_header_top header_desktop hidden-sm-down clearfix">
      <div className="container-fluid">
        <div className="col_logo clearfix"> 
        <Link href="./" className="logo">
          <img src="./images/logo.svg" alt="Simultanews"/>
        </Link>
        </div>
        <div className="col_nav clearfix">
          <nav className="menu_principal">
            <ul>
              <li><Link href="#">Inicio</Link></li>
              <li><Link href="#">Suscriptores</Link></li>
              <li className="seleccionado"><Link href="#">Campañas</Link></li>
              <li><Link href="#">Reportes</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col_ayuda"> <Link href="#"><span className="fa fa-question-circle-o"></span></Link> </div>
        <div className="col_cuenta">
          <div className="dropdown"> <Link href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Cuenta</Link>
            <div className="dropdown-menu dropdown-menu-right"> <Link className="dropdown-item" href="#">Action</Link> <Link className="dropdown-item" href="#">Another action</Link> <Link className="dropdown-item" href="#">Something else here</Link> </div>
          </div>
        </div>
      </div>
    </div>
  
      {/* <!-- / header-top -->  */}
    
    <div className="sub_header_full clearfix hidden-sm-down">
      <div className="container-fluid">
        <div className="col_sub_nav clearfix">
          <ul className="sub_nav sub_nav_desktop hidden-sm-down">
            <li className="seleccionado"><Link href="ver-crear-campania.html">Ver y Crear</Link></li>
            <li><Link href="plantillas-campanias.html">Plantillas</Link></li>
            <li><Link href="archivos-campanias.html">Archivos</Link></li>
            <li><Link href="automaticas-campanias.html">Automáticas</Link></li>
          </ul>
        </div>
        <div className="menu_lista hidden-sm-down">
          <div className="btn-group menu">
            <select className="selectpicker" data-style="btn-secondary" data-size="5" data-dropdown-align-right="true">
              <option>Colegio de Martilleros Lorem Ipsum Sitamet</option>
              <option value="1">Lorem ipsum lista 2</option>
              <option value="2">Lorem ipsum lista 3</option>
              <option value="3">Lorem ipsum lista 4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /sub-header-->  */}
  
    {/* <!--HEADER MOVIL--> */}
  <div className="header_mobile hidden-md-up">
    <div className="container-fluid">
      <div className="col_menu_mobile ">
        <button className="js-menu-show menu_icon"><span className="fa fa-navicon"></span></button>
      </div>
      <div className="titulo_seccion_mobile">Ver Campañas</div>
      <div className="col_logo clearfix"> <Link href="#" className="logo"><img src="./images/logo.svg" alt="Simultanews"/></Link> </div>
    </div>
  </div>
  
  
  </header>
  )
}
