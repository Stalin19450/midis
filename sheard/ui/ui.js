import Image from "next/image"
import Image from "next/image"

export const Title = ({children}) =>{
    return(
        <span>
            {children}
        </span>
    )
}

export const Artist =  ({artist}) =>{
    return(
        <p>
            {artist}
        </p>
    )
}

export const Cover = ({src}) =>{
    <image src = {src} ait = "обложка">
    </image>
}

export const Duration = ({duration}) =>{
    return(
        <span>
            {duration}
        </span>
    )
}
