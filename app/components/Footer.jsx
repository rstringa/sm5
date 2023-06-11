import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer clearfix">
        <div className="container-fluid">
            <nav className="footer_nav clearfix"> <Link href="anti-spam.html">Anti Spam</Link> <Link href="politica-de-privacidad.html">Política de Privacidad</Link> <Link href="terminos-y-condiciones.html">Términos y Condiciones</Link>
            <p>&copy;2002-2023</p>
            </nav>
        </div>
        <div className="footer_logo"><img src="./images/logo-footer.svg" /></div>
    </footer>
  )
}

export default Footer