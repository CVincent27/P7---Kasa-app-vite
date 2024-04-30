import { useParams } from "react-router-dom"

export function LogementsID() {
   const {id} = useParams()
  return (
    <div>
      <h1>Logement {id}</h1>
    </div>
  )
}