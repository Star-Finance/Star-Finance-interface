import React from 'react'
import NtfItem from './NftItem';
import nft_item1 from '../../assets/images/nft_item1.webp'

const nfts = [
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
    { imgSrc: nft_item1, anthor: "Paris" },
].map((it, i) => <NtfItem key={i} {...it} /> )

export default function NtfList() {
  return (
    <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", flexFlow: "wrap" }}>
      {nfts}
    </div>
  )
}
