"use client";
import * as React from "react";
import { ComponentProps } from "@/types/interface";
import Style from "../../app/page.module.scss";
interface ModalProps extends ComponentProps {
  passedKey: string
}
interface Data {
  [key:string] : string
}
async function getData() {
  const res = await fetch('http://localhost:3000/data/test.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await Promise.all([res.json()])
  return data
}

export const Modal: React.FC<ModalProps> = ({
  classname,
  passedKey
}) => {
  const [ModalData, setModalData] = React.useState< Data | undefined>(undefined)
  const [popupVisible, setPopupVisible] = React.useState<boolean>(false)
  const [data, setData] = React.useState<[]>([])

  function togglePopup(data?:Data | undefined) {
    console.log(data)
    setModalData(data)
    setPopupVisible(!popupVisible)
  }
  React.useEffect(() => {
    getData().then((users) => {setData(users[0][`${passedKey}`])});
  }, [passedKey]);
  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <React.Fragment>
      <ul className={`${classname}`}>
        {data && data.map((user: Data) => (
          <li key ={user.name} className={`${Style.card} ${Style['card-sm']} ${Style["mh-auto"]} ${Style["mb-8"]}`}>
            <h3 className={`${Style.heading} ${Style["mb-4"]}`}>{user.name}</h3>
            <p className={`${Style["text-xl"]} ${Style["mb-2"]}`} >{user.role}</p>
            <button onClick={() =>togglePopup(user)} className={`${Style["tc-white"]} ${Style["fw-semibold"]}`}> What I did here &gt;</button>
          </li>
        ))}

      </ul>
      {popupVisible && <div className={`${Style["modal-overlay"]}`}>
        <div className={`${Style["modal-content"]} ${Style["card"]}`}>
          <button onClick={() =>togglePopup()}>&lt;</button>
          </div>
        </div>}
    </React.Fragment>
    
  )
}
