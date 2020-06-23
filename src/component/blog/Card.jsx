import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData } from "../../store/store";

export function Card() {

  const dispatch = useDispatch();
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

  //클릭하면 인덱스와 
  const CardClick = (id) => {

    const payload = {
      cardId: id,
      isOpen: true
    }

    dispatch({ type: 'SET_MODAL_DATA', payload: payload })
  }

  return (
    <SectionCard id="content">
      <div className="content__container">
        <ul id="cardList">
          {cardData.map(m => (
            <li key={m.id} data-tag={m.tag} onClick={() => { CardClick(m.id) }}>
              <div className="card">
                <img src={getImagePath(m.tag)} alt='{imagePath}' className="card__img" />
                <div className="card__content">
                  <div className="card__text__title">{m.title}</div>
                  <div className="card__text__content">{m.content}</div>
                </div>
                <div className="card--wrap" data-cardid={m.id}></div>
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
    background-color: #ffffff;
    padding-right: 10px;
    padding-top: 30px;
  }
  .content__container ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    list-style : none;
  }
  .card{
    position:relative;
    background-color: #ffffff;
    width: 290px;
    height: 270px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 12px;
    margin: 15px 10px;    
}
.card--wrap{
    background-color: rgba(5, 5, 85, 0);
    width: 290px;
    height: 270px;
    position: absolute;
    z-index: 10;
    top:0
  
}

.card__content{
    padding: 12px 12px 20px;
   
}
.card__img{    
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card__text__title{
    color: #222222;
    font-size: large;
    font-weight: bold;
    margin: 11px 0px 10px;
    height: 28px;
    overflow: hidden ;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.card__text__content{
    color: #7c7979;
    margin: 11px 0px 10px;
    overflow: hidden;
    height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.card:hover{
    transition: all 300ms ease;
    transform: scale(1.02) ;
}


  #cardList{

  }

`;

export default Card;
