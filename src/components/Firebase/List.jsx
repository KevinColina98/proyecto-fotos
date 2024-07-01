// import React, { useEffect, useState } from "react"
// import { appFirebase } from "../../credentials"
// import { collection } from "firebase/firestore"

// const List = () => {
//     const [lista, setLista] = useState([])

//     useEffect(() => {
//         const getLista = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(db, "fotos"))
//                 const docs = []
//                 querySnapshot.forEach((doc) => {
//                     docs.push({ ...doc.data(), id: doc.id })
//                 })
//                 setLista(docs)
//             } catch (error) {
//                 console.log(error);

//             }
//         }
//         getLista()
//     },[lista])

 
// }

// export { List } 


