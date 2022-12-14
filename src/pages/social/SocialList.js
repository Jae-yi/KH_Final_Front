import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Photo from "./pic/짱난.gif";
import InsertImg from "./pic/coffee.jpg";
import Nav from "../../containers/common/Nav";
import {
  IoEyeOutline,
  IoHeartOutline,
  IoChatboxOutline,
} from "react-icons/io5";
import SocialApi from "../../api/SocialApi";

const Social = () => {
  const [socialList, setSocialList] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const socialData = async () => {
      setLoading(true);
      try {
        const response = await SocialApi.socialList();
        setSocialList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    socialData();
  }, []);
  if (loading) {
    return <ListBlock>조금만 기다려주세요...👩‍💻</ListBlock>;
  }
  return (
    <ListBlock>
      <Nav />
      <div className="subtitle">Dev' Social</div>
      <div className="inducer"> Share anything you want 👩🏻‍💻✨</div>

      <div className="parentBox">
        {socialList &&
          socialList.map((social) => (
            <div className="childBox" key={social.socialId}>
              <div className="flex-box2">
                <img className="insertImg" src={InsertImg} alt="첨부사진"></img>
              </div>
              <div className="flex-box1">
                <div className="content-title">{social.title}</div>
                <div className="hashtag-box">
                  <span className="hashtag">{social.tag}</span>
                </div>
                <div className="flex-box3">
                  <div className="publisher-info">
                    <img className="photos" src={Photo} alt="프로필 사진"></img>
                    <span className="nickName">{social.user}</span>
                    <span className="date">| {social.postDate}</span>
                  </div>
                  <div className="icon-box">
                    <IoEyeOutline />
                    <span className="count">{social.view}</span>
                    <IoHeartOutline />
                    <span className="count">{social.like}</span>
                    <IoChatboxOutline />
                    <span className="count">{social.comment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ListBlock>
  );
};

const ListBlock = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .subtitle {
    text-align: center;
    font-size: 25px;
    padding: 10px;
    margin: 20px;
    font-family: "Alfa Slab One", cursive;
  }
  .inducer {
    margin-bottom: 10px;
    text-align: center;
    font-family: "Alfa Slab One", cursive;
  }
  .parentBox {
    font-family: "Yeon Sung", cursive;
    font-family: "Song Myung", serif;
    width: 1024px;
    padding: 5px;
    border: 1px solid black;
    margin: 0px auto;
    background-color: rgba(211, 188, 230, 0.1);
  }
  .childBox {
    display: flex;
    height: 100%;
    margin: 20px 10px;
    border: 2px solid grey;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2px 3px 3px 1px rgba(0, 0, 0, 0.2);
    & > * {
      font-size: 20px;
    }
  }
  .flex-box1 {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .flex-box2 {
    flex-grow: 1.5;
    overflow: hidden;
    position: relative;
  }
  .insertImg {
    height: 90%;
    width: 100%;
    border-radius: 10px;
    position: absolute; // = 부모 기준 배치
    left: 5px;
    top: 5px;
    background-image: url("../pic/coffee.jpg");
    background-size: cover;
  }
  .flex-box3 {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }
  .icon-box {
    display: flex;
    align-items: center;
  }
  .content-title {
    margin: 5px;
    /* border: 1px solid grey; */
    width: 750px;
  }
  .hashtag {
    padding: 10px;
    font-style: italic;
  }
  .publisher-info {
    display: flex;
    align-items: center;
  }
  .photos {
    margin: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .nickName {
    margin: 0 5px;
  }
  .date {
    color: grey;
    margin: 0 5px;
  }
  .count {
    padding: 5px;
  }
  .hashtag-box {
    margin: 10px;
  }
  .hashtag {
    margin: 0px 3px;
    padding: 8px;
    font-style: italic;
    background-color: rgba(219, 219, 219, 0.5);
    border-radius: 10px;
  }
`;

export default Social;
