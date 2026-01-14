const baseDeDatosCloud = [
    { nombre: "Amazon EC2", tipo: "IaaS", estado: "Activo", costo: 35.00 },
    { nombre: "Google Drive Enterprise", tipo: "SaaS", estado: "Activo", costo: 12.50 },
    { nombre: "Heroku App Server", tipo: "PaaS", estado: "Inactivo", costo: 0.00 },
    { nombre: "Azure Virtual Machines", tipo: "IaaS", estado: "Activo", costo: 40.00 }
];

const cargarServicios=()=>{
    //obtengo el div contenedor
    const contenedor = document.getElementById("contenedor-servicios");
    contenedor.innerHTML="";

    baseDeDatosCloud.forEach((servicio)=>{

    
        if(servicio.estado==="Activo"){
            claseEstado="activo";
        }else{
            claseEstado="inactivo"
        }
          const targetaHTML = `
            <div class="card">
                <h3>${servicio.nombre}</h3>
                <p class="tipo">Tipo: ${servicio.tipo}</p>
               <p class="${servicio.estado === 'Activo' ? 'activo' : 'inactivo'}">
                    Estado: ${servicio.estado}
                </p>
                <p>Costo mensual: $${servicio.costo.toFixed(2)}</p>
            </div>
        `;

        contenedor.innerHTML+= targetaHTML;


    });
    
   
    
    
}