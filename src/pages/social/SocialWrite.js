import React from "react";
import styled from "styled-components";
import Nav from "../../containers/common/Nav";

const SocialWrite = () => {
  return (
    <WriteBox>
      <Nav />
      <div className="subtitle">Write anything you want ๐ฉ๐ปโ๐ปโจ</div>
      <div className="parentBox">
        <label>์ ๋ชฉ</label>
        <textarea
          className="title"
          placeholder="๊ฒ์๊ธ์ ์ ๋ชฉ์ ์๋ ฅํด์ฃผ์ธ์."
        ></textarea>
        <hr />
        <label>๋ด์ฉ</label>
        <textarea
          className="content"
          placeholder="๊ฐ๋ฐ, ๋น๊ฐ๋ฐ ๋ฌด์์ด๋  ์์ฑํด์ฃผ์ธ์ (๏พโใฎโ)๏พ*:๏ฝฅ๏พโง^"
        />
        <hr />
        <label>#ํด์ํ๊ทธ</label>
        <textarea className="hashTag" placeholder="#์ด์ง #ํ๋ฆฌ๋์" />
        <input type="file" className="hashTag-input" />
      </div>
    </WriteBox>
  );
};

const WriteBox = styled.div`
  & > * {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  .subtitle {
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    font-size: 25px;
    padding: 10px;
    margin: 20px;
  }
  .parentBox {
    font-family: "Song Myung", serif;
    width: 1024px;
    margin: 0px auto;
    padding: 5px;
    /* border: 1px solid black; */
    background-color: rgba(211, 188, 230, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 10px 20px;
  }
  textarea {
    padding: 10px;
    margin: 0px 20px;
    resize: none;
    box-sizing: border-box;
    box-shadow: 5px 5px 10px rgba(0, 0, 255, 0.2);
    border: none;
    border-radius: 10px;
    color: rgb(98, 98, 112);
    background-color: rgba(245, 245, 245, 255);
    &::placeholder {
      color: rgb(98, 98, 112);
    }
  }
  .title {
    height: 50px;
  }
  .content {
    height: 600px;
  }
  .hashTag {
    height: 50px;
  }
  hr {
    width: 98%;
    height: 1px;
    border: 0;
    background-color: rgba(209, 209, 209, 0.8);
  }
  .hashTag-input {
    margin: 5px 20px;
  }
`;
export default SocialWrite;
