import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { useState } from 'react';
import CardList from './CardList';


//match update 

export function WriteBlog({ match }) {

  const cards = useSelector(state => state.blogDataReducer.card);
  let card = {
    tag: "",
    title: "",
    content: "",
    author: ""
  }
  if (match) {
    card = cards.filter(card => card.id === match.params.id)[0];
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const [blog, setBlog] = useState(card);

  //button 클릭시 submit 버튼 실행 함수
  const submit = () => {
    //id 정제
    if (match) {
      dispatch({
        type: "UPDATE_POST",
        payload: {
          id: match.params.id,
          tag: blog.tag,
          title: blog.title,
          content: blog.content,
          author: blog.author,
        }
      })
    } else {
      dispatch({
        type: "ADD_POST",
        payload: {
          tag: blog.tag,
          title: blog.title,
          content: blog.content,
          author: blog.author,
        }
      })
    }

    //미입력 값 검사
    Object.keys(blog).forEach((key) => {
      //if (!blog[key]) alert(`${key}가 미입력 되었습니다`);
    })



    history.push('/blog');
  };

  const handleChageTitle = (e) => {
    setBlog({
      ...blog,
      title: e.target.value
    })
  }

  const handleChageContent = (e) => {
    setBlog({
      ...blog,
      content: e.target.value
    })
  }

  const handleChageTag = (e) => {
    setBlog({
      ...blog,
      tag: e.target.value
    })
  }

  const handleChageAuthor = (e) => {
    setBlog({
      ...blog,
      author: e.target.value
    })
  }

  console.log("blog", blog);
  return (
    <>
      <SectionWrite id="blog">
        <form id="blogForm">
          {/* Write */}
          <div className="blogtext">
            <textarea
              className="write__title"
              id="blogTitle"
              cols="1"
              rows="1"
              placeholder="Title"
              value={blog.title}
              onChange={handleChageTitle}></textarea>
          </div>
          <div className="content" id="blogContent">
            <textarea
              className="write__content--textarea"
              cols="1"
              rows="15"
              placeholder="Tell your story…"
              value={blog.content}
              onChange={handleChageContent}
            ></textarea>
          </div>
          {/*  writeBtn */}
          <div id="writeBottom">
            <label>subject :
              <select name="tag" className="tag" id="blogTag" value={blog.tag} onChange={handleChageTag}>
                <option value="front">Front-end</option>
                <option value="back">Back-end</option>
                <option value="marketing">Marketing</option>
                <option value="thought">Thought</option>
              </select>
            </label>

            <label> name :
                <input
                id="blogName"
                type="text"
                className="write__author--input"
                maxlength="5"
                autocomplete
                value={blog.author}
                onChange={handleChageAuthor}
              /></label>

          </div>
          <button type="button" className="write__publish__btn active" onClick={submit}>
            publish
          </button>
        </form>
      </SectionWrite>
    </>
  )
}


const SectionWrite = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 100px 0px;
    margin-top: 5px;
    align-items: center;
    width: 100%;
    text-align: center;

  :placeholder-shown{
    color: #222222;
    padding: 5px;

  }
    .tag{
    width: max-content;
    color: #222222;
    background-color: #ffffff;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 3px 3px;

  }
  .write__author--input,
  .write__password--input{
    padding: 3px;
    font-size: 16px;
    border: 0.5px solid #7c7979;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 3px 3px;

  }
  /*writeBtn */
  .write__publish__btn{
    width: 29%;
    align-items: center;
    padding: 4px 8px;
    margin: 10px;
    font-size: var(--font-regular);
    background-color: var(--color-dark-white);
    border-radius: 29px;

  }
  .write__publish__btn:active{
    background-color: var(--color-orange);
    color: #ffffff;
    border-radius: 29px;
  }


#blogForm{
    width:918px;
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1)  0px 5px 12px;
    padding: 10px;
    position: relative;
}

.write__title{
    display: inline-block;
    width: 100%;
    height: 53px;
    background-color: #ffffff;
    font-size: 29px;        
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1) ;
    padding-bottom: 10px;
}

.content{
    overflow: auto;
    margin-bottom: 10px;
}
.write__content--textarea{
    width: 100%;
    font-size: 18px;
    background-color: #ffffff;
    border: none;
    padding-top: 3px;
    color: #222222;
}

.blogtext{
    text-align: left;
    padding: 8px;
}
 `;



export default withRouter(WriteBlog)