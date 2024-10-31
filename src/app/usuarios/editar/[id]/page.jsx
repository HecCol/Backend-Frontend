import axios from "axios";

async function getUsuarios({
    params
}) {
    const url = `http://localhost:3000/usuarios/buscarPorId/${params.id}`;
    const usuario = await axios.get(url);
    //console.log(usuarios.data);
    return usuario.data;
}

async function editarUsuario(e,id) {
    e.preventDefault();
    //console.log("Estas en nuevo usuario");
    const url = `http://localhost:3000/usuarios/editarUsuario/${id}`;
    const datos = {
        nombre:document.getElementById("nombre").value,
        usuario:document.getElementById("usuario").value,
        password:document.getElementById("password").value
    }
    //console.log(datos);
    const respuesta = await axios.post(url,datos);
    location.replace("http://localhost:3001/usuarios/mostrar");
    //console.log(respuesta.data);
}

export default function Nuevo({params}) {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={(e)=>{editarUsuario(e,id)}} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="card-body">
                        <input defaultValue={usuario.nombre} id="nombre" placeholder="Nombre" autoFocus className="form-control mb-3" type="text" />
                        <input defaultValue={usuario.usuario}id="usuario" placeholder="Usuario" className="form-control mb-3" type="text" />
                        <input defaultValue={usuario.password} id="password" placeholder="Password" className="form-control mb-3" type="text" />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-2 mb-2" type="submit">Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}