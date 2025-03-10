import React, { useState } from "react";

const RadioInput_2 = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    pw: "",
    major: "",
    gender: "m",
    intro: "",
  });

  const chageInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      이름
      <input
        name="name"
        type="text"
        value={info.name}
        onChange={(e) => {
          chageInfo(e);
        }}
      />
      <br />
      이메일
      <input
        name="email"
        type="text"
        value={info.email}
        onChange={(e) => {
          chageInfo(e);
        }}
      />
      <br />
      비밀번호
      <input
        name="pw"
        type="password"
        value={info.pw}
        onChange={(e) => {
          chageInfo(e);
        }}
      />
      <br />
      학과
      <select
        name="major"
        value={info.major}
        onChange={(e) => {
          setInfo(e);
        }}
      >
        <option value="">학과를 선택하세요</option>
        <option value="computer">컴퓨터공학</option>
        <option value="business">경영학과</option>
      </select>
      <br />
      성별
      <input
        type="radio"
        name="gender"
        value="m"
        checked={info.gender === "m"}
        onChange={(e) => {
          setInfo(e.target.value);
        }}
      />
      남자
      <input
        type="radio"
        name="gender"
        value="w"
        checked={info.gender === "w"}
        onChange={(e) => {
          setInfo(e.targer.value);
        }}
      />
      여자 <br />
      자기소개{" "}
      <textarea
        cols="50"
        rows="5"
        name="intro"
        value={info.intro}
        onChange={(e) => {
          chageInfo(e);
        }}
      ></textarea>
      <br />
      <h3>입력정보</h3>
      <p>이름: {info.name}</p>
      <p>이메일: {info.email}</p>
      <p>비밀번호: {info.pw}</p>
      <p>학과: {info.major}</p>
      <p>성별: {info.gender}</p>
      <p>자기소개: {info.intro}</p>
    </>
  );
};

export default RadioInput_2;
