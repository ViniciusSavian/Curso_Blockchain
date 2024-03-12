export default function Input (props){
    return(
        <div className="flex flex-col"> 
            <label className="text-white rounded-md">Enter your name </label>
            <span className="text-sm text-gray-200">{props.description}</span>
            <input className = "text-black rounded-md" placeholder=" Vinicius.Savian"></input>
        </div>
    )
}