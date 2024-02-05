'use client'

import { useEffect, useState } from "react"
import Link from 'next/link'

export default function Page() {
  const [dataResponse, setdataResponse] = useState([])

  useEffect(() => {
    async function getPageData() {
      const apiUrlEnpiont = `http://localhost:3000/api/footballers`
      const response = await fetch(apiUrlEnpiont)
      const res = await response.json()
      //console.log(res.footballers)
      setdataResponse(res.footballers)
    }
    getPageData()
  })
  return (
    <div>
      <h1>Footballers Data</h1>
      <Link href="/create-data"><h2>Create</h2></Link>
      <Link href="/delete-data"><h2>Delete</h2></Link>
      {dataResponse.map((footballers) => {
        return(
          <div key ={footballers.id}>
            <p>----------------------------</p>
            <p><b>ID : </b>{footballers.id}</p>
            <p><b>Name : </b>{footballers.name}</p>
            <p><b>Position : </b>{footballers.position}</p>
            <p><b>Club : </b>{footballers.club}</p>
            <p><b>Country : </b>{footballers.country}</p>
            <p>----------------------------</p>
          </div>
        )
      })}
    </div>
  )
}