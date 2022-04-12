import React from 'react'
import './index.less';
import NftBox from './NtfBox';
import nftimg from '../../assets/images/nftbox1.webp'
import NftList from './NtfList'

const descriptions = [
  `Defina Mystery Box features 28 different heroes, each with unique background stories and skills, belonging to one of four factions; Prometheus' Fire, Ouroboros, Thoth's Book or Athena's Aegis.`,
  `Heroes are randomly generated, with different rarity, attributes, skills and elements. The more rare or higher grade the hero is, the higher the initial attribute value,chances of obtaining better skill attacks and probability of having more or rare elements. The hero levels in descending class and rarity order are: SSS, SS, S and A.`,
  `To start playing the Defina game, you will need at least 4 different heroes  to form a team.`
]

const blindboxInfo = {
  title: "Defina Mystery Box",
  description: descriptions.map((it, index) => <p key={index}>{it}</p>),
  author: "Defina",
}

export default function Index() {
  return (
    <div className='nft__wapper'>
      <div className='nft__banner'></div>
      <div className='nft__box_warrp'>
        <NftBox imgsrc={nftimg} blindboxInfo={blindboxInfo} />
      </div>
      <div className='nft__list' style={{background: "#141414"}}>
        <NftList />
      </div>
    </div>
  )
}
