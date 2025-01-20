'use client'
import data from "../../../data/jensen" 
import { useParams } from "next/navigation"
import ChipeadorasJensen from "./ChipeadorasJensen";


const Productos = data;

import { useEffect } from 'react';

useEffect(() => {
    var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67895816825083258e068403/1iho806pl';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        if (s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        }
    })();
}, []);


const CategoriaChipeadora = () =>{
    const params= useParams()
    const categoria = params.categoria as string
    const productosFiltrados = Productos.filter(producto=>producto.categoria===categoria.replace(/-/g,' '))
    
    return(
        <>
               <div className="font-extralight text-sm">
                        <a href="/chipeadoras/jensen">Jensen</a> {' > '} 
                        <span className="text-red-600 underline">{categoria.replace(/-/g,' ')}</span> 
                        
                    </div>
        <div className="flex justify-center">
            <h1 className="text-center text-2xl">{categoria?.replace(/-/g, ' ')}</h1>
        </div>
            <ChipeadorasJensen Productos={productosFiltrados}/>
        </>
        
    )
}

export default CategoriaChipeadora