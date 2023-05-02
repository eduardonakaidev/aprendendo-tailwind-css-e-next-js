import Link from "next/link";

import {useRouter} from "next/router"

export default function todo() {

    const router = useRouter();

        const  todoId = router.query.todoId 
    
    return (
        <div>
            <Link href="/">
            
                    Voltar
               
            </Link>
            <h1>Exibindo o todoId : {todoId}</h1>
        </div>
    )
}