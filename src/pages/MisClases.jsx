const modulos = [
  {
    id: 1,
    titulo: 'Bases de Datos',
    descripcion: 'Fundamentos de modelado y consultas SQL',
    imagen:
      'https://images.unsplash.com/photo-1791709410985-67dbfc30bafc?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
  {
    id: 2,
    titulo: 'Programación Web',
    descripcion: 'React en el frontend y Laravel en el backend',
    imagen:
      'https://images.unsplash.com/photo-1791225454227-b547450dd35c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
  {
    id: 3,
    titulo: 'Robótica',
    descripcion: 'Arduino y control de circuitos electrónicos',
    imagen:
      'https://images.unsplash.com/photo-1789758489682-bc9bca58ecb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D',
  },
]

export default function MisClases() {
  return (
    <section>
      <h2>Módulos disponibles</h2>
      <div className="tarjetas">
        <div className="tarjeta">
          <img src={modulos[0].imagen} alt={modulos[0].titulo} />
          <h3>{modulos[0].titulo}</h3>
          <p>{modulos[0].descripcion}</p>
          <button>Suscribirse</button>
        </div>

        <div className="tarjeta">
          <img src={modulos[1].imagen} alt={modulos[1].titulo} />
          <h3>{modulos[1].titulo}</h3>
          <p>{modulos[1].descripcion}</p>
          <button>Suscribirse</button>
        </div>

        <div className="tarjeta">
          <img src={modulos[2].imagen} alt={modulos[2].titulo} />
          <h3>{modulos[2].titulo}</h3>
          <p>{modulos[2].descripcion}</p>
          <button>Suscribirse</button>
        </div>
      </div>
    </section>
  )
}