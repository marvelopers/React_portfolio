import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData, getModalStatusData } from "../../store/store";
import { Link } from 'react-router-dom'

export function CardModal() {

  const dispatch = useDispatch();
  const modalStoreData = useSelector(getModalStatusData);
  const blogStoreData = useSelector(getBlogData);

  //카드 ID 값을 기준으로 데이터 확인
  const cardInfo = blogStoreData.card.find(card => card.id === modalStoreData.cardId);
  //==> const cardInfo = blogStoreData.card[blogStoreData.card.map(c => c.id).indexOf(modalStoreData.cardId)];

  //close Button
  const CloseClick = () => {
    const payload = {
      isOpen: false

    }
    dispatch({ type: 'SET_MODAL_DATA', payload: payload })
  }

  const deleteBtnHandler = (id) => {
    // dispatch({
    //   type: "SET_MODAL_DATA", payload: {
    //     isOpen: false,
    //     cardId: 0
    //   }
    // });
    // dispatch({
    //   type: "DELETE_POST",
    //   payload: id
    // });

    dispatch({
      type: "DELETE_REQUEST",
      payload: id
    })
  }

  return (
    <SectionCard>
      <div className="detail__container">
        <span><ImgClose src="/imgs/close.png" alt="closeBtn" onClick={() => { CloseClick() }} /></span>
        <div className="detail__title">{cardInfo.title}</div>
        <div className="detail__content">{cardInfo.content}</div>
        <div className="detail__footer">
          <Link to={"update/" + cardInfo.id}><Btn className="detail__footer__edit" onClick={() => { CloseClick() }}>수정</Btn></Link>
          <Btn className="detail__footer__edit" onClick={() => { deleteBtnHandler(modalStoreData.cardId) }}>삭제</Btn>
        </div>
      </div>
    </SectionCard >
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

const Btn = styled.button`
  width: 48px;
  background-color :#ffffff;
  color: #7c7979;
  font-size: 15px;
  text-align: center;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1) ;
  padding-bottom: 8px;

:hover{
    width: 48px;
    color: #2A0E4F;
    border: none;
    transition: all 300ms ease;
    border-bottom: 2px solid #2A0E4F ;
    padding-bottom: 8px;
}

`;
