export default function Button(props) {
    return (
            props.style === "light" ? <div className=" mt-4">
            <a href={props.link} className=" text-center py-4 px-6 bg-white text-purple-800 rounded-lg">{props.name}</a>
        </div> :<div className=" mt-4">
                <a href={props.link} className=" text-center py-4 px-6 text-white bg-purple-600 hover:bg-purple-800 rounded-lg">{props.name}</a>
            </div>
    )
}