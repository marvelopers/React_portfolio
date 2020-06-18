import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { getBlogData } from "../../store/store";

export function Card() {

  const storeData = useSelector(getBlogData);
  const cardData = storeData.card;

  useEffect(() => { console.log("storeData", storeData) }, []);

  const getImagePath = (tag) => {

    // IF절을 통한 imagePath return 
    // let imagePath = ""
    // if (tag === "front") {
    //   imagePath = "/imgs/js.png"
    // } else if (tag == "back") {
    //   imagePath = "/imgs/java.png"
    // } else if (tag == "marketing") {
    //   imagePath = "/imgs/mkt.png"
    // } else if (tag == "thought") {
    //   imagePath = "/imgs/th.png"
    // }
    // console.log('getImagePath', imagePath);
    // return imagePath;

    switch (tag) {
      case "front": return "/imgs/js.png";
      case "back": return "/imgs/java.png";
      case "marketing": return "/imgs/mkt.png";
      case "thought": return "/imgs/th.png";
      default: return "/imgs/js.png";
    }
  }


  return (
    <SectionCard id="content">
      <div className="content__container">
        <ul id="cardList">
          {cardData.map(m => (
            <li data-tag={m.tag}>
              <div className="card">
                <img src={getImagePath(m.tag)} alt='{imagePath}' class="card__img" />
                <div className="card__content">
                  <div className="card__text__title">{m.title}</div>
                  <div className="card__text__content">{m.content}</div>
                </div>
                <div class="card--wrap" data-cardid={m.id}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
const SectionCard = styled.section`
  .content__container{
    
  }
  #cardList{

  }

`;

export default Card;
