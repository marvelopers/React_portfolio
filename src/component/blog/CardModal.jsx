import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData, getModalStatusData } from '../../store/store';


export function CardModal() {

  const dispatch = useDispatch();
  const modalStoreData = useSelector(getModalStatusData);
  const blogStoreData = useSelector(getBlogData);

  //카드 ID 값을 기준으로 데이터 확인
  const cardInfo = blogStoreData.card.find(card => card.id === modalStoreData.cardId);
  //==> const cardInfo = blogStoreData.card[blogStoreData.card.map(c => c.id).indexOf(modalStoreData.cardId)];


  console.log("cardInfo==============>", cardInfo);


  const CloseClick = () => {
    const payload = {
      isOpen: false

    }
    dispatch({ type: 'SET_MODAL_DATA', payload: payload })
  }
  console.log('cardInfo====>>', cardInfo);

  return (
    <SectionCard>
      <div class="detail__container">
        <span><ImgClose src="/imgs/close.png" alt="closeBtn" onClick={() => { CloseClick() }} /></span>
        <div class="detail__title">{cardInfo.title}</div>
        <div class="detail__content">{cardInfo.content}</div>
        <div class="detail__footer">
          <a href="update.html?postId=${cardInfo.id}"><button class="detail__footer__edit">수정</button></a>
        </div>
      </div>
    </SectionCard>
  );
}

const SectionCard = styled.section`
  
  position: fixed;
  background-color:rgba(0,0,0,0.4);
  top:0;
  left: 0;

  height: 100vh;
  width:  100vw;

  justify-content: center;
  align-items: center;
  padding: 30px;

  z-index: 1005;

.detail__container{
    position: relative;
    width: 50%;
    height: 50%;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 29px;
}

.detail__title{
    color: #222222;
    width: 100%;
    height: 10%;
    background-color: #ffffff;
    font-size: 49px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1) ;
}

.detail__content{
    color: #222222;
    width: 100%;
    height: 80%;
    font-size: 28px;
    background-color: #ffffff;
    border: none;
    padding-top: 10px;
    overflow: auto;
}

.detail__footer{
    height: 8%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.detail__footer__edit{
    width: 48px;
    color: var(--color-light-grey);
    font-size: var(--font-micro);
    text-align: center;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1) ;
    padding-bottom: 8px;
}

.detail__footer__edit:hover{
    width: 48px;
    color: var(--color-dark-purple);
    border: none;
    transition: all var(--Animation-duration) ease;
    border-bottom: 2px solid var(--color-dark-purple) ;
    padding-bottom: 8px;
}

`;

const ImgClose = styled.img`
  width: 29px;
  position: absolute;
  top:20px;
  right: 30px;
  z-index: 1006;

  :hover{
    transition: all 300ms ease;
    cursor: pointer;
  }
`;
