'use client'

import Image from "next/image"
import { GoArrowRight } from "react-icons/go"

type Producto = {
    imagen:string,
    alt:string,
    nombre:string,
    descripcion_tecnica:string,
    descripcion_producto:string,
    routerPath:string,
    precio:number
}

type Props = {
    Productos:Producto[]
}

const ChipeadorasEliet = ({Productos}:Props) =>{


    return(

        
        <section className="pr-12 pl-12 mt-10 flex justify-center flex-wrap">
            {Productos.map(producto=>(
                <div className="border mx-2 rounded-2xl shadow-lg mb-5 w-72 pt-5 pb-20 px-5" key={producto.nombre}>
                    <div className="flex justify-center">
                        <Image src={producto.imagen} alt={producto.alt} width={200} height={200}/>
                    </div>
                    <p className="text-center text-sm mt-4">Chipeadora</p>
                    <h2 className="text-center text-xl font-bold mt-1">{producto.nombre}</h2>
                    <p className="text-center mb-2">{producto.descripcion_tecnica}</p>
                    <p className="text-center">{producto.descripcion_producto}</p>
                    <div className="flex justify-center mt-5">
                       
                        <button className="bg-black text-white px-4 ml-3 rounded-xl"><a className="flex items-center" href={producto.routerPath}>Ver productos <GoArrowRight className="text-white ml-3"/></a></button>
                    </div>
                </div>
            ))} 
        </section>
    )
}

export default ChipeadorasEliet;