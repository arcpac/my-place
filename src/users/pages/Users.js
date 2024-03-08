import { useEffect, useState } from "react"
import UserList from "../components/UserList"

const Users = () => {
    const users =
        [
            {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "image": "https://reqres.in/img/faces/1-image.jpg",
                "places": 3
            },
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "image": "https://reqres.in/img/faces/2-image.jpg",
                "places": 3
            },
            {
                "id": 3,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
                "image": "https://reqres.in/img/faces/3-image.jpg",
                "places": 3
            },
            {
                "id": 4,
                "email": "eve.holt@reqres.in",
                "first_name": "Eve",
                "last_name": "Holt",
                "image": "https://reqres.in/img/faces/4-image.jpg",
                "places": 3
            },
            {
                "id": 5,
                "email": "charles.morris@reqres.in",
                "first_name": "Charles",
                "last_name": "Morris",
                "image": "https://reqres.in/img/faces/5-image.jpg",
                "places": 3
            },
            {
                "id": 6,
                "email": "tracey.ramos@reqres.in",
                "first_name": "Tracey",
                "last_name": "Ramos",
                "image": "https://reqres.in/img/faces/6-image.jpg",
                "places": 3
            },
            {
                "id": 7,
                "email": "charles.morris@reqres.in",
                "first_name": "Charles",
                "last_name": "Morris",
                "image": "https://reqres.in/img/faces/5-image.jpg",
                "places": 3
            },
            {
                "id": 8,
                "email": "tracey.ramos@reqres.in",
                "first_name": "Tracey",
                "last_name": "Ramos",
                "image": "https://reqres.in/img/faces/6-image.jpg",
                "places": 3
            },
        ]
    return (
        <div>
            <UserList items={users} />
        </div>
    )
}

export default Users