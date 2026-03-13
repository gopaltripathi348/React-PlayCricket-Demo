import React,{useEffect, useState} from 'react';
import TopHeader from './TopHeader';
import Header from './Header';
import topStyles from "./TopHeader.module.css";
import styles from './Header.module.css';
import "../styles/styles.css";
import Slider from './Slider';


export default function MainHeader({clubs,data}) {
  const [selectedClub, setSelectedClub] = useState('');
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const handleClub = (c) => {
    setSelectedClub(c);
  }
  const clubHandler = (c) => {
    setSelectedClub(c);
  }
  return (
    <>
    {data?.topHeaderData &&
      <>
        <TopHeader clubs={clubs} data={data.topHeaderData} sendData={handleClub} onMenuClick={(link)=> {setSelectedLink(link);setIsSliderOpen(true)}}/>
        <Slider isOpen={isSliderOpen} onClose={()=>setIsSliderOpen(false)} link={selectedLink} onClubSelect={clubHandler} data={data.topHeaderData}/>
      </>
    }
    {(data?.headerData) && <Header club={selectedClub} data={data.headerData}/>}
    </>
  )
}
