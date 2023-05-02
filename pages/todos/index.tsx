
export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()
    return {
        props:{
            todos
        },
    }
}

export default function todos({todos}) {
    return (
        <div className="h-full bg-blue-900 flex flex-row text-white ">
            <div className="w-1/2 flex flex-col items-center pt-24 space-y-2">
                 {todos.map((todos) =>(
                    <p key={todos.id}>{todos.title}</p>
                ))}
            </div>
            <div className="w-1/2 flex flex-col items-center  pt-24 space-y-2">
               
            </div>
        </div>
    )
}